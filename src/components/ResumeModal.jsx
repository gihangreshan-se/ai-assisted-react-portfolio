import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/useTheme';
import confetti from 'canvas-confetti';
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  MapPin,
  Award,
  GraduationCap,
  Briefcase,
  Code
} from 'lucide-react';

export const ResumeModal = ({ onClose }) => {
  const { personalInfo, education, projects, certificates, volunteering } = portfolioData;
  const { showToast } = useTheme();

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

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
    showToast('Resume ready for download / printing!');
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl z-15 my-6 overflow-hidden animate-fade-in text-left">
        
        {/* Top Control Bar */}
        <div className="p-4 sm:px-6 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span className="ml-2 text-xs font-mono text-slate-300">
              {personalInfo.name.toLowerCase().replace(' ', '_')}_curriculum_vitae.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors ml-2"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-8 bg-slate-900 text-slate-200 print:text-black print:bg-white print:p-0">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 print:border-slate-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-extrabold text-white print:text-slate-900 tracking-tight">
                  {personalInfo.name}
                </h2>
                <p className="text-base font-semibold text-indigo-400 print:text-indigo-700 mt-0.5">
                  {personalInfo.role}
                </p>
              </div>

              <div className="space-y-1 text-xs font-mono text-slate-400 print:text-slate-600 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{personalInfo.location.split('(')[0]}</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-300 print:text-slate-700 mt-4 leading-relaxed">
              {personalInfo.bioSummary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-indigo-400 print:text-indigo-800 font-bold flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education & Honors
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="p-4 rounded-xl bg-slate-950/50 print:bg-slate-100 border border-slate-800 print:border-slate-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-white print:text-slate-900 text-sm">{edu.institution}</h4>
                      <p className="text-xs text-indigo-300 print:text-indigo-700 font-medium">{edu.degree}</p>
                    </div>
                    <span className="text-xs font-mono text-slate-400 print:text-slate-600">{edu.period}</span>
                  </div>
                  <p className="text-xs text-emerald-400 print:text-emerald-700 font-mono mt-1">GPA: {edu.gpa} • {edu.honors}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-indigo-400 print:text-indigo-800 font-bold flex items-center gap-2">
              <Code className="w-4 h-4" />
              Selected Engineering Projects
            </h3>
            <div className="space-y-3">
              {projects.slice(0, 3).map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-slate-950/50 print:bg-slate-100 border border-slate-800 print:border-slate-300">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-white print:text-slate-900 text-sm">{proj.title}</h4>
                    <span className="text-xs font-mono text-indigo-400">{proj.category}</span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-slate-700 mt-1">{proj.shortDesc}</p>
                  <p className="text-xs text-emerald-400 print:text-emerald-700 font-mono mt-1.5 font-semibold">
                    Key Impact: {proj.metrics}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {proj.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] bg-slate-800 print:bg-white text-slate-300 print:text-slate-800 border border-slate-700 print:border-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Leadership */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-indigo-400 print:text-indigo-800 font-bold flex items-center gap-2">
                <Award className="w-4 h-4" />
                Certifications
              </h3>
              <div className="space-y-2 text-xs">
                {certificates.slice(0, 4).map((c) => (
                  <div key={c.id} className="p-2.5 rounded-lg bg-slate-950/50 print:bg-slate-100 border border-slate-800 print:border-slate-300">
                    <span className="font-semibold text-white print:text-slate-900 block">{c.title}</span>
                    <span className="text-[11px] text-slate-400 print:text-slate-600 font-mono">{c.issuer} ({c.issueDate})</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-indigo-400 print:text-indigo-800 font-bold flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Volunteering & Community
              </h3>
              <div className="space-y-2 text-xs">
                {volunteering.map((v) => (
                  <div key={v.id} className="p-2.5 rounded-lg bg-slate-950/50 print:bg-slate-100 border border-slate-800 print:border-slate-300">
                    <span className="font-semibold text-white print:text-slate-900 block">{v.role}</span>
                    <span className="text-[11px] text-slate-400 print:text-slate-600 font-mono">{v.organization}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
