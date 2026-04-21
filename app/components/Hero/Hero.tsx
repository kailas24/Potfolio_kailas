'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
    const [lgScreen, setLgScreen] = useState<number>(1024)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setLgScreen(window.innerWidth);
        }
    }, []);

    return (
        <section className="flex flex-col items-center justify-center min-h-[90vh] w-full max-w-[1200px] mx-auto pb-10 relative">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />

            {lgScreen < 1024 && (
                <Link href={'/Kailas_Jayan_CV_Final.pdf'} download className="absolute right-5 top-5 p-3 px-8 text-xl font-medium text-cyan-400 underline decoration-cyan-400/50 hover:text-white transition-colors duration-300">
                    Download CV
                </Link>
            )}

            <div className="w-full flex gap-12 max-md:flex-col items-center justify-between z-10 p-10 max-sm:p-5">
                <div className="flex flex-col w-[60%] max-md:w-full">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col font-light text-zinc-300"
                    >
                        <h1 className={`font-Roboto_Slab text-2xl max-sm:text-lg tracking-wide uppercase text-zinc-400`}>Hey! my name is</h1>
                        <p className={`text-8xl max-xl:text-7xl max-sm:text-5xl font-Roboto text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.2)] mt-2 font-bold`}>
                            KAILAS JAYAN.
                        </p>
                        <p className="mr-11 text-3xl max-md:mr-2.5 max-md:max-w-full h-16 max-sm:h-20 mt-4">
                            <span className={`font-Roboto_Slab text-xl max-sm:text-lg`}>I&apos;m a </span>
                            <span className="text-4xl max-sm:text-3xl text-cyan-400 font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.3)] tracking-wide">
                                <Typewriter
                                    words={['Robotics Engineer.', 'Automation Expert.', 'Tech Innovator.', 'Problem Solver.']}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={60}
                                    deleteSpeed={40}
                                    delaySpeed={2000}
                                />
                            </span>
                        </p>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col mt-4 max-md:w-full w-5/6"
                    >
                        <p className="text-lg leading-relaxed text-zinc-400 font-light max-sm:text-base">
                            I&apos;m a Robotics and Automation Engineer focused on creating intelligent systems that optimize processes. With skills in robotics, AI, embedded systems, and control mechanisms, I develop innovative solutions for real-world challenges. Let&apos;s innovate together!
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className='flex gap-6 mt-10'
                    >
                        <Link href={'#projects'} className="overflow-hidden gap-2 self-start px-8 py-3.5 text-lg font-medium leading-none whitespace-nowrap rounded-lg bg-white text-black hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] duration-300">
                            Projects
                        </Link>
                        {lgScreen >= 1024 && (
                            <Link href={'/Kailas_Jayan_CV_Final.pdf'} download className="overflow-hidden gap-2 self-start px-8 py-3.5 text-lg font-medium leading-none whitespace-nowrap rounded-lg border border-cyan-500/50 text-white hover:bg-cyan-500/10 hover:border-cyan-400 duration-300">
                                Download CV
                            </Link>
                        )}
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex flex-col w-[30%] max-md:w-[60%] max-sm:w-[80%] items-center justify-center group mt-10 md:mt-0"
                >
                    <div className="absolute inset-0 bg-cyan-400/20 blur-[60px] rounded-full z-0" />
                    
                    {/* The Profile Picture */}
                    <div className="relative z-10 w-full aspect-square rounded-full overflow-hidden border border-cyan-400/30 hover:border-cyan-400 transition-colors duration-300">
                        <motion.img 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            src={'/profile.jpeg'} 
                            className='w-full h-full object-cover rounded-full' 
                            alt="Profile" 
                        />
                    </div>
                </motion.div>
            </div>

            <motion.blockquote 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-16 text-center z-10 w-[60%] max-md:w-[90%]"
            >
                <div className={`text-2xl font-light text-cyan-400/80 max-sm:text-xl italic`}>
                    &quot;The best way to predict the future is to invent it.&quot;
                </div>
                <cite className="text-zinc-500 text-sm mt-3 block uppercase tracking-widest">~ Alan Kay</cite>
            </motion.blockquote>
        </section>
    )
}

export default Hero
