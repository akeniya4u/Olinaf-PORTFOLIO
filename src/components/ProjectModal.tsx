import { useEffect } from 'react';
import { X, ExternalLink, Send, CheckCircle, Layers, Terminal } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl text-left"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 truncate mr-4">
            <span className="truncate">{project.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Main Visual */}
          <div className="w-full h-64 sm:h-80 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4">
              <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-colors shadow-sm shadow-blue-500/20"
            >
              <span>{project.buttonLabel}</span>
              {project.id === 'employee-attendance' ? (
                <Send className="w-3.5 h-3.5" />
              ) : (
                <ExternalLink className="w-3.5 h-3.5" />
              )}
            </a>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Overview
            </h3>
            <p className="text-base text-zinc-300 leading-relaxed whitespace-pre-line">
              {project.fullDescription}
            </p>
          </div>

          {/* Features to highlight */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                Features to Highlight
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-lg bg-zinc-950/60 border border-zinc-800/80 flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300"
                  >
                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Notes */}
          {project.architectureNotes && (
            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-900/40 text-xs sm:text-sm text-zinc-300 flex items-start gap-3">
              <Terminal className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-blue-300 block mb-0.5">Implementation Highlight</span>
                <span>{project.architectureNotes}</span>
              </div>
            </div>
          )}

          {/* Verified Technologies */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              <Layers className="w-4 h-4 text-blue-400" />
              <span>Verified Categories & Tags</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-zinc-800/80 border border-zinc-700/60 text-xs font-mono text-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end px-6 py-4 bg-zinc-900/95 border-t border-zinc-800">
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
