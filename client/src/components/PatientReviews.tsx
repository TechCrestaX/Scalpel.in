import { ArrowRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Priya S.",
    date: "2 weeks ago",
    image: "/reviews/priya.jpg",
    review:
      "Dr. Chowdhury explained my condition very clearly and made me feel comfortable throughout. The surgery and recovery were smooth.",
  },
  {
    name: "Amit K.",
    date: "1 month ago",
    image: "/reviews/amit.jpg",
    review:
      "Very professional, compassionate and patient. Listens attentively and gives the right advice. I felt well cared for throughout my treatment.",
  },
  {
    name: "Ritika M.",
    date: "2 months ago",
    image: "/reviews/ritika.jpg",
    review:
      "Minimal pain, quick recovery and excellent care. The doctor and his team were always supportive. I am grateful for the treatment.",
  },
  {
    name: "Sourav K.",
    date: "3 months ago",
    image: "/reviews/sourav.jpg",
    review:
      "Had a laparoscopic hernia surgery and the entire process was smooth. From consultation to recovery, everything was handled professionally.",
  },
];

export default function PatientReviews() {
  return (
    <section
      id="reviews"
      className="w-full border-t border-[#dce7ed] bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <span className="h-[2px] w-8 bg-[#078dcc]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#078dcc]">
                Patient Experience
              </span>
            </div>

            <h2 className="font-serif text-[30px] font-bold leading-tight text-[#123f61] sm:text-[36px] lg:text-[40px]">
              What Patients Say
            </h2>

            <p className="mt-3 max-w-2xl text-[12px] leading-6 text-slate-500 sm:text-[13px]">
              Read about the experiences of patients who received consultation
              and surgical care from Dr. Rahul Bhanja Chowdhury.
            </p>
          </div>

          {/* Google CTA */}
          <a
            href="https://share.google/nCKMExd4BThvCi1gQ"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit shrink-0 items-center gap-2.5 rounded-lg border border-[#9bc9dc] bg-white px-4 py-2.5 text-[10px] font-semibold text-[#087fbd] transition-all duration-300 hover:border-[#087fbd] hover:bg-[#087fbd] hover:text-white"
          >
            <span className="text-[15px] font-bold">G</span>

            <span>View Google Reviews</span>

            <ArrowRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reviews.map((review) => (
            <article
              key={`${review.name}-${review.date}`}
              className="group rounded-xl border border-[#dce7ed] bg-[#fbfdfe] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b9d9e8] hover:bg-white hover:shadow-[0_15px_40px_rgba(20,75,105,0.10)]"
            >
              {/* Reviewer */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  {/* Reviewer Image */}
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-white bg-[#eaf5f9] shadow-[0_2px_8px_rgba(20,75,105,0.12)]">
                    <img
                      src={review.image}
                      alt={`${review.name} profile`}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <div>
                    <p className="text-[13px] font-bold text-[#173f5d]">
                      {review.name}
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      {review.date}
                    </p>
                  </div>
                </div>

                {/* Google */}
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm">
                  <span className="text-[15px] font-bold text-[#4285f4]">
                    G
                  </span>
                </div>
              </div>

              {/* Stars */}
              <div className="mt-5 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    fill="currentColor"
                    strokeWidth={1.5}
                    className="text-[#f5b82e]"
                  />
                ))}

                <span className="ml-2 text-[10px] font-medium text-slate-400">
                  5.0
                </span>
              </div>

              {/* Review */}
              <p className="mt-4 text-[12px] leading-[1.75] text-slate-600 sm:text-[13px]">
                “{review.review}”
              </p>

              {/* Bottom Accent */}
              <div className="mt-6 h-[2px] w-8 bg-[#078dcc] transition-all duration-300 group-hover:w-14" />
            </article>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-8 text-center">
          <p className="text-[9px] leading-5 text-slate-400 sm:text-[10px]">
            Individual patient experiences may vary depending on medical
            condition and treatment.
          </p>
        </div>
      </div>
    </section>
  );
}