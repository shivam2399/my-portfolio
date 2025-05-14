// app/components/sections/Hero.tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <section ref={heroRef} id="hero" className="h-screen flex items-center justify-center text-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white px-4">
      <div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Hi, I'm Shiva</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">A passionate Web Developer crafting immersive user experiences.</p>
      </div>
    </section>
  );
}
