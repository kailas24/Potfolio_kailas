'use client';
import React from 'react'
import ProjectCards from '../ProjectCards/ProjectCards';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'VR Teleoperating Robot',
            description:'The VR Teleoperated Robot uses Arduino Uno, MPU6050, and Flex Sensors for gesture-based control of servo motors. It is ideal for tasks in hazardous environments, medical surgeries, and remote operations.',
            tech: 'Arduino UNO, MPU6050 Sensor, Flex Sensor, Servo Motors, I2C Communication protocol, C/C++ Programming, VR',
            source: {
                sourceLink: "https://github.com/kailas24/VR-Teleoperated-Robotic-Arm-with-Head-Tracking-FPV-System",
                linkedIn: "https://www.linkedin.com/posts/kailas-jayan_robotics-embeddedsystems-arduino-ugcPost-7451282172444901376-938h?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgByO8BeE2DxiWEp9fvqN7NYKYnMiWJoNg"
            },
            link: 'https://github.com/kailas24/VR-Teleoperated-Robotic-Arm-with-Head-Tracking-FPV-System'
        },
        {
            title: 'Underwater Robot',
            description: "An underwater ROV's objectives, design, modules, challenges, and applications. It features Arduino controls, BLDC motors, and sensors for exploration and research, detailing problem analysis, assembly, testing, and real-time environmental monitoring",
            tech: 'Arduino UNO, BLDC, ESC, Li-ion Battery, Camera',
            source: {
              sourceLink: "https://drive.google.com/file/d/1R5-0Ce-D3mpUjZE_bRz1JjSkSC0m8mOy/view"
            },
            link: 'https://learnify-client-tau.vercel.app'
        },
        {
            title: 'ROS2 Robot Arm MoveIt',
            description: 'A robotic arm control system using ROS2 and MoveIt framework. This project implements advanced motion planning, trajectory control, and manipulation capabilities for autonomous robot arm operations.',
            tech: 'ROS2, MoveIt, Robot Arm, Motion Planning, C++, Python',
            source: {
              sourceLink: "https://github.com/kailas24/ros2-robot-arm-moveit",
              linkedIn: "https://www.linkedin.com/posts/kailas-jayan_ros2-robotics-moveit-activity-7451265886415458304-X1_N?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgByO8BeE2DxiWEp9fvqN7NYKYnMiWJoNg"
            },
            link: 'https://github.com/kailas24/ros2-robot-arm-moveit'
        },
    ];

    return (
        <section id='projects' className="flex overflow-hidden flex-col py-16 pb-20 mt-9 w-full bg-stone-900 max-md:max-w-full">
            <div className="flex flex-col px-16 w-full max-md:px-5 max-md:max-w-full">
                <motion.h2 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="self-start text-5xl leading-none text-zinc-300 max-md:text-4xl max-sm:text-2xl"
                >
                    Things I&apos;ve built
                </motion.h2>
                <div className="self-center mt-28 w-full max-w-6xl max-md:px-6 max-sm:px-1 max-md:mt-10 max-sm:mt-0 max-md:max-w-full">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.2 }
                            }
                        }}
                        className="grid grid-cols-3 gap-10 max-sm:gap-1 max-md:gap-5 max-sm:grid-cols-1 max-xl:grid-cols-2"
                    >
                        {projects.map((project, index) => (
                            <motion.div 
                                key={index} 
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                className="flex flex-col max-md:ml-0 max-md:w-full"
                            >
                                <ProjectCards {...project} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Projects
