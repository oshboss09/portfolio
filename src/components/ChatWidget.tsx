import { ArrowUpRight, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { CHAT_PRESETS, ChatPreset } from '../data/portfolio';

interface ChatMessage {
  id: string;
  sender: 'user' | 'oyeshi';
  text: string;
  actionLabel?: string;
  actionHref?: string;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'oyeshi',
      text: 'Hi! Tap any question below for a quick answer from my portfolio.',
    },
  ]);

  const handleSelectPreset = (preset: ChatPreset) => {
    const timestamp = Date.now();
    setMessages((prev) => [
      ...prev,
      { id: `q-${timestamp}`, sender: 'user', text: preset.question },
      {
        id: `a-${timestamp}`,
        sender: 'oyeshi',
        text: preset.answer,
        actionLabel: preset.actionLabel,
        actionHref: preset.actionHref,
      },
    ]);
  };

  return (
    <div className="fixed bottom-18 right-4 md:bottom-6 md:right-6 z-40">
      {open && (
        <div
          role="dialog"
          aria-label="Quick Q&A assistant"
          className="mb-3 w-[calc(100vw-2rem)] max-w-sm bg-white border border-[#6C63FF]/15 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden"
        >
          {/* Header */}
          <div className="px-4 py-3 bg-[#E9E5FF]/60 border-b border-[#6C63FF]/12 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-[#2E2E3A]">Ask about Oyeshi</p>
              <p className="text-[11px] text-[#6C63FF] font-medium">
                Instant portfolio answers
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close quick chat"
              className="w-8 h-8 rounded-[12px] inline-flex items-center justify-center text-[#5B5B6E] hover:text-[#2E2E3A] hover:bg-white/70 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 max-h-64 overflow-y-auto space-y-3 bg-white">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-[16px] px-3.5 py-2.5 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#6C63FF] text-white font-medium'
                      : 'bg-[#FAF9FF] border border-[#6C63FF]/12 text-[#2E2E3A]'
                  }`}
                >
                  <p>{msg.text}</p>
                  {msg.actionHref && msg.actionLabel && (
                    <a
                      href={msg.actionHref}
                      onClick={() => setOpen(false)}
                      className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-[#6C63FF] hover:underline"
                    >
                      <span>{msg.actionLabel}</span>
                      <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 4 Preset Tap Chips */}
          <div className="p-3 bg-[#FAF9FF] border-t border-[#6C63FF]/12">
            <p className="text-[11px] font-semibold text-[#5B5B6E] mb-2">
              Quick questions:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {CHAT_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => handleSelectPreset(preset)}
                  className="px-2.5 py-1.5 text-xs font-semibold text-[#6C63FF] bg-white border border-[#6C63FF]/15 rounded-[16px] hover:bg-[#6C63FF] hover:text-white transition-colors cursor-pointer"
                >
                  {preset.question}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label={open ? 'Close Q&A chat widget' : 'Open Q&A chat widget'}
        className="ml-auto w-13 h-13 rounded-full bg-[#6C63FF] text-white shadow-[0_4px_20px_rgba(108,99,255,0.32)] hover:bg-[#5A52E8] transition-all duration-150 hover:scale-105 flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6C63FF]"
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>
    </div>
  );
}
