"use client";
import { useState, useEffect } from 'react';
import { Menu, X, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-card border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <ShieldAlert className="text-primary w-6 h-6 neon-text" />
                    <span className="text-xl font-bold tracking-tighter text-white">
                        YASH<span className="text-primary">.SEC</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="px-4 py-2 rounded-md bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:neon-box transition-all">
                        Initiate Contact
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 w-full glass-card border-b border-white/10 flex flex-col items-center py-6 gap-6 md:hidden"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium text-gray-300 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </motion.div>
            )}
        </header>
    );
}
