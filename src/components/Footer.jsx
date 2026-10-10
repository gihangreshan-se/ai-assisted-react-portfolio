import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/useTheme';
import confetti from 'canvas-confetti';
import {
  Terminal,
  ArrowUp,
  Mail,
  Sparkles,
  Send,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

const currentYear = new Date().getFullYear();

export const Footer = () => {
  const { personalInfo } = portfolioData;
  const { showToast } = useTheme();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }
    setIsSubscribed(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.85 }
    });
    showToast('Subscribed! Thank you for staying connected.');
    setNewsletterEmail('');
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800/80 overflow-hidden">
      {/* Decorative gradient light bloom */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Action Bar: Callout & Back to Top */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-12 mb-12 border-b border-slate-800/80 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-indigo-600/20">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <span className="text-white font-mono font-bold text-lg">
                Alex Morgan<span className="text-indigo-400">.dev</span>
              </span>
              <p className="text-xs text-slate-400">
                Architecting next-generation distributed software & user interfaces.
              </p>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 text-slate-300 hover:text-white transition-all hover:-translate-y-0.5 shadow-lg text-xs font-semibold"
          >
            <span>Back to top</span>
            <div className="p-1 rounded-lg bg-slate-800 group-hover:bg-indigo-600 transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        {/* 4-Column Grid: Brand, Navigation, Featured Projects, Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
          
          {/* Col 1: Bio & Status (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-sm text-slate-400 leading-relaxed">
              Always eager to discuss distributed systems, modern web architectures, open-source initiatives, and new engineering challenges.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-xl border border-emerald-800/40 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for new projects & full-time roles</span>
            </div>

            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-indigo-600/20 text-slate-400 hover:text-white border border-slate-800 hover:border-indigo-500/40 transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-indigo-600/20 text-slate-400 hover:text-white border border-slate-800 hover:border-indigo-500/40 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-indigo-600/20 text-slate-400 hover:text-white border border-slate-800 hover:border-indigo-500/40 transition-colors"
                title="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-indigo-600/20 text-slate-400 hover:text-white border border-slate-800 hover:border-indigo-500/40 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Site Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#education" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Education & Honors
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#volunteering" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Volunteering & Impact
                </a>
              </li>
              <li>
                <a href="#certificates" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Selected Case Studies (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Highlighted Work
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition-colors block">
                  <span className="text-white font-medium">NexusCloud</span>
                  <span className="block text-[11px] text-slate-500">Real-time telemetry & metrics</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition-colors block">
                  <span className="text-white font-medium">SynthMind</span>
                  <span className="block text-[11px] text-slate-500">Autonomous multi-agent suite</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition-colors block">
                  <span className="text-white font-medium">PulseFlow</span>
                  <span className="block text-[11px] text-slate-500">Collaborative canvas studio</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition-colors block">
                  <span className="text-white font-medium">HyperPay</span>
                  <span className="block text-[11px] text-slate-500">Global merchant checkout</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Updates (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              Stay In Touch
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Receive occasional updates on new open-source libraries, deep-dive technical articles, and project releases.
            </p>

            {isSubscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/50 border border-emerald-800/60 text-emerald-300 text-xs">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>You’re subscribed! Thanks for joining.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-slate-400 block">No spam. Unsubscribe anytime.</span>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Tech Watermark */}
        <div className="pt-8 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-1.5">
            <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              Built with React 19 & Tailwind CSS
            </span>
            <span>•</span>
            <span className="text-indigo-400 flex items-center gap-1">
              Designed for High Performance
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
