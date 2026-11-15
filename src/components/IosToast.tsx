import { Sparkles, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface IosToastProps {
  onOpenSummary: () => void;
}

export function IosToast({ onOpenSummary }: IosToastProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, []);

  if (dismissed) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed top-16 sm:top-20 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-6 z-40 w-[calc(100%-2rem)] max-w-sm transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border border-[#6C63FF]/15 rounded-[18px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-2.5 pl-3.5 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => {
            setDismissed(true);
            onOpenSummary();
          }}
          className="flex items-center gap-2.5 text-left flex-1 min-w-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF] rounded-[14px] py-0.5"
        >
          <span className="w-8 h-8 rounded-[12px] bg-[#E9E5FF] text-[#6C63FF] flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-xs font-bold text-[#2E2E3A] truncate">
              👋 Hi, I&apos;m Oyeshi — 60-sec summary?
            </p>
            <p className="text-[11px] font-medium text-[#6C63FF]">
              Tap for quick overview
            </p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss notification"
          className="w-8 h-8 rounded-[12px] inline-flex items-center justify-center text-[#5B5B6E] hover:text-[#2E2E3A] hover:bg-[#E9E5FF]/50 transition-colors shrink-0 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
