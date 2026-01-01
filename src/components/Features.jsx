// src/components/Features.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    FaBrain, FaBook, FaCalculator, FaUsers, FaPencilAlt,
    FaStar, FaBalanceScale, FaLifeRing, FaMobileAlt,
    FaGamepad, FaGraduationCap, FaChartLine,
    FaRoute,
    FaClock
} from 'react-icons/fa';


// In your form JSX, add error display and disable the form when needed



const skillAreas = [
    {
        icon: <FaBrain className="text-3xl text-primary-600" />,
        title: 'Cognitive & Attention',
        description: 'Develop focus, memory, and problem-solving skills',
    },
    {
        icon: <FaBook className="text-3xl text-primary-600" />,
        title: 'Language & Literacy',
        description: 'Build strong reading and communication foundations',
    },
    {
        icon: <FaCalculator className="text-3xl text-primary-600" />,
        title: 'Numeracy & Logic',
        description: 'Master early math concepts and logical thinking',
    },
    {
        icon: <FaUsers className="text-3xl text-primary-600" />,
        title: 'Social & Emotional',
        description: 'Develop empathy, cooperation, and self-regulation',
    },
    {
        icon: <FaPencilAlt className="text-3xl text-primary-600" />,
        title: 'Fine Motor & Writing',
        description: 'Improve hand-eye coordination and writing skills',
    },
];

const learningTracks = [
    {
        // icon: <FaStar className="text-2xl text-yellow-500" />,
        title: '🌟 Enrichment Track',
        for: 'For children who are mostly strong',
        focus: 'Deeper thinking, observation, creativity'
    },
    {
        // icon: <FaBalanceScale className="text-2xl text-blue-500" />,
        title: '⚖️ Core Skills Track',
        for: 'For mixed profiles',
        focus: 'Strengthening weak areas while maintaining strengths'
    },
    {
        // icon: <FaLifeRing className="text-2xl text-green-500" />,
        title: '🛟 Intensive Support Track',
        for: 'For children needing support in multiple areas',
        focus: 'Confidence building, foundations, gradual progress'
    }
];

const parentBenefits = [
    {
        icon: <span>🇮🇳</span>,
        text: 'Designed for Indian families'
    },
    {
        icon: <FaMobileAlt className="text-primary-600" />,
        text: '100% online, no offline dependency'
    },
    {
        icon: <FaGamepad className="text-primary-600" />,
        text: 'Child-friendly, game-based'
    },
    {
        icon: <FaGraduationCap className="text-primary-600" />,
        text: 'Research-aligned pedagogy'
    },
    {
        icon: <FaChartLine className="text-primary-600" />,
        text: 'Clear progress & parent insights'
    }
];

// ... (previous imports remain the same)

const Features = () => {


    return (
        <div className="bg-white">

            {/* Problem Statement */}
            <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">Why FoundaLearn?</h2>
                    <div className="space-y-6 text-lg text-gray-700 max-w-3xl mx-auto">
                        <p className="leading-relaxed">
                            The first 8 years are critical for developing key cognitive abilities that form the foundation for all future learning.
                            FoundaLearn helps identify and strengthen these essential skills through engaging, age-appropriate activities.
                        </p>
                    </div>
                </div>
            </section>

            {/* What FoundaLearn Does */}
            <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">What FoundaLearn Does</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our platform helps identify and strengthen the 5 key cognitive skills essential for your child's learning journey.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: <FaBrain className="text-4xl text-primary-600 mb-4" />,
                                title: "Screens 5 Key Areas",
                                description: "Identifies strengths and gaps in essential cognitive skills"
                            },
                            {
                                icon: <FaChartLine className="text-4xl text-primary-600 mb-4" />,
                                title: "Personalized Analysis",
                                description: "Creates a detailed profile of your child's learning style"
                            },
                            {
                                icon: <FaRoute className="text-4xl text-primary-600 mb-4" />,
                                title: "Custom Learning Paths",
                                description: "Recommends activities tailored to your child's needs"
                            },
                            {
                                icon: <FaClock className="text-4xl text-primary-600 mb-4" />,
                                title: "Short, Focused Sessions",
                                description: "15-20 minute activities that fit into any schedule"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-primary-50  p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex flex-col items-center text-center">
                                    {item.icon}
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills We Assess */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Skills We Assess</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive evaluation across key developmental areas
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {skillAreas.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-primary-50  p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="text-3xl mb-4 text-primary-600">{skill.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                                <p className="text-gray-600">{skill.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Tracks */}
            <section id="learning-tracks" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Our Learning Tracks</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Personalized learning paths based on your child's unique needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {learningTracks.map((track, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-primary-50 order border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="text-4xl mb-4">{track.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{track.title}</h3>
                                <p className="text-gray-700 mb-3 font-medium">{track.for}</p>
                                <p className="text-gray-600">{track.focus}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Why Parents Choose FoundaLearn */}
                    <div className="bg-primary-50 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-center mb-8">Why Parents Choose FoundaLearn</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {parentBenefits.map((benefit, index) => (
                                <div key={index} className="flex flex-col items-center text-center p-4">
                                    <div className="text-2xl mb-2">{benefit.icon}</div>
                                    <p className="font-medium">{benefit.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* Early Access Form */}
            {/* Replace the entire form section with this */}
            <section id="register" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Get Early Access</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Be among the first parents to experience FoundaLearn. We'll notify you when screening opens.
                        </p>

                        {/* Button that opens Google Form in a new tab */}
                        <a
                            // href="https://docs.google.com/forms/d/e/1FAIpQLSdVW3znzUT0v4nJI6UfqyjpS5xnUcTIzXWn9goBFu4KOypV1Q/viewform"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSf1oxJnxhOuVFqt3OLpSIq68_1YBFOs6H59uFw0G9yZ9YiRgQ/viewform?usp=dialog"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                        >
                            Get Early Access
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Features;