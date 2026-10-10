import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  ExternalLink,
  ShieldCheck,
  CheckCircle,
  Cloud,
  Server,
  Code,
  Box,
  Cpu,
  Layers,
  X,
  Search
} from 'lucide-react';

export const Certificates = () => {
  const { certificates } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);
  const [searchCert, setSearchCert] = useState('');

  const getCertIcon = (iconName) => {
    switch (iconName) {
      case 'Cloud': return <Cloud className="w-6 h-6 text-amber-400" />;
      case 'Server': return <Server className="w-6 h-6 text-blue-400" />;
      case 'Code': return <Code className="w-6 h-6 text-sky-400" />;
      case 'Box': return <Box className="w-6 h-6 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-purple-400" />;
      default: return <Layers className="w-6 h-6 text-violet-400" />;
    }
  };

  const filteredCerts = certificates.filter(
    (c) =>
      c.title.toLowerCase().includes(searchCert.toLowerCase()) ||
      c.issuer.toLowerCase().includes(searchCert.toLowerCase()) ||
      c.skills.some((s) => s.toLowerCase().includes(searchCert.toLowerCase()))
  );

  return (
    <section id="certificates" className="py-24 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>05 // INDUSTRY ACCREDITATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400">Certificates</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Certified technical competencies verified by industry-leading cloud providers, institutions, and platforms.
          </p>
        </div>

        {/* Search filter */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchCert}
              onChange={(e) => setSearchCert(e.target.value)}
              placeholder="Filter certificates by issuer or topic..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
            />
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-950/30 group"
            >
              <div>
                {/* Header Icon & Issuer */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 transition-transform">
                    {getCertIcon(cert.icon)}
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/50 px-2.5 py-1 rounded-full border border-emerald-800/50">
                    <CheckCircle className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-slate-300 mb-3">
                  {cert.issuer}
                </p>

                {/* Dates & Credential ID */}
                <div className="space-y-1 text-xs font-mono text-slate-400 mb-4 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Issued:</span>
                    <span className="text-slate-300">{cert.issueDate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Validity:</span>
                    <span className="text-slate-300">{cert.validUntil}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-800/80">
                    <span className="text-slate-400">ID:</span>
                    <span className="text-cyan-400 truncate max-w-[150px]">{cert.credentialId}</span>
                  </div>
                </div>

                {/* Validated Skills */}
                <div className="mb-6">
                  <span className="text-[11px] font-mono text-slate-400 block mb-2">Key Competencies:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md text-[11px] bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-800 hover:bg-cyan-600/20 text-slate-300 hover:text-cyan-300 text-xs font-semibold border border-slate-700/80 hover:border-cyan-500/50 transition-all"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  View Credential Details
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Verification Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <div
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
              onClick={() => setSelectedCert(null)}
            />

            <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-cyan-500/30 shadow-2xl p-6 sm:p-8 z-10 animate-fade-in text-left">
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">Official Credential</span>
                  <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
                </div>
              </div>

              <div className="space-y-4 mb-6 text-sm">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Issuing Organization:</span>
                    <span className="text-white font-semibold">{selectedCert.issuer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Credential ID:</span>
                    <span className="text-cyan-400">{selectedCert.credentialId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Issue Date:</span>
                    <span className="text-slate-200">{selectedCert.issueDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Status:</span>
                    <span className="text-emerald-400 font-bold">Active & Verified</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-2">Assessed Domain Skills:</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg text-xs bg-slate-800 text-slate-200 border border-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
                >
                  Close
                </button>
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-md shadow-cyan-600/30"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Verify on Issuer Portal
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
