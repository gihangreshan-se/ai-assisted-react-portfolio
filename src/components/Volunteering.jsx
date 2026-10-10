import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  HeartHandshake,
  Users,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  Smile,
  ShieldCheck
} from 'lucide-react';

export const Volunteering = () => {
  const { volunteering } = portfolioData;

  return (
    <section id="volunteering" className="py-24 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-400 font-mono text-xs mb-4">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>04 // GIVING BACK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Volunteering & <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400">Leadership</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Empowering the tech ecosystem through community mentorship, diversity initiatives, and open-source civic engineering.
          </p>
        </div>

        {/* Volunteering Impact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {volunteering.map((item, idx) => (
            <div
              key={item.id}
              className="rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-rose-500/40 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-rose-950/30 group"
            >
              <div>
                {/* Header Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-rose-500/20 to-purple-500/20 border border-rose-500/30 text-rose-400 group-hover:scale-110 transition-transform">
                    {idx === 0 ? <Users className="w-6 h-6" /> : idx === 1 ? <ShieldCheck className="w-6 h-6" /> : <Smile className="w-6 h-6" />}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800/90 text-rose-300 border border-slate-700">
                    {item.badge}
                  </span>
                </div>

                {/* Role and Organization */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-rose-400 transition-colors">
                  {item.role}
                </h3>
                <p className="text-sm font-semibold text-slate-300 mb-3">
                  {item.organization}
                </p>

                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mb-5">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {item.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-pink-400" />
                    {item.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Impact Metrics Points */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-rose-400" />
                    Measurable Impact
                  </h4>
                  {item.impactPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg text-[11px] bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Community Testimonial Highlight */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-purple-950/40 border border-slate-800/80 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Interested in inviting me to speak, mentor, or judge a hackathon?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                I am always happy to support student initiatives, non-profits, and educational workshops.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-rose-600/20 whitespace-nowrap"
          >
            Request Mentorship / Talk
          </a>
        </div>

      </div>
    </section>
  );
};
