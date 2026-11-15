import { useState } from 'react';
import { RADAR_AXES, SKILL_GROUPS } from '../data/portfolio';
import { Reveal } from './Reveal';

/**
 * Generates a smooth closed SVG spline path through a ring of points
 * using midpoint quadratic Bezier curves (no sharp pointed corners).
 */
function buildSmoothClosedPath(points: { x: number; y: number }[]): string {
  if (points.length < 3) return '';
  const len = points.length;
  const midpoints = points.map((pt, i) => {
    const next = points[(i + 1) % len];
    return {
      x: (pt.x + next.x) / 2,
      y: (pt.y + next.y) / 2,
    };
  });

  let d = `M ${midpoints[len - 1].x.toFixed(1)} ${midpoints[len - 1].y.toFixed(1)}`;
  for (let i = 0; i < len; i++) {
    const ctrl = points[i];
    const end = midpoints[i];
    d += ` Q ${ctrl.x.toFixed(1)} ${ctrl.y.toFixed(1)} ${end.x.toFixed(1)} ${end.y.toFixed(1)}`;
  }
  return `${d} Z`;
}

function SkillsRadar() {
  const [selectedAxisIdx, setSelectedAxisIdx] = useState(0);

  const cx = 185;
  const cy = 170;
  const maxR = 100;
  const total = RADAR_AXES.length;

  const getPoint = (index: number, valuePct: number) => {
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
    const r = (valuePct / 100) * maxR;
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    };
  };

  const rings = [25, 50, 75, 100];
  const dataPoints = RADAR_AXES.map((item, idx) => getPoint(idx, item.score));
  const dataPath = buildSmoothClosedPath(dataPoints);
  const activeAxis = RADAR_AXES[selectedAxisIdx];

  const nodeFills = ['#E9E5FF', '#DFF7EE', '#FFE8DC', '#DDEEFF', '#FFF6D6'];

  return (
    <div className="mb-10 bg-white rounded-[18px] border border-[#6C63FF]/12 shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-6 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 flex justify-center">
          <svg
            viewBox="0 0 370 340"
            className="w-full max-w-[350px] h-auto"
            role="img"
            aria-label="Smooth capability radar chart across Product, Stakeholder Management, Data, Technical, and Design"
          >
            {/* Soft rounded concentric loops */}
            {rings.map((pct) => {
              const ringPts = RADAR_AXES.map((_, idx) => getPoint(idx, pct));
              return (
                <path
                  key={pct}
                  d={buildSmoothClosedPath(ringPts)}
                  fill={pct === 100 ? 'rgba(233, 229, 255, 0.22)' : 'none'}
                  stroke="rgba(108, 99, 255, 0.16)"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              );
            })}

            {/* Soft curved spokes with rounded caps */}
            {RADAR_AXES.map((_, idx) => {
              const outer = getPoint(idx, 100);
              const mid = getPoint((idx + 0.2) % total, 48);
              return (
                <path
                  key={idx}
                  d={`M ${cx} ${cy} Q ${mid.x.toFixed(1)} ${mid.y.toFixed(1)} ${outer.x.toFixed(1)} ${outer.y.toFixed(1)}`}
                  fill="none"
                  stroke="rgba(108, 99, 255, 0.18)"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                />
              );
            })}

            {/* Smooth curved data blob */}
            <path
              d={dataPath}
              fill="rgba(108, 99, 255, 0.18)"
              stroke="#6C63FF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Soft rounded 16px-radius pastel nodes + vertex markers */}
            {RADAR_AXES.map((item, idx) => {
              const pt = dataPoints[idx];
              const labelPt = getPoint(idx, 134);
              const isSelected = idx === selectedAxisIdx;
              const pillWidth = item.axis.length > 12 ? 114 : 84;
              const pillHeight = 28;
              return (
                <g
                  key={item.axis}
                  className="cursor-pointer"
                  onClick={() => setSelectedAxisIdx(idx)}
                >
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={isSelected ? 7 : 5}
                    fill={isSelected ? '#FF8A80' : '#6C63FF'}
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                  />
                  <g
                    transform={`translate(${(labelPt.x - pillWidth / 2).toFixed(1)}, ${(
                      labelPt.y -
                      pillHeight / 2
                    ).toFixed(1)})`}
                  >
                    <rect
                      width={pillWidth}
                      height={pillHeight}
                      rx="14"
                      fill={isSelected ? '#6C63FF' : nodeFills[idx % nodeFills.length]}
                      stroke="rgba(108, 99, 255, 0.2)"
                      strokeWidth="1"
                    />
                    <text
                      x={pillWidth / 2}
                      y={pillHeight / 2 + 1}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className={`text-[10.5px] font-bold ${
                        isSelected ? 'fill-white' : 'fill-[#2E2E3A]'
                      }`}
                    >
                      {item.axis}
                    </text>
                  </g>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div>
            <p className="text-xs font-bold text-[#6C63FF] mb-1">
              Capability Radar · Click any dimension
            </p>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2E2E3A]">
              Balanced across strategy, systems &amp; execution
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {RADAR_AXES.map((item, idx) => {
              const isSelected = idx === selectedAxisIdx;
              return (
                <button
                  key={item.axis}
                  type="button"
                  onClick={() => setSelectedAxisIdx(idx)}
                  style={{
                    backgroundColor: isSelected ? '#E9E5FF' : '#FAF9FF',
                  }}
                  className={`text-left p-3.5 rounded-[16px] border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF] ${
                    isSelected
                      ? 'border-[#6C63FF]/35 shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
                      : 'border-[#6C63FF]/12 hover:border-[#6C63FF]/30'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-[#2E2E3A]">{item.axis}</span>
                    <span className="text-xs font-bold text-[#6C63FF] tabular-nums">
                      {item.score}%
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="rounded-[16px] bg-[#E9E5FF]/55 border border-[#6C63FF]/12 p-4">
            <p className="text-xs font-bold text-[#6C63FF]">{activeAxis.axis}</p>
            <p className="text-sm text-[#2E2E3A] mt-1">{activeAxis.summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-16 sm:py-24 border-b border-[#6C63FF]/12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl mb-10 sm:mb-12">
            <p className="text-xs font-bold tracking-wide text-[#6C63FF] mb-2">
              Skills &amp; Toolkit
            </p>
            <h2
              id="skills-heading"
              className="font-serif text-3xl sm:text-4xl font-bold text-[#2E2E3A] tracking-tight [text-wrap:balance]"
            >
              Product craft, technical fluency &amp; enterprise platforms
            </h2>
          </div>

          <SkillsRadar />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <Reveal
              key={group.category}
              delayMs={idx * 50}
              className={idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''}
            >
              <div
                style={{ backgroundColor: group.surfaceColor }}
                className="h-full border border-[#6C63FF]/12 rounded-[18px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <h3 className="text-sm font-bold text-[#2E2E3A] pb-3 border-b border-[#6C63FF]/12">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-[#2E2E3A] bg-white border border-[#6C63FF]/12 rounded-[16px] whitespace-nowrap shadow-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
