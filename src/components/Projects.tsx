"use client";
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { ExternalLink, MonitorPlay } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export function Projects() {
    return (
        <section id="projects" className="py-20 relative z-10">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 flex items-center justify-between"
                >
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-2 bg-primary rounded-full" />
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured <span className="text-primary">Projects</span></h2>
                    </div>
                    <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-gray-400 hover:text-primary transition-colors">
                        View all on GitHub <ExternalLink className="w-4 h-4" />
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {portfolioData.projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 flex flex-col"
                        >
                            {/* Project Image Placeholder */}
                            <div className="h-64 bg-gray-800 relative overflow-hidden flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-80 z-10" />
                                <MonitorPlay className="w-20 h-20 text-gray-700 group-hover:text-primary/50 transition-colors duration-500" />
                                {/* <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /> */}
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-6 flex-1">{project.description}</p>

                                <div className="mb-8">
                                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {project.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="text-sm text-gray-400 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex gap-4 pt-6 border-t border-white/10">
                                    <a href={project.liveDemo} className="flex-1 flex justify-center items-center gap-2 bg-primary/10 text-primary border border-primary/20 py-2.5 rounded-lg hover:bg-primary/20 transition-all text-sm font-semibold">
                                        <ExternalLink className="w-4 h-4" /> Live Demo
                                    </a>
                                    <a href={project.github} className="flex-1 flex justify-center items-center gap-2 bg-white/5 text-white border border-white/10 py-2.5 rounded-lg hover:bg-white/10 transition-all text-sm font-semibold">
                                        <FaGithub className="w-4 h-4" /> Source Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
