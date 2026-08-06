import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
import { ROUTES } from '../constants/routes';

// Lazy loading page components for optimal performance & code splitting
const HomePage = lazy(() => import('../pages/HomePage'));
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const LaptopRepairPage = lazy(() => import('../pages/LaptopRepairPage'));
const DesktopRepairPage = lazy(() => import('../pages/DesktopRepairPage'));
const MotherboardRepairPage = lazy(() => import('../pages/MotherboardRepairPage'));
const DataRecoveryPage = lazy(() => import('../pages/DataRecoveryPage'));
const DoorstepRepairPage = lazy(() => import('../pages/DoorstepRepairPage'));
const AmcServicesPage = lazy(() => import('../pages/AmcServicesPage'));
const SecondHandLaptopsPage = lazy(() => import('../pages/SecondHandLaptopsPage'));
const AccessoriesPage = lazy(() => import('../pages/AccessoriesPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const PageLoader: React.FC = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-4 border-accent/20 border-t-accent rounded-full animate-spin" />
      <span className="text-xs font-medium text-text-muted">Loading FixPro...</span>
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.SERVICES,
        element: (
          <Suspense fallback={<PageLoader />}>
            <ServicesPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.LAPTOP_REPAIR,
        element: (
          <Suspense fallback={<PageLoader />}>
            <LaptopRepairPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.DESKTOP_REPAIR,
        element: (
          <Suspense fallback={<PageLoader />}>
            <DesktopRepairPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.MOTHERBOARD_REPAIR,
        element: (
          <Suspense fallback={<PageLoader />}>
            <MotherboardRepairPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.DATA_RECOVERY,
        element: (
          <Suspense fallback={<PageLoader />}>
            <DataRecoveryPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.DOORSTEP_REPAIR,
        element: (
          <Suspense fallback={<PageLoader />}>
            <DoorstepRepairPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.AMC_SERVICES,
        element: (
          <Suspense fallback={<PageLoader />}>
            <AmcServicesPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.SECOND_HAND_LAPTOPS,
        element: (
          <Suspense fallback={<PageLoader />}>
            <SecondHandLaptopsPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.ACCESSORIES,
        element: (
          <Suspense fallback={<PageLoader />}>
            <AccessoriesPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.ABOUT,
        element: (
          <Suspense fallback={<PageLoader />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.CONTACT,
        element: (
          <Suspense fallback={<PageLoader />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<PageLoader />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};
