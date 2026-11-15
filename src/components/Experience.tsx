import { Compass, Layers, MapPin, Smartphone } from 'lucide-react';
import { CAREER_STEPS, EXPERIENCE } from '../data/portfolio';
import { Reveal } from './Reveal';

const STEP_ICONS = [MapPin, Compass, Smartphone, Layers];

export function Experience() {
  const scrollToRole = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-16 sm:py-24 border-b border-[#6C63FF]/12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl mb-10 sm:mb-12">
            <p className="text-xs font-bold tracking-wide text-[#6C63FF] mb-2">
              Experience
            </p>
            <h2
              id="experience-heading"
              className="font-serif text-3xl sm:text-4xl font-bold text-[#2E2E3A] tracking-tight [text-wrap:balance]"
            >
              Five years shipping customer platforms &amp; enterprise integrations
            </h2>
          </div>

          {/* Horizontal Career Stepper */}
          <div className="mb-12 bg-white rounded-[18px] border border-[#6C63FF]/12 shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-5 sm:p-7">
            <p className="text-xs font-bold text-[#5B5B6E] mb-5">
              Career Progression (click a role to jump)
            </p>
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div
                aria-hidden="true"
                className="hidden lg:block absolute top-6 left-[12%] right-[12%] h-0.5 bg-[#E9E5FF] rounded-full"
              />
              {CAREER_STEPS.map((step, idx) => {
                const Icon = STEP_ICONS[idx % STEP_ICONS.length];
                const isCurrent = idx === CAREER_STEPS.length - 1;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => scrollToRole(step.targetId)}
                    style={{ backgroundColor: step.surfaceColor }}
                    className={`relative z-10 text-left p-4 rounded-[16px] border transition-all duration-150 hover:-translate-y-0.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF] ${
                      isCurrent ? 'border-[#6C63FF]/30' : 'border-[#6C63FF]/12'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`w-9 h-9 rounded-[14px] flex items-center justify-center ${
                          isCurrent
                            ? 'bg-[#6C63FF] text-white'
                            : 'bg-white text-[#6C63FF] shadow-xs'
                        }`}
                      >
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </span>
                      <span className="text-xs font-semibold text-[#5B5B6E] tabular-nums">
                        {step.years}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-[#2E2E3A]">{step.role}</p>
                    <p className="text-xs text-[#5B5B6E] mt-0.5">{step.company}</p>
                    <p className="text-xs font-semibold text-[#6C63FF] mt-2">
                      {step.highlight}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div className="relative pl-6 sm:pl-8 space-y-10">
          {/* Continuous thin vertical timeline hairline */}
          <div
            aria-hidden="true"
            className="absolute left-[5px] sm:left-[7px] top-2 bottom-2 w-px bg-[#6C63FF]/20"
          />

          {EXPERIENCE.map((item, idx) => (
            <Reveal key={item.id} delayMs={idx * 80}>
              <article id={`exp-${item.id}`} className="relative">
                {/* Timeline node */}
                <span
                  aria-hidden="true"
                  className={`absolute -left-6 sm:-left-8 top-3 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border ${
                    idx === 0
                      ? 'bg-[#6C63FF] border-[#6C63FF] ring-4 ring-[#E9E5FF]'
                      : 'bg-white border-[#6C63FF] ring-4 ring-[#DFF7EE]'
                  }`}
                />

                <div className="bg-white border border-[#6C63FF]/12 rounded-[18px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-6 sm:p-8 transition-transform duration-200 hover:-translate-y-0.5">
                  {/* Company header */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b border-[#6C63FF]/10">
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2E2E3A]">
                          {item.company}
                        </h3>
                        <span className="text-sm text-[#5B5B6E]">· {item.location}</span>
                      </div>
                      {item.primaryRole && (
                        <p className="text-base font-bold text-[#6C63FF] mt-1">
                          {item.primaryRole}
                        </p>
                      )}
                      {item.summaryNote && (
                        <p className="text-sm text-[#6C63FF] font-semibold mt-1">
                          {item.summaryNote}
                        </p>
                      )}
                    </div>
                    <span
                      style={{ backgroundColor: item.surfaceColor }}
                      className="text-xs font-semibold text-[#2E2E3A] px-3 py-1.5 rounded-[16px] whitespace-nowrap shrink-0 tabular-nums self-start sm:self-auto"
                    >
                      {item.period}
                    </span>
                  </div>

                  {/* Single role bullets */}
                  {item.bullets && (
                    <ul className="mt-5 space-y-2.5 text-sm sm:text-[15px] text-[#5B5B6E] leading-relaxed">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6C63FF] shrink-0"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Progressive sub-roles */}
                  {item.subRoles && (
                    <div className="mt-6 space-y-7">
                      {item.subRoles.map((sub, sIdx) => (
                        <div
                          id={sub.id}
                          key={sub.id}
                          className={sIdx > 0 ? 'pt-6 border-t border-[#6C63FF]/10' : ''}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-3">
                            <h4 className="text-base font-bold text-[#2E2E3A]">
                              {sub.title}
                            </h4>
                            <span className="text-xs sm:text-sm text-[#5B5B6E] font-medium">
                              {sub.productContext}
                            </span>
                          </div>
                          <ul className="space-y-2 text-sm sm:text-[15px] text-[#5B5B6E] leading-relaxed">
                            {sub.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-3">
                                <span
                                  aria-hidden="true"
                                  className="mt-2 w-1.5 h-1.5 rounded-full bg-[#2E9F83] shrink-0"
                                />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
