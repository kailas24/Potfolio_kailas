'use client';
import Link from 'next/link';
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface Source {
  frontend?: string;
  backend?: string;
  sourceLink?: string;
}

type Props = {
  title: string;
  description: string;
  tech: string;
  source?: Source;
  link: string;
};

const ProjectCards: React.FC<Props> = (props) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative flex flex-col px-9 py-8 h-[29rem] max-sm:h-[29rem] max-md:h-[30rem] mx-auto w-full text-base leading-none text-white rounded-xl bg-[#111] backdrop-blur-md border border-white/10 shadow-2xl transition-colors duration-300 hover:border-cyan-500/50 max-md:px-5 max-md:mt-10 group"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
      />

      <motion.div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
        <h3 className="self-start text-2xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">{props.title}</h3>
        <p className="self-start mt-4 leading-6 text-zinc-300 max-sm:text-sm font-light">{props.description}</p>
      </motion.div>

      <div className="mt-auto">
        <motion.div style={{ transform: "translateZ(40px)" }} className="border border-stone-700/50 rounded-lg bg-black/40 mt-5 p-4 relative backdrop-blur-sm">
          <span className="absolute -top-3 left-3 text-cyan-300 px-2 bg-[#111] rounded text-[10px] tracking-wider uppercase font-medium">Tech Stack</span>
          <div className="flex justify-center text-zinc-300 text-sm text-center max-sm:text-xs font-light leading-5">
            {props.tech}
          </div>
        </motion.div>

        <motion.div style={{ transform: "translateZ(60px)" }} className="flex gap-2.5 mt-6 max-sm:mt-4 justify-center w-full whitespace-nowrap">
          {props.source?.sourceLink && (
            <div className="w-full text-center">
              <Link target="_blank" href={props.source.sourceLink} rel="noopener noreferrer">
                <button
                  className="w-[80%] text-white shadow-[0_0_15px_rgba(34,211,238,0.1)] bg-cyan-500/10 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] duration-300 border border-cyan-500/20 font-medium tracking-wide"
                  aria-label="View Source"
                >
                  View Source
                </button>
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCards;
