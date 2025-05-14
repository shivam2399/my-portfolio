// app/components/sections/About.tsx
'use client';

import { useEffect, useRef } from 'react';
import { fadeIn } from '@/utils/gsapAnimations';

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    if (aboutRef.current) fadeIn(aboutRef.current, 0.2);
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-20 px-4 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          I'm a full-stack developer with a passion for building beautiful and performant web apps.
          I love blending design and code to create immersive digital experiences. Currently focused on mastering Next.js, Tailwind, and modern UI/UX techniques.
        </p>
      </div>
    </section>
  );
}
