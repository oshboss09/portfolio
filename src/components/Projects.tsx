import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ExternalLink,
  Github,
  MapPin,
  MessageCircle,
  MessageSquare,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  UploadCloud,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { CASE_STUDIES, CaseStudy, ProjectCategory } from '../data/portfolio';
import { PhoneFrame } from './PhoneFrame';
import { Reveal } from './Reveal';
import { RippleButton } from './Ripple';

interface ProjectsProps {
  onSelectProject: (study: CaseStudy) => void;
}

const CATEGORIES: ProjectCategory[] = [
  'All',
  '0→1 Built',
  'PropTech & Integrations',
  'Growth & CX',
];

function AssessmentFlowScreen({ active }: { active: boolean }) {
  const steps = [
    { label: 'Admin Upload', sub: 'Bulk question bank', icon: UploadCloud, bg: 'bg-[#E9E5FF]' },
    { label: 'Candidate Test', sub: '1 attempt · Tab guard', icon: ShieldCheck, bg: 'bg-[#FFE8DC]' },
    { label: 'Analytics', sub: 'Cohort score insights', icon: BarChart3, bg: 'bg-[#DFF7EE]' },
  ];
  return (
    <div className="flex-1 px-3 py-2 flex flex-col justify-between">
      <div className="pb-2 border-b border-[#6C63FF]/10">
        <p className="text-[10px] font-semibold text-[#6C63FF]">0→1 GenAI Portal</p>
        <p className="text-[13px] font-bold text-[#2E2E3A] leading-tight mt-0.5">
          Assessment Flow
        </p>
      </div>

      <div className="space-y-2 my-auto py-2">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              style={{ transitionDelay: `${idx * 90}ms` }}
              className={`${s.bg} rounded-[12px] p-2.5 flex items-center gap-2.5 transition-all duration-500 ${
                active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              <div className="w-7 h-7 rounded-[9px] bg-white text-[#6C63FF] flex items-center justify-center shrink-0 shadow-xs">
                <Icon className="w-3.5 h-3.5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold text-[#2E2E3A] leading-tight">{s.label}</p>
                <p className="text-[10px] text-[#5B5B6E] truncate">{s.sub}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded-[10px] bg-white border border-[#6C63FF]/12 px-2.5 py-1.5 text-[10px] font-semibold text-[#2E2E3A] text-center">
        Google AI Studio · Netlify Live
      </div>
    </div>
  );
}

function OmnichannelScreen({ active }: { active: boolean }) {
  return (
    <div className="flex-1 px-3 py-2 flex flex-col justify-between">
      <div className="pb-2 border-b border-[#6C63FF]/10 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-semibold text-[#6C63FF]">BelleVie CX</p>
          <p className="text-[13px] font-bold text-[#2E2E3A] leading-tight mt-0.5">
            Case Chat
          </p>
        </div>
        <span className="w-7 h-7 rounded-[9px] bg-[#DFF7EE] text-[#2E9F83] flex items-center justify-center">
          <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
        </span>
      </div>

      <div className="bg-white rounded-[14px] border border-[#6C63FF]/12 p-3 space-y-3 my-auto">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-[#5B5B6E]">Engagement Lift</span>
          <span className="text-[10px] font-bold text-[#2E2E3A] bg-[#DFF7EE] px-2 py-0.5 rounded-[10px]">
            +31.1 pts
          </span>
        </div>

        <div>
          <div className="flex justify-between text-[10px] font-semibold text-[#5B5B6E] mb-1">
            <span>Before</span>
            <span className="tabular-nums text-[#2E2E3A]">17.7%</span>
          </div>
          <div className="w-full h-2.5 bg-[#E9E5FF]/60 rounded-full overflow-hidden">
            <div
              style={{ width: active ? '17.7%' : '0%' }}
              className="h-full bg-[#B9B3F8] rounded-full transition-[width] duration-700 ease-out"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-[10px] font-semibold text-[#6C63FF] mb-1">
            <span>After Chat Sync</span>
            <span className="tabular-nums font-bold text-[#2E2E3A]">48.8%</span>
          </div>
          <div className="w-full h-3 bg-[#DFF7EE]/80 rounded-full overflow-hidden">
            <div
              style={{ width: active ? '48.8%' : '0%' }}
              className="h-full bg-[#6C63FF] rounded-full transition-[width] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
          </div>
        </div>
      </div>

      <div className="rounded-[10px] bg-[#E9E5FF]/60 px-2.5 py-2 text-[10px] font-medium text-[#2E2E3A]">
        SFDC + Email replies mirrored live inside BelleVie
      </div>
    </div>
  );
}

function DonutPhoneScreen({
  active,
  percentage,
  color,
  trackColor,
  eyebrow,
  title,
  subtitle,
  mode,
}: {
  active: boolean;
  percentage: number;
  color: string;
  trackColor: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  mode: 'bangalore' | 'triggers';
}) {
  const r = 34;
  const circ = 2 * Math.PI * r;
  const offset = circ - (percentage / 100) * circ;

  return (
    <div className="flex-1 px-3 py-2 flex flex-col justify-between">
      <div className="pb-2 border-b border-[#6C63FF]/10">
        <p className="text-[10px] font-semibold text-[#6C63FF]">{eyebrow}</p>
        <p className="text-[13px] font-bold text-[#2E2E3A] leading-tight mt-0.5">{title}</p>
      </div>

      <div className="my-auto flex flex-col items-center text-center py-2">
        <div className="relative w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-xs">
          <svg viewBox="0 0 84 84" className="w-24 h-24 -rotate-90" aria-hidden="true">
            <circle cx="42" cy="42" r={r} fill="none" stroke={trackColor} strokeWidth="7" />
            <circle
              cx="42"
              cy="42"
              r={r}
              fill="none"
              stroke={color}
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={circ}
              strokeDashoffset={active ? offset : circ}
              className="transition-[stroke-dashoffset] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
          </svg>
          <span className="absolute text-[18px] font-bold text-[#2E2E3A] tabular-nums">
            {percentage}%
          </span>
        </div>

        <p className="text-[11px] font-medium text-[#5B5B6E] mt-3 leading-snug">{subtitle}</p>
      </div>

      {mode === 'bangalore' ? (
        <div className="rounded-[12px] bg-[#DDEEFF] px-3 py-2 flex items-center justify-center gap-1.5 text-[11px] font-bold text-[#2E2E3A]">
          <MapPin className="w-3.5 h-3.5 text-[#6C63FF]" aria-hidden="true" />
          <span>Karnataka Market Flow</span>
        </div>
      ) : (
        <div className="rounded-[12px] bg-white border border-[#6C63FF]/12 px-2.5 py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold text-[#2E2E3A]">
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-[8px] bg-[#DFF7EE]">
            <MessageCircle className="w-3 h-3 text-[#2E9F83]" aria-hidden="true" />
            <span>WA</span>
          </span>
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-[8px] bg-[#FFF6D6]">
            <MessageSquare className="w-3 h-3 text-[#6C63FF]" aria-hidden="true" />
            <span>SMS</span>
          </span>
          <ArrowRight className="w-3 h-3 text-[#5B5B6E]" aria-hidden="true" />
          <Smartphone className="w-3.5 h-3.5 text-[#6C63FF]" aria-hidden="true" />
        </div>
      )}
    </div>
  );
}

function NocScreen({ active }: { active: boolean }) {
  const nodes = [
    { name: 'BelleVie App', check: 'Profile verification' },
    { name: 'Salesforce CRM', check: 'Document review' },
    { name: 'SAP Finance', check: 'Payment confirmation' },
  ];
  return (
    <div className="flex-1 px-3 py-2 flex flex-col justify-between">
      <div className="pb-2 border-b border-[#6C63FF]/10">
        <p className="text-[10px] font-semibold text-[#6C63FF]">3-System Workflow</p>
        <p className="text-[13px] font-bold text-[#2E2E3A] leading-tight mt-0.5">
          NOC Automation
        </p>
      </div>

      <div className="space-y-2 my-auto py-2">
        {nodes.map((node, idx) => (
          <div
            key={node.name}
            style={{ transitionDelay: `${idx * 90}ms` }}
            className={`bg-white border border-[#6C63FF]/12 rounded-[12px] px-3 py-2 flex items-center justify-between gap-2 transition-all duration-500 ${
              active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-[#2E2E3A] truncate">{node.name}</p>
              <p className="text-[10px] text-[#5B5B6E] truncate">{node.check}</p>
            </div>
            <CheckCircle2 className="w-4 h-4 text-[#2E9F83] shrink-0" aria-hidden="true" />
          </div>
        ))}
      </div>

      <div className="rounded-[12px] bg-[#DFF7EE] px-3 py-2 text-[11px] font-bold text-[#2E2E3A] text-center">
        0 user-facing issues ✓
      </div>
    </div>
  );
}

function SyncScreen({ active }: { active: boolean }) {
  return (
    <div className="flex-1 px-3 py-2 flex flex-col justify-between">
      <div className="pb-2 border-b border-[#6C63FF]/10">
        <p className="text-[10px] font-semibold text-[#6C63FF]">Middleware-Free Batch</p>
        <p className="text-[13px] font-bold text-[#2E2E3A] leading-tight mt-0.5">
          Cross-Platform Sync
        </p>
      </div>

      <div className="my-auto py-2 flex flex-col items-center gap-2.5">
        <div
          className={`w-10 h-10 rounded-full bg-[#DFF7EE] text-[#6C63FF] flex items-center justify-center shadow-xs ${
            active ? 'animate-spin-slow' : ''
          }`}
        >
          <RefreshCw className="w-5 h-5" aria-hidden="true" />
        </div>

        <div className="w-full grid grid-cols-3 gap-1.5 text-center">
          <div className="rounded-[10px] bg-[#E9E5FF] py-2 px-1 text-[10px] font-bold text-[#2E2E3A]">
            BelleVie
          </div>
          <div className="rounded-[10px] bg-[#DFF7EE] py-2 px-1 text-[10px] font-bold text-[#2E2E3A]">
            SFDC
          </div>
          <div className="rounded-[10px] bg-[#FFE8DC] py-2 px-1 text-[10px] font-bold text-[#2E2E3A]">
            SAP
          </div>
        </div>

        <p className="text-[10px] text-[#5B5B6E] text-center leading-snug">
          Automated RFC refresh &amp; resident provisioning
        </p>
      </div>

      <div className="rounded-[12px] bg-[#E9E5FF] px-3 py-2 text-[11px] font-bold text-[#2E2E3A] text-center">
        0 manual entries ✓
      </div>
    </div>
  );
}

function PhoneScreenContent({ study, active }: { study: CaseStudy; active: boolean }) {
  switch (study.graphicType) {
    case 'assessment-flow':
      return <AssessmentFlowScreen active={active} />;
    case 'omnichannel-bar':
      return <OmnichannelScreen active={active} />;
    case 'bangalore-donut':
      return (
        <DonutPhoneScreen
          active={active}
          percentage={92}
          color="#6C63FF"
          trackColor="#E9E5FF"
          eyebrow="Regional Rollout"
          title="Bangalore Launch"
          subtitle="App adoption across Karnataka customer onboarding"
          mode="bangalore"
        />
      );
    case 'noc-flow':
      return <NocScreen active={active} />;
    case 'adoption-donut':
      return (
        <DonutPhoneScreen
          active={active}
          percentage={75}
          color="#2E9F83"
          trackColor="#DFF7EE"
          eyebrow="Lifecycle Growth"
          title="Adoption Triggers"
          subtitle="App adoption driven by WhatsApp & SMS triggers"
          mode="triggers"
        />
      );
    case 'sync-nodes':
      return <SyncScreen active={active} />;
  }
}

export function Projects({ onSelectProject }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [sectionActive, setSectionActive] = useState(false);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el || typeof window === 'undefined') {
      setSectionActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionActive(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const filteredStudies =
    activeCategory === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((study) => study.category === activeCategory);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-16 sm:py-24 bg-white border-b border-[#6C63FF]/12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
            <div>
              <p className="text-xs font-bold tracking-wide text-[#6C63FF] mb-2">
                Projects &amp; Case Studies
              </p>
              <h2
                id="projects-heading"
                className="font-serif text-3xl sm:text-4xl font-bold text-[#2E2E3A] tracking-tight [text-wrap:balance]"
              >
                Selected product launches &amp; 0→1 builds
              </h2>
            </div>

            {/* Interactive filter segmented control */}
            <div
              role="tablist"
              aria-label="Filter case studies by category"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#E9E5FF]/55 border border-[#6C63FF]/12 rounded-[16px] self-start lg:self-auto"
            >
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-[12px] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF] ${
                      isActive
                        ? 'bg-[#6C63FF] text-white shadow-xs'
                        : 'text-[#5B5B6E] hover:text-[#2E2E3A]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Strict equal-height 3/2/1 CSS Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {filteredStudies.map((study, idx) => {
            const hasGithub = Boolean(study.githubUrl && study.githubUrl.startsWith('http'));
            return (
              <Reveal key={study.id} delayMs={idx * 45} className="h-full flex">
                <article
                  style={{ backgroundColor: study.surfaceColor }}
                  className="w-full h-full rounded-[18px] border border-[#6C63FF]/12 shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-6 flex flex-col transition-all duration-200 hover:-translate-y-1 hover:rotate-[0.25deg]"
                >
                  {/* 1. Fixed Metadata Header */}
                  <div className="h-5 flex items-center justify-between gap-2 text-xs text-[#5B5B6E] mb-4 shrink-0">
                    <span className="font-semibold truncate">
                      {study.index} · {study.organization}
                    </span>
                    <span className="font-semibold text-[#6C63FF] whitespace-nowrap shrink-0">
                      {study.category}
                    </span>
                  </div>

                  {/* 2. Reusable 9:19.5 PhoneFrame Infographic Slot (aligned across all cards) */}
                  <div className="mb-6 flex justify-center shrink-0">
                    <PhoneFrame variant="card">
                      <PhoneScreenContent study={study} active={sectionActive} />
                    </PhoneFrame>
                  </div>

                  {/* 3. Title (uniform vertical alignment) */}
                  <h3 className="font-serif text-xl font-bold text-[#2E2E3A] min-h-[3.25rem] leading-snug">
                    {study.title}
                  </h3>

                  {/* 4. Description block */}
                  <div className="mt-2 space-y-2 text-xs sm:text-[13px] leading-relaxed text-[#5B5B6E] flex-1">
                    <p>
                      <span className="font-bold text-[#2E2E3A]">Problem: </span>
                      {study.problem}
                    </p>
                    <p>
                      <span className="font-bold text-[#2E2E3A]">What I did: </span>
                      {study.action}
                    </p>
                    <p className="text-[#2E2E3A] bg-white/80 rounded-[16px] px-3 py-2 font-medium border border-[#6C63FF]/10">
                      <span className="font-bold text-[#6C63FF]">Outcome: </span>
                      {study.outcome}
                    </p>
                  </div>

                  {/* 5. Pinned Bottom Tags & Actions */}
                  <div className="mt-5 pt-4 border-t border-[#6C63FF]/12 flex flex-col gap-3 shrink-0">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold text-[#5B5B6E]">
                      {study.tags.map((tag, tIdx) => (
                        <span key={tag} className="inline-flex items-center gap-2">
                          {tIdx > 0 && (
                            <span aria-hidden="true" className="text-[#6C63FF]/40">
                              ·
                            </span>
                          )}
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        {study.liveUrl && (
                          <a
                            href={study.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-[#6C63FF] rounded-[16px] hover:bg-[#5A52E8] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF]"
                          >
                            <span>Try live demo</span>
                            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                          </a>
                        )}
                        {hasGithub && (
                          <a
                            href={study.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#2E2E3A] bg-white rounded-[16px] border border-[#6C63FF]/15 hover:border-[#6C63FF]/40 transition-colors whitespace-nowrap shrink-0"
                          >
                            <Github className="w-3.5 h-3.5 text-[#6C63FF]" aria-hidden="true" />
                            <span>View code on GitHub</span>
                          </a>
                        )}
                      </div>

                      <RippleButton
                        type="button"
                        onClick={() => onSelectProject(study)}
                        rippleColor="bg-[#6C63FF]/15"
                        className="inline-flex items-center gap-1 px-3 py-2 text-xs font-bold text-[#6C63FF] bg-white border border-[#6C63FF]/15 hover:border-[#6C63FF]/40 rounded-[16px] transition-colors whitespace-nowrap shrink-0 cursor-pointer ml-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF]"
                      >
                        <span>Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </RippleButton>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
