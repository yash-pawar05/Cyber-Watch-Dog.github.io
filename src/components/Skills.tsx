"use client";
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Shield, Code, Server, Wrench } from 'lucide-react';

export function Skills() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.9 },
        show: { opacity: 1, scale: 1 }
    };

    const skillCategories = [
        {
            title: "Cybersecurity & Pentesting",
            icon: <Shield className="w-6 h-6 text-primary" />,
            skills: portfolioData.skills.cybersecurity
        },
        {
            title: "Programming Languages",
            icon: <Code className="w-6 h-6 text-blue-400" />,
            skills: portfolioData.skills.programming
        },
        {
            title: "Frameworks & Libraries",
            icon: <Server className="w-6 h-6 text-purple-400" />,
            skills: portfolioData.skills.frameworks
        },
        {
            title: "Tools & Platforms",
            icon: <Wrench className="w-6 h-6 text-orange-400" />,
            skills: portfolioData.skills.tools
        }
    ];

    return (
        <section id="skills" className="py-20 relative z-10">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 flex items-center gap-4"
                >
                    <div className="h-10 w-2 bg-primary rounded-full" />
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical <span className="text-primary">Skills</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-card hover:border-primary/30 transition-all duration-300 p-8 rounded-xl border border-white/5"
                        >
                            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/5">
                                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>

                            <motion.div
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="flex flex-wrap gap-2"
                            >
                                {category.skills.map((skill, sIdx) => (
                                    <motion.span
                                        variants={item}
                                        key={sIdx}
                                        className="px-3 py-1.5 text-sm font-medium bg-[#1a1b26] text-gray-300 border border-white/10 rounded-md hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
