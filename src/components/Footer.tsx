export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5 py-8 mt-12 bg-black/50">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-500 text-sm">
                    &copy; {currentYear} Yash Vijay Pawar. All rights reserved.
                </p>
                <p className="text-gray-500 text-sm flex items-center gap-1">
                    Built with <span className="text-red-500 animate-pulse">❤️</span> using Next.js & Tailwind CSS
                </p>
            </div>
        </footer>
    );
}
