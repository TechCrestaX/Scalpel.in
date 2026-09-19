const expertiseItems = [
  {
    title: "Gastrointestinal",
    subtitle: "Surgery",
    image: "/expertise/gastrointestinal.png",
  },
  {
    title: "Gallbladder &",
    subtitle: "Biliary Surgery",
    image: "/expertise/gallbladder-biliary.png",
  },
  {
    title: "Colorectal",
    subtitle: "Surgery",
    image: "/expertise/colorectal.png",
  },
  {
    title: "Breast & Thyroid",
    subtitle: "Surgery",
    image: "/expertise/breast-thyroid.png",
  },
  {
    title: "Hernia",
    subtitle: "Surgery",
    image: "/expertise/hernia.png",
  },
  {
    title: "Appendicitis &",
    subtitle: "Emergency Surgery",
    image: "/expertise/appendicitis-emergency.png",
  },
  {
    title: "Minor Surgical",
    subtitle: "Procedures",
    image: "/expertise/minor-surgical.png",
  },
  {
    title: "General Surgery",
    subtitle: "Procedures",
    image: "/expertise/general-surgery.png",
  },
];

export default function ExpertiseStrip() {
  return (
    <section
      id="expertise"
      className="relative w-full border-b border-[#dce5eb] bg-white"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
          {expertiseItems.map((item, index) => (
            <a
              key={`${item.title}-${index}`}
              href="#expertise-details"
              className={`
                group
                relative
                flex
                min-h-[120px]
                flex-col
                items-center
                justify-center
                border-[#dce5eb]
                bg-white
                px-2
                py-4
                text-center
                transition-all
                duration-300
                hover:bg-[#f7fbfd]

                /* Mobile */
                ${index % 2 !== 1 ? "border-r" : ""}
                ${index < 6 ? "border-b" : ""}

                /* Tablet */
                sm:min-h-[125px]
                sm:border-r
                sm:border-b
                sm:[&:nth-child(4n)]:border-r-0

                /* Desktop */
                lg:min-h-[120px]
                lg:border-b-0
                lg:border-r
                lg:[&:nth-child(4n)]:border-r
                lg:[&:last-child]:border-r-0
              `}
            >
              {/* =================================================
                  EXACT REFERENCE ICON
              ================================================= */}

              <div className="mb-2 flex h-[45px] w-[68px] items-center justify-center">
                <img
                  src={item.image}
                  alt={`${item.title} ${item.subtitle}`}
                  className="
                    h-[42px]
                    w-[60px]
                    object-contain
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                  "
                />
              </div>

              {/* =================================================
                  TITLE
              ================================================= */}

              <p
                className="
                  font-serif
                  text-[9px]
                  font-semibold
                  leading-[1.35]
                  text-[#263d91]
                  transition-colors
                  duration-300
                  group-hover:text-[#087fbd]
                  sm:text-[10px]
                "
              >
                {item.title}
              </p>

              {/* =================================================
                  SUBTITLE
              ================================================= */}

              <p
                className="
                  font-serif
                  text-[8px]
                  font-medium
                  leading-[1.4]
                  text-[#4d6280]
                  sm:text-[9px]
                "
              >
                {item.subtitle}
              </p>

              {/* =================================================
                  HOVER INDICATOR
              ================================================= */}

              <span
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-[2px]
                  w-0
                  -translate-x-1/2
                  bg-[#087fbd]
                  transition-all
                  duration-300
                  group-hover:w-10
                "
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}