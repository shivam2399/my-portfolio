'use client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const fadeIn = (target: any, delay = 0) => {
  gsap.fromTo(target, { opacity: 0, y: 50 }, {
    opacity: 1,
    y: 0,
    duration: 1,
    delay,
    scrollTrigger: {
      trigger: target,
      start: 'top 80%',
    },
  });
};
