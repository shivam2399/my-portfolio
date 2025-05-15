'use client';

import { useEffect, useRef } from 'react';
import { skills } from '@/data/skills';
import { fadeIn } from '@/utils/gsapAnimations';

export default function Skills() {
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skillRef.current) fadeIn(skillRef.current, 0.2);
  }, []);

  return (
    <section
      id="skills"
      ref={skillRef}
      className="py-20 px-4 bg-gray-100 text-gray-900"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-xl shadow-md font-semibold"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
