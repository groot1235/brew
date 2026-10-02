"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  Send,
  X,
  Bot,
  User,
  Coffee,
  Calendar,
  CheckCircle2,
  Clock,
  Leaf,
  Heart,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  action?: {
    type: "prefill_reserve" | "view_menu_vegan" | "scroll_to";
    targetId?: string;
    label: string;
    data?: any;
  };
  timestamp: string;
}

interface BrewConciergeAIProps {
  isOpen: boolean;
  onClose: () => void;
  onPrefillReserve: (data: any) => void;
}

export function BrewConciergeAI({
  isOpen,
  onClose,
  onPrefillReserve,
}: BrewConciergeAIProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "m0",
      sender: "bot",
      text: "Namaste & welcome to Brew Theory! I'm your digital barista & concierge. Looking for tasting notes, dietary options, or wanting to reserve an unhurried table?",
      timestamp: "Just now",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const quickPrompts = [
    { label: "🌱 Vegan options?", query: "What vegan options do you have?" },
    { label: "⏰ Open till when?", query: "What are your opening hours in Pune & Bangalore?" },
    { label: "🪑 Table for 4 on Saturday?", query: "Can I reserve a table for 4 on Saturday?" },
    { label: "☕ Best light roast pour-over?", query: "What is your best light-roast single origin pour-over?" },
    { label: "🐶 Are dogs allowed?", query: "Are pets allowed in Pune and Bangalore?" },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input.trim();
    if (!query) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    // Simulate barista intelligence
    setTimeout(() => {
      const botResponse = generateBaristaResponse(query);
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 600);
  };

  const getUpcomingSaturday = () => {
    const d = new Date();
    const day = d.getDay();
    const diff = (6 - day + 7) % 7 || 7; // days until next Saturday
    d.setDate(d.getDate() + diff);
    return d.toISOString().split("T")[0];
  };

  const generateBaristaResponse = (query: string): Message => {
    const q = query.toLowerCase();
    const timeNow = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    // 1. Vegan query
    if (q.includes("vegan") || q.includes("plant") || q.includes("dairy")) {
      return {
        id: `b-${Date.now()}`,
        sender: "bot",
        text: "We take plant-based craftsmanship seriously! Highlights from our kitchen:\n• Smoked Hass Avocado & Za’atar Mash on seeded sourdough\n• Coconut Chia Pudding & Seasonal Alphonso Bowl\n• Rosemary & Confit Garlic Focaccia Slab\n• All specialty coffees are crafted with oat, almond, or soy milk at no extra charge.\n• Plus our Cascara Sparkling Spritz & Cold Drips are 100% botanical.",
        action: {
          type: "scroll_to",
          targetId: "menu",
          label: "Browse Menu with Vegan Filter",
        },
        timestamp: timeNow,
      };
    }

    // 2. Open hours query
    if (q.includes("open") || q.includes("hours") || q.includes("timing") || q.includes("till")) {
      return {
        id: `b-${Date.now()}`,
        sender: "bot",
        text: "Here are our sanctuary timings:\n\n📍 Pune (Koregaon Park, Lane 7):\n7:30 AM – 10:30 PM daily\n\n📍 Bangalore (12th Main, Indiranagar):\n8:00 AM – 11:00 PM daily\n\n*Our kitchen serves hot brunch until 45 minutes before closing; the pour-over and dessert bar remains open till the end!",
        action: {
          type: "scroll_to",
          targetId: "visit",
          label: "View Location Details",
        },
        timestamp: timeNow,
      };
    }

    // 3. Table for 4 on Saturday query
    if (
      q.includes("saturday") ||
      q.includes("table for 4") ||
      q.includes("table for four") ||
      q.includes("reserve") ||
      q.includes("booking")
    ) {
      const satDate = getUpcomingSaturday();
      return {
        id: `b-${Date.now()}`,
        sender: "bot",
        text: `Saturday brunch is a beloved ritual at both Pune & Bangalore! For 4 guests, our sun-dappled courtyard under the trees or our breezy verandah is perfect. \n\nI can pre-fill your reservation for 4 on this Saturday (${satDate}) right now:`,
        action: {
          type: "prefill_reserve",
          targetId: "reserve",
          label: "Pre-fill Saturday Table for 4",
          data: {
            guests: 4,
            date: satDate,
            timeSlot: "11:00 AM - Prime Brunch",
            seating: "Sunlit Courtyard (Pet Friendly)",
            notes: "Booked via AI Concierge - preferred courtyard table for 4",
          },
        },
        timestamp: timeNow,
      };
    }

    // 4. Coffee / Pour-over queries
    if (q.includes("pour") || q.includes("coffee") || q.includes("roast") || q.includes("bean")) {
      return {
        id: `b-${Date.now()}`,
        sender: "bot",
        text: "Our prized crown right now is the Chikmagalur Honey-Sunburst Anaerobic Lot #4 (Bhadra Valley, 1,400m). It delivers dazzling notes of wild orange blossom honey, Meyer lemon, and white peach on V60.\n\nIf you prefer deep, chocolaty notes, our Mysore Peaberry Cortado or 18hr Monsoon Malabar Cold Drip is unmatched.",
        action: {
          type: "scroll_to",
          targetId: "menu",
          label: "Explore Coffee Menu",
        },
        timestamp: timeNow,
      };
    }

    // 5. Pets / Dogs query
    if (q.includes("dog") || q.includes("pet") || q.includes("cat")) {
      return {
        id: `b-${Date.now()}`,
        sender: "bot",
        text: "Absolutely! We adore our four-legged patrons. Both our Pune Koregaon Park verandah garden and Bangalore Indiranagar deck are 100% pet-friendly. We provide fresh chilled water bowls and house bone-broth biscuits on arrival!",
        action: {
          type: "scroll_to",
          targetId: "reserve",
          label: "Reserve a Pet-Friendly Table",
        },
        timestamp: timeNow,
      };
    }

    // 6. Default fallback
    return {
      id: `b-${Date.now()}`,
      sender: "bot",
      text: `Thank you for asking! At Brew Theory, we pride ourselves on single-origin transparency, 36-hour sourdough hearth bakes, and peaceful spaces in Pune and Bangalore. May I help you reserve a table, explore the tasting notes, or give you directions?`,
      action: {
        type: "scroll_to",
        targetId: "reserve",
        label: "Book a Table",
      },
      timestamp: timeNow,
    };
  };

  const handleActionClick = (action: Message["action"]) => {
    if (!action) return;

    if (action.type === "prefill_reserve" && action.data) {
      onPrefillReserve(action.data);
      onClose();
      const el = document.getElementById("reserve");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (action.type === "scroll_to" && action.targetId) {
      onClose();
      const el = document.getElementById(action.targetId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:p-6 bg-[#140D09]/50 backdrop-blur-sm animate-fadeIn"
    >
      <div className="w-full sm:max-w-md h-[90vh] sm:h-[620px] bg-[#FAF7F2] rounded-t-3xl sm:rounded-3xl shadow-2xl border border-[#EADECF] flex flex-col overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="bg-[#1E130D] text-[#FAF7F2] p-4 sm:p-5 flex items-center justify-between border-b border-[#2C1D17]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D95D39] text-[#FAF7F2] flex items-center justify-center shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg font-bold">Brew Concierge</h3>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                  Online
                </span>
              </div>
              <p className="text-[11px] text-[#DFCFC0]/80 font-mono">
                Barista Intelligence · Pune &amp; BLR
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-[#DFCFC0] hover:text-[#FAF7F2] transition-colors cursor-pointer"
            aria-label="Close concierge"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick prompt pills */}
        <div className="px-4 py-2.5 bg-[#EDE5D8]/70 border-b border-[#D8C7B5]/60 overflow-x-auto whitespace-nowrap space-x-2 flex">
          {quickPrompts.map((p, i) => (
            <button
              key={i}
              onClick={() => handleSend(p.query)}
              className="text-[11px] px-3 py-1 rounded-full bg-[#FAF7F2] hover:bg-[#D95D39] text-[#1E130D] hover:text-[#FAF7F2] border border-[#D8C7B5] transition-all cursor-pointer font-medium shrink-0"
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Message Stream */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                  m.sender === "user"
                    ? "bg-[#D95D39] text-[#FAF7F2] rounded-br-xs"
                    : "bg-[#F4EFE6] text-[#1E130D] border border-[#EADECF] rounded-bl-xs shadow-sm"
                }`}
              >
                <p className="whitespace-pre-line">{m.text}</p>

                {/* Optional action card */}
                {m.action && (
                  <div className="mt-3 pt-3 border-t border-[#EADECF]">
                    <button
                      onClick={() => handleActionClick(m.action)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#1E130D] hover:bg-[#D95D39] text-[#FAF7F2] text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer font-semibold shadow-sm"
                    >
                      <span>{m.action.label}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
              <span className="text-[10px] text-[#785646]/70 mt-1 px-1 font-mono">
                {m.timestamp}
              </span>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-[#785646] font-mono italic">
              <span className="w-2 h-2 rounded-full bg-[#D95D39] animate-bounce" />
              <span>Barista is thinking...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat input box */}
        <div className="p-3 bg-[#FAF7F2] border-t border-[#EADECF]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about roasts, tables, vegan bakes..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-full border border-[#D8C7B5] bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D95D39]"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-full bg-[#D95D39] hover:bg-[#C24D2A] disabled:opacity-40 text-[#FAF7F2] transition-colors cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="text-[10px] text-center text-[#785646]/80 mt-1 font-mono">
            Trained on Brew Theory menu, single-origin sourcing &amp; cafe hours
          </div>
        </div>
      </div>
    </div>
  );
}
