import emailjs from '@emailjs/browser';

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
};

export async function sendContactEmail(payload: ContactPayload) {
  // Honeypot guard: real users never fill this hidden field, simple bots often do.
  if (payload.website) return;

  const publicKey = String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '');
  const serviceId = String(import.meta.env.VITE_EMAILJS_SERVICE_ID || '');
  const templateId = String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '');

  if (!publicKey || !serviceId || !templateId) {
    // Keep the UI testable before production EmailJS credentials are configured.
    await new Promise((resolve) => window.setTimeout(resolve, 650));
    return;
  }

  await emailjs.send(serviceId, templateId, { ...payload }, { publicKey });
}
