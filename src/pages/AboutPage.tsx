import React from 'react';
import { SEO } from '../components/common/SEO';
import { PageContainer } from '../components/layout/PageContainer';
import { ResponsiveContainer } from '../components/layout/ResponsiveContainer';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { MotionWrapper } from '../animations/MotionWrapper';
import { ShieldCheck, Award, HeartHandshake, Cpu, Users } from 'lucide-react';
import { CallButton } from '../components/common/CallButton';
import { WhatsAppButton } from '../components/common/WhatsAppButton';

export const AboutPage: React.FC = () => {
  const milestones = [
    { year: '2014', title: 'FixPro Founded', desc: 'Started as a modest laptop repair counter in Garkheda with a commitment to honest diagnostics.' },
    { year: '2017', title: 'Chip-Level Lab Expansion', desc: 'Invested in high-precision German BGA rework stations for advanced motherboard repair.' },
    { year: '2020', title: 'Cleanroom Data Recovery', desc: 'Launched specialized cleanroom hard drive & SSD data recovery lab.' },
    { year: '2022', title: 'Doorstep Service Launch', desc: 'Introduced home & office mobile technician repair services across the city.' },
    { year: '2026', title: '5,000+ Verified Repairs', desc: 'Crossed 5,000 satisfied customers with an average 4.9/5 star Google Rating.' },
  ];

  const coreValues = [
    { icon: ShieldCheck, title: 'Absolute Transparency', desc: 'We provide itemized estimates before touching any device. Zero surprise fees.' },
    { icon: HeartHandshake, title: 'Customer-First Philosophy', desc: 'We fix component problems rather than forcing expensive total replacements.' },
    { icon: Cpu, title: 'Chip-Level Expertise', desc: 'Our engineers undergo rigorous micro-soldering and ESD safety certification.' },
    { icon: Award, title: 'Quality Assurance', desc: 'Every repaired computer passes a 25-point stress test before customer delivery.' },
  ];

  const engineers = [
    { name: 'Sameer Khan', role: 'Senior Chip-Level Engineer', exp: '12+ Years Experience', spec: 'BGA Reballing & MacBook Logic Boards' },
    { name: 'Aniket Verma', role: 'Hardware & OS Specialist', exp: '8+ Years Experience', spec: 'Gaming PCs & Doorstep Logistics' },
    { name: 'Pooja Kulkarni', role: 'Data Recovery Specialist', exp: '9+ Years Experience', spec: 'Cleanroom HDD & NVMe Extraction' },
  ];

  return (
    <>
      <SEO
        title="About FixPro Computers | Computer Repair Hub in Chhatrapati Sambhajinagar"
        description="Learn about FixPro Computers, our history, mission, certified technical engineers, and customer-first transparency philosophy in Garkheda."
      />
      <PageContainer className="pt-24 pb-16">
        <ResponsiveContainer>
          <Breadcrumbs items={[{ label: 'About Us' }]} />

          {/* Hero Story Header */}
          <MotionWrapper variant="fadeUp" className="text-center max-w-3xl mx-auto my-8">
            <span className="text-caption font-semibold text-accent tracking-widest">
              Engineering With Integrity
            </span>
            <h1 className="text-display text-text-primary font-display font-extrabold mt-2 tracking-tight">
              Reinventing Computer Repair In Chhatrapati Sambhajinagar
            </h1>
            <p className="text-body-lg text-text-muted mt-3">
              Founded in 2014, FixPro Computers was built on a simple promise: providing fast, honest, and expert laptop repairs without expensive gimmick pricing.
            </p>
          </MotionWrapper>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <MotionWrapper variant="fadeUp" delay={0.1}>
              <div className="p-8 rounded-3xl bg-surface border border-border shadow-md h-full space-y-3 text-left">
                <span className="text-xs font-bold text-accent uppercase tracking-wider">Our Mission</span>
                <h3 className="text-2xl font-bold font-display text-text-primary">Extend Tech Life & Save Money</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  To deliver world-class chip-level hardware repair services that extend the lifespan of personal computers, laptops, and data storage systems while keeping repair costs fair and transparent.
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper variant="fadeUp" delay={0.2}>
              <div className="p-8 rounded-3xl bg-surface border border-border shadow-md h-full space-y-3 text-left">
                <span className="text-xs font-bold text-accent uppercase tracking-wider">Our Vision</span>
                <h3 className="text-2xl font-bold font-display text-text-primary">The Most Trusted Repair Brand</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  To be Maharashtra’s benchmark technology repair center—recognized for engineering precision, rapid same-day turnaround, and unyielding customer data privacy.
                </p>
              </div>
            </MotionWrapper>
          </div>

          {/* Core Values */}
          <MotionWrapper variant="fadeUp" className="my-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-h2 font-bold text-text-primary">Our Operating Principles</h2>
              <p className="text-body text-text-muted mt-1">The values that guide every diagnostic check and solder joint.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {coreValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="p-6 rounded-2xl bg-surface border border-border shadow-sm hover:border-accent/40 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-text-primary mb-1">{val.title}</h4>
                    <p className="text-xs text-text-muted leading-relaxed">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </MotionWrapper>

          {/* Timeline Section */}
          <MotionWrapper variant="fadeUp" className="my-16 text-left">
            <h2 className="text-h2 font-bold text-text-primary text-center mb-10">Our 10+ Year Journey</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {milestones.map((ms, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-surface border border-border flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-sm">
                  <div className="px-4 py-2 rounded-xl bg-accent text-white font-mono font-bold text-lg shrink-0">
                    {ms.year}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-primary">{ms.title}</h3>
                    <p className="text-xs text-text-muted mt-0.5">{ms.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </MotionWrapper>

          {/* Meet Engineers */}
          <MotionWrapper variant="fadeUp" className="my-16 text-left">
            <h2 className="text-h2 font-bold text-text-primary text-center mb-2">Meet Our Senior Technicians</h2>
            <p className="text-body text-text-muted text-center max-w-xl mx-auto mb-10">Certified hardware engineers with over a decade of specialized repair experience.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {engineers.map((eng, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-surface border border-border text-center space-y-2 shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-accent/15 text-accent font-bold text-xl mx-auto flex items-center justify-center">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-base font-bold text-text-primary">{eng.name}</h3>
                  <p className="text-xs text-accent font-semibold">{eng.role}</p>
                  <p className="text-[11px] text-text-muted">{eng.exp} • {eng.spec}</p>
                </div>
              ))}
            </div>
          </MotionWrapper>

          {/* CTA */}
          <MotionWrapper variant="scale" className="my-12">
            <div className="p-10 rounded-3xl bg-gradient-to-r from-accent/20 via-slate-900 to-indigo-950 border border-accent/40 text-center space-y-4">
              <h2 className="text-h1 font-bold text-white">Ready To Get Your Computer Fixed?</h2>
              <p className="text-body-lg text-slate-300 max-w-xl mx-auto">Visit our store in Garkheda or request a free diagnostic check today.</p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <CallButton variant="primary" size="lg" />
                <WhatsAppButton variant="glass" size="lg" />
              </div>
            </div>
          </MotionWrapper>
        </ResponsiveContainer>
      </PageContainer>
    </>
  );
};

export default AboutPage;
