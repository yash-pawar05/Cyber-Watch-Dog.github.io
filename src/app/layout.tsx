import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yash Vijay Pawar | Cybersecurity Researcher & Full Stack Developer',
  description: 'Portfolio of Yash Vijay Pawar. Securing modern web applications through penetration testing, vulnerability research, and secure software development.',
  keywords: ['Cybersecurity', 'Bug Bounty Hunter', 'Full Stack Developer', 'Penetration Tester', 'Yash Vijay Pawar'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground cyber-grid min-h-screen selection:bg-primary/30 selection:text-primary`}>
        {children}
      </body>
    </html>
  );
}
