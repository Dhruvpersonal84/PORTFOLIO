import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Tilt from 'react-parallax-tilt'

export default function About() {
    return (
        <section id='about' className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 text-white'>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
                <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight'>Hi, I am</h1>
                    <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>Dhruv Kumar</h2>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
                        <span className="text-white">I am </span>
                        <Typewriter
                            words={[
                                "Frontend Developer",
                                "Backend Developer",
                                "AI/ML Enthusiast",
                            ]}
                            loop
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </h3>
                    <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
                        Entry-level Full Stack Developer with practical experience in MERN stack, RESTful APIs, JWT
                        authentication, and full-stack web application development.
                    </p>
                    <a
                        href="https://drive.google.com/file/d/1l4DXm8RP4qzxEftTgrcetaPtntVHVo-B/view?usp=drive_link"
                        target="_blank"
                        className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
                        style={{
                            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                        }}
                    >
                        DOWNLOAD CV
                    </a>
                </div>

                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <Tilt
                        className="w- h- sm:w-60 sm:h-60 md:w-[20rem] md:h-[20rem] border-1 border-purple-700 rounded-full"
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={1000}
                        gyroscope={true}
                    >
                        <img src="/assets/Profile.jpg" className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"></img>
                        
                    </Tilt>
                </div>
            </div>
        </section>
    )
}
