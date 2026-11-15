import { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent, ReactNode, useState } from 'react';

interface RippleWave {
  id: number;
  x: number;
  y: number;
  size: number;
}

function useRipples() {
  const [ripples, setRipples] = useState<RippleWave[]>([]);

  const spawnRipple = (e: MouseEvent<HTMLElement>) => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX ? e.clientX - rect.left - size / 2 : rect.width / 2 - size / 2;
    const y = e.clientY ? e.clientY - rect.top - size / 2 : rect.height / 2 - size / 2;
    const id = Date.now() + Math.random();

    setRipples((prev) => [...prev.slice(-2), { id, x, y, size }]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 580);
  };

  return { ripples, spawnRipple };
}

interface RippleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  rippleColor?: string;
}

export function RippleButton({
  children,
  className = '',
  rippleColor = 'bg-white/35',
  onClick,
  ...props
}: RippleButtonProps) {
  const { ripples, spawnRipple } = useRipples();

  return (
    <button
      {...props}
      onClick={(e) => {
        spawnRipple(e);
        onClick?.(e);
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          aria-hidden="true"
          style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
          className={`pointer-events-none absolute rounded-full animate-ripple ${rippleColor}`}
        />
      ))}
    </button>
  );
}

interface RippleAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  rippleColor?: string;
}

export function RippleAnchor({
  children,
  className = '',
  rippleColor = 'bg-[#2E2E3A]/15',
  onClick,
  ...props
}: RippleAnchorProps) {
  const { ripples, spawnRipple } = useRipples();

  return (
    <a
      {...props}
      onClick={(e) => {
        spawnRipple(e);
        onClick?.(e);
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          aria-hidden="true"
          style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
          className={`pointer-events-none absolute rounded-full animate-ripple ${rippleColor}`}
        />
      ))}
    </a>
  );
}
