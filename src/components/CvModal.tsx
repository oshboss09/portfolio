import { Download, Printer, X } from 'lucide-react';
import { useEffect } from 'react';
import { EDUCATION, EXPERIENCE, PROFILE, SKILL_GROUPS } from '../data/portfolio';

interface CvModalProps {
  open: boolean;
  onClose: () => void;
}

export function CvModal({ open, onClose }: CvModalProps) {
  useEffect(() => {
    if (!open) return;

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
  }, [open, onClose]);

  if (!open) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTextCv = () => {
    const lines = [
      `${PROFILE.name} — ${PROFILE.role}`,
      `${PROFILE.location} | ${PROFILE.email} | ${PROFILE.linkedinUrl}`,
      '',
      'SUMMARY',
      PROFILE.aboutParagraph,
      '',
      'EXPERIENCE',
      ...EXPERIENCE.flatMap((exp) => {
        const header = `${exp.company} (${exp.location}) | ${exp.period}`;
        if (exp.bullets) {
          return [header, exp.primaryRole || '', ...exp.bullets.map((b) => `- ${b}`), ''];
        }
        return [
          header,
          exp.summaryNote || '',
          ...(exp.subRoles || []).flatMap((sub) => [
            `${sub.title} (${sub.productContext})`,
            ...sub.bullets.map((b) => `- ${b}`),
          ]),
          '',
        ];
      }),
      'SKILLS',
      ...SKILL_GROUPS.map((g) => `${g.category}: ${g.items.join(', ')}`),
      '',
      'EDUCATION',
      ...EDUCATION.map(
        (ed) => `${ed.degree} — ${ed.institution}, ${ed.location} (${ed.period}). ${ed.note}`
      ),
    ];

    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Oyeshi_Das_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2E2E3A]/35 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white border border-[#6C63FF]/15 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-[#6C63FF]/12 bg-[#E9E5FF]/50">
          <div>
            <h3 id="cv-modal-title" className="font-serif text-lg font-bold text-[#2E2E3A]">
              Curriculum Vitae — {PROFILE.name}
            </h3>
            <p className="text-xs text-[#5B5B6E]">
              Print / Save as PDF or download structured resume copy
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#6C63FF] rounded-[16px] hover:bg-[#5A52E8] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Printer className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Save as PDF</span>
            </button>
            <button
              type="button"
              onClick={handleDownloadTextCv}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#2E2E3A] bg-white border border-[#6C63FF]/15 rounded-[16px] hover:border-[#6C63FF]/40 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Download className="w-3.5 h-3.5 text-[#6C63FF]" aria-hidden="true" />
              <span>Download .txt</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close CV preview"
              className="inline-flex items-center justify-center w-9 h-9 rounded-[14px] text-[#5B5B6E] hover:text-[#2E2E3A] hover:bg-white/80 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div id="cv-printable-area" className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#5B5B6E]">
          <div className="pb-4 border-b border-[#6C63FF]/12">
            <h4 className="font-serif text-2xl font-bold text-[#2E2E3A]">{PROFILE.name}</h4>
            <p className="text-[#6C63FF] font-semibold mt-0.5">
              {PROFILE.headline.replace('\n', ' ')} {PROFILE.subline}
            </p>
            <p className="text-xs text-[#5B5B6E] mt-1.5">
              {PROFILE.location} · {PROFILE.email} · LinkedIn: /in/oyeshi-das
            </p>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#5B5B6E] mb-2">
              Profile Summary
            </h5>
            <p className="leading-relaxed text-[#2E2E3A]">{PROFILE.aboutParagraph}</p>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#5B5B6E] mb-3">
              Experience
            </h5>
            <div className="space-y-5">
              {EXPERIENCE.map((exp) => (
                <div key={exp.id}>
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-bold text-[#2E2E3A]">
                      {exp.company} — {exp.location}
                    </span>
                    <span className="text-xs text-[#5B5B6E] tabular-nums">{exp.period}</span>
                  </div>
                  {exp.primaryRole && (
                    <p className="text-xs font-semibold text-[#6C63FF] mt-0.5">{exp.primaryRole}</p>
                  )}
                  {exp.bullets && (
                    <ul className="mt-2 list-disc pl-4 space-y-1 text-xs leading-relaxed">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {exp.subRoles && (
                    <div className="mt-2 space-y-3">
                      {exp.subRoles.map((sub) => (
                        <div key={sub.title}>
                          <p className="text-xs font-bold text-[#2E2E3A]">
                            {sub.title}{' '}
                            <span className="font-normal text-[#5B5B6E]">
                              ({sub.productContext})
                            </span>
                          </p>
                          <ul className="mt-1 list-disc pl-4 space-y-1 text-xs leading-relaxed">
                            {sub.bullets.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#5B5B6E] mb-2">
              Skills
            </h5>
            <div className="space-y-1.5 text-xs">
              {SKILL_GROUPS.map((g) => (
                <p key={g.category}>
                  <span className="font-bold text-[#2E2E3A]">{g.category}: </span>
                  <span>{g.items.join(', ')}</span>
                </p>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#5B5B6E] mb-2">
              Education
            </h5>
            <div className="space-y-2 text-xs">
              {EDUCATION.map((ed) => (
                <div key={ed.degree} className="flex items-baseline justify-between gap-4">
                  <div>
                    <span className="font-bold text-[#2E2E3A]">{ed.degree}</span> —{' '}
                    <span>
                      {ed.institution}, {ed.location}
                    </span>{' '}
                    <span className="text-[#5B5B6E]">({ed.note})</span>
                  </div>
                  <span className="text-[#5B5B6E] tabular-nums shrink-0">{ed.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
