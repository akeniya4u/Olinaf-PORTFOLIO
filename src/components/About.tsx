import { Code2, Cpu, Globe, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function About() {
  const { personal } = PORTFOLIO_DATA;

  const cardIcons = [
    <GraduationIcon key="grad" />,
    <WebIcon key="web" />,
    <AIIcon key="ai" />
  ];

  return (
    <section id="about" className="py-24 border-t border-zinc-800/80 bg-zinc-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-3">
            <span>Identity & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            About Me
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 leading-relaxed text-base sm:text-lg font-normal">
            {personal.aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="text-zinc-300">
                {paragraph}
              </p>
            ))}

            {/* Additional background highlights */}
            <div className="pt-6 border-t border-zinc-800/80 mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4">
                Core Competencies & Background
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-300">
                {personal.additionalBackground.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Three Key Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {personal.infoCards.map((card, idx) => (
              <div
                key={card.title}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-blue-500/40 transition-all group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                    {cardIcons[idx]}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GraduationIcon() {
  return <Code2 className="w-5 h-5" />;
}

function WebIcon() {
  return <Globe className="w-5 h-5" />;
}

function AIIcon() {
  return <Cpu className="w-5 h-5" />;
}
