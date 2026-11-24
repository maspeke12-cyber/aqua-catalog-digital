export interface WhatsAppLinkResult {
  isConfigured: boolean;
  url: string | null;
  formattedPhone: string | null;
}

export function buildWhatsAppLink(
  phone?: string | null,
  message?: string
): WhatsAppLinkResult {
  if (!phone) {
    return { isConfigured: false, url: null, formattedPhone: null };
  }

  const trimmed = phone.trim();
  if (
    trimmed.length === 0 ||
    trimmed.toUpperCase().includes('PLACEHOLDER') ||
    trimmed.includes('XXX')
  ) {
    return { isConfigured: false, url: null, formattedPhone: null };
  }

  let digits = trimmed.replace(/\D/g, '');
  if (digits.startsWith('0')) {
    digits = '62' + digits.slice(1);
  }

  if (digits.length < 10 || digits.length > 15) {
    return { isConfigured: false, url: null, formattedPhone: null };
  }

  const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : '';
  return {
    isConfigured: true,
    url: `https://wa.me/${digits}${encodedMessage}`,
    formattedPhone: `+${digits}`,
  };
}
