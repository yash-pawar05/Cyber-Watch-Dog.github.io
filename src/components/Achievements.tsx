"use client";
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Trophy, Award } from 'lucide-react';

export function Achievements() {
    return (
        <section id="achievements" className="py-20 relative z-10">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 flex items-center gap-4"
                >
                    <div className="h-10 w-2 bg-primary rounded-full" />
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Achievements & <span className="text-primary">Certifications</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Bug Bounty & Accolades Timeline */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                            <Trophy className="text-yellow-500 w-6 h-6" /> Awards & Recognitions
                        </h3>

                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                            {portfolioData.achievements.map((achievement, idx) => (
                                <motion.div
                                    key={achievement.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                                >
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-gray-800 text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                        <Trophy className="w-5 h-5" />
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-xl border border-white/5 group-hover:border-yellow-500/30 transition-colors">
                                        <h4 className="font-bold text-white mb-2">{achievement.title}</h4>
                                        <p className="text-sm text-gray-400">{achievement.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Cards */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                            <Award className="text-primary w-6 h-6" /> Certifications
                        </h3>
                        <div className="grid gap-6">
                            {portfolioData.certifications.map((cert, idx) => (
                                <motion.div
                                    key={cert.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="glass-card p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors flex items-start gap-4 group"
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-black transition-colors text-primary">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-white group-hover:text-primary transition-colors">{cert.title}</h4>
                                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                                            <span>{cert.issuer}</span>
                                            <span className="w-1 h-1 bg-gray-600 rounded-full" />
                                            <span>{cert.date}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
