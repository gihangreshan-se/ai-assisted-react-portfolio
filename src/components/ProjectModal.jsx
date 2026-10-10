import React, { useEffect } from 'react';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl shadow-black/80 overflow-hidden z-10 my-8 animate-fade-in">
        {/* Header Image & Badges */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/80 text-white hover:bg-slate-800 border border-slate-700 transition-colors shadow-lg"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category & Status */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-600/90 text-white backdrop-blur-md border border-indigo-400/40 shadow-sm">
              {project.category}
            </span>
            {project.featured && (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/90 text-slate-950 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Project
              </span>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[calc(85vh-18rem)] overflow-y-auto space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.shortDesc}
            </p>
          </div>

          {/* Key Metrics Banner */}
          <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-indigo-400 shrink-0" />
            <div className="text-xs sm:text-sm text-indigo-200">
              <span className="font-semibold text-white">Impact: </span>
              {project.metrics}
            </div>
          </div>

          {/* Detailed Case Study */}
          {project.caseStudy && (
            <div className="space-y-5 pt-2">
              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  The Problem & Motivation
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                  {project.caseStudy.problem}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-2">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  The Engineering Solution
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                  {project.caseStudy.solution}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-2">
                  <Layers className="w-4 h-4 text-purple-400" />
                  Architecture & Technologies
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-slate-800 font-mono text-xs">
                  {project.caseStudy.architecture}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  Key Results & Outcomes
                </h4>
                <div className="space-y-2">
                  {project.caseStudy.keyResults.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-950/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close Window
          </button>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-medium border border-slate-700 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              Source Code
            </a>

            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-indigo-600/30 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Launch Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
