import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/useTheme';
import {
  User,
  Zap,
  Layers,
  Heart,
  Cpu,
  Layout,
  Server,
  Cloud,
  Brain,
  Coffee,
  Award,
  Activity,
  BookOpen,
  Copy,
  Check,
  Sparkles
} from 'lucide-react';

export const About = () => {
  const { about, personalInfo } = portfolioData;
  const { showToast } = useTheme();
  const [activeTab, setActiveTab] = useState('journey');
  const [copiedBio, setCopiedBio] = useState(false);

  const tabs = [
    { id: 'journey', label: 'My Journey', icon: User },
    { id: 'stack', label: 'Tech Stack & Skills', icon: Cpu },
    { id: 'values', label: 'Engineering Philosophy', icon: Sparkles },
    { id: 'beyond', label: 'Beyond Code', icon: Coffee }
  ];

  const getCoreValueIcon = (iconName) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'Heart': return <Heart className="w-5 h-5 text-pink-400" />;
      default: return <Cpu className="w-5 h-5 text-purple-400" />;
    }
  };

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-5 h-5 text-indigo-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-sky-400" />;
      default: return <Brain className="w-5 h-5 text-purple-400" />;
    }
  };

  const getFunFactIcon = (iconName) => {
    switch (iconName) {
      case 'Coffee': return <Coffee className="w-5 h-5 text-amber-400" />;
      case 'Award': return <Award className="w-5 h-5 text-yellow-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-rose-400" />;
      default: return <BookOpen className="w-5 h-5 text-indigo-400" />;
    }
  };

  const handleCopyBio = () => {
    const fullBio = about.story.join('\n\n');
    navigator.clipboard.writeText(fullBio);
    setCopiedBio(true);
    showToast('Professional bio copied to clipboard!');
    setTimeout(() => setCopiedBio(false), 2500);
  };

  return (
    <section id="about" className="py-24 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 font-mono text-xs mb-4">
            <span>01 // BACKGROUND & EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Me</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering robust applications with deliberate craftsmanship, curiosity, and relentless attention to detail.
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-lg">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/30 scale-102'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Panes */}
        <div className="max-w-5xl mx-auto">
          
          {/* TAB 1: My Journey */}
          {activeTab === 'journey' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start animate-fade-in">
              <div className="md:col-span-4 flex flex-col items-center">
                <div className="relative group w-full max-w-xs">
                  <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-300"></div>
                  <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 shadow-xl">
                    <img
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <div className="text-white font-bold text-base">{personalInfo.name}</div>
                      <div className="text-xs text-indigo-400 font-mono">{personalInfo.role}</div>
                      <div className="text-[11px] text-slate-300 mt-1">📍 San Francisco, CA</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyBio}
                  className="mt-4 flex items-center gap-2 text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-slate-800 hover:bg-slate-800 transition-colors"
                >
                  {copiedBio ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedBio ? 'Bio Copied!' : 'Copy Short Bio'}
                </button>
              </div>

              <div className="md:col-span-8 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Building software that stands the test of scale & simplicity
                </h3>
                {about.story.map((paragraph, idx) => (
                  <p key={idx} className="text-slate-300">
                    {paragraph}
                  </p>
                ))}

                <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-400"></span> Primary Focus: React & Distributed Systems
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span> Location: San Francisco, CA (Remote Friendly)
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Tech Stack & Skills */}
          {activeTab === 'stack' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
              {about.techCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-md hover:border-indigo-500/40 transition-all duration-300 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700/60">
                      {getCategoryIcon(cat.icon)}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">{cat.category}</h4>
                      <p className="text-xs text-slate-400 font-mono">Core Tooling & Competencies</p>
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx}>
                        <div className="flex justify-between items-center text-xs mb-1">
                          <span className="font-medium text-slate-200">{skill.name}</span>
                          <span className="font-mono text-indigo-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-800/90 overflow-hidden border border-slate-700/40">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: Core Philosophy & Values */}
          {activeTab === 'values' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in">
              {about.coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-md hover:border-indigo-500/40 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-slate-800/80 inline-block mb-4 border border-slate-700/60 group-hover:scale-110 transition-transform">
                    {getCoreValueIcon(val.icon)}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {val.title}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: Beyond Code */}
          {activeTab === 'beyond' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {about.funFacts.map((fact, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-md hover:border-purple-500/40 transition-all flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-slate-800/80 shrink-0 border border-slate-700">
                      {getFunFactIcon(fact.icon)}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">{fact.label}</h4>
                      <p className="text-sm text-slate-300">{fact.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote card */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 to-purple-950/40 border border-indigo-800/40 backdrop-blur-md text-center">
                <p className="text-slate-200 italic text-sm sm:text-base max-w-2xl mx-auto">
                  “The best code is not just performant and bug-free, but understandable to human collaborators and built with genuine empathy for the end user.”
                </p>
                <span className="block text-xs font-mono text-indigo-400 mt-3">— Engineering Motto</span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
