import {
  Activity,
  CircleDot,
  Cross,
  HeartPulse,
  Scissors,
  Stethoscope,
} from "lucide-react";

const expertiseItems = [
  {
    title: "Gallbladder &",
    subtitle: "Biliary Surgery",
    icon: CircleDot,
  },
  {
    title: "Appendicitis &",
    subtitle: "Emergency Surgery",
    icon: Cross,
  },
  {
    title: "Colorectal",
    subtitle: "Surgery",
    icon: Stethoscope,
  },
  {
    title: "Gastrointestinal Cancer",
    subtitle: "Surgery",
    icon: Activity,
  },
  {
    title: "Breast & Thyroid",
    subtitle: "Surgery",
    icon: HeartPulse,
  },
  {
    title: "Hernia",
    subtitle: "Surgery",
    icon: Scissors,
  },
  {
    title: "Minor Surgical",
    subtitle: "Procedures",
    icon: Scissors,
  },
];

export default function ExpertiseStrip() {
  return (
    <section
      id="expertise"
      className="relative border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7">

          {expertiseItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={`${item.title}-${index}`}
                href="#expertise-details"
                className={`
                  group
                  relative
                  flex
                  min-h-[105px]
                  flex-col
                  items-center
                  justify-center
                  px-3
                  py-4
                  text-center
                  transition-all
                  duration-300
                  hover:bg-[#f2f8fc]

                  ${
                    index !== expertiseItems.length - 1
                      ? "border-b border-r border-slate-200"
                      : ""
                  }

                  sm:min-h-[115px]
                  lg:border-b-0
                `}
              >

                {/* Icon */}
                <div
                  className="
                    mb-2
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    text-[#0b6095]
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:text-[#078dcc]
                  "
                >
                  <Icon
                    size={27}
                    strokeWidth={1.35}
                  />
                </div>


                {/* Title */}
                <p
                  className="
                    font-serif
                    text-[10px]
                    font-bold
                    leading-4
                    text-[#173f5d]
                    transition-colors
                    duration-300
                    group-hover:text-[#087fbd]
                    sm:text-[11px]
                  "
                >
                  {item.title}
                </p>


                {/* Subtitle */}
                <p
                  className="
                    font-serif
                    text-[9px]
                    font-medium
                    leading-4
                    text-slate-500
                    sm:text-[10px]
                  "
                >
                  {item.subtitle}
                </p>


                {/* Bottom hover indicator */}
                <span
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    bg-[#078dcc]
                    transition-all
                    duration-300
                    group-hover:w-12
                  "
                />

              </a>
            );
          })}

        </div>
      </div>
    </section>
  );
}