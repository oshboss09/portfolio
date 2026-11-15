import { Briefcase, Home, Mail, Smartphone } from 'lucide-react';
import { useEffect, useState } from 'react';

const TAB_ITEMS = [
  { id: 'top', label: 'Home', href: '#top', icon: Home },
  { id: 'experience', label: 'Work', href: '#experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', href: '#projects', icon: Smartphone },
  { id: 'contact', label: 'Contact', href: '#contact', icon: Mail },
];

export function MobileBottomBar() {
  const [activeId, setActiveId] = useState('top');

  useEffect(() => {
    const sections = TAB_ITEMS.map((t) => document.getElementById(t.id)).filter(
      Boolean
    ) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -50% 0px' }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Mobile bottom navigation"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#6C63FF]/12 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
    >
      <div className="grid grid-cols-4 h-14 max-w-md mx-auto">
        {TAB_ITEMS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeId === tab.id;
          return (
            <a
              key={tab.id}
              href={tab.href}
              onClick={() => setActiveId(tab.id)}
              className={`flex flex-col items-center justify-center gap-0.5 text-[11px] font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#6C63FF] ${
                isActive ? 'text-[#6C63FF]' : 'text-[#5B5B6E] hover:text-[#2E2E3A]'
              }`}
            >
              <Icon className="w-4 h-4" aria-hidden="true" />
              <span>{tab.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
