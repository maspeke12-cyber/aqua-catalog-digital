export interface PreparedUpload {
  repoPath: string;
  publicUrl: string;
  base64Content: string;
  previewUrl: string;
}

export function compressImageFile(
  file: File,
  targetFolder: 'banners' | 'products' | 'promos',
  maxWidth = 1280
): Promise<PreparedUpload> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Gagal membaca file gambar.'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('Format gambar tidak didukung.'));
      img.onload = () => {
        const scale = img.width > maxWidth ? maxWidth / img.width : 1;
        const w = Math.round(img.width * scale);
        const h = Math.round(img.height * scale);
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        if (!ctx) return reject(new Error('Canvas tidak tersedia.'));
        ctx.drawImage(img, 0, 0, w, h);

        const isPng = file.type === 'image/png';
        const mime = isPng ? 'image/png' : 'image/jpeg';
        const ext = isPng ? 'png' : 'jpg';
        const dataUrl = canvas.toDataURL(mime, 0.84);
        const base64Content = dataUrl.split(',')[1] || '';
        const safeName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '').slice(0, 24).replace(/\.[^.]+$/, '')}.${ext}`;

        resolve({
          repoPath: `aqua-digital-showroom/public/images/${targetFolder}/${safeName}`,
          publicUrl: `/images/${targetFolder}/${safeName}`,
          base64Content,
          previewUrl: dataUrl,
        });
      };
      img.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  });
}
