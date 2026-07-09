import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { contactInfo } from '../../data/contact';
import { sendContactEmail } from '../../services/email';
import { Button } from '../ui/Button';
import { Input, Textarea } from '../ui/Input';

const schema = z.object({
  // The schema is the single source of truth for client-side contact form validation.
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Enter a valid email address.'),
  subject: z.string().min(3, 'Choose a subject.'),
  message: z.string().min(20, 'Message must be at least 20 characters.'),
  website: z.string().optional()
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { subject: 'New Project Proposal', website: '' }
  });

  const onSubmit = async (values: FormValues) => {
    setStatus('idle');
    try {
      await sendContactEmail(values);
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={(event) => void handleSubmit(onSubmit)(event)} className="relative border border-[#353437] bg-panel p-8 md:p-12" noValidate>
      <div className="absolute right-0 top-0 p-4 font-mono text-[10px] text-outline opacity-30">FORM_ID: 0x22C55E</div>
      <h2 className="mb-8 border-l-4 border-mint pl-4 text-[24px] font-bold uppercase tracking-widest text-[#e5e1e4] md:text-[28px]">Inquiry_Form</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <label className="form-control">
          Full_Name
          <Input placeholder="John Doe" autoComplete="name" {...register('name')} />
          {errors.name && <span>{errors.name.message}</span>}
        </label>
        <label className="form-control">
          Email_Address
          <Input placeholder="john@example.com" autoComplete="email" {...register('email')} />
          {errors.email && <span>{errors.email.message}</span>}
        </label>
      </div>

      <label className="form-control mt-6">
        Subject
        <select className="field appearance-none" {...register('subject')}>
          {contactInfo.subjects.map((subject) => (
            <option key={subject}>{subject}</option>
          ))}
        </select>
        {errors.subject && <span>{errors.subject.message}</span>}
      </label>

      <label className="form-control mt-6">
        Message_Payload
        <Textarea placeholder="Describe your technical requirements..." rows={5} {...register('message')} />
        {errors.message && <span>{errors.message.message}</span>}
      </label>

      <input className="hidden" tabIndex={-1} autoComplete="off" {...register('website')} aria-hidden="true" />
      <Button className="mt-8 w-full justify-center py-5 text-[18px] uppercase tracking-[.2em]" disabled={isSubmitting}>
        {isSubmitting ? 'PROCESSING...' : 'INITIALIZE_SEND'}
      </Button>
      {status === 'success' && <p className="mt-5 text-mint" role="status">Message queued successfully. I’ll respond soon.</p>}
      {status === 'error' && <p className="mt-5 text-red-300" role="alert">Transmission failed. Please email me directly.</p>}
    </form>
  );
}
