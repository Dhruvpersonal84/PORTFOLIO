import React from 'react'
import { SkillsInfo } from '../../Data'
import Tilt from "react-parallax-tilt"

export default function Skills() {
    return (
        <section id='skills' className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom">
            <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
                <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    A collection of my technical skills and expertise honed through various projects and experiences
                </p>
            </div>

            <div className="flex flex-wrap gap-4 lg:gap-6 py-10 justify-between">
                {SkillsInfo.map((category) => (
                    <div
                        key={category.title}
                        className="bg-gray-900 px-6 sm:px-10 py-8 mb-10 w-full sm:w-[48%]
                                    rounded-2xl border border-white/10
                                    shadow-[0_0_20px_1px_rgba(130,69,236,0.25)]">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6 text-center">
                            {category.title}
                        </h3>

                        {/* Skill Items */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-">
                            {category.skills.map((skill) => (
                                <Tilt
                                    key={skill.name}
                                    tiltMaxAngleX={15}
                                    tiltMaxAngleY={15}
                                    scale={1.05}
                                    transitionSpeed={800}
                                    gyroscope={true}
                                >
                                    <div
                                        className="flex items-center justify-center gap-2
                                            border border-gray-700 rounded-3xl py-2 px-3 text-center
                                            transition-all duration-300
                                            hover:border-[#8245ec]
                                            hover:shadow-[0_0_10px_rgba(130,69,236,0.5)]">
                                        <img
                                            src={skill.logo}
                                            alt={`${skill.name} logo`}
                                            loading="lazy"
                                            className="w-6 h-6 sm:w-8 sm:h-8"
                                        />
                                        <span className="text-xs sm:text-sm text-gray-300">
                                            {skill.name}
                                        </span>
                                    </div>
                                </Tilt>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}
