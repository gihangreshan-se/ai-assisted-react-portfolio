import React from 'react';
import { useTheme } from '../context/useTheme';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export const Toast = () => {
  const { toast, setToast } = useTheme();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl backdrop-blur-xl border border-indigo-500/30 bg-slate-900/90 text-white max-w-sm">
      {toast.type === 'error' ? (
        <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
      ) : (
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
      )}
      <p className="text-sm font-medium pr-2">{toast.message}</p>
      <button
        onClick={() => setToast(null)}
        className="ml-auto text-slate-400 hover:text-white transition-colors p-1"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
