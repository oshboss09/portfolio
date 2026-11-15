import { ArrowRight, FileText, X } from 'lucide-react';
import { useEffect } from 'react';
import { PROFILE } from '../data/portfolio';
import { RippleButton } from './Ripple';

interface SummaryModalProps {
  open: boolean;
  onClose: () => void;
  onOpenCv: () => void;
}

export function SummaryModal({ open, onClose, onOpenCv }: SummaryModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="summary-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2E2E3A]/35 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-white border border-[#6C63FF]/15 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#6C63FF]/12">
          <div>
            <p className="text-xs font-bold text-[#6C63FF]">60-Second Summary</p>
            <h3
              id="summary-modal-title"
              className="font-serif text-2xl font-bold text-[#2E2E3A] mt-0.5"
            >
              {PROFILE.name}
            </h3>
            <p className="text-xs font-medium text-[#5B5B6E] mt-0.5">
              {PROFILE.role} · {PROFILE.location}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close summary"
            className="w-9 h-9 rounded-[14px] inline-flex items-center justify-center text-[#5B5B6E] hover:text-[#2E2E3A] hover:bg-[#E9E5FF]/50 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5 space-y-4 text-sm text-[#5B5B6E] leading-relaxed">
          <div className="grid grid-cols-3 gap-2.5 text-center">
            <div className="bg-[#E9E5FF] rounded-[16px] p-3">
              <p className="font-serif text-xl font-bold text-[#2E2E3A]">20K</p>
              <p className="text-[11px] font-medium text-[#5B5B6E]">BelleVie Users</p>
            </div>
            <div className="bg-[#DFF7EE] rounded-[16px] p-3">
              <p className="font-serif text-xl font-bold text-[#2E2E3A]">300K</p>
              <p className="text-[11px] font-medium text-[#5B5B6E]">DAU Scaled</p>
            </div>
            <div className="bg-[#FFE8DC] rounded-[16px] p-3">
              <p className="font-serif text-xl font-bold text-[#2E2E3A]">55+</p>
              <p className="text-[11px] font-medium text-[#5B5B6E]">CRs Delivered</p>
            </div>
          </div>

          <p>
            <span className="font-bold text-[#2E2E3A]">Now:</span> Product Owner at{' '}
            <span className="font-semibold text-[#2E2E3A]">Lodha Group</span>, owning BelleVie
            (20K customers) and its Salesforce CRM &amp; SAP integrations — lifting engagement from
            17.7% to 48.8% and driving 92% Bangalore launch adoption.
          </p>

          <p>
            <span className="font-bold text-[#2E2E3A]">Before:</span> Product Manager at{' '}
            <span className="font-semibold text-[#2E2E3A]">Jio Platforms</span> — scaled facial-recognition
            attendance to 300K DAU (+97% verification, NPS 100) and cut network inventory capture from
            ~20,000 to 71 man-days.
          </p>

          <p>
            <span className="font-bold text-[#2E2E3A]">AI &amp; GIS Edge:</span> Prototyped a 0→1
            Assessment Portal in Google AI Studio and holds an MSc in GIS (University of Leeds).
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-[#6C63FF]/12 flex flex-wrap items-center justify-between gap-3">
          <a
            href="#projects"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#6C63FF] hover:underline"
          >
            <span>Explore case studies</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>

          <RippleButton
            type="button"
            onClick={() => {
              onClose();
              onOpenCv();
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-[#2E2E3A] bg-[#FF8A80] rounded-[16px] hover:bg-[#ff766a] transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#2E2E3A]" aria-hidden="true" />
            <span>Download CV</span>
          </RippleButton>
        </div>
      </div>
    </div>
  );
}
