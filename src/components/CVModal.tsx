import { useEffect } from 'react';
import { X, Printer, Download, MapPin, Mail, ExternalLink, GraduationCap, Briefcase, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  const { personal, education, experiences, skills, projects, certifications } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl text-left"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
      >
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800 no-print">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span id="cv-modal-title" className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
              Curriculum Vitae — {personal.fullName}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Close CV preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div className="p-6 sm:p-12 bg-zinc-950 text-zinc-100 space-y-8 font-sans">
          {/* Header */}
          <div className="border-b border-zinc-800 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {personal.fullName}
              </h1>
              <p className="text-base text-blue-400 font-medium mt-1">
                {personal.title}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 mt-3 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  {personal.location} · {personal.university}
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  {personal.email}
                </span>
              </div>
            </div>

            <div className="text-right text-xs text-zinc-400 font-mono hidden sm:block">
              <span>Haramaya University</span>
              <p className="text-blue-400 font-semibold mt-0.5">BSc Software Engineering</p>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
              Professional Summary
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Software Engineering undergraduate at Haramaya University, Ethiopia, focused on building practical digital solutions through web application development, artificial intelligence tools, and workflow automation. Certified by ALX Africa in Virtual Assistance and actively engaged in national environmental and community leadership.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <div className="flex flex-wrap justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold text-white">{education.degree}</h3>
                  <p className="text-xs text-zinc-300">{education.institution} — {education.location}</p>
                </div>
                <span className="text-xs font-mono text-blue-400">Undergraduate Degree</span>
              </div>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                {education.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {education.keyAreas.map((subj, i) => (
                  <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-950 text-zinc-300 border border-zinc-800">
                    {subj}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
              Technical & Professional Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((cat) => (
                <div key={cat.name} className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800 text-xs">
                  <p className="font-semibold text-white mb-2">{cat.name}</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {cat.skills.map((s) => s.name).join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
              Featured Projects
            </h2>
            <div className="space-y-3">
              {projects.map((p) => (
                <div key={p.id} className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="flex flex-wrap justify-between items-center gap-1">
                    <h3 className="text-sm font-bold text-white">{p.title}</h3>
                    <span className="text-[11px] font-mono text-zinc-400">{p.category}</span>
                  </div>
                  <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                    {p.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Community */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Experience & Community Leadership</span>
            </h2>
            <div className="space-y-3">
              {experiences.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-bold text-white">{exp.role}</h3>
                      <p className="text-xs text-zinc-300">
                        {exp.organization} {exp.location ? `· ${exp.location}` : ''} {exp.workplaceType ? `(${exp.workplaceType})` : ''}
                      </p>
                      {exp.period && (
                        <p className="text-[11px] text-zinc-400 font-mono mt-0.5">
                          {exp.period} {exp.duration ? `· ${exp.duration}` : ''}
                        </p>
                      )}
                    </div>
                    <span className="text-xs font-mono text-blue-400">{exp.employmentType || exp.type}</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-2">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Certifications</span>
            </h2>
            {certifications.map((cert) => (
              <div key={cert.id} className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-white">{cert.title}</h3>
                  <p className="text-[11px] text-zinc-400">{cert.organization}</p>
                </div>
                <span className="text-[11px] font-mono text-emerald-400">Verified</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center px-6 py-4 bg-zinc-900/95 border-t border-zinc-800 no-print">
          <span className="text-xs text-zinc-500 font-mono">
            {personal.fullName} · {personal.location}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
