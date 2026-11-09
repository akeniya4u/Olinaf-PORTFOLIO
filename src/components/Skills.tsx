import { Code, Cpu, Briefcase, Palette, Terminal, Sparkles, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Programming and Web Development':
        return <Code className="w-5 h-5 text-blue-400" />;
      case 'AI and Automation':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'Virtual Assistance and Productivity':
        return <Briefcase className="w-5 h-5 text-blue-400" />;
      case 'Design and Content':
        return <Palette className="w-5 h-5 text-blue-400" />;
      default:
        return <Terminal className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 border-t border-zinc-800/80 bg-zinc-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Technical & Professional Skills
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3 mb-4" />
          <p className="text-zinc-400 text-base leading-relaxed">
            Core toolsets, programming stacks, automation workflows, and administrative proficiencies cultivated through university engineering and professional training.
          </p>
        </div>

        {/* 4-Column / Responsive Grid for Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category) => (
            <div
              key={category.name}
              className="p-7 rounded-2xl bg-zinc-900/50 border border-zinc-800/90 hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    {getCategoryIcon(category.name)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {category.name}
                    </h3>
                    <p className="text-xs text-zinc-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill List items */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 hover:border-blue-500/30 hover:bg-zinc-950 transition-all"
                    >
                      <div className="w-4 h-4 rounded-full bg-blue-950/70 border border-blue-800/60 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-blue-400" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subdued Category Footer */}
              <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                <span>Verified Competencies</span>
                <span className="text-blue-400/80">{category.skills.length} skills listed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
