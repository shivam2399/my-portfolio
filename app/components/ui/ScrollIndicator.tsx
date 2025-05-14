// app/components/ui/ScrollIndicator.tsx
'use client';

import { useEffect, useState } from 'react';

export default function ScrollIndicator() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScroll(scrolled);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-1 bg-blue-500 z-50" style={{ width: `${scroll}%` }} />
  );
}
