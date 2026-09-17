import { ArrowRight, CheckCircle2, Star } from "lucide-react";

const reviews = [
  {
    name: "Priya S.",
    date: "2 weeks ago",
    review:
      "Dr. Chowdhury explained my condition very clearly and made me feel comfortable throughout. The surgery and recovery were smooth.",
  },
  {
    name: "Amit K.",
    date: "1 month ago",
    review:
      "Very professional, compassionate and patient. Listens attentively and gives the right advice. Truly one of the best.",
  },
  {
    name: "Ritika M.",
    date: "2 months ago",
    review:
      "Minimal pain, quick recovery and excellent care. The doctor and his team were always supportive. I am grateful for the treatment.",
  },
  {
    name: "Sourav K.",
    date: "3 months ago",
    review:
      "Had a laparoscopic hernia surgery and the entire process was smooth. From consultation to recovery, everything was handled professionally.",
  },
];

export default function PatientReviews() {
  return (
    <section
      id="reviews"
      className="w-full border-t border-[#dce7ed] bg-white py-8 sm:py-10"
    >
      <div className="w-full px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-4 flex items-center justify-between gap-4">

          <div>
            <div className="mb-1 flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#078dcc]" />

              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#078dcc]">
                Patient Experience
              </span>
            </div>

            <h2 className="font-serif text-[21px] font-bold leading-none text-[#123f61] sm:text-[24px]">
              What Patients Say
            </h2>
          </div>

          <a
            href="https://share.google/nCKMExd4BThvCi1gQ"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex shrink-0 items-center gap-1.5 rounded-md border border-[#69b9dc] bg-white px-3 py-1.5 text-[9px] font-semibold text-[#087fbd] transition-all duration-300 hover:bg-[#087fbd] hover:text-white"
          >
            View All Google Reviews
            <ArrowRight
              size={11}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

          {reviews.map((review) => (
            <article
              key={review.name}
              className="group rounded-md border border-[#dce7ed] bg-[#fbfdfe] px-3.5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b9d9e8] hover:bg-white hover:shadow-[0_7px_20px_rgba(20,75,105,0.07)]"
            >

              {/* Reviewer */}
              <div className="flex items-start justify-between">

                <div className="flex items-center gap-2">

                  {/* Avatar */}
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#edf6fa] text-[10px] font-bold text-[#078dcc]">
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <div className="flex items-center gap-1">
                      <p className="text-[9px] font-bold text-[#173f5d]">
                        {review.name}
                      </p>

                      <CheckCircle2
                        size={9}
                        fill="currentColor"
                        className="text-[#078dcc]"
                      />
                    </div>

                    <p className="text-[7px] text-slate-400">
                      {review.date}
                    </p>
                  </div>

                </div>

                {/* Google-style icon */}
                <span className="font-bold text-[11px] text-[#4285f4]">
                  G
                </span>

              </div>

              {/* Stars */}
              <div className="mt-2 flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={9}
                    fill="currentColor"
                    className="text-[#f5b82e]"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-2 line-clamp-4 text-[8px] leading-[1.55] text-slate-600 sm:text-[9px]">
                “{review.review}”
              </p>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}