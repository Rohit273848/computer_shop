import React from 'react';
import { SEO } from '../common/SEO';
import { PageContainer } from './PageContainer';
import { ResponsiveContainer } from './ResponsiveContainer';
import { Breadcrumbs, BreadcrumbItem } from '../common/Breadcrumbs';
import { MotionWrapper } from '../../animations/MotionWrapper';
import { CallButton } from '../common/CallButton';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { CheckCircle2, ShieldCheck, Clock, Wrench, LucideIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

export interface ServiceDetailProps {
  seoTitle: string;
  seoDescription: string;
  breadcrumbItems: BreadcrumbItem[];
  title: string;
  tagline: string;
  icon: LucideIcon;
  overview: string;
  symptomsTitle?: string;
  symptoms: string[];
  processSteps: { title: string; desc: string }[];
  benefits: string[];
  supportedBrands: string[];
  startingPrice: string;
  turnaroundTime: string;
  faqs: { question: string; answer: string }[];
}

export const ServiceDetailLayout: React.FC<ServiceDetailProps> = ({
  seoTitle,
  seoDescription,
  breadcrumbItems,
  title,
  tagline,
  icon: IconComponent,
  overview,
  symptomsTitle = 'Common Symptoms & Issues We Solve',
  symptoms,
  processSteps,
  benefits,
  supportedBrands,
  startingPrice,
  turnaroundTime,
  faqs,
}) => {
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <PageContainer className="pt-24 pb-16">
        <ResponsiveContainer>
          <Breadcrumbs items={breadcrumbItems} />

          {/* Hero Header */}
          <MotionWrapper variant="fadeUp" className="mt-4 mb-12">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-surface to-surface-secondary border border-border shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-bold uppercase tracking-wider">
                  <IconComponent className="w-4 h-4" />
                  <span>FixPro Service Specialty</span>
                </div>

                <h1 className="text-display text-text-primary font-display font-extrabold tracking-tight">
                  {title}
                </h1>

                <p className="text-body-lg text-text-muted">{tagline}</p>

                {/* Badges Bar */}
                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-semibold text-text-secondary">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>Turnaround: {turnaroundTime}</span>
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Starting at {startingPrice}</span>
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <CallButton variant="primary" size="lg" className="shadow-glow">
                    <span>Book Repair</span>
                  </CallButton>

                  <WhatsAppButton
                    variant="glass"
                    size="lg"
                    message={`Hi FixPro! I want to inquire about ${title}.`}
                  />
                </div>
              </div>
            </div>
          </MotionWrapper>

          {/* Main Grid: Details + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Main Content (8 cols) */}
            <div className="lg:col-span-8 space-y-12 text-left">
              {/* Overview */}
              <MotionWrapper variant="fadeUp">
                <h2 className="text-h2 font-bold text-text-primary mb-3">Service Overview</h2>
                <p className="text-body-lg text-text-muted leading-relaxed">{overview}</p>
              </MotionWrapper>

              {/* Symptoms Checklist */}
              <MotionWrapper variant="fadeUp" className="p-6 rounded-2xl bg-surface border border-border">
                <h3 className="text-h3 font-bold text-text-primary mb-4">{symptomsTitle}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-text-secondary">
                  {symptoms.map((symptom, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{symptom}</span>
                    </div>
                  ))}
                </div>
              </MotionWrapper>

              {/* Process Steps */}
              <MotionWrapper variant="fadeUp">
                <h2 className="text-h2 font-bold text-text-primary mb-6">Our Repair Methodology</h2>
                <div className="space-y-4">
                  {processSteps.map((step, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-surface border border-border/80 flex items-start gap-4">
                      <div className="w-8 h-8 rounded-xl bg-accent/15 text-accent font-mono font-bold flex items-center justify-center shrink-0">
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-text-primary">{step.title}</h4>
                        <p className="text-xs text-text-muted mt-1 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </MotionWrapper>

              {/* Benefits */}
              <MotionWrapper variant="fadeUp">
                <h2 className="text-h2 font-bold text-text-primary mb-4">Why Choose FixPro For This Service</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-surface-secondary/70 border border-border text-xs font-semibold text-text-primary flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </MotionWrapper>

              {/* Supported Brands */}
              <MotionWrapper variant="fadeUp">
                <h2 className="text-h2 font-bold text-text-primary mb-3">Compatible Brands & Models</h2>
                <div className="flex flex-wrap items-center gap-2">
                  {supportedBrands.map((b) => (
                    <span key={b} className="px-3.5 py-1.5 rounded-xl bg-surface border border-border text-xs font-medium text-text-primary">
                      {b}
                    </span>
                  ))}
                </div>
              </MotionWrapper>

              {/* FAQs */}
              <MotionWrapper variant="fadeUp">
                <h2 className="text-h2 font-bold text-text-primary mb-6">Service FAQs</h2>
                <div className="space-y-3">
                  {faqs.map((f, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-surface border border-border">
                      <h4 className="text-sm font-bold text-text-primary mb-1.5">{f.question}</h4>
                      <p className="text-xs text-text-muted leading-relaxed">{f.answer}</p>
                    </div>
                  ))}
                </div>
              </MotionWrapper>
            </div>

            {/* Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Quick Booking Box */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-accent/15 to-surface border border-accent/30 text-left space-y-4">
                <div className="flex items-center gap-2 text-accent font-bold text-sm">
                  <Wrench className="w-4 h-4" />
                  <span>Instant Estimate</span>
                </div>
                <h3 className="text-lg font-bold text-text-primary">Need Urgent Assistance?</h3>
                <p className="text-xs text-text-muted">Speak directly with our senior technician for instant diagnostic advice.</p>
                <div className="pt-2">
                  <CallButton variant="primary" size="md" className="w-full justify-center shadow-glow" />
                </div>
              </div>

              {/* Related Services */}
              <div className="p-6 rounded-3xl bg-surface border border-border text-left space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-2">Related Repairs</h3>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link to={ROUTES.LAPTOP_REPAIR} className="flex items-center justify-between text-text-muted hover:text-accent transition-colors p-2 rounded-lg hover:bg-surface-secondary">
                      <span>Laptop Hardware Repair</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </li>
                  <li>
                    <Link to={ROUTES.DESKTOP_REPAIR} className="flex items-center justify-between text-text-muted hover:text-accent transition-colors p-2 rounded-lg hover:bg-surface-secondary">
                      <span>Desktop & PC Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </li>
                  <li>
                    <Link to={ROUTES.MOTHERBOARD_REPAIR} className="flex items-center justify-between text-text-muted hover:text-accent transition-colors p-2 rounded-lg hover:bg-surface-secondary">
                      <span>Chip-Level Motherboard Repair</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </li>
                  <li>
                    <Link to={ROUTES.DATA_RECOVERY} className="flex items-center justify-between text-text-muted hover:text-accent transition-colors p-2 rounded-lg hover:bg-surface-secondary">
                      <span>HDD & SSD Data Recovery</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </li>
                  <li>
                    <Link to={ROUTES.DOORSTEP_REPAIR} className="flex items-center justify-between text-text-muted hover:text-accent transition-colors p-2 rounded-lg hover:bg-surface-secondary">
                      <span>Doorstep Repair Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </PageContainer>
    </>
  );
};
