"use client";
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

export function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate form submission
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 relative z-10">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 flex flex-col items-center text-center gap-4"
                >
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-2">
                        <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Initiate <span className="text-primary">Connection</span></h2>
                    <p className="text-gray-400 max-w-2xl mt-4">
                        Currently open for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-4 p-4 glass-card rounded-xl border border-white/5 hover:border-primary/30 transition-all group">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <Mail className="w-6 h-6 text-gray-300 group-hover:text-primary transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-400 font-medium">Email Address</h4>
                                    <p className="text-white font-medium">{portfolioData.contact.email}</p>
                                </div>
                            </a>

                            <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 glass-card rounded-xl border border-white/5 hover:border-primary/30 transition-all group">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <FaGithub className="w-6 h-6 text-gray-300 group-hover:text-primary transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-400 font-medium">GitHub Profile</h4>
                                    <p className="text-white font-medium">@yash-pawar05</p>
                                </div>
                            </a>

                            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 glass-card rounded-xl border border-white/5 hover:border-primary/30 transition-all group">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <FaLinkedin className="w-6 h-6 text-gray-300 group-hover:text-primary transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-400 font-medium">LinkedIn Network</h4>
                                    <p className="text-white font-medium">Connect with me</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="glass-card p-6 md:p-8 rounded-xl border border-white/10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Target Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-[#0d1117] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Source Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-[#0d1117] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Encrypted Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-[#0d1117] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow resize-none"
                                    placeholder="Enter your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full bg-primary hover:bg-primary/90 text-black font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:neon-box transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                            >
                                {status === 'idle' && <><Send className="w-5 h-5" /> Transmit Data</>}
                                {status === 'submitting' && <span className="animate-pulse">Encrypting & Sending...</span>}
                                {status === 'success' && <span>Transmission Successful!</span>}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
