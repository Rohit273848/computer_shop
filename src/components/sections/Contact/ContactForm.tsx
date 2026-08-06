import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { contactFormSchema, ContactFormData } from '../../../types/contact';
import { Button } from '../../ui/button';

export const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      deviceType: 'Laptop',
      problemDescription: '',
      preferredContact: 'WhatsApp',
    },
  });

  const problemText = watch('problemDescription') || '';

  const onSubmit = async (data: ContactFormData) => {
    // Simulate backend response delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form Submitted:', data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-border/80 shadow-lg relative">
      <h3 className="text-xl font-bold font-display text-text-primary mb-1">
        Request Free Repair Inquiry
      </h3>
      <p className="text-xs text-text-muted mb-6">
        Fill in your details below. Our engineer will review your issue and reach out within 15 minutes.
      </p>

      {isSubmitted ? (
        <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 mx-auto animate-bounce" />
          <h4 className="text-lg font-bold">Inquiry Received Successfully!</h4>
          <p className="text-xs text-text-secondary">
            Thank you! Our senior technician will contact you shortly via your preferred channel.
          </p>
          <Button variant="outline" size="sm" onClick={() => setIsSubmitted(false)}>
            Send Another Inquiry
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-text-primary mb-1">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Rahul Deshmukh"
              {...register('fullName')}
              className="w-full px-3.5 py-2.5 rounded-xl bg-surface-secondary border border-border text-xs text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
            />
            {errors.fullName && (
              <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Phone & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-text-primary mb-1">
                Mobile Number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                placeholder="10-digit mobile number"
                {...register('phone')}
                className="w-full px-3.5 py-2.5 rounded-xl bg-surface-secondary border border-border text-xs text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
              />
              {errors.phone && (
                <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-text-primary mb-1">
                Email Address <span className="text-text-muted font-normal">(Optional)</span>
              </label>
              <input
                type="email"
                placeholder="your.email@gmail.com"
                {...register('email')}
                className="w-full px-3.5 py-2.5 rounded-xl bg-surface-secondary border border-border text-xs text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          {/* Device Type & Preferred Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-text-primary mb-1">Device Type</label>
              <select
                {...register('deviceType')}
                className="w-full px-3.5 py-2.5 rounded-xl bg-surface-secondary border border-border text-xs text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="Laptop">Laptop</option>
                <option value="Desktop">Desktop PC</option>
                <option value="MacBook">MacBook / iMac</option>
                <option value="Data Recovery Drive">Data Recovery Drive</option>
                <option value="AMC Inquiry">AMC Contract Inquiry</option>
                <option value="Accessories">Accessories & Spares</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-text-primary mb-1">Preferred Contact</label>
              <select
                {...register('preferredContact')}
                className="w-full px-3.5 py-2.5 rounded-xl bg-surface-secondary border border-border text-xs text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="WhatsApp">WhatsApp Message</option>
                <option value="Phone Call">Direct Phone Call</option>
                <option value="Email">Email</option>
              </select>
            </div>
          </div>

          {/* Problem Description */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-xs font-semibold text-text-primary">
                Describe Problem <span className="text-red-400">*</span>
              </label>
              <span className="text-[10px] text-text-muted">{problemText.length}/500</span>
            </div>
            <textarea
              rows={3}
              maxLength={500}
              placeholder="e.g. My laptop screen is flickering and battery drains fast..."
              {...register('problemDescription')}
              className="w-full px-3.5 py-2.5 rounded-xl bg-surface-secondary border border-border text-xs text-text-primary focus:outline-none focus:ring-2 focus:ring-accent resize-none"
            />
            {errors.problemDescription && (
              <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.problemDescription.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isSubmitting}
            className="w-full justify-center gap-2 shadow-glow text-sm"
          >
            <Send className="w-4 h-4" />
            <span>Submit Repair Inquiry</span>
          </Button>
        </form>
      )}
    </div>
  );
};
