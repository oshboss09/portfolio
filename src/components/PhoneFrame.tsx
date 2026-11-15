import { ReactNode } from 'react';

interface PhoneFrameProps {
  children: ReactNode;
  variant?: 'hero' | 'card';
  floating?: boolean;
  screenBgClass?: string;
}

export function PhoneFrame({
  children,
  variant = 'hero',
  floating = false,
  screenBgClass = 'bg-[#FAF9FF]',
}: PhoneFrameProps) {
  const isHero = variant === 'hero';

  return (
    <div
      className={`relative mx-auto select-none ${
        isHero
          ? 'w-[266px] h-[550px] sm:w-[300px] sm:h-[620px]'
          : 'w-[222px] h-[458px]'
      } ${floating ? 'animate-phone-float' : ''}`}
    >
      {/* Left side hardware buttons (sticking out 3px) */}
      <span
        aria-hidden="true"
        style={{ background: 'linear-gradient(180deg, #3A3A48 0%, #2E2E3A 100%)' }}
        className={`absolute -left-[3px] rounded-l-sm border-y border-l border-white/15 ${
          isHero ? 'top-[96px] w-[3px] h-[22px]' : 'top-[72px] w-[3px] h-[16px]'
        }`}
      />
      <span
        aria-hidden="true"
        style={{ background: 'linear-gradient(180deg, #3A3A48 0%, #2E2E3A 100%)' }}
        className={`absolute -left-[3px] rounded-l-sm border-y border-l border-white/15 ${
          isHero ? 'top-[136px] w-[3px] h-[44px]' : 'top-[102px] w-[3px] h-[32px]'
        }`}
      />
      <span
        aria-hidden="true"
        style={{ background: 'linear-gradient(180deg, #3A3A48 0%, #2E2E3A 100%)' }}
        className={`absolute -left-[3px] rounded-l-sm border-y border-l border-white/15 ${
          isHero ? 'top-[192px] w-[3px] h-[44px]' : 'top-[144px] w-[3px] h-[32px]'
        }`}
      />

      {/* Right side power button (sticking out 3px) */}
      <span
        aria-hidden="true"
        style={{ background: 'linear-gradient(180deg, #3A3A48 0%, #2E2E3A 100%)' }}
        className={`absolute -right-[3px] rounded-r-sm border-y border-r border-white/15 ${
          isHero ? 'top-[156px] w-[3px] h-[64px]' : 'top-[116px] w-[3px] h-[48px]'
        }`}
      />

      {/* Outer Graphite Titanium Frame */}
      <div
        style={{
          background: 'linear-gradient(145deg, #3A3A48 0%, #2E2E3A 100%)',
        }}
        className={`w-full h-full border border-white/15 shadow-[0_30px_60px_rgba(108,99,255,0.18),0_10px_20px_rgba(0,0,0,0.08)] ${
          isHero ? 'rounded-[48px] p-[11px]' : 'rounded-[38px] p-[9px]'
        }`}
      >
        {/* Inner Screen Canvas */}
        <div
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Inter", system-ui, sans-serif',
          }}
          className={`relative w-full h-full overflow-hidden flex flex-col ${screenBgClass} ${
            isHero ? 'rounded-[40px]' : 'rounded-[30px]'
          }`}
        >
          {/* Floating Dynamic Island */}
          <div
            aria-hidden="true"
            className={`absolute left-1/2 -translate-x-1/2 z-20 bg-[#2E2E3A] rounded-full ${
              isHero ? 'top-[10px] w-[90px] h-[26px]' : 'top-[8px] w-[68px] h-[20px]'
            }`}
          />

          {/* iOS Status Bar */}
          <div
            className={`relative z-10 flex items-center justify-between shrink-0 text-[#2E2E3A] ${
              isHero ? 'px-6 pt-[13px] pb-2' : 'px-4 pt-[10px] pb-1.5'
            }`}
          >
            <span
              className={`font-semibold tracking-tight tabular-nums ${
                isHero ? 'text-[14px]' : 'text-[11px]'
              }`}
            >
              9:41
            </span>

            <div className={`flex items-center ${isHero ? 'gap-1.5' : 'gap-1'}`} aria-hidden="true">
              {/* Cellular signal */}
              <svg
                viewBox="0 0 18 12"
                className={isHero ? 'w-[16px] h-[11px]' : 'w-[12px] h-[9px]'}
                fill="currentColor"
              >
                <rect x="1" y="8" width="2.5" height="3.5" rx="0.8" />
                <rect x="5" y="6" width="2.5" height="5.5" rx="0.8" />
                <rect x="9" y="3.5" width="2.5" height="8" rx="0.8" />
                <rect x="13" y="1" width="2.5" height="10.5" rx="0.8" />
              </svg>

              {/* Wi-Fi */}
              <svg
                viewBox="0 0 16 12"
                className={isHero ? 'w-[15px] h-[11px]' : 'w-[12px] h-[9px]'}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              >
                <path d="M1.5 4.2C5.2 0.8 10.8 0.8 14.5 4.2" />
                <path d="M4.2 7.2C6.4 5.1 9.6 5.1 11.8 7.2" />
                <circle cx="8" cy="10.2" r="1" fill="currentColor" stroke="none" />
              </svg>

              {/* Battery */}
              <svg
                viewBox="0 0 24 12"
                className={isHero ? 'w-[22px] h-[11px]' : 'w-[17px] h-[9px]'}
                fill="none"
              >
                <rect
                  x="0.75"
                  y="1.25"
                  width="19.5"
                  height="9.5"
                  rx="2.6"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeOpacity="0.45"
                />
                <rect x="2.3" y="2.8" width="15.2" height="6.4" rx="1.4" fill="currentColor" />
                <path
                  d="M21.5 4.2C22.2 4.5 22.6 5.2 22.6 6C22.6 6.8 22.2 7.5 21.5 7.8V4.2Z"
                  fill="currentColor"
                  fillOpacity="0.45"
                />
              </svg>
            </div>
          </div>

          {/* Screen App Content */}
          <div className={`relative z-10 flex-1 min-h-0 flex flex-col ${isHero ? 'pb-[20px]' : 'pb-[16px]'}`}>
            {children}
          </div>

          {/* Home Indicator (8px from bottom) */}
          <div
            aria-hidden="true"
            className={`absolute left-1/2 -translate-x-1/2 bottom-[8px] z-20 rounded-full bg-[#2E2E3A]/30 ${
              isHero ? 'w-[120px] h-[5px]' : 'w-[88px] h-[4px]'
            }`}
          />

          {/* Faint Diagonal Glass Reflection (0% -> 8% -> 0%) */}
          <div
            aria-hidden="true"
            style={{
              background:
                'linear-gradient(125deg, rgba(255,255,255,0) 22%, rgba(255,255,255,0.08) 48%, rgba(255,255,255,0) 74%)',
            }}
            className="pointer-events-none absolute inset-0 z-30"
          />
        </div>
      </div>
    </div>
  );
}
