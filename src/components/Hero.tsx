import {
  ArrowDownRight,
  Building2,
  CheckCircle2,
  CreditCard,
  FileCheck2,
  FileText,
  Home,
  MessageSquare,
  MessageSquarePlus,
  User,
} from 'lucide-react';
import { MouseEvent, useEffect, useState } from 'react';
import { PROFILE } from '../data/portfolio';
import { PhoneFrame } from './PhoneFrame';
import { RippleAnchor, RippleButton } from './Ripple';

interface HeroProps {
  onOpenCv: () => void;
}

interface AppTile {
  id: string;
  label: string;
  sub: string;
  surfaceBg: string;
  iconColor: string;
  notifTitle: string;
  notifBody: string;
  icon: typeof Building2;
}

const APP_TILES: AppTile[] = [
  {
    id: 'home',
    label: 'My Home',
    sub: '20K Customers',
    surfaceBg: 'bg-[#E9E5FF]',
    iconColor: 'text-[#6C63FF]',
    notifTitle: 'My Home · Synced ✓',
    notifBody: 'Unit inventory & handover synced with SFDC',
    icon: Building2,
  },
  {
    id: 'payments',
    label: 'Payments',
    sub: 'SAP Ledger',
    surfaceBg: 'bg-[#DFF7EE]',
    iconColor: 'text-[#2E9F83]',
    notifTitle: 'Payments · Reconciled ✓',
    notifBody: 'Milestone invoices & tax receipts clear in SAP',
    icon: CreditCard,
  },
  {
    id: 'request',
    label: 'Raise a Request',
    sub: '48.8% Engaged',
    surfaceBg: 'bg-[#FFE8DC]',
    iconColor: 'text-[#E0645A]',
    notifTitle: 'Requests · Live Chat ✓',
    notifBody: 'Omnichannel RM replies mirrored from email & CRM',
    icon: MessageSquarePlus,
  },
  {
    id: 'noc',
    label: 'NOC Status',
    sub: 'Approved',
    surfaceBg: 'bg-[#DDEEFF]',
    iconColor: 'text-[#6C63FF]',
    notifTitle: 'NOC Status · 0 issues ✓',
    notifBody: 'Automated SFDC & SAP clearance active',
    icon: FileCheck2,
  },
];

const PHONE_TABS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'payments', label: 'Payments', icon: CreditCard },
  { id: 'requests', label: 'Requests', icon: MessageSquare },
  { id: 'profile', label: 'Profile', icon: User },
];

export function Hero({ onOpenCv }: HeroProps) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [selectedTileId, setSelectedTileId] = useState<string>('noc');
  const [activeTab, setActiveTab] = useState<string>('home');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    // Max 8 degrees cursor tilt
    setTilt({
      rotateX: Number((-yPct * 16).toFixed(2)),
      rotateY: Number((xPct * 16).toFixed(2)),
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const headlineLines = PROFILE.headline.split('\n');
  const activeNotification =
    APP_TILES.find((t) => t.id === selectedTileId) ?? APP_TILES[3];

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-[#6C63FF]/12"
    >
      {/* Soft pastel gradient blobs behind hero */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#E9E5FF]/80 blur-3xl" />
        <div className="absolute top-12 left-1/3 w-[380px] h-[380px] rounded-full bg-[#DDEEFF]/70 blur-3xl" />
        <div className="absolute -bottom-24 right-0 w-[440px] h-[440px] rounded-full bg-[#FFE8DC]/85 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#6C63FF] mb-5">
              <span>{PROFILE.name}</span>
              <span aria-hidden="true" className="text-[#5B5B6E]/40">
                ·
              </span>
              <span className="text-[#5B5B6E] font-medium">{PROFILE.location}</span>
            </div>

            <h1 className="font-serif text-[2.45rem] sm:text-5xl lg:text-[3.65rem] font-bold tracking-tight text-[#2E2E3A] leading-[1.1] max-w-2xl">
              {headlineLines.map((line, lineIdx) => {
                const prevWordCount = headlineLines
                  .slice(0, lineIdx)
                  .reduce((sum, l) => sum + l.split(' ').length, 0);
                return (
                  <span key={lineIdx} className="block">
                    {line.split(' ').map((word, wordIdx) => (
                      <span
                        key={`${word}-${wordIdx}`}
                        style={{ animationDelay: `${(prevWordCount + wordIdx) * 70}ms` }}
                        className="inline-block mr-[0.26em] animate-word-reveal"
                      >
                        {word}
                      </span>
                    ))}
                  </span>
                );
              })}
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#5B5B6E] leading-relaxed max-w-xl font-medium">
              {PROFILE.subline}
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <RippleAnchor
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-[#2E2E3A] bg-[#FF8A80] rounded-[18px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:bg-[#ff766a] transition-all duration-150 hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6C63FF]"
              >
                <span>View my work</span>
                <ArrowDownRight className="w-4 h-4 text-[#2E2E3A]" aria-hidden="true" />
              </RippleAnchor>

              <RippleButton
                type="button"
                onClick={onOpenCv}
                rippleColor="bg-[#6C63FF]/15"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#6C63FF] bg-white border border-[#6C63FF]/15 rounded-[18px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-[#6C63FF]/40 hover:-translate-y-0.5 transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6C63FF]"
              >
                <FileText className="w-4 h-4 text-[#6C63FF]" aria-hidden="true" />
                <span>Download CV</span>
              </RippleButton>
            </div>
          </div>

          {/* Right column: Floating 3D iPhone-style PhoneFrame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              style={{
                transform: reducedMotion
                  ? 'none'
                  : `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
              }}
              className="transition-transform duration-300 ease-out will-change-transform"
            >
              <PhoneFrame variant="hero" floating={!reducedMotion}>
                {/* App Header: BelleVie wordmark left + avatar right, Welcome home 20px below */}
                <div className="px-4 pt-2.5 pb-3 bg-white border-b border-[#6C63FF]/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-[6px] bg-[#6C63FF] text-white text-[10px] font-bold flex items-center justify-center">
                        B
                      </span>
                      <span className="text-[13px] font-bold tracking-tight text-[#2E2E3A]">
                        BelleVie
                      </span>
                    </div>
                    <div
                      aria-hidden="true"
                      className="w-7 h-7 rounded-full bg-[#E9E5FF] text-[#6C63FF] text-[10px] font-bold flex items-center justify-center"
                    >
                      OD
                    </div>
                  </div>
                  <p className="text-[20px] font-bold tracking-tight text-[#2E2E3A] mt-2 leading-tight">
                    Welcome home
                  </p>
                </div>

                {/* Main App Body */}
                <div className="flex-1 px-3.5 py-3 flex flex-col justify-between min-h-0">
                  {/* 2x2 Grid with 10px gaps, 12px radius, 14px padding, uniform tiles */}
                  <div className="grid grid-cols-2 auto-rows-fr gap-[10px]">
                    {APP_TILES.map((tile) => {
                      const Icon = tile.icon;
                      return (
                        <button
                          key={tile.id}
                          type="button"
                          onClick={() => setSelectedTileId(tile.id)}
                          className="h-full text-left p-[14px] rounded-[12px] bg-white border border-[#6C63FF]/10 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:bg-[#E9E5FF]/35 transition-colors duration-150 flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF]"
                        >
                          <div
                            className={`w-[28px] h-[28px] rounded-[8px] ${tile.surfaceBg} ${tile.iconColor} flex items-center justify-center mb-2`}
                          >
                            <Icon className="w-4 h-4" aria-hidden="true" />
                          </div>
                          <div>
                            <p className="text-[14px] font-semibold text-[#2E2E3A] leading-tight">
                              {tile.label}
                            </p>
                            <p className="text-[12px] text-[#5B5B6E] mt-0.5 truncate">
                              {tile.sub}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Notification-style card with slide-up animation on load */}
                  <div className="animate-card-slide-up rounded-[14px] bg-white border border-[#6C63FF]/12 shadow-[0_4px_16px_rgba(108,99,255,0.08)] p-3 flex items-start gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-[#DFF7EE] text-[#2E9F83] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[12px] font-bold text-[#2E2E3A] truncate">
                        {activeNotification.notifTitle}
                      </p>
                      <p className="text-[11px] text-[#5B5B6E] leading-snug mt-0.5">
                        {activeNotification.notifBody}
                      </p>
                    </div>
                  </div>
                </div>

                {/* App Bottom Tab Bar above home indicator */}
                <div className="px-3 pt-2 pb-1 bg-white border-t border-[#6C63FF]/10 grid grid-cols-4 gap-1 shrink-0">
                  {PHONE_TABS.map((tab) => {
                    const TabIcon = tab.icon;
                    const isActive = tab.id === activeTab;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex flex-col items-center justify-center gap-0.5 py-1 rounded-[8px] cursor-pointer transition-colors ${
                          isActive ? 'text-[#6C63FF]' : 'text-[#5B5B6E] hover:text-[#2E2E3A]'
                        }`}
                      >
                        <TabIcon className="w-4 h-4" aria-hidden="true" />
                        <span className="text-[10px] font-semibold leading-none">
                          {tab.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
