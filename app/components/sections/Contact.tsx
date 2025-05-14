// app/components/sections/Contact.tsx
'use client';

import { useRef, useEffect } from 'react';
import { fadeIn } from '@/utils/gsapAnimations';

export default function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    if (contactRef.current) fadeIn(contactRef.current, 0.2);
  }, []);

  return (
    <section id="contact" ref={contactRef} className="py-20 px-4 bg-gray-100 text-gray-900">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
        <form
          action="https://formsubmit.co/your@email.com"
          method="POST"
          className="flex flex-col gap-4 text-left"
        >
          <input type="text" name="name" placeholder="Your Name" required className="p-3 border rounded-md" />
          <input type="email" name="email" placeholder="Your Email" required className="p-3 border rounded-md" />
          <textarea name="message" placeholder="Your Message" required className="p-3 border rounded-md h-32" />
          <button type="submit" className="bg-blue-600 text-white py-3 rounded-md font-semibold">Send Message</button>
        </form>
      </div>
    </section>
  );
}
