"use client";
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { User, CheckCircle2, Terminal } from 'lucide-react';

export function About() {
    return (
        <section id="about" className="py-20 relative z-10">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 flex items-center gap-4"
                >
                    <div className="h-10 w-2 bg-primary rounded-full" />
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About <span className="text-primary">Me</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                    {/* Profile Card Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-5 lg:col-span-4"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                            <div className="relative glass-card rounded-xl p-8 flex flex-col items-center border border-white/10">
                                <div className="w-40 h-40 rounded-full bg-gray-800 border-2 border-primary/50 flex items-center justify-center overflow-hidden mb-6 relative">
                                    <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{portfolioData.hero.name}</h3>
                                <p className="text-gray-400 text-center text-sm">Offensive Security & Web Development</p>
                                <div className="mt-6 flex flex-wrap justify-center gap-2">
                                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">Red Team</span>
                                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">Full Stack</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bio & Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:col-span-7 lg:col-span-8 flex flex-col gap-8"
                    >
                        <div className="glass-card p-8 rounded-xl border border-white/5">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                {portfolioData.about.bio} {portfolioData.hero.description}
                            </p>
                        </div>

                        <div className="glass-card p-8 rounded-xl border border-white/5">
                            <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                                <Terminal className="w-5 h-5 text-primary" />
                                Domains of Expertise
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {portfolioData.about.experience.map((exp, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                        <span>{exp}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
