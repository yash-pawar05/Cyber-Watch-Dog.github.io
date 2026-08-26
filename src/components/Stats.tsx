"use client";
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Bug, Award, BadgeCheck } from 'lucide-react';

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
    const [count, setCount] = useState(from);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let startTime: number;
            let animationFrame: number;

            const step = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

                // ease out block
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                setCount(Math.floor(easeOutQuart * (to - from) + from));

                if (progress < 1) {
                    animationFrame = requestAnimationFrame(step);
                }
            };

            animationFrame = requestAnimationFrame(step);

            return () => cancelAnimationFrame(animationFrame);
        }
    }, [isInView, from, to, duration]);

    return <span ref={ref}>{count}</span>;
}

export function Stats() {
    const stats = [
        { label: "Projects Completed", value: portfolioData.stats.projectsCompleted, icon: <ShieldCheck className="w-8 h-8 mx-auto mb-4 text-primary" /> },
        { label: "Bug Bounty Reports", value: portfolioData.stats.bugBounties, icon: <Bug className="w-8 h-8 mx-auto mb-4 text-red-400" /> },
        { label: "Hall of Fame Recognitions", value: portfolioData.stats.hallOfFames, icon: <Award className="w-8 h-8 mx-auto mb-4 text-yellow-400" /> },
        { label: "Certifications", value: portfolioData.stats.certifications, icon: <BadgeCheck className="w-8 h-8 mx-auto mb-4 text-blue-400" /> },
    ];

    return (
        <section className="py-20 border-y border-white/5 relative z-10 bg-black/40">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="text-center p-6"
                        >
                            {stat.icon}
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">
                                <Counter from={0} to={stat.value} /><span className="text-primary">+</span>
                            </div>
                            <div className="text-sm md:text-base text-gray-400 font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
