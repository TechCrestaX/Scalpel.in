import {
  ArrowRight,
  CalendarDays,
  Clock3,
} from "lucide-react";

import { Link } from "react-router-dom";

import { blogs } from "../data/blogs";

export default function LatestBlogs() {
  // Homepage par sirf latest 3 blogs
  const latestBlogs = blogs.slice(0, 3);

  return (
    <section
      id="blogs"
      className="relative w-full overflow-hidden bg-[#eef6fa] py-14 sm:py-16 lg:py-20"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#d8edf6] opacity-60 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#dceff7] opacity-70 blur-3xl" />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto w-full max-w-[1350px] px-5 sm:px-8 lg:px-10">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mb-9 flex flex-col gap-6 sm:mb-10 md:flex-row md:items-end md:justify-between">

          {/* LEFT CONTENT */}

          <div>

            {/* Eyebrow */}

            <div className="mb-3 flex items-center gap-2.5">
              <span className="h-[2px] w-8 bg-[#087fbd]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#087fbd]">
                Insights &amp; Advice
              </span>
            </div>

            {/* Heading */}

            <h2 className="font-serif text-[31px] font-bold leading-[1.1] tracking-[-0.025em] text-[#123f61] sm:text-[36px] lg:text-[40px]">
              Latest Blogs
            </h2>

            {/* Description */}

            <p className="mt-3 max-w-[560px] text-[11px] leading-6 text-[#687f8e] sm:text-[12px]">
              Helpful insights, surgical information and practical guidance
              to help you understand your health and make informed decisions.
            </p>

          </div>

          {/* =================================================
              VIEW ALL BLOGS
              DIRECT ROUTE: /blogs
          ================================================= */}

          <Link
            to="/blogs"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-lg border border-[#9fc8da] bg-white px-5 py-3 text-[10px] font-bold text-[#075b91] shadow-[0_5px_18px_rgba(20,70,95,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#075b91] hover:bg-[#075b91] hover:text-white hover:shadow-[0_8px_22px_rgba(20,70,95,0.12)] sm:text-[11px]"
          >
            <span>View All Blogs</span>

            <ArrowRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* =================================================
            BLOG GRID
        ================================================= */}

        <div className="grid gap-6 md:grid-cols-3">

          {latestBlogs.map((blog) => (

            <article
              key={blog.slug}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#d4e5ed] bg-white shadow-[0_8px_28px_rgba(15,65,90,0.055)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#b8d6e3] hover:shadow-[0_18px_42px_rgba(15,65,90,0.11)]"
            >

              {/* =================================================
                  IMAGE
              ================================================= */}

              <Link
                to={`/blogs/${blog.slug}`}
                className="relative block aspect-[16/10] overflow-hidden bg-[#dceaf0]"
              >

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  onError={(event) => {
                    event.currentTarget.src = "/doctor-about.jpg";
                  }}
                />

                {/* Image overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#073653]/55 via-transparent to-transparent opacity-80" />

                {/* Category */}

                <div className="absolute left-4 top-4">
                  <span className="inline-flex rounded-md bg-white/95 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-[#087fbd] shadow-sm backdrop-blur-sm">
                    {blog.category}
                  </span>
                </div>

              </Link>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="flex flex-1 flex-col p-5 sm:p-6">

                {/* Date / Read Time */}

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[8px] font-medium text-[#8195a1] sm:text-[9px]">

                  <span className="flex items-center gap-1.5">
                    <CalendarDays
                      size={11}
                      className="text-[#087fbd]"
                    />

                    {blog.date}
                  </span>

                  <span className="text-[#c2d0d7]">
                    •
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Clock3 size={11} />

                    {blog.readTime}
                  </span>

                </div>

                {/* =================================================
                    TITLE
                ================================================= */}

                <Link
                  to={`/blogs/${blog.slug}`}
                  className="mt-3 block"
                >
                  <h3 className="font-serif text-[19px] font-bold leading-[1.3] text-[#173f5d] transition-colors duration-300 group-hover:text-[#087fbd] sm:text-[20px]">
                    {blog.title}
                  </h3>
                </Link>

                {/* =================================================
                    EXCERPT
                ================================================= */}

                <p className="mt-3 line-clamp-3 text-[10px] leading-[1.75] text-[#687f8e] sm:text-[11px]">
                  {blog.excerpt}
                </p>

                {/* =================================================
                    READ MORE
                ================================================= */}

                <div className="mt-auto pt-6">

                  <div className="mb-4 h-px w-full bg-[#e4edf1]" />

                  <Link
                    to={`/blogs/${blog.slug}`}
                    className="group/read inline-flex items-center gap-2 text-[10px] font-bold text-[#087fbd] transition-colors duration-300 hover:text-[#075b91]"
                  >
                    <span>Read More</span>

                    <ArrowRight
                      size={12}
                      className="transition-transform duration-300 group-hover/read:translate-x-1"
                    />
                  </Link>

                </div>

              </div>

            </article>

          ))}

        </div>

      
      </div>
    </section>
  );
}