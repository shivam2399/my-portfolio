'use client';

import { projects } from '@/data/projects';
import { useEffect, useRef } from 'react';
import { fadeIn } from '@/utils/gsapAnimations';

export default function Projects() {
  const projectRef = useRef(null);

  useEffect(() => {
    if (projectRef.current) fadeIn(projectRef.current, 0.2);
  }, []);

  return (
    <section
      id="projects"
      ref={projectRef}
      className="py-20 px-4 bg-white text-gray-900"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-700 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 mt-4 inline-block font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
