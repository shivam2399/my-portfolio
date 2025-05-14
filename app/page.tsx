// app/page.tsx
'use client';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import ScrollIndicator from './components/ui/ScrollIndicator';
import AnimatedCursor from './components/ui/AnimatedCursor';

export default function HomePage() {
  return (
    <>
      <AnimatedCursor />
      <ScrollIndicator />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
