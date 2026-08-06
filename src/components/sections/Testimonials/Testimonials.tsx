import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { SectionContainer } from '../../layout/SectionContainer';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { MotionWrapper } from '../../../animations/MotionWrapper';
import { TestimonialCard } from './TestimonialCard';
import { RatingSummary } from './RatingSummary';
import { REVIEWS } from '../../../data/reviews';

export const Testimonials: React.FC = () => {
  return (
    <SectionContainer id="testimonials" padding="lg" background="default">
      <ResponsiveContainer>
        <MotionWrapper variant="fadeUp" className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-caption font-semibold text-accent tracking-widest">
            Real Customer Experiences
          </span>
          <h2 className="text-h2 text-text-primary mt-2 font-bold">
            What Laptop & PC Owners Say About FixPro
          </h2>
        </MotionWrapper>

        {/* Rating Summary Bar */}
        <MotionWrapper variant="fadeUp" delay={0.1} className="mb-10">
          <RatingSummary />
        </MotionWrapper>

        {/* Swiper Carousel */}
        <MotionWrapper variant="fadeUp" delay={0.2}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14"
          >
            {REVIEWS.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </MotionWrapper>
      </ResponsiveContainer>
    </SectionContainer>
  );
};
