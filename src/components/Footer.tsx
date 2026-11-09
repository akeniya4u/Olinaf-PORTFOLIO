import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenCV: () => void;
}

export default function Footer({ onOpenCV }: FooterProps) {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-400 py-16 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Brand info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center text-xs font-mono font-semibold">
                OT
              </span>
              <span className="text-lg font-bold text-white tracking-tight">
                {personal.fullName}
              </span>
            </div>

            <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
              {personal.title}
            </p>

            <p className="text-xs text-zinc-500 font-mono">
              Haramaya University · Ethiopia · ALX Certified Virtual Assistant
            </p>

            {/* Social & Email Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 transition-colors"
                aria-label="GitHub Profile (@akeniya4u)"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 transition-colors"
                aria-label="Send Email to Olinaf Tesfaye"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold text-zinc-200 uppercase tracking-wider font-mono">
              Navigation
            </p>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Documents & Direct Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold text-zinc-200 uppercase tracking-wider font-mono">
              Documents & Direct
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenCV}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Download Curriculum Vitae
                </button>
              </li>
              <li>
                <a
                  href="https://visitharar.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Visit Harar (Live Portal)
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/bbbattendance_bot"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Attendance Bot (@bbbattendance_bot)
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Direct Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © 2026 {personal.fullName}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
