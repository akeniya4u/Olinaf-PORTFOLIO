import { GraduationCap, BookOpen, Compass, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Education() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 border-t border-zinc-800/80 bg-zinc-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Education
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3 mb-4" />
          <p className="text-zinc-400 text-base leading-relaxed">
            Rigorous undergraduate studies in software engineering, computing algorithms, and system design at one of Ethiopia's premier higher education institutions.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 hover:border-zinc-700 transition-all shadow-xl">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-zinc-800/80">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-mono text-blue-400 uppercase tracking-wide mb-2">
                <span>{education.location}</span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span>Undergraduate Degree</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {education.degree}
              </h3>
              <p className="text-lg font-medium text-zinc-300 mt-1">
                {education.institution}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-950/50 border border-blue-800/50 text-blue-400 text-xs font-mono shrink-0">
              <Award className="w-3.5 h-3.5" />
              <span>BSc Candidate</span>
            </div>
          </div>

          {/* Description */}
          <div className="py-6">
            <p className="text-base text-zinc-300 leading-relaxed max-w-4xl">
              {education.description}
            </p>
          </div>

          {/* Academic Focus & Core Subjects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-zinc-800/80">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-white mb-3">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>Core Engineering Coursework</span>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {education.keyAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-950/60 border border-zinc-800/80 text-xs text-zinc-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-white mb-3">
                <Compass className="w-4 h-4 text-blue-400" />
                <span>Academic Interests & Focus</span>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {education.academicFocus.map((focus, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-950/60 border border-zinc-800/80 text-xs text-zinc-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>{focus}</span>
                  </div>
                ))}
              </div>

              {/* Editable Academic Activities Placeholder */}
              <div className="mt-4 p-4 rounded-xl bg-zinc-950/40 border border-zinc-800/60 text-xs text-zinc-400">
                <span className="font-semibold text-zinc-300 block mb-1">Academic Activities & Collaboration</span>
                Active participation in peer code reviews, software lab demonstrations, and student-led environmental and technological workshops.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
