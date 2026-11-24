import { NextResponse } from 'next/server';

const REPO = 'maspeke12-cyber/aqua-catalog-digital';

async function upsertGitHubFile(path: string, base64Content: string, message: string, token: string) {
  const url = `https://api.github.com/repos/${REPO}/contents/${path}`;
  const headers = { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'Content-Type': 'application/json' };
  let sha: string | undefined;
  const check = await fetch(url, { headers, cache: 'no-store' });
  if (check.ok) { const existing = await check.json(); sha = existing.sha; }
  const res = await fetch(url, {
    method: 'PUT',
    headers,
    body: JSON.stringify({ message, content: base64Content, ...(sha ? { sha } : {}) }),
  });
  if (!res.ok) throw new Error(`Gagal simpan ${path} (${res.status})`);
}

export async function POST(req: Request) {
  try {
    const { pin, payload, uploads } = await req.json();
    const expectedPin = (process.env.ADMIN_PIN || '2026').trim();
    if (String(pin || '').trim() !== expectedPin) return NextResponse.json({ error: 'PIN Admin salah.' }, { status: 401 });
    const token = process.env.GITHUB_TOKEN?.trim();
    if (!token) return NextResponse.json({ error: 'GITHUB_TOKEN belum diatur di Vercel / .env.local.' }, { status: 500 });

    for (const item of uploads || []) {
      await upsertGitHubFile(item.repoPath, item.base64Content, `Upload ${item.publicUrl} via Web Admin`, token);
    }
    const jsonBase64 = Buffer.from(JSON.stringify(payload, null, 2), 'utf8').toString('base64');
    await upsertGitHubFile('aqua-digital-showroom/src/data/showroom-cms.json', jsonBase64, 'Update showroom CMS via Web Admin', token);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Gagal menyimpan data.' }, { status: 500 });
  }
}
