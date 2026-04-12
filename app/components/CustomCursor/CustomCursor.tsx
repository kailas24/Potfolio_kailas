'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Smooth springs for the trailing ring
  const springX = useSpring(0, { stiffness: 300, damping: 28, mass: 0.5 });
  const springY = useSpring(0, { stiffness: 300, damping: 28, mass: 0.5 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX - 20); // Center the 40px ring
      springY.set(e.clientY - 20);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('img')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [springX, springY]);

  return (
    <>
      {/* Main tiny dot (instant) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[100] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4, // 8px dot centered
          y: mousePosition.y - 4,
          opacity: isHovering ? 0 : 1, // Hides when hovering
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      
      {/* Trailing larger ring (smooth) */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-cyan-400/50 rounded-full pointer-events-none z-[99]"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(34, 211, 238, 0.15)' : 'transparent',
          borderWidth: isHovering ? "0px" : "1px",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  );
};

export default CustomCursor;
