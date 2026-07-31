"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Terminal, Shield, ChevronRight, Download } from 'lucide-react';

export function Hero() {
    const [titleIndex, setTitleIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const titles = portfolioData.hero.titles;
        const currentTitle = titles[titleIndex];
        let typingSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && text === currentTitle) {
            setTimeout(() => setIsDeleting(true), 1500);
            return;
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
            return;
        }

        const timeout = setTimeout(() => {
            setText(currentTitle.substring(0, text.length + (isDeleting ? -1 : 1)));
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, titleIndex]);

    return (
        <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 min-h-screen flex items-center relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-6"
                >
                    <div className="flex items-center gap-2 text-primary font-mono bg-primary/10 w-fit px-3 py-1 rounded-full border border-primary/20">
                        <Shield className="w-4 h-4" />
                        <span className="text-sm">root@system: ~$ ./init_portfolio.sh</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                        Hi, I'm <br />
                        <span className="neon-text">{portfolioData.hero.name}</span>
                    </h1>

                    <div className="text-2xl md:text-3xl font-mono text-gray-300 h-10 flex items-center">
                        <span>{text}</span>
                        <span className="w-3 h-8 bg-primary ml-1 animate-pulse" />
                    </div>

                    <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                        {portfolioData.hero.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-4">
                        <a href="#projects" className="flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-md font-medium hover:neon-box transition-all group">
                            View Projects
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="https://drive.google.com/file/d/1DTp-s9D1vN-WV7IoCW-i28iJpcrNKGFy/view?usp=sharing" className="flex items-center gap-2 border border-white/20 bg-black/50 text-white px-6 py-3 rounded-md font-medium hover:bg-white/5 transition-all">
                            <Download className="w-4 h-4" />
                            Resume
                        </a>
                    </div>
                </motion.div>

                {/* Right Content - Terminal */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="terminal-window neon-box">
                        <div className="terminal-header">
                            <div className="terminal-dot dot-red" />
                            <div className="terminal-dot dot-yellow" />
                            <div className="terminal-dot dot-green" />
                            <span className="ml-4 text-xs font-mono text-gray-500">yash@bash: ~</span>
                        </div>
                        <div className="p-6 font-mono text-sm leading-relaxed text-gray-300 bg-[#0d1117]/80 h-[300px] overflow-hidden">
                            <div className="text-primary mb-2">$ whoami</div>
                            <div className="mb-4 text-white">yash_pawar</div>

                            <div className="text-primary mb-2">$ cat status.txt</div>
                            <div className="mb-4 text-white">
                                Status: Hunting Bugs...<br />
                                Target: 127.0.0.1<br />
                                Coffee Level: 85%
                            </div>

                            <div className="text-primary mb-2">$ ./scan_skills.sh</div>
                            <div className="text-green-500">
                                [+] Web Sec Testing: Loading... OK<br />
                                [+] Threat Modeling: Loading... OK<br />
                                [+] Exploit Dev: Loading... OK<br />
                                [+] System Architecture: Loading... OK
                            </div>
                            <div className="mt-4 flex items-center">
                                <span className="text-primary mr-2">root@system:~$</span>
                                <span className="w-2 h-4 bg-gray-400 animate-pulse inline-block" />
                            </div>
                        </div>
                    </div>

                    {/* Floating Icons */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        className="absolute -top-6 -right-6 glass-card p-4 rounded-xl border border-primary/20 text-primary"
                    >
                        <Shield className="w-8 h-8" />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl border border-blue-500/20 text-blue-400"
                    >
                        <Terminal className="w-8 h-8" />
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
