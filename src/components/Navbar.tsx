import { RippleButton } from './Ripple';

interface NavbarProps {
  onOpenCv: () => void;
}

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Impact', href: '#impact' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ onOpenCv }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF9FF]/90 backdrop-blur-md border-b border-[#6C63FF]/12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-6 lg:gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="font-serif text-lg sm:text-xl font-semibold tracking-tight text-[#2E2E3A] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF] rounded-2xl"
        >
          Oyeshi Das
        </a>

        {/* Zone 2: Clean single-line text navigation links on desktop */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-medium text-[#5B5B6E]"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:text-[#6C63FF] hover:border-[#6C63FF]/40 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF] rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action */}
        <div className="flex items-center shrink-0">
          <RippleButton
            type="button"
            onClick={onOpenCv}
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#6C63FF] rounded-[16px] hover:bg-[#5A52E8] shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6C63FF]"
          >
            Download CV
          </RippleButton>
        </div>
      </div>
    </header>
  );
}
