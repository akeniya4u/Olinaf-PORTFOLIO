import { Briefcase, Laptop, Recycle, CheckCircle2, Calendar, MapPin, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Experience() {
  const { experiences } = PORTFOLIO_DATA;

  const getRoleIcon = (type: string) => {
    switch (type) {
      case 'Internship':
        return <Laptop className="w-4 h-4 text-blue-400" />;
      case 'Professional':
        return <Briefcase className="w-4 h-4 text-blue-400" />;
      case 'Community':
        return <Recycle className="w-4 h-4 text-teal-400" />;
      default:
        return <Briefcase className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="experience" className="py-24 border-t border-zinc-800/80 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-3">
            <span>Work & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Experience & Activities
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3 mb-4" />
          <p className="text-zinc-400 text-base leading-relaxed">
            Professional experience in virtual assistance and IT operations support, supplemented by certified vocational training and community environmental volunteering.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-zinc-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center group-hover:border-blue-500 transition-colors shadow-md">
                {getRoleIcon(exp.type)}
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 hover:border-zinc-700 transition-all">
                {/* Meta header: Type, dates, duration, location */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="font-semibold text-blue-400 uppercase tracking-wide">
                      {exp.employmentType || exp.type}
                    </span>
                    {exp.workplaceType && (
                      <>
                        <span aria-hidden="true" className="text-zinc-600">·</span>
                        <span className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-900/40 text-blue-300 text-[11px]">
                          {exp.workplaceType}
                        </span>
                      </>
                    )}
                    {exp.period && (
                      <>
                        <span aria-hidden="true" className="text-zinc-600">·</span>
                        <span className="text-zinc-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-zinc-500" />
                          <span>{exp.period}</span>
                          {exp.duration && <span className="text-zinc-500">({exp.duration})</span>}
                        </span>
                      </>
                    )}
                  </div>

                  {exp.location && (
                    <div className="flex items-center gap-1 text-xs text-zinc-400 font-mono">
                      <MapPin className="w-3 h-3 text-blue-400 shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>

                {/* Role and Organization */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {exp.role}
                </h3>
                <h4 className="text-sm font-semibold text-zinc-300 mb-1">
                  {exp.organization}
                </h4>
                {exp.roleTitle && (
                  <p className="text-xs text-blue-400/90 font-mono mb-4">
                    {exp.roleTitle}
                  </p>
                )}

                {/* Description */}
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <div className="space-y-2 pt-4 border-t border-zinc-800/80">
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                      Key Responsibilities & Activities
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs sm:text-sm text-zinc-300">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Associated Skills */}
                {exp.skills && exp.skills.length > 0 && (
                  <div className="pt-4 border-t border-zinc-800/80 mt-4">
                    <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-2">
                      <Layers className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span className="font-semibold uppercase tracking-wider text-zinc-400 text-[11px]">
                        Associated Skills
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-lg bg-zinc-950 text-zinc-300 text-xs font-mono border border-zinc-800/90"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
