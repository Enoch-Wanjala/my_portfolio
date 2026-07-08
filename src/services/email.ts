import emailjs from '@emailjs/browser';
import { site } from '../constants/site';

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
  const toEmail = String(import.meta.env.VITE_CONTACT_TO_EMAIL || site.email);

  if (!publicKey || !serviceId || !templateId) {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(toEmail)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        subject: payload.subject,
        message: payload.message,
        _subject: `Portfolio inquiry: ${payload.subject}`,
        _captcha: 'false',
        _template: 'table'
      })
    });

    if (!response.ok) {
      throw new Error('Contact form delivery failed.');
    }
    return;
  }

  await emailjs.send(serviceId, templateId, { ...payload, to_email: toEmail }, { publicKey });
}
