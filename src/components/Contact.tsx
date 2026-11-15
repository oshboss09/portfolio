import { Check, Copy, FileText, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import { PROFILE } from '../data/portfolio';
import { Reveal } from './Reveal';
import { RippleAnchor, RippleButton } from './Ripple';

interface ContactProps {
  onOpenCv: () => void;
}

export function Contact({ onOpenCv }: ContactProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback handled by mailto link
    }
  };

  return (
    <footer id="contact" className="bg-[#FAF9FF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-24 md:pb-16">
        <Reveal>
          <div className="bg-[#E9E5FF]/75 border border-[#6C63FF]/12 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-8 sm:p-12">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-wide text-[#6C63FF] mb-2">
                Contact
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E2E3A] tracking-tight [text-wrap:balance]">
                Let’s build clear, intuitive products together
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#5B5B6E] leading-relaxed">
                {PROFILE.contactStatement}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <RippleAnchor
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-[#2E2E3A] bg-[#FF8A80] rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:bg-[#ff766a] transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6C63FF]"
                >
                  <Mail className="w-4 h-4 text-[#2E2E3A]" aria-hidden="true" />
                  <span>Email me</span>
                </RippleAnchor>

                <RippleButton
                  type="button"
                  onClick={handleCopyEmail}
                  rippleColor="bg-[#6C63FF]/15"
                  className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-[#2E2E3A] bg-white border border-[#6C63FF]/15 rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-[#6C63FF]/40 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF]"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#2E9F83]" aria-hidden="true" />
                      <span className="text-[#2E2E3A]">Email copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#6C63FF]" aria-hidden="true" />
                      <span>{PROFILE.email}</span>
                    </>
                  )}
                </RippleButton>

                <RippleAnchor
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  rippleColor="bg-[#6C63FF]/15"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#6C63FF] bg-white border border-[#6C63FF]/15 rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-[#6C63FF]/40 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF]"
                >
                  <Linkedin className="w-4 h-4 text-[#6C63FF]" aria-hidden="true" />
                  <span>LinkedIn</span>
                </RippleAnchor>

                <RippleButton
                  type="button"
                  onClick={onOpenCv}
                  rippleColor="bg-[#6C63FF]/15"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#2E2E3A] bg-white border border-[#6C63FF]/15 rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-[#6C63FF]/40 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF]"
                >
                  <FileText className="w-4 h-4 text-[#6C63FF]" aria-hidden="true" />
                  <span>Download CV</span>
                </RippleButton>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 pt-6 border-t border-[#6C63FF]/12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#5B5B6E]">
          <p>© 2026 Oyeshi Das.</p>
          <p>Product Manager · Digital Products &amp; Platforms · Mumbai</p>
        </div>
      </div>
    </footer>
  );
}
