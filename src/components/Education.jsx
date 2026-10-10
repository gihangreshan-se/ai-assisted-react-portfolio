import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Sparkles
} from 'lucide-react';

export const Education = () => {
  const { education } = portfolioData;
  const [expandedId, setExpandedId] = useState('edu-1');

  return (
    <section id="education" className="py-24 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 font-mono text-xs mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>02 // FORMAL TRAINING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">Academics</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Strong foundational computer science theory paired with modern distributed systems research and practical engineering.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className={`relative rounded-3xl transition-all duration-300 border overflow-hidden ${
                  isExpanded
                    ? 'bg-slate-900/80 border-indigo-500/40 shadow-2xl shadow-indigo-950/50'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                } backdrop-blur-xl`}
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="p-6 sm:p-8">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-indigo-600/20">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                          {item.institution}
                        </h3>
                        <p className="text-sm sm:text-base font-semibold text-indigo-400 mt-1">
                          {item.degree}
                        </p>
                      </div>
                    </div>

                    {/* Metadata Pills */}
                    <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">
                        <MapPin className="w-3.5 h-3.5 text-pink-400" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Honors & GPA Banner */}
                  <div className="flex flex-wrap items-center gap-3 py-2.5 px-4 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                      <Award className="w-4 h-4" />
                      <span>GPA: {item.gpa}</span>
                    </div>
                    <span className="text-slate-600">•</span>
                    <div className="flex items-center gap-1.5 text-xs text-amber-300 font-medium">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{item.honors}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Expandable Coursework & Highlights Section */}
                  <div>
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                      className="flex items-center gap-2 text-xs font-mono text-indigo-400 hover:text-indigo-300 font-semibold mb-4 transition-colors"
                    >
                      <span>{isExpanded ? 'Hide Coursework & Honors' : 'Show Coursework & Honors'}</span>
                      <ChevronDown
                        className={`w-4 h-4 transform transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="space-y-6 pt-2 border-t border-slate-800 animate-fade-in">
                        {/* Coursework list */}
                        <div>
                          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-3">
                            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                            Relevant Advanced Coursework
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.coursework.map((course, cIdx) => (
                              <span
                                key={cIdx}
                                className="px-3 py-1 rounded-lg text-xs bg-slate-800/90 text-slate-200 border border-slate-700/80 hover:border-indigo-500/40 transition-colors"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Highlights list */}
                        <div>
                          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-3">
                            <Award className="w-3.5 h-3.5 text-purple-400" />
                            Key Achievements & Capstone
                          </h4>
                          <div className="space-y-2">
                            {item.highlights.map((highlight, hIdx) => (
                              <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
