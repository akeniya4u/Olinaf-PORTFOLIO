import { useState } from 'react';
import { ArrowDown, FileText, Github, Linkedin, Mail, MapPin, GraduationCap, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenCV: () => void;
}

export default function Hero({ onOpenCV }: HeroProps) {
  const [imageError, setImageError] = useState(false);
  const { personal } = PORTFOLIO_DATA;

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Subtle electric blue ambient backdrop glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Subdued kicker / unboxed label */}
            <div className="flex items-center gap-2 text-xs font-medium tracking-wide uppercase text-blue-400">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Software Engineering Student</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Web Developer</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>AI Enthusiast</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-2xl">
              Building Digital Solutions Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400">Software and AI</span>.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl font-medium text-zinc-300 leading-relaxed max-w-xl">
              {personal.subheading}
            </p>

            {/* Short Description */}
            <p className="text-base text-zinc-400 leading-relaxed max-w-xl">
              {personal.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={scrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-all shadow-lg shadow-blue-600/25 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              <button
                onClick={onOpenCV}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-zinc-200 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 rounded-xl transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Download My CV</span>
              </button>
            </div>

            {/* Social Links & Trust Indicators */}
            <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-zinc-800/80 w-full text-zinc-400 text-sm">
              <div className="flex items-center gap-3">
                <a
                  href={personal.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 transition-colors"
                  aria-label="Olinaf Tesfaye LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personal.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 transition-colors"
                  aria-label="Olinaf Tesfaye GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personal.socialLinks.email}
                  className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 transition-colors"
                  aria-label="Email Olinaf Tesfaye"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Ethiopia</span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <GraduationCap className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Haramaya University</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-blue-600/40 via-blue-500/20 to-transparent blur-md opacity-70" />

              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-800/90 bg-zinc-900 shadow-2xl">
                {!imageError ? (
                  <img
                    src={personal.avatarImage}
                    alt="Olinaf Tesfaye, Software Engineering student and web developer."
                    width={400}
                    height={400}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover object-[center_20%] [image-rendering:auto] transform-gpu"
                    style={{ imageRendering: 'auto' }}
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-2xl font-mono mb-4">
                      OT
                    </div>
                    <h3 className="text-lg font-bold text-white">{personal.fullName}</h3>
                    <p className="text-xs text-zinc-400 mt-1">{personal.title}</p>
                  </div>
                )}

                {/* Subtle dark gradient scrim at the bottom */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent pointer-events-none" />

                {/* Bottom identification overlay */}
                <div className="absolute bottom-4 inset-x-4 p-3 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-800/90 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white tracking-wide">{personal.fullName}</p>
                      <p className="text-[11px] text-zinc-400">BSc Software Engineering · Haramaya</p>
                    </div>
                    <span className="text-[11px] font-mono text-blue-400 px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/50">
                      Open to Work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Attributes Strip below Hero */}
        <div className="mt-16 pt-8 border-t border-zinc-800/60 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
            <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Institution</p>
            <p className="text-sm font-semibold text-white mt-1">Haramaya University</p>
            <p className="text-xs text-zinc-400 mt-0.5">BSc Software Engineering</p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
            <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Certification</p>
            <p className="text-sm font-semibold text-white mt-1">ALX Africa</p>
            <p className="text-xs text-zinc-400 mt-0.5">Certified Virtual Assistant</p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
            <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Focus Areas</p>
            <p className="text-sm font-semibold text-white mt-1">Web Dev & AI Tech</p>
            <p className="text-xs text-zinc-400 mt-0.5">React · TypeScript · Python</p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
            <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Internship</p>
            <p className="text-sm font-semibold text-white mt-1">GlowUp ACS</p>
            <p className="text-xs text-zinc-400 mt-0.5">IT Support & Virtual Assistant</p>
          </div>
        </div>
      </div>
    </section>
  );
}
