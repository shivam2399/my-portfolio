import gsap from 'gsap';

export const fadeIn = (element: any, delay = 0) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay }
  );
};
