import {
  ArrowRight,
  CalendarDays,
  HeartHandshake,
  ShieldCheck,
  Users,
} from "lucide-react";

import { doctor } from "../data/siteData";

const heroFeatures = [
  {
    icon: ShieldCheck,
    title: "Minimally Invasive",
    subtitle: "Techniques",
  },
  {
    icon: HeartHandshake,
    title: "Evidence-Based",
    subtitle: "Treatment",
  },
  {
    icon: Users,
    title: "Compassionate",
    subtitle: "Patient Care",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[560px] overflow-hidden bg-[#092f49] sm:min-h-[620px] lg:min-h-[680px]"
    >
      {/* =========================================================
          HERO BACKGROUND IMAGE
          IMPORTANT:
          Put the OT/surgeon image at:
          public/doctor-hero.jpg
      ========================================================= */}

      <img
        src="/doctor-hero.jpg"
        alt="Dr. Rahul Bhanja Chowdhury"
        className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
      />

      {/* =========================================================
          DARK BLUE GRADIENT
          Strong on left, lighter on right
      ========================================================= */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#052d48]/95 via-[#073d5d]/78 to-[#073d5d]/20" />

      {/* Extra left darkness for text readability */}
      <div className="absolute inset-y-0 left-0 w-[75%] bg-gradient-to-r from-[#042b45]/50 to-transparent" />

      {/* Bottom subtle fade */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#052c45]/35 to-transparent" />

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1440px] items-center px-6 pb-10 pt-[110px] sm:min-h-[620px] sm:px-10 sm:pt-[120px] lg:min-h-[680px] lg:px-12 xl:px-16">
        <div className="w-full max-w-[720px]">

          {/* SPECIALTY LINE */}

          <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="h-[1px] w-7 bg-white/80 sm:w-9" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/90 sm:text-[11px]">
              General Surgery
            </span>

            <span className="text-white/60">|</span>

            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/90 sm:text-[11px]">
              Minimally Invasive Surgery
            </span>
          </div>

          {/* =====================================================
              MAIN HEADING
          ===================================================== */}

          <h1 className="max-w-[700px] text-[40px] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-[52px] lg:text-[62px]">
            Advanced Surgical Care
            <br />
            for a{" "}
            <span className="text-[#55bce9]">
              Healthier Tomorrow
            </span>
          </h1>

          {/* =====================================================
              DOCTOR NAME
          ===================================================== */}

          <div className="mt-5">
            <h2 className="text-[22px] font-semibold leading-tight text-white sm:text-[28px]">
              {doctor.name}
            </h2>

            <p className="mt-1 text-[12px] font-medium leading-5 text-white/90 sm:text-[15px]">
              MBBS, MS (General Surgery), MRCS (Edin.), FMAS (AMASI)
            </p>

            <p className="text-[12px] leading-5 text-white/75 sm:text-[14px]">
              Consultant General &amp; Laparoscopic Surgeon
            </p>
          </div>

          {/* =====================================================
              THREE FEATURES
          ===================================================== */}

          <div className="mt-6 flex max-w-[610px]">
            {heroFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className={`flex flex-1 items-center gap-2.5 ${
                    index !== 0
                      ? "border-l border-white/30 pl-4 sm:pl-6"
                      : ""
                  } ${
                    index !== heroFeatures.length - 1
                      ? "pr-4 sm:pr-6"
                      : ""
                  }`}
                >
                  <Icon
                    size={25}
                    strokeWidth={1.35}
                    className="shrink-0 text-white"
                  />

                  <div>
                    <p className="text-[9px] font-semibold leading-4 text-white sm:text-[11px]">
                      {feature.title}
                    </p>

                    <p className="text-[9px] leading-4 text-white/75 sm:text-[11px]">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =====================================================
              BUTTONS
          ===================================================== */}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="/book-appointment"
              className="group inline-flex h-[46px] items-center justify-center gap-2 rounded-lg bg-[#0797dc] px-5 text-[12px] font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#0786c5] sm:h-[48px] sm:px-6 sm:text-[13px]"
            >
              <CalendarDays size={16} />

              <span>Book an Appointment</span>

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#about"
              className="group inline-flex h-[46px] items-center justify-center gap-2 rounded-lg border border-white/80 bg-transparent px-6 text-[12px] font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#0b3a58] sm:h-[48px] sm:text-[13px]"
            >
              <span>Know More</span>

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================
          QUOTE — RIGHT SIDE
      ========================================================= */}

      <div className="absolute right-[6%] top-[39%] z-10 hidden w-[230px] lg:block">
        <p className="font-serif text-[18px] italic leading-8 text-white">
          “Precision in surgery.
          <br />
          Compassion in care.”
        </p>
      </div>
    </section>
  );
}