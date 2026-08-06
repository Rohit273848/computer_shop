import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  email: z.string().email('Enter a valid email address').optional().or(z.literal('')),
  deviceType: z.enum(['Laptop', 'Desktop', 'MacBook', 'Data Recovery Drive', 'AMC Inquiry', 'Accessories']),
  problemDescription: z.string().min(10, 'Please describe your problem in at least 10 characters'),
  preferredContact: z.enum(['WhatsApp', 'Phone Call', 'Email']),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
