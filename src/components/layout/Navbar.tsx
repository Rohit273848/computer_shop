import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Phone, MessageSquare } from 'lucide-react';
import { NAV_ITEMS } from '../../constants/navigation';
import { BrandLogo } from '../common/BrandLogo';
import { ThemeToggle } from '../common/ThemeToggle';
import { CallButton } from '../common/CallButton';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { useScroll } from '../../hooks/useScroll';
import { cn } from '../../utils/cn';
import { drawerVariants, backdropVariants } from '../../animations/variants';
import { BUSINESS_INFO } from '../../constants/business';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled } = useScroll(15);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-surface/85 backdrop-blur-xl border-b border-border py-3 shadow-md'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <BrandLogo showTagline />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full bg-surface-secondary/60 backdrop-blur-md px-3 py-1.5 border border-border/80 shadow-sm">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.id}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 select-none flex items-center gap-1.5',
                    isActive
                      ? 'text-accent font-semibold bg-surface shadow-sm'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface/50'
                  )
                }
              >
                {item.label}
                {item.badge && (
                  <span className="text-[9px] bg-accent/20 text-accent font-bold px-1.5 py-0.2 rounded-full uppercase">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <CallButton variant="ghost" size="sm" showLabel={false} />
            <WhatsAppButton variant="accent" size="sm" showLabel={true} />
          </div>

          {/* Mobile Hamburger Toggle & Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-surface-secondary text-text-primary hover:bg-surface-tertiary transition-colors border border-border focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-accent" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer & Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={backdropVariants}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={drawerVariants}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-surface border-l border-border shadow-2xl flex flex-col lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b border-border">
                <BrandLogo showTagline />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-surface-secondary text-text-muted hover:text-text-primary border border-border"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <div className="flex-1 overflow-y-auto px-5 py-6 space-y-1">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.href}
                    className={({ isActive }) =>
                      cn(
                        'flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all',
                        isActive
                          ? 'bg-accent/15 text-accent border border-accent/30 font-semibold'
                          : 'text-text-primary hover:bg-surface-secondary'
                      )
                    }
                  >
                    <span className="flex items-center gap-2">
                      {item.label}
                      {item.badge && (
                        <span className="text-[10px] bg-accent/20 text-accent font-bold px-2 py-0.5 rounded-full uppercase">
                          {item.badge}
                        </span>
                      )}
                    </span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </NavLink>
                ))}
              </div>

              {/* Drawer Quick Action Footer */}
              <div className="p-5 border-t border-border bg-surface-secondary/40 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  Instant Support
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${BUSINESS_INFO.contact.phonePrimary.replace(/\s+/g, '')}`}
                    className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-surface border border-border text-xs font-medium text-text-primary hover:border-accent/50"
                  >
                    <Phone className="w-4 h-4 text-emerald-500" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-accent text-white text-xs font-medium hover:bg-accent-hover"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
