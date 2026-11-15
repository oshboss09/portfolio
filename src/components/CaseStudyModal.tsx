import { ExternalLink, Github, X } from 'lucide-react';
import { useEffect } from 'react';
import { CaseStudy } from '../data/portfolio';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
}

export function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (!study) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [study, onClose]);

  if (!study) return null;

  const hasGithub = Boolean(study.githubUrl && study.githubUrl.startsWith('http'));

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-case-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2E2E3A]/35 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-[#6C63FF]/15 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{ backgroundColor: study.surfaceColor }}
          className="rounded-[16px] p-5 flex items-start justify-between gap-4"
        >
          <div>
            <p className="text-xs font-bold text-[#6C63FF]">
              {study.index} · {study.organization}
            </p>
            <h3
              id="modal-case-title"
              className="font-serif text-2xl sm:text-3xl font-bold text-[#2E2E3A] mt-1"
            >
              {study.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study details"
            className="inline-flex items-center justify-center w-10 h-10 rounded-[14px] bg-white/80 text-[#5B5B6E] hover:text-[#2E2E3A] hover:bg-white transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 space-y-6 text-sm sm:text-[15px] leading-relaxed text-[#5B5B6E]">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#5B5B6E] mb-1.5">
              Context &amp; Problem
            </h4>
            <p className="text-[#2E2E3A] font-medium">{study.problem}</p>
            <p className="mt-2 text-[#5B5B6E]">{study.modalDetails.overview}</p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#5B5B6E] mb-2">
              Execution &amp; Architecture
            </h4>
            <ul className="space-y-2.5">
              {study.modalDetails.architectureNotes.map((note, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6C63FF] shrink-0"
                  />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#DFF7EE] border border-[#6C63FF]/10 rounded-[16px] p-4 sm:p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#6C63FF] mb-2">
              Measurable Outcome
            </h4>
            <p className="font-bold text-[#2E2E3A]">{study.outcome}</p>
            <ul className="mt-2 space-y-1 text-sm text-[#5B5B6E]">
              {study.modalDetails.metrics.map((m, idx) => (
                <li key={idx}>· {m}</li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#6C63FF]/10">
            <div>
              <h4 className="text-xs font-bold text-[#5B5B6E] mb-1.5">
                Systems &amp; Platforms
              </h4>
              <p className="text-sm font-semibold text-[#2E2E3A]">
                {study.modalDetails.platforms.join(' · ')}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#5B5B6E] mb-1.5">Focus Areas</h4>
              <p className="text-sm font-semibold text-[#6C63FF]">
                {study.tags.join(' · ')}
              </p>
            </div>
          </div>

          {(study.liveUrl || hasGithub) && (
            <div className="pt-4 border-t border-[#6C63FF]/12 flex flex-wrap items-center gap-3">
              {study.liveUrl && (
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-white bg-[#6C63FF] rounded-[16px] hover:bg-[#5A52E8] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF]"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  <span>Try live demo</span>
                </a>
              )}
              {hasGithub && (
                <a
                  href={study.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#6C63FF] bg-white border border-[#6C63FF]/20 rounded-[16px] hover:border-[#6C63FF]/50 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF]"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                  <span>View code on GitHub</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
