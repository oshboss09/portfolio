import { useEffect, useRef, useState } from 'react';
import { COUNT_METRICS, CountMetric, RING_METRICS, RingMetric } from '../data/portfolio';

function AnimatedRingCard({ metric, active }: { metric: RingMetric; active: boolean }) {
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const targetOffset = circumference - (metric.percentage / 100) * circumference;

  return (
    <div
      style={{ backgroundColor: metric.surfaceColor }}
      className="rounded-[18px] border border-[#6C63FF]/12 shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-5 sm:p-6 flex items-center gap-4 transition-transform duration-200 hover:-translate-y-1"
    >
      <div className="relative w-20 h-20 shrink-0 flex items-center justify-center bg-white rounded-full shadow-xs">
        <svg viewBox="0 0 84 84" className="w-20 h-20 -rotate-90" aria-hidden="true">
          <circle
            cx="42"
            cy="42"
            r={radius}
            fill="none"
            stroke="#EFEFFD"
            strokeWidth="7"
          />
          <circle
            cx="42"
            cy="42"
            r={radius}
            fill="none"
            stroke={metric.color}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={active ? targetOffset : circumference}
            className="transition-[stroke-dashoffset] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          />
        </svg>
        <span className="absolute font-serif text-base font-bold text-[#2E2E3A] tabular-nums">
          {metric.displayValue}
        </span>
      </div>

      <div className="min-w-0">
        <p className="text-sm font-bold text-[#2E2E3A] leading-snug">{metric.label}</p>
        <p className="text-xs text-[#5B5B6E] mt-1 leading-relaxed">{metric.context}</p>
      </div>
    </div>
  );
}

function CountUpValue({ metric, active }: { metric: CountMetric; active: boolean }) {
  const [value, setValue] = useState(metric.targetNumber);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!active || animatedRef.current) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setValue(metric.targetNumber);
      animatedRef.current = true;
      return;
    }

    animatedRef.current = true;
    const duration = 850;
    const startTime = performance.now();

    let rafId = 0;
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(metric.targetNumber * eased));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setValue(metric.targetNumber);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [active, metric.targetNumber]);

  return (
    <span className="tabular-nums">
      {value}
      {metric.suffix}
    </span>
  );
}

export function ImpactStrip() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof window === 'undefined') {
      setTriggered(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTriggered(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="impact"
      ref={sectionRef}
      aria-labelledby="impact-heading"
      className="py-16 sm:py-20 border-b border-[#6C63FF]/12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-bold tracking-wide text-[#6C63FF] mb-2">
              Measured Impact
            </p>
            <h2
              id="impact-heading"
              className="font-serif text-2xl sm:text-3xl font-bold text-[#2E2E3A] tracking-tight"
            >
              Outcomes across scale, adoption &amp; delivery
            </h2>
          </div>
          <p className="text-sm text-[#5B5B6E] max-w-sm">
            Verified metrics across BelleVie (20K users), Jio mHere (300K DAU), and JioFiber Partner.
          </p>
        </div>

        {/* Row 1: 6 Animated Ring Progress Charts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {RING_METRICS.map((metric) => (
            <AnimatedRingCard key={metric.id} metric={metric} active={triggered} />
          ))}
        </div>

        {/* Row 2: 6 Count-up Metric Cards */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {COUNT_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="bg-white rounded-[18px] border border-[#6C63FF]/12 shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-5 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1"
            >
              <div
                style={{ backgroundColor: metric.surfaceColor }}
                className="inline-flex items-center self-start px-3 py-1 rounded-[16px] font-serif text-2xl font-bold text-[#2E2E3A] tracking-tight mb-3"
              >
                <CountUpValue metric={metric} active={triggered} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#2E2E3A] leading-snug">{metric.label}</p>
                <p className="text-[11px] text-[#5B5B6E] mt-1 leading-snug">{metric.context}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 3: Animated Before / After Shrinking Bar */}
        <div className="mt-6 bg-white rounded-[18px] border border-[#6C63FF]/12 shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-6 sm:p-7">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2E2E3A]">
                Network inventory: ~20,000 → 71 man-days
              </h3>
              <p className="text-xs sm:text-sm text-[#5B5B6E] mt-0.5">
                PAN-India network inventory capture reduced by 99.6% (JioFiber Partner)
              </p>
            </div>
            <span className="text-xs font-bold text-[#2E2E3A] bg-[#DFF7EE] px-3.5 py-1.5 rounded-[16px] self-start sm:self-auto whitespace-nowrap">
              99.6% Time Saved
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-[#5B5B6E] mb-1.5">
                <span>Before — Manual capture process</span>
                <span className="tabular-nums text-[#2E2E3A]">~20,000 man-days</span>
              </div>
              <div className="w-full h-3.5 bg-[#E9E5FF]/50 rounded-full overflow-hidden">
                <div className="h-full w-full bg-[#C7C2FA] rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-[#6C63FF] mb-1.5">
                <span>After — GIS-powered mobile SaaS workflow</span>
                <span className="tabular-nums font-bold text-[#2E2E3A]">71 man-days</span>
              </div>
              <div className="w-full h-3.5 bg-[#DFF7EE]/60 rounded-full overflow-hidden">
                <div
                  style={{ width: triggered ? '2.5%' : '100%' }}
                  className="h-full min-w-[16px] bg-[#6C63FF] rounded-full transition-[width] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
