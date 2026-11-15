import { EDUCATION } from '../data/portfolio';
import { Reveal } from './Reveal';

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-16 sm:py-24 bg-white border-b border-[#6C63FF]/12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl mb-10 sm:mb-12">
            <p className="text-xs font-bold tracking-wide text-[#6C63FF] mb-2">
              Education
            </p>
            <h2
              id="education-heading"
              className="font-serif text-3xl sm:text-4xl font-bold text-[#2E2E3A] tracking-tight"
            >
              Academic foundation in GIS &amp; spatial analysis
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {EDUCATION.map((edu, idx) => (
            <Reveal key={edu.degree} delayMs={idx * 60} className="h-full">
              <div
                style={{ backgroundColor: edu.surfaceColor }}
                className="h-full border border-[#6C63FF]/12 rounded-[18px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-6 sm:p-8 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 text-xs font-semibold text-[#5B5B6E] mb-3">
                    <span>
                      {edu.institution} · {edu.location}
                    </span>
                    <span className="tabular-nums whitespace-nowrap shrink-0 text-[#6C63FF]">
                      {edu.period}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2E2E3A]">
                    {edu.degree}
                  </h3>
                </div>
                <p className="mt-5 pt-4 border-t border-[#6C63FF]/12 text-sm text-[#5B5B6E]">
                  {edu.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
