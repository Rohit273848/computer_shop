import React from 'react';
import { Building2, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { SectionContainer } from '../../layout/SectionContainer';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { MotionWrapper } from '../../../animations/MotionWrapper';
import { AMCComparisonCard } from './AMCComparisonCard';
import { AMC_PLANS } from '../../../data/amc';
import { Button } from '../../ui/button';
import { externalLink } from '../../../utils/link';
import { BUSINESS_INFO } from '../../../constants/business';

export const AMCSection: React.FC = () => {
  return (
    <SectionContainer id="amc" padding="lg" background="surface">
      <ResponsiveContainer>
        <MotionWrapper variant="fadeUp" className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-caption font-semibold text-accent tracking-widest">
            Annual Maintenance Contracts
          </span>
          <h2 className="text-h2 text-text-primary mt-2 font-bold">
            Zero Breakdown Downtime For Your Business Computers
          </h2>
          <p className="text-body-lg text-text-muted mt-2">
            Eliminate sudden repair expenses and lost productivity. FixPro AMC plans cover regular preventive maintenance, priority software support, and unlimited free labor.
          </p>
        </MotionWrapper>

        {/* Side-by-side Comparison Matrix */}
        <MotionWrapper variant="fadeUp" delay={0.1} className="mb-14">
          <AMCComparisonCard />
        </MotionWrapper>

        {/* AMC Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {AMC_PLANS.map((plan, idx) => {
            const whatsappUrl = `https://wa.me/${BUSINESS_INFO.contact.whatsappNumber}?text=${encodeURIComponent(
              `Hi FixPro! I am interested in getting a quote for the ${plan.name} contract.`
            )}`;

            return (
              <MotionWrapper key={plan.id} variant="fadeUp" delay={idx * 0.1}>
                <div
                  className={`p-8 rounded-3xl bg-surface border flex flex-col justify-between h-full relative shadow-lg ${
                    plan.isPopular ? 'border-accent shadow-glow' : 'border-border'
                  }`}
                >
                  {plan.badge && (
                    <span className="absolute -top-3 right-6 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-accent text-white shadow-sm">
                      {plan.badge}
                    </span>
                  )}

                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-display text-text-primary">{plan.name}</h3>
                        <p className="text-xs text-text-muted">{plan.targetAudience}</p>
                      </div>
                    </div>

                    <div className="my-6 pb-6 border-b border-border">
                      <span className="text-3xl font-extrabold font-display text-text-primary">{plan.pricePerUnit}</span>
                      <span className="text-xs text-text-muted ml-2">{plan.billingCycle}</span>
                    </div>

                    <ul className="space-y-3 mb-8 text-xs text-text-secondary">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a {...externalLink(whatsappUrl)}>
                    <Button variant={plan.isPopular ? 'primary' : 'outline'} size="lg" className="w-full justify-center gap-2">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Request AMC Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </MotionWrapper>
            );
          })}
        </div>
      </ResponsiveContainer>
    </SectionContainer>
  );
};
