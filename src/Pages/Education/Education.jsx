import React from 'react'
import { education } from '../../Data'

export default function Education() {
    return (
        <section id='education'>
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
                <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                   List of my all education completed 
                </p>
            </div>

            <div className="relative">
                <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>
 
                {education.map((education, index) => (
                    <div className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}>
                        <div className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"} sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}>
                            <div className="flex items-center space-x-6">
                                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                                    <img src={education.img} alt="edu" className="w-full h-full object-cover"/>
                                </div>

                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-semibold text-white">
                                            {education.grade}
                                        </h3>
                                        <h4 className="text-md sm:text-sm text-gray-300">
                                            {education.school}
                                        </h4>
                                    </div>
                                    {/* Date at the bottom */}
                                    <p className="text-sm text-gray-500 mt-2">{education.date}</p>
                                </div>
                            </div>

                            <p className="mt-4 text-gray-400">{education.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
