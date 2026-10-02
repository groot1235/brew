"use client";

import React, { useState, useEffect } from "react";
import { LOCATIONS, LocationDetail } from "./data/cafeData";
import { MagneticButton } from "./MagneticButton";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Users,
  Calendar as CalendarIcon,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass,
} from "lucide-react";

interface ReservationState {
  location: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  guests: number;
  seating: string;
  notes: string;
}

interface VisitAndReserveProps {
  prefilledData?: Partial<ReservationState> | null;
}

export function VisitAndReserve({ prefilledData }: VisitAndReserveProps) {
  const [selectedCity, setSelectedCity] = useState<"pune" | "bangalore">("pune");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  // Default date: tomorrow
  const getTomorrowDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  };

  const [form, setForm] = useState<ReservationState>({
    location: "pune",
    name: "",
    email: "",
    phone: "",
    date: getTomorrowDate(),
    timeSlot: "11:00 AM",
    guests: 2,
    seating: "Sunlit Courtyard",
    notes: "",
  });

  // Watch for incoming prefill from AI Concierge
  useEffect(() => {
    if (prefilledData) {
      setForm((prev) => ({
        ...prev,
        ...prefilledData,
      }));
      if (prefilledData.location === "pune" || prefilledData.location === "bangalore") {
        setSelectedCity(prefilledData.location);
      }
    }
  }, [prefilledData]);

  const activeLocation = LOCATIONS.find((l) => l.id === selectedCity) || LOCATIONS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      alert("Please provide your name and contact phone number.");
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const code = `BT-${form.location.substring(0, 3).toUpperCase()}-${randomNum}`;
    setBookingRef(code);
    setIsSubmitted(true);
  };

  const timeSlots = [
    "08:00 AM - Morning Quiet",
    "09:30 AM - Breakfast Rush",
    "11:00 AM - Prime Brunch",
    "01:00 PM - Afternoon Light",
    "03:30 PM - Pour-Over Hour",
    "05:30 PM - Golden Hour",
    "07:30 PM - Evening Hearth",
    "09:00 PM - Late Coffee",
  ];

  const seatingAreas = [
    "Sunlit Courtyard (Pet Friendly)",
    "Breezy Covered Verandah",
    "Pour-Over Bar Counter",
    "Quiet Library Corner",
  ];

  return (
    <section id="visit" className="py-24 sm:py-32 bg-[#F4EFE6] text-[#1E130D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D95D39] font-semibold flex items-center gap-2">
            <Compass className="w-3.5 h-3.5" />
            Visit Us &amp; Secure Your Spot
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#140D09] tracking-tight">
            A table waiting, <br />
            <span className="italic font-serif font-light text-[#5C4033]">
              fresh coffee on the flame.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#5C4033] font-light leading-relaxed">
            Walk-ins are warmly welcomed throughout the day. For slow weekend brunches or larger party gatherings, we recommend reserving a table in advance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Location Cards & Hours */}
          <div className="lg:col-span-5 space-y-6">
            {/* City Selector Tabs */}
            <div className="flex p-1 bg-[#EADECF] rounded-xl border border-[#D8C7B5]">
              <button
                onClick={() => {
                  setSelectedCity("pune");
                  setForm((f) => ({ ...f, location: "pune" }));
                }}
                className={`flex-1 py-3 px-4 rounded-lg font-serif text-sm sm:text-base transition-all cursor-pointer ${
                  selectedCity === "pune"
                    ? "bg-[#1E130D] text-[#FAF7F2] shadow-sm font-semibold"
                    : "text-[#5C4033] hover:text-[#1E130D]"
                }`}
              >
                Pune · Koregaon Park
              </button>
              <button
                onClick={() => {
                  setSelectedCity("bangalore");
                  setForm((f) => ({ ...f, location: "bangalore" }));
                }}
                className={`flex-1 py-3 px-4 rounded-lg font-serif text-sm sm:text-base transition-all cursor-pointer ${
                  selectedCity === "bangalore"
                    ? "bg-[#1E130D] text-[#FAF7F2] shadow-sm font-semibold"
                    : "text-[#5C4033] hover:text-[#1E130D]"
                }`}
              >
                Bangalore · Indiranagar
              </button>
            </div>

            {/* Active Location Detail Card */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-[#EADECF] shadow-sm space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#D95D39] font-bold">
                    Primary Sanctuary
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#140D09]">
                    {activeLocation.name}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Open Now
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#3E2A21]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D95D39] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#140D09]">{activeLocation.address}</p>
                    <p className="text-[#785646] text-xs">{activeLocation.landmark}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#D95D39] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#140D09]">{activeLocation.hours}</p>
                    <p className="text-[#785646] text-xs">Kitchen closes 45 mins prior</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#D95D39] shrink-0" />
                  <a
                    href={`tel:${activeLocation.phone}`}
                    className="hover:text-[#D95D39] transition-colors"
                  >
                    {activeLocation.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#D95D39] shrink-0" />
                  <a
                    href={`mailto:${activeLocation.email}`}
                    className="hover:text-[#D95D39] transition-colors"
                  >
                    {activeLocation.email}
                  </a>
                </div>
              </div>

              {/* Vibe note */}
              <div className="p-4 rounded-xl bg-[#EDE5D8]/60 border border-[#D8C7B5]/60 text-xs text-[#5C4033] italic">
                &ldquo;{activeLocation.vibe}&rdquo;
              </div>

              {/* Amenities tags */}
              <div className="space-y-2 pt-2 border-t border-[#EADECF]">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#785646]">
                  Key Amenities
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeLocation.amenities.map((amenity, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-[#EADECF]/50 text-[#3E2A21] text-[11px] font-medium border border-[#D8C7B5]/50"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Reserve a Table Form */}
          <div
            id="reserve"
            className="lg:col-span-7 bg-[#FAF7F2] rounded-2xl p-6 sm:p-10 border border-[#EADECF] shadow-xl relative"
          >
            {isSubmitted ? (
              <div className="py-12 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-300">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#D95D39] font-bold">
                    Reservation Confirmed
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-[#140D09]">
                    We&apos;re saving a table for you!
                  </h3>
                  <p className="text-sm text-[#5C4033] max-w-md mx-auto">
                    A confirmation SMS &amp; email has been dispatched with your reservation details.
                  </p>
                </div>

                {/* Booking summary card */}
                <div className="max-w-md mx-auto p-5 rounded-xl bg-[#F4EFE6] border border-[#EADECF] text-left text-xs sm:text-sm space-y-2.5 font-mono">
                  <div className="flex justify-between pb-2 border-b border-[#EADECF]">
                    <span className="text-[#785646]">Reference:</span>
                    <span className="font-bold text-[#D95D39]">{bookingRef}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#785646]">Guest Name:</span>
                    <span className="font-semibold text-[#140D09]">{form.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#785646]">Outpost:</span>
                    <span className="font-semibold text-[#140D09]">
                      {form.location === "pune" ? "Pune (Koregaon Park)" : "Bangalore (Indiranagar)"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#785646]">Date &amp; Time:</span>
                    <span className="font-semibold text-[#140D09]">
                      {form.date} · {form.timeSlot}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#785646]">Party Size:</span>
                    <span className="font-semibold text-[#140D09]">{form.guests} Guests</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#785646]">Seating:</span>
                    <span className="font-semibold text-[#140D09]">{form.seating}</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#1E130D] text-[#FAF7F2] text-xs font-mono uppercase tracking-wider hover:bg-[#D95D39] transition-colors cursor-pointer"
                  >
                    Make Another Booking
                  </button>
                  <a
                    href="#menu"
                    className="px-6 py-2.5 rounded-full border border-[#D8C7B5] text-[#1E130D] text-xs font-mono uppercase tracking-wider hover:bg-[#EADECF] transition-colors inline-block"
                  >
                    View Menu in the Meantime
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-[#EADECF] pb-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#140D09]">
                      Table Reservation
                    </h3>
                    <p className="text-xs text-[#785646]">
                      Instant confirmation · No booking fee
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#D95D39] flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" /> Best Table Guarantee
                  </span>
                </div>

                {/* Location Selection */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#3E2A21] font-semibold">
                    Select Cafe Outpost
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setForm((f) => ({ ...f, location: "pune" }));
                        setSelectedCity("pune");
                      }}
                      className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                        form.location === "pune"
                          ? "border-[#D95D39] bg-[#FFE4D9]/40 text-[#1E130D] font-bold"
                          : "border-[#EADECF] bg-[#FAF7F2] text-[#5C4033]"
                      }`}
                    >
                      <div className="font-serif text-base">Pune Roastery</div>
                      <div className="text-[11px] text-[#785646]">Lane 7, Koregaon Park</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setForm((f) => ({ ...f, location: "bangalore" }));
                        setSelectedCity("bangalore");
                      }}
                      className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                        form.location === "bangalore"
                          ? "border-[#D95D39] bg-[#FFE4D9]/40 text-[#1E130D] font-bold"
                          : "border-[#EADECF] bg-[#FAF7F2] text-[#5C4033]"
                      }`}
                    >
                      <div className="font-serif text-base">Bangalore Sanctuary</div>
                      <div className="text-[11px] text-[#785646]">12th Main, Indiranagar</div>
                    </button>
                  </div>
                </div>

                {/* Contact Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#3E2A21] font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Atharva Joshi"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D8C7B5] bg-[#FAF7F2] text-sm focus:outline-none focus:ring-2 focus:ring-[#D95D39]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#3E2A21] font-medium">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D8C7B5] bg-[#FAF7F2] text-sm focus:outline-none focus:ring-2 focus:ring-[#D95D39]"
                    />
                  </div>
                </div>

                {/* Date, Time, Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#3E2A21] font-medium">
                      Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={form.date}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-[#D8C7B5] bg-[#FAF7F2] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D95D39]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#3E2A21] font-medium">
                      Time Slot
                    </label>
                    <select
                      value={form.timeSlot}
                      onChange={(e) => setForm({ ...form, timeSlot: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#D8C7B5] bg-[#FAF7F2] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D95D39]"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#3E2A21] font-medium">
                      Number of Guests
                    </label>
                    <div className="flex items-center border border-[#D8C7B5] rounded-xl overflow-hidden bg-[#FAF7F2]">
                      <button
                        type="button"
                        onClick={() =>
                          setForm((f) => ({ ...f, guests: Math.max(1, f.guests - 1) }))
                        }
                        className="px-3 py-2 text-sm font-bold hover:bg-[#EADECF] text-[#1E130D]"
                      >
                        -
                      </button>
                      <span className="flex-1 text-center font-mono font-semibold text-sm">
                        {form.guests} {form.guests === 1 ? "Person" : "Guests"}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setForm((f) => ({ ...f, guests: Math.min(12, f.guests + 1) }))
                        }
                        className="px-3 py-2 text-sm font-bold hover:bg-[#EADECF] text-[#1E130D]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Seating preference */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#3E2A21] font-medium">
                    Seating Atmosphere
                  </label>
                  <select
                    value={form.seating}
                    onChange={(e) => setForm({ ...form, seating: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D8C7B5] bg-[#FAF7F2] text-sm focus:outline-none focus:ring-2 focus:ring-[#D95D39]"
                  >
                    {seatingAreas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Special Notes */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#3E2A21] font-medium">
                    Special Notes / Dietary / Pet Details (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Bringing our golden retriever, celebrating birthday, vegan options..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D8C7B5] bg-[#FAF7F2] text-sm focus:outline-none focus:ring-2 focus:ring-[#D95D39]"
                  />
                </div>

                {/* Magnetic Reserve Button */}
                <div className="pt-2">
                  <MagneticButton
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#D95D39] hover:bg-[#C24D2A] text-[#FAF7F2] font-medium uppercase tracking-wider text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <CalendarIcon className="w-4 h-4" />
                      Confirm Table Reservation
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </MagneticButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
