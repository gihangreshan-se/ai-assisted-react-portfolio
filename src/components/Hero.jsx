import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/useTheme';
import confetti from 'canvas-confetti';
import {
  ArrowDown,
  Download,
  Mail,
  Zap,
  Briefcase,
  Users,
  GitCommit,
  FolderGit2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export const Hero = ({ onOpenResume }) => {
  const { personalInfo } = portfolioData;
  const { showToast } = useTheme();

  // Dynamic rotating tagline
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTagline = personalInfo.taglines[taglineIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentTagline.substring(0, displayedText.length + 1));
        if (displayedText.length === currentTagline.length) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentTagline.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setTaglineIndex((prev) => (prev + 1) % personalInfo.taglines.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, taglineIndex, personalInfo.taglines]);

  const handleDownloadCV = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });
    showToast('Opening Resume Preview & Download Options!');
    onOpenResume();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    showToast('Email copied to clipboard!');
  };

  const getStatIcon = (label) => {
    if (label.includes('Experience')) return <Briefcase className="w-5 h-5 text-indigo-400" />;
    if (label.includes('Projects')) return <FolderGit2 className="w-5 h-5 text-purple-400" />;
    if (label.includes('Users')) return <Users className="w-5 h-5 text-sky-400" />;
    return <GitCommit className="w-5 h-5 text-emerald-400" />;
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-sm">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.availabilityBadge}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400 hidden sm:inline">San Francisco & Remote</span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-4">
              Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">{personalInfo.name}</span>
            </h1>

            {/* Dynamic Animated Subtitle */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-xl sm:text-2xl font-mono text-slate-300 flex items-center">
                <span className="text-indigo-400 mr-2">&gt;</span>
                {displayedText}
                <span className="inline-block w-2.5 h-6 bg-indigo-400 ml-1 animate-pulse"></span>
              </span>
            </div>

            {/* Bio Summary */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
              {personalInfo.bioSummary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all transform hover:-translate-y-0.5"
              >
                <Zap className="w-4 h-4 fill-white" />
                Explore Projects
              </a>

              <button
                onClick={handleDownloadCV}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-indigo-500/50 transition-all transform hover:-translate-y-0.5 shadow-md"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                Resume / CV
              </button>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/40 hover:bg-slate-800/80 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 transition-all hover:-translate-y-0.5"
              >
                Let’s Talk
              </a>
            </div>

            {/* Social Links & Email quick copy */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono mr-1">Find me on:</span>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-indigo-600/20 text-slate-300 hover:text-white border border-slate-800 hover:border-indigo-500/40 transition-all hover:scale-105"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-indigo-600/20 text-slate-300 hover:text-white border border-slate-800 hover:border-indigo-500/40 transition-all hover:scale-105"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-indigo-600/20 text-slate-300 hover:text-white border border-slate-800 hover:border-indigo-500/40 transition-all hover:scale-105"
                title="Twitter/X Profile"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>

              <button
                onClick={copyEmail}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/80 hover:bg-indigo-600/20 text-slate-300 hover:text-white border border-slate-800 hover:border-indigo-500/40 transition-all hover:scale-102 text-xs"
                title="Copy Email Address"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>{personalInfo.email}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Card & Tech Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative back glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 animate-pulse-subtle"></div>

              {/* Main Profile Glass Box */}
              <div className="relative rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-xl p-6 sm:p-7 shadow-2xl overflow-hidden">
                {/* Code Window Header Decoration */}
                <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    <span className="ml-2 font-mono text-xs text-slate-400">engineer_profile.ts</span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-800/50">
                    v2.5 (React 19)
                  </span>
                </div>

                {/* Profile Avatar & Intro */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl object-cover ring-2 ring-indigo-500/40 shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 p-1 bg-slate-900 rounded-full">
                      <div className="w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-900 animate-pulse"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
                    <p className="text-xs text-indigo-400 font-mono">{personalInfo.role}</p>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                      <span>📍</span> {personalInfo.location.split('(')[0]}
                    </p>
                  </div>
                </div>

                {/* Quick Interactive Terminal Mockup */}
                <div className="rounded-xl bg-slate-950/90 border border-slate-800/80 p-3.5 font-mono text-xs text-slate-300 mb-6 space-y-1.5 shadow-inner">
                  <div className="text-slate-400">// Primary Focus Areas</div>
                  <div className="flex items-center text-emerald-400">
                    <span className="text-indigo-400 mr-2">$</span> current_stack = [
                  </div>
                  <div className="pl-6 text-slate-200">
                    <span className="text-purple-300">"React 19"</span>, <span className="text-purple-300">"TypeScript"</span>, <span className="text-purple-300">"Next.js"</span>,
                  </div>
                  <div className="pl-6 text-slate-200">
                    <span className="text-purple-300">"Docker"</span>, <span className="text-purple-300">"Python FastAPI"</span>, <span className="text-purple-300">"AWS"</span>
                  </div>
                  <div className="text-emerald-400">];</div>
                  <div className="text-slate-400 pt-1">// Ready to build exceptional software</div>
                </div>

                {/* Floating Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {['React 19', 'TypeScript', 'Tailwind', 'Node.js', 'FastAPI', 'Docker', 'PostgreSQL', 'CI/CD'].map((badge) => (
                    <span
                      key={badge}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:border-indigo-500/50 hover:text-white transition-all cursor-default"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Highlight Stats Grid */}
        <div className="mt-16 pt-8 border-t border-slate-800/70 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {personalInfo.stats.map((stat) => (
            <div
              key={stat.id}
              className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-indigo-500/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-indigo-400 transition-colors">
                  {stat.value}
                </span>
                <div className="p-2 rounded-xl bg-slate-800/80 group-hover:bg-indigo-600/20 transition-colors">
                  {getStatIcon(stat.label)}
                </div>
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-slate-200">{stat.label}</h4>
              <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">{stat.detail}</p>
            </div>
          ))}
        </div>

        {/* Scroll down indicator */}
        <div className="flex justify-center mt-12">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-indigo-400 transition-colors group"
          >
            <span>DISCOVER MORE</span>
            <div className="p-1.5 rounded-full border border-slate-700 group-hover:border-indigo-400 transition-colors animate-bounce">
              <ArrowDown className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
