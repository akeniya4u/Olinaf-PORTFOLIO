import { useState } from 'react';
import { ExternalLink, ArrowRight, Sparkles, Layers, Send } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'ai' | 'web' | 'automation'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const { projects } = PORTFOLIO_DATA;

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'ai') return project.id === 'injerafit';
    if (selectedFilter === 'web') return project.id === 'visit-harar';
    if (selectedFilter === 'automation') return project.id === 'employee-attendance';
    return true;
  });

  return (
    <section id="projects" className="py-24 border-t border-zinc-800/80 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineered Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Featured Projects
            </h2>
            <div className="w-12 h-1 bg-blue-500 rounded-full mt-3 mb-4" />
            <p className="text-zinc-400 text-base leading-relaxed">
              Explore key digital solutions, web applications, and AI integrations designed to solve tangible everyday problems.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-xl overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setSelectedFilter('ai')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedFilter === 'ai'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              InjeraFIT (AI)
            </button>
            <button
              onClick={() => setSelectedFilter('web')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedFilter === 'web'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              Visit Harar (Web)
            </button>
            <button
              onClick={() => setSelectedFilter('automation')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedFilter === 'automation'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              Attendance (Bot)
            </button>
          </div>
        </div>

        {/* Responsive Projects Grid: 3 Clean Featured Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-2xl bg-zinc-900/60 border border-zinc-800/90 hover:border-blue-500/40 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-950/20"
            >
              {/* Media Container with Website / Bot Preview */}
              <div
                className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950 cursor-pointer"
                onClick={() => setActiveProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

                {/* Top overlay unboxed category badge */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-medium text-blue-300 bg-zinc-950/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-zinc-800">
                    {project.category.split('|')[0].trim()}
                  </span>
                  <span className="text-[11px] font-mono font-medium text-emerald-400 bg-zinc-950/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-emerald-900/40">
                    Live
                  </span>
                </div>

                {/* Hover trigger hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-950/40 backdrop-blur-[2px]">
                  <span className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold shadow-lg">
                    View Project Details
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  {/* Clean unboxed category metadata with separator */}
                  <div className="text-xs text-blue-400 font-mono">
                    <span>{project.category}</span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => setActiveProject(project)}
                    className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-zinc-800/80">
                  {/* Verified Technology Tags */}
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <Layers className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-zinc-950 text-zinc-300 text-[11px] font-mono border border-zinc-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between gap-3 pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-colors shadow-sm shadow-blue-500/20"
                    >
                      <span>{project.buttonLabel}</span>
                      {project.id === 'employee-attendance' ? (
                        <Send className="w-3.5 h-3.5" />
                      ) : (
                        <ExternalLink className="w-3.5 h-3.5" />
                      )}
                    </a>

                    <button
                      onClick={() => setActiveProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-400 hover:text-blue-400 transition-colors py-2 cursor-pointer"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
