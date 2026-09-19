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
      className="
        relative
        isolate
        w-full
        max-w-full
        overflow-x-hidden
        overflow-y-hidden
        bg-[#092f49]
        min-h-[720px]
        sm:min-h-[680px]
        lg:min-h-[680px]
      "
    >
      {/* =========================================================
          HERO BACKGROUND IMAGE

          Mobile:
          - Keep face visible
          - Position image slightly toward right/top

          Desktop:
          - Wider composition
      ========================================================= */}

      <img
        src="/doctor-about.jpg"
        alt="Dr. Rahul Bhanja Chowdhury"
        className="
          absolute
          inset-0
          h-full
          w-full
          max-w-full
          object-cover
          object-[72%_12%]
          sm:object-[72%_15%]
          lg:object-[70%_15%]
        "
      />

      {/* =========================================================
          DARK BLUE OVERLAY
      ========================================================= */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#052d48]/95
          via-[#073d5d]/80
          to-[#073d5d]/35
        "
      />

      {/* Mobile extra overlay */}
      <div
        className="
          absolute
          inset-0
          bg-[#052f49]/20
          sm:hidden
        "
      />

      {/* Extra left darkness */}
      <div
        className="
          absolute
          inset-y-0
          left-0
          w-full
          sm:w-[75%]
          bg-gradient-to-r
          from-[#042b45]/60
          via-[#042b45]/25
          to-transparent
        "
      />

      {/* Bottom fade */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-32
          bg-gradient-to-t
          from-[#052c45]/60
          to-transparent
        "
      />

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[1440px]
          min-w-0
          items-center
          px-5
          pb-10
          pt-[105px]
          sm:min-h-[680px]
          sm:px-10
          sm:pb-12
          sm:pt-[120px]
          lg:min-h-[680px]
          lg:px-12
          xl:px-16
        "
      >
        <div
          className="
            w-full
            min-w-0
            max-w-[720px]
          "
        >
          {/* =====================================================
              SPECIALTY LINE
          ===================================================== */}

          <div
            className="
              mb-5
              flex
              min-w-0
              flex-wrap
              items-center
              gap-x-2
              gap-y-1.5
              sm:mb-4
              sm:gap-x-3
            "
          >
            <span className="h-[1px] w-7 shrink-0 bg-white/80 sm:w-9" />

            <span
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white/90
                sm:text-[11px]
                sm:tracking-[0.25em]
              "
            >
              General Surgery
            </span>

            <span className="shrink-0 text-white/60">
              |
            </span>

            <span
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white/90
                sm:text-[11px]
                sm:tracking-[0.25em]
              "
            >
              Minimally Invasive Surgery
            </span>
          </div>

          {/* =====================================================
              MAIN HEADING

              Smaller on mobile so NOTHING overflows.
          ===================================================== */}

          <h1
            className="
              w-full
              max-w-[700px]
              break-words
              text-[35px]
              font-semibold
              leading-[1.06]
              tracking-[-0.035em]
              text-white

              sm:text-[52px]
              sm:leading-[1.02]
              sm:tracking-[-0.045em]

              lg:text-[62px]
            "
          >
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

          <div className="mt-6 min-w-0 sm:mt-5">
            <h2
              className="
                break-words
                text-[21px]
                font-semibold
                leading-[1.2]
                text-white

                sm:text-[28px]
              "
            >
              {doctor.name}
            </h2>

            <p
              className="
                mt-2
                break-words
                text-[10px]
                font-medium
                leading-5
                text-white/90

                sm:text-[15px]
              "
            >
              MBBS, MS (General Surgery), MRCS (Edinburgh), FMAS (AMASI)
            </p>

            <p
              className="
                break-words
                text-[10px]
                leading-5
                text-white/75

                sm:text-[14px]
              "
            >
              Consultant General &amp; Laparoscopic Surgeon
            </p>
          </div>

          {/* =====================================================
              FEATURES

              IMPORTANT:
              Mobile = vertical cards
              Desktop = horizontal cards
          ===================================================== */}

          <div
            className="
              mt-7
              grid
              w-full
              min-w-0
              grid-cols-1
              gap-4

              sm:mt-6
              sm:grid-cols-3
              sm:gap-0
            "
          >
            {heroFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className={`
                    flex
                    min-w-0
                    items-center
                    gap-3

                    ${
                      index !== 0
                        ? "sm:border-l sm:border-white/30 sm:pl-5 lg:pl-6"
                        : ""
                    }

                    ${
                      index !== heroFeatures.length - 1
                        ? "sm:pr-5 lg:pr-6"
                        : ""
                    }
                  `}
                >
                  {/* Icon */}
                  <Icon
                    size={25}
                    strokeWidth={1.35}
                    className="
                      h-6
                      w-6
                      shrink-0
                      text-white
                    "
                  />

                  {/* Text */}
                  <div className="min-w-0">
                    <p
                      className="
                        break-words
                        text-[10px]
                        font-semibold
                        leading-4
                        text-white
                        sm:text-[11px]
                      "
                    >
                      {feature.title}
                    </p>

                    <p
                      className="
                        text-[9px]
                        leading-4
                        text-white/75
                        sm:text-[11px]
                      "
                    >
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

          <div
            className="
              mt-8
              flex
              w-full
              min-w-0
              flex-col
              gap-3

              sm:flex-row
              sm:gap-3
            "
          >
            {/* Appointment */}
            <a
              href="/book-appointment"
              className="
                group
                inline-flex
                h-[48px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-[#aac9d7]
                px-5
                text-[12px]
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:bg-[#0786c5]

                sm:w-auto
                sm:px-6
                sm:text-[13px]
              "
            >
              <CalendarDays
                size={16}
                className="shrink-0"
              />

              <span>
                Book an Appointment
              </span>

              <ArrowRight
                size={15}
                className="
                  shrink-0
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

            {/* Know More */}
            <a
              href="#about"
              className="
                group
                inline-flex
                h-[48px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-lg
                border
                border-white/80
                bg-white
                px-6
                text-[12px]
                font-semibold
                text-[#0b3a58]
                transition-all
                duration-300
                hover:bg-amber-100

                sm:w-auto
                sm:text-[13px]
              "
            >
              <span>
                Know More
              </span>

              <ArrowRight
                size={15}
                className="
                  shrink-0
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================
          QUOTE — DESKTOP ONLY
      ========================================================= */}

      <div
        className="
          absolute
          right-[6%]
          top-[39%]
          z-10
          hidden
          w-[230px]
          lg:block
        "
      >
        <p className="font-serif text-[18px] italic leading-8 text-white">
          “Precision in surgery.
          <br />
          Compassion in care.”
        </p>
      </div>
    </section>
  );
}