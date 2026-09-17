import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
} from "lucide-react";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { blogs } from "../data/blogs";

export default function Blogs() {
  return (
    <div className="min-h-screen bg-white">

      {/* =====================================================
          HEADER / NAVBAR
      ===================================================== */}
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#073653] pt-[105px]">

        {/* Background glow */}
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#0c638c] opacity-20 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#39a8d2] opacity-10 blur-3xl" />

        <div className="relative mx-auto max-w-[1350px] px-5 pb-16 sm:px-8 lg:px-10 lg:pb-20">

          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-[10px] font-medium text-white/60">
            <Link
              to="/"
              className="transition-colors hover:text-white"
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-white">
              Blogs
            </span>
          </div>

          {/* Hero content */}
          <div className="max-w-[760px]">

            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-[2px] w-9 bg-[#43a9d1]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#72c4e5]">
                Scalpel.in Journal
              </span>
            </div>

            <h1 className="font-serif text-[38px] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-[48px] lg:text-[58px]">
              Surgical knowledge,
              <br />

              <span className="text-[#8bd0e8]">
                explained simply.
              </span>
            </h1>

            <p className="mt-6 max-w-[650px] text-[12px] leading-7 text-white/70 sm:text-[13px]">
              Explore practical surgical information, treatment insights,
              common conditions and patient-focused guidance from
              Dr. Rahul Bhanja Chowdhury.
            </p>

          </div>
        </div>
      </section>

      {/* =====================================================
          BLOG CONTENT
      ===================================================== */}
      <main className="bg-[#f5f9fb]">

        <div className="mx-auto max-w-[1350px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

          {/* TOP ROW */}
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <div className="mb-3 flex items-center gap-2.5">
                <span className="h-[2px] w-8 bg-[#087fbd]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#087fbd]">
                  Latest Articles
                </span>
              </div>

              <h2 className="font-serif text-[30px] font-bold leading-tight text-[#123f61] sm:text-[36px]">
                Insights &amp; Advice
              </h2>

              <p className="mt-3 max-w-[600px] text-[11px] leading-6 text-[#687f8e] sm:text-[12px]">
                Browse our complete collection of surgical insights and
                patient-friendly medical information.
              </p>
            </div>

            {/* BACK HOME */}
            <Link
              to="/"
              className="group inline-flex w-fit items-center gap-2 rounded-lg border border-[#b9d3df] bg-white px-5 py-3 text-[10px] font-bold text-[#075b91] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#075b91] hover:bg-[#075b91] hover:text-white"
            >
              <ArrowLeft
                size={13}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />

              Back to Home
            </Link>

          </div>

          {/* =================================================
              BLOG GRID
          ================================================= */}
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {blogs.map((blog) => (

              <article
                key={blog.slug}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#d6e6ed] bg-white shadow-[0_8px_28px_rgba(15,65,90,0.05)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#b8d6e3] hover:shadow-[0_18px_42px_rgba(15,65,90,0.11)]"
              >

                {/* IMAGE */}
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

                  <div className="absolute inset-0 bg-gradient-to-t from-[#073653]/60 via-transparent to-transparent" />

                  {/* CATEGORY */}
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex rounded-md bg-white/95 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-[#087fbd] shadow-sm">
                      {blog.category}
                    </span>
                  </div>

                </Link>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">

                  {/* META */}
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

                  {/* TITLE */}
                  <Link
                    to={`/blogs/${blog.slug}`}
                    className="mt-3 block"
                  >
                    <h3 className="font-serif text-[20px] font-bold leading-[1.3] text-[#173f5d] transition-colors duration-300 group-hover:text-[#087fbd]">
                      {blog.title}
                    </h3>
                  </Link>

                  {/* EXCERPT */}
                  <p className="mt-3 line-clamp-4 text-[10px] leading-[1.8] text-[#687f8e] sm:text-[11px]">
                    {blog.excerpt}
                  </p>

                  {/* READ MORE */}
                  <div className="mt-auto pt-6">

                    <div className="mb-4 h-px w-full bg-[#e4edf1]" />

                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="group/read inline-flex items-center gap-2 text-[10px] font-bold text-[#087fbd] transition-colors duration-300 hover:text-[#075b91]"
                    >
                      Read Full Article

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
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <Footer />

    </div>
  );
}