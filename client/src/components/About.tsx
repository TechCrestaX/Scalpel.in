import {
  Award,
  GraduationCap,
  Hospital,
  Medal,
  Star,
} from "lucide-react";


export default function About() {
  return (
    <section
      id="about"
      className="m-0 w-full bg-white p-0"
    >
      <div className="m-0 w-full p-0">

        <div className="m-0 w-full overflow-hidden border-y border-[#d9e4eb] bg-white">

          <div className="grid w-full lg:grid-cols-[360px_minmax(0,1fr)_360px]">

            {/* LEFT IMAGE */}
            <div className="relative min-h-[450px] overflow-hidden bg-[#e6edf1] sm:min-h-[520px] lg:min-h-[620px]">
              <img
                src="/doctor-hero.jpg"
                alt="Dr. Rahul Bhanja Chowdhury"
                className="absolute inset-0 h-full w-full object-cover object-top"
                onError={(event) => {
                  const image = event.currentTarget;

                  if (!image.src.endsWith("/doctor-hero.jpg")) {
                    image.src = "/doctor-hero.jpg";
                  }
                }}
              />

              <div className="absolute inset-x-0 bottom-0 h-[210px] bg-gradient-to-t from-[#062e49] via-[#062e49]/75 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <div className="mb-3 h-[2px] w-10 bg-[#42b7e7]" />

                <p className="font-serif text-[16px] font-semibold leading-[1.45]">
                  Commitment to
                  <br />
                  Safe Surgery, Faster Recovery
                  <br />
                  and Better Lives.
                </p>
              </div>
            </div>

            {/* CENTER ABOUT */}
            <div className="flex flex-col px-8 py-9 sm:px-10 lg:px-12 lg:py-10">

              <div className="mb-6">
      

                <h2 className="font-serif text-[32px] font-bold leading-tight tracking-[-0.03em] text-[#123f61] sm:text-[36px]">
                  About Dr. R B Chowdhury
                </h2>
              </div>

              <div className="space-y-4 text-[12px] leading-[1.8] text-[#536c7e] lg:text-[13px]">

                <p>
                  Dr. Rahul Bhanja Chowdhury is a{" "}
                  <strong className="font-semibold text-[#173f5d]">
                    new-generation Consultant General and Laparoscopic Surgeon
                  </strong>{" "}
                  known for his modern, patient-centric approach and commitment
                  to technologically advanced surgical care. He combines strong
                  clinical expertise with minimally invasive techniques,
                  evidence-based practice, and contemporary surgical technology
                  to ensure better outcomes, faster recovery, and an improved
                  quality of life for his patients.
                </p>

                <p>
                  He completed his{" "}
                  <strong className="font-semibold text-[#173f5d]">
                    MBBS from SSKM Hospital, Kolkata
                  </strong>
                  , and{" "}
                  <strong className="font-semibold text-[#173f5d]">
                    MS in General Surgery from NRS Medical College, Kolkata
                  </strong>
                  . He obtained his{" "}
                  <strong className="font-semibold text-[#173f5d]">
                    MRCS (Edinburgh)
                  </strong>{" "}
                  from the Royal College of Surgeons of Edinburgh, UK, and
                  completed a{" "}
                  <strong className="font-semibold text-[#173f5d]">
                    Fellowship in Minimal Access Surgery (FMAS)
                  </strong>{" "}
                  from the Association of Minimal Access Surgeons of India
                  (AMASI).
                </p>

                <p>
                  Dr. Chowdhury has worked in{" "}
                  <strong className="font-semibold text-[#173f5d]">
                    multiple Government and Private high-volume centres in
                    Kolkata
                  </strong>
                  , gaining extensive experience in advanced laparoscopic
                  surgery, complex gastrointestinal and thoracic procedures,
                  and exposure to{" "}
                  <strong className="font-semibold text-[#173f5d]">
                    robotic surgery and contemporary minimally invasive
                    techniques
                  </strong>
                  .
                </p>

                <p>
                  As a{" "}
                  <strong className="font-semibold text-[#173f5d]">
                    technologically sound and professionally driven surgeon
                  </strong>
                  , he believes in continuously updating his knowledge and
                  surgical skills to remain at the forefront of modern surgical
                  practice.
                </p>

                <p>
                  His approach combines{" "}
                  <strong className="font-semibold text-[#173f5d]">
                    technology, precision, evidence-based decision-making,
                    personalized treatment planning, and compassionate patient
                    care
                  </strong>
                  , with the goal of providing safe, effective, and
                  contemporary surgical treatment.
                </p>

              </div>
            </div>

            {/* RIGHT QUALIFICATIONS */}
            <aside className="border-t border-[#d9e4eb] bg-[#f6fafc] px-8 py-9 lg:border-l lg:border-t-0 lg:px-9 lg:py-10">

              <div className="mb-8">
                <div className="mb-2 flex items-center gap-2.5">
                  <span className="h-[2px] w-9 bg-[#078dcc]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#078dcc]">
                    Qualifications
                  </span>
                </div>

                <h3 className="font-serif text-[27px] font-bold text-[#123f61]">
                  &amp; Training
                </h3>
              </div>

              <Qualification
                icon={<GraduationCap size={19} />}
                title="MBBS"
                description="SSKM Hospital, Kolkata"
              />

              <Qualification
                icon={<Hospital size={19} />}
                title="MS (General Surgery)"
                description="NRS Medical College, Kolkata"
              />

              <Qualification
                icon={<Medal size={19} />}
                title="MRCS (Edinburgh)"
                description="Royal College of Surgeons of Edinburgh, UK"
              />

              <Qualification
                icon={<Award size={19} />}
                title="Fellowship in Minimal Access Surgery (FMAS)"
                description="Association of Minimal Access Surgeons of India (AMASI)"
              />

              <div className="mt-8 border-t border-[#d9e4eb] pt-6">
                <p className="font-serif text-[16px] italic leading-6 text-[#078dcc]">
                  “Better techniques.
                  <br />
                  Brighter tomorrows.”
                </p>
              </div>

            </aside>
          </div>

          {/* PROFESSIONAL STATISTICS */}
          <div className="w-full border-t border-[#d9e4eb] bg-white">

            <div className="flex items-center gap-3 px-8 py-5 lg:px-12">
              <span className="h-[2px] w-9 bg-[#078dcc]" />

              <h3 className="font-serif text-[12px] font-bold uppercase tracking-[0.16em] text-[#173f5d]">
                Professional Statistics
              </h3>
            </div>

            <div className="grid grid-cols-2 border-t border-[#e6edf1] sm:grid-cols-4">

              <Stat value="10+" label="Years of Experience" />

              <Stat value="1000+" label="Surgeries Performed" />

              <Stat value="2500+" label="Happy Patients" />

              <Stat
                value="4.9/5"
                label="Ratings"
                rating
                last
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Qualification({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group mb-7 flex items-start gap-4">

      <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-lg border border-[#cce3ef] bg-white text-[#078dcc] transition-all duration-300 group-hover:border-[#078dcc] group-hover:bg-[#078dcc] group-hover:text-white">
        {icon}
      </div>

      <div className="pt-0.5">
        <h4 className="text-[11px] font-bold leading-[1.45] text-[#173f5d]">
          {title}
        </h4>

        <p className="mt-1.5 text-[10px] leading-[1.55] text-[#667d8d]">
          {description}
        </p>
      </div>

    </div>
  );
}

function Stat({
  value,
  label,
  rating = false,
  last = false,
}: {
  value: string;
  label: string;
  rating?: boolean;
  last?: boolean;
}) {
  return (
    <div
      className={`flex min-h-[115px] flex-col items-center justify-center px-4 text-center transition-colors duration-300 hover:bg-[#f6fafc] ${
        last ? "" : "border-r border-[#e2e9ed]"
      }`}
    >
      <div className="flex items-center gap-1.5">

        <span className="font-serif text-[30px] font-bold leading-none text-[#075b91]">
          {value}
        </span>

        {rating && (
          <Star
            size={15}
            fill="currentColor"
            className="text-[#e5aa2f]"
          />
        )}

      </div>

      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#718594]">
        {label}
      </p>
    </div>
  );
}