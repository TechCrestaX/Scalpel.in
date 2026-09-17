import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogs } from "../data/blogs";

export default function BlogDetails() {
  const { slug } = useParams();

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  /* =====================================================
     BLOG NOT FOUND
  ===================================================== */

  if (!blog) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />

        <main className="flex min-h-[70vh] items-center justify-center px-5 pt-20">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#087fbd]">
              404
            </p>

            <h1 className="mt-3 font-serif text-3xl font-bold text-[#123f61]">
              Blog not found
            </h1>

            <p className="mt-2 text-sm text-[#718795]">
              The article you are looking for does not exist.
            </p>

            <Link
              to="/blogs"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#075b91] px-5 py-3 text-[10px] font-bold text-white"
            >
              <ArrowLeft size={13} />
              Back to Blogs
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* =====================================================
          SAME WEBSITE HEADER
      ===================================================== */}

      <Navbar />

      {/* =====================================================
          BLOG HEADER
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#073653] pb-12 pt-[115px] text-white sm:pb-16 sm:pt-[125px]">
        <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#087fbd]/20 blur-3xl" />

        <div className="relative mx-auto max-w-[1050px] px-5 sm:px-8">
          {/* Navigation */}
          <div className="flex flex-wrap items-center gap-5">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/55 transition-colors hover:text-white"
            >
              <ArrowLeft
                size={12}
                className="transition-transform group-hover:-translate-x-1"
              />

              Home
            </Link>

            <span className="text-white/20">
              /
            </span>

            <Link
              to="/blogs"
              className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/55 transition-colors hover:text-white"
            >
              Blogs
            </Link>
          </div>

          {/* Category */}
          <div className="mt-8">
            <span className="inline-flex rounded-md bg-[#087fbd] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.15em] text-white">
              {blog.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-4 max-w-[900px] font-serif text-[32px] font-bold leading-[1.15] sm:text-[46px] lg:text-[52px]">
            {blog.title}
          </h1>

          {/* Meta */}
          <div className="mt-5 flex flex-wrap items-center gap-3 text-[9px] text-white/55">
            <span className="flex items-center gap-1.5">
              <CalendarDays size={12} />
              {blog.date}
            </span>

            <span>•</span>

            <span className="flex items-center gap-1.5">
              <Clock3 size={12} />
              {blog.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          ARTICLE
      ===================================================== */}

      <main className="px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <article className="mx-auto max-w-[900px]">
          {/* Cover Image */}
          <div className="overflow-hidden rounded-2xl bg-[#e8f1f5] shadow-[0_12px_35px_rgba(15,60,85,0.08)]">
            <img
              src={blog.image}
              alt={blog.title}
              className="aspect-[16/8] w-full object-cover"
              onError={(event) => {
                event.currentTarget.src = "/doctor-about.jpg";
              }}
            />
          </div>

          {/* Intro */}
          <div className="mt-9 border-l-[3px] border-[#087fbd] pl-5">
            <p className="text-[13px] font-medium leading-[1.9] text-[#4f6979] sm:text-[14px]">
              {blog.excerpt}
            </p>
          </div>

          {/* Article Content */}
          <div className="mt-10">
            {blog.content.map((section, index) => (
              <section
                key={`${section.heading}-${index}`}
                className="mb-9"
              >
                {section.heading && (
                  <>
                    <h2 className="font-serif text-[23px] font-bold leading-tight text-[#123f61] sm:text-[27px]">
                      {section.heading}
                    </h2>

                    <div className="mt-3 h-[2px] w-8 bg-[#087fbd]" />
                  </>
                )}

                <p className="mt-4 text-[13px] leading-[2] text-[#586f7e] sm:text-[14px]">
                  {section.paragraphs.join(" ")}
                </p>

                {section.bullets && (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-[13px] leading-7 text-[#586f7e]"
                      >
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#087fbd]" />

                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* =================================================
              APPOINTMENT CTA
          ================================================= */}

          <div className="mt-12 rounded-2xl border border-[#d7e6ec] bg-[#f3f9fc] p-6 sm:p-8">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#087fbd]">
              Surgical Consultation
            </p>

            <h2 className="mt-2 font-serif text-[22px] font-bold text-[#123f61]">
              Need personalized surgical guidance?
            </h2>

            <p className="mt-2 max-w-[650px] text-[11px] leading-6 text-[#718795]">
              Schedule a consultation with Dr. Rahul Bhanja Chowdhury
              for evaluation and treatment guidance.
            </p>

            <a
              href="tel:+919830997513"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#075b91] px-5 py-3 text-[10px] font-bold text-white transition-all duration-300 hover:bg-[#064a77]"
            >
              Call for Consultation

              <ArrowRight size={12} />
            </a>
          </div>

          {/* =================================================
              BOTTOM NAVIGATION
          ================================================= */}

          <div className="mt-10 flex flex-col gap-4 border-t border-[#dce7ec] pt-7 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to="/blogs"
              className="group inline-flex items-center gap-2 text-[10px] font-bold text-[#087fbd]"
            >
              <ArrowLeft
                size={13}
                className="transition-transform group-hover:-translate-x-1"
              />

              All Blogs
            </Link>

            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-[10px] font-bold text-[#087fbd]"
            >
              Back to Home

              <ArrowRight
                size={13}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}