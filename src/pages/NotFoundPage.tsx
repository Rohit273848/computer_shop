import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { PageContainer } from '../components/layout/PageContainer';
import { ResponsiveContainer } from '../components/layout/ResponsiveContainer';
import { MotionWrapper } from '../animations/MotionWrapper';
import { Button } from '../components/ui/button';
import { ROUTES } from '../constants/routes';
import { Home, Search, Wrench } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for does not exist on FixPro Computers." />
      <PageContainer className="pt-28 pb-16 flex items-center justify-center min-h-[75vh]">
        <ResponsiveContainer size="sm">
          <MotionWrapper variant="scale" className="text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-accent/15 border border-accent/30 text-accent flex items-center justify-center shadow-glow">
              <Wrench className="w-10 h-10 animate-bounce" />
            </div>

            <div className="space-y-2">
              <span className="text-4xl sm:text-6xl font-black font-display text-accent tracking-widest">
                404
              </span>
              <h1 className="text-h2 font-bold text-text-primary">Page Not Found</h1>
              <p className="text-body text-text-muted max-w-md mx-auto">
                Oops! The page or URL you clicked does not exist or may have been moved. Let's get you back on track.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link to={ROUTES.HOME}>
                <Button variant="primary" size="lg" className="gap-2 shadow-glow">
                  <Home className="w-4 h-4" />
                  <span>Return to Homepage</span>
                </Button>
              </Link>
              <Link to={ROUTES.SERVICES}>
                <Button variant="outline" size="lg" className="gap-2">
                  <Search className="w-4 h-4" />
                  <span>Browse Services</span>
                </Button>
              </Link>
            </div>
          </MotionWrapper>
        </ResponsiveContainer>
      </PageContainer>
    </>
  );
};

export default NotFoundPage;
