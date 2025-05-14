// app/components/ui/AnimatedCursor.tsx
'use client';

import { useEffect } from 'react';
import AnimatedCursor from 'react-animated-cursor';

export default function CustomCursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      color="0, 0, 0"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2}
    />
  );
}
