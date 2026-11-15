import { Cloud, Database, Smartphone } from 'lucide-react';
import { PROFILE } from '../data/portfolio';
import { Reveal } from './Reveal';

const INTEGRATION_FLOWS = [
  { label: 'Bookings', detail: 'SFDC → BelleVie onboarding for 20K customers', bg: 'bg-[#E9E5FF]' },
  { label: 'Payments', detail: 'BelleVie ↔ SAP ledger reconciliation', bg: 'bg-[#DFF7EE]' },
  { label: 'NOCs', detail: 'BelleVie ↔ SFDC ↔ SAP zero-issue clearance', bg: 'bg-[#FFE8DC]' },
  { label: 'Cases', detail: 'BelleVie ↔ Salesforce (17.7% → 48.8% engagement)', bg: 'bg-[#DDEEFF]' },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 sm:py-24 bg-white border-b border-[#6C63FF]/12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs font-bold tracking-wide text-[#6C63FF] mb-2">
                About
              </p>
              <h2
                id="about-heading"
                className="font-serif text-3xl sm:text-4xl font-bold text-[#2E2E3A] tracking-tight [text-wrap:balance]"
              >
                AI-enabled, systems-first product craft
              </h2>

              <dl className="mt-8 space-y-4 pt-6 border-t border-[#6C63FF]/12">
                {PROFILE.aboutHighlights.map((item) => (
                  <div key={item.label}>
                    <dt className="text-xs font-medium text-[#5B5B6E]">{item.label}</dt>
                    <dd className="text-sm font-semibold text-[#2E2E3A] mt-0.5">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <p className="text-lg sm:text-[19px] leading-relaxed text-[#2E2E3A] font-medium max-w-[68ch]">
                {PROFILE.aboutParagraph}
              </p>

              {/* Soft Rounded Enterprise Integration Diagram: BelleVie <-> Salesforce <-> SAP */}
              <div className="mt-8 pt-6 border-t border-[#6C63FF]/12">
                <div className="bg-[#FAF9FF] rounded-[18px] border border-[#6C63FF]/12 shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-5 sm:p-7">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#2E2E3A]">
                        Enterprise Integration Architecture
                      </h3>
                      <p className="text-xs text-[#5B5B6E] mt-0.5">
                        Live data flows orchestrated across customer app, CRM, and ERP
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#6C63FF]">
                      Bookings · Payments · NOCs · Cases
                    </span>
                  </div>

                  <div className="relative">
                    {/* Rounded connectors & nodes SVG (no sharp elbows, no black) */}
                    <svg
                      viewBox="0 0 700 132"
                      className="w-full h-auto hidden sm:block"
                      role="img"
                      aria-label="Integration diagram connecting BelleVie, Salesforce, and SAP with flowing Bookings, Payments, NOCs, and Cases data"
                    >
                      {/* Curved connecting lines with rounded caps */}
                      <path
                        d="M 170 52 Q 232 32 292 52"
                        stroke="rgba(108, 99, 255, 0.35)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeDasharray="6 6"
                        fill="none"
                      />
                      <path
                        d="M 408 52 Q 469 32 530 52"
                        stroke="rgba(46, 159, 131, 0.4)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeDasharray="6 6"
                        fill="none"
                      />
                      <path
                        d="M 115 92 Q 350 138 585 92"
                        stroke="rgba(255, 138, 128, 0.5)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeDasharray="6 6"
                        fill="none"
                      />

                      {/* Animated flowing data dots */}
                      <circle r="4.5" fill="#6C63FF">
                        <animateMotion
                          dur="2.4s"
                          repeatCount="indefinite"
                          path="M 170 52 Q 232 32 292 52"
                        />
                      </circle>
                      <circle r="4.5" fill="#2E9F83">
                        <animateMotion
                          dur="2.4s"
                          begin="0.8s"
                          repeatCount="indefinite"
                          path="M 408 52 Q 469 32 530 52"
                        />
                      </circle>
                      <circle r="4.5" fill="#FF8A80">
                        <animateMotion
                          dur="3.4s"
                          repeatCount="indefinite"
                          path="M 115 92 Q 350 138 585 92"
                        />
                      </circle>

                      {/* Flow Labels */}
                      <text x="232" y="28" textAnchor="middle" className="fill-[#5B5B6E] text-[11px] font-semibold">
                        Bookings · Cases
                      </text>
                      <text x="469" y="28" textAnchor="middle" className="fill-[#5B5B6E] text-[11px] font-semibold">
                        NOCs · RFCs
                      </text>
                      <text x="350" y="106" textAnchor="middle" className="fill-[#5B5B6E] text-[11px] font-semibold">
                        Payments
                      </text>

                      {/* Node 1: BelleVie (Lavender, 16px radius, soft tint stroke) */}
                      <g transform="translate(55, 16)">
                        <rect
                          width="115"
                          height="72"
                          rx="16"
                          fill="#E9E5FF"
                          stroke="rgba(108, 99, 255, 0.28)"
                          strokeWidth="1"
                        />
                        <text x="57" y="34" textAnchor="middle" className="fill-[#2E2E3A] text-[13px] font-bold">
                          BelleVie
                        </text>
                        <text x="57" y="52" textAnchor="middle" className="fill-[#5B5B6E] text-[10px] font-medium">
                          20K Customers
                        </text>
                      </g>

                      {/* Node 2: Salesforce (Mint, 16px radius, soft tint stroke) */}
                      <g transform="translate(292, 16)">
                        <rect
                          width="116"
                          height="72"
                          rx="16"
                          fill="#DFF7EE"
                          stroke="rgba(46, 159, 131, 0.28)"
                          strokeWidth="1"
                        />
                        <text x="58" y="34" textAnchor="middle" className="fill-[#2E2E3A] text-[13px] font-bold">
                          Salesforce
                        </text>
                        <text x="58" y="52" textAnchor="middle" className="fill-[#5B5B6E] text-[10px] font-medium">
                          CRM &amp; Cases
                        </text>
                      </g>

                      {/* Node 3: SAP (Peach, 16px radius, soft tint stroke) */}
                      <g transform="translate(530, 16)">
                        <rect
                          width="115"
                          height="72"
                          rx="16"
                          fill="#FFE8DC"
                          stroke="rgba(255, 138, 128, 0.35)"
                          strokeWidth="1"
                        />
                        <text x="57" y="34" textAnchor="middle" className="fill-[#2E2E3A] text-[13px] font-bold">
                          SAP
                        </text>
                        <text x="57" y="52" textAnchor="middle" className="fill-[#5B5B6E] text-[10px] font-medium">
                          ERP &amp; Finance
                        </text>
                      </g>
                    </svg>

                    {/* Mobile compact node stack */}
                    <div className="sm:hidden grid grid-cols-3 gap-2 text-center">
                      <div className="bg-[#E9E5FF] rounded-[16px] border border-[#6C63FF]/15 p-3">
                        <Smartphone className="w-4 h-4 text-[#6C63FF] mx-auto mb-1" aria-hidden="true" />
                        <p className="text-xs font-bold text-[#2E2E3A]">BelleVie</p>
                      </div>
                      <div className="bg-[#DFF7EE] rounded-[16px] border border-[#6C63FF]/15 p-3">
                        <Cloud className="w-4 h-4 text-[#2E9F83] mx-auto mb-1" aria-hidden="true" />
                        <p className="text-xs font-bold text-[#2E2E3A]">Salesforce</p>
                      </div>
                      <div className="bg-[#FFE8DC] rounded-[16px] border border-[#6C63FF]/15 p-3">
                        <Database className="w-4 h-4 text-[#E0645A] mx-auto mb-1" aria-hidden="true" />
                        <p className="text-xs font-bold text-[#2E2E3A]">SAP</p>
                      </div>
                    </div>

                    {/* Flow legend strip */}
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {INTEGRATION_FLOWS.map((flow) => (
                        <div
                          key={flow.label}
                          className={`${flow.bg} rounded-[16px] border border-[#6C63FF]/10 px-3.5 py-2.5 text-xs`}
                        >
                          <span className="font-bold text-[#6C63FF]">{flow.label}: </span>
                          <span className="text-[#2E2E3A]">{flow.detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
