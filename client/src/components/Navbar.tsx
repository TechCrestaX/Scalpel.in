import { CalendarDays, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  /*
   * HOME PAGE:
   *   Home      -> /
   *   About     -> /#about
   *   Expertise -> /#expertise
   *   Blogs     -> /blogs
   *   Contact   -> /#contact
   *
   * OTHER PAGES:
   *   Home      -> /
   *   About     -> /#about
   *   Expertise -> /#expertise
   *   Blogs     -> /blogs
   *   Contact   -> /#contact
   */

  const navItems = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "About",
      to: "/#about",
    },
    {
      label: "Expertise",
      to: "/#expertise",
    },
    {
      label: "Blogs",
      to: "/blogs",
    },
    {
      label: "Contact",
      to: "/#contact",
    },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /*
   * When clicking a section while already on Home,
   * scroll smoothly instead of doing a full route navigation.
   */
  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    if (!isHomePage) {
      closeMenu();
      return;
    }

    e.preventDefault();
    closeMenu();

    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    // Update URL without causing a page reload
    window.history.replaceState(null, "", `/#${id}`);

    // Account for fixed navbar
    const navbarHeight = 70;

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - navbarHeight,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white">
      <nav className="mx-auto flex h-[58px] max-w-[1440px] items-center justify-between px-5 sm:h-[64px] sm:px-8 lg:px-10">

        {/* =====================================================
            LOGO
        ===================================================== */}

        <Link
          to="/"
          onClick={closeMenu}
          className="group flex items-center"
          aria-label="Scalpel.in Home"
        >
          <img
            src="/scalpel-logo.png"
            alt="Scalpel.in"
            className="h-auto w-[135px] object-contain transition-all duration-300 group-hover:scale-[1.02] sm:w-[155px]"
          />
        </Link>


        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <div className="hidden items-center gap-7 lg:flex">

          {navItems.map((item) => {

            const isSection =
              item.label === "About" ||
              item.label === "Expertise" ||
              item.label === "Contact";

            /*
             * HOME
             */
            if (item.label === "Home") {
              return (
                <Link
                  key={item.label}
                  to="/"
                  onClick={closeMenu}
                  className="group relative py-2 font-serif text-[13px] font-semibold tracking-[0.01em] text-[#29465d] transition-all duration-300 hover:text-[#0879bd]"
                >
                  {item.label}

                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#0879bd] transition-all duration-300 group-hover:w-full" />
                </Link>
              );
            }

            /*
             * ABOUT / EXPERTISE / CONTACT
             */
            if (isSection) {
              const sectionId = item.label.toLowerCase();

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={(e) =>
                    handleSectionClick(e, sectionId)
                  }
                  className="group relative py-2 font-serif text-[13px] font-semibold tracking-[0.01em] text-[#29465d] transition-all duration-300 hover:text-[#0879bd]"
                >
                  {item.label}

                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#0879bd] transition-all duration-300 group-hover:w-full" />
                </Link>
              );
            }

            /*
             * BLOGS
             */
            return (
              <Link
                key={item.label}
                to={item.to}
                onClick={closeMenu}
                className="group relative py-2 font-serif text-[13px] font-semibold tracking-[0.01em] text-[#29465d] transition-all duration-300 hover:text-[#0879bd]"
              >
                {item.label}

                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#0879bd] transition-all duration-300 group-hover:w-full" />
              </Link>
            );
          })}


          {/* =================================================
              BOOK APPOINTMENT
          ================================================= */}

          <Link
            to="/book-appointment"
            onClick={closeMenu}
            className="group ml-2 flex items-center gap-2 rounded-lg bg-[#b3b87a] px-5 py-2.5 font-serif text-[13px] font-bold tracking-[0.01em] text-white shadow-[0_5px_15px_rgba(7,91,145,0.16)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#8fa5b3] hover:shadow-[0_8px_20px_rgba(7,91,145,0.25)]"
          >
            <CalendarDays
              size={15}
              className="transition-transform duration-300 group-hover:scale-110"
            />

            <span>Book an Appointment</span>
          </Link>

        </div>


        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-[#123f61] transition-all duration-300 hover:border-[#0879bd] hover:bg-[#f1f8fc] hover:text-[#0879bd] lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={19} />
          ) : (
            <Menu size={19} />
          )}
        </button>

      </nav>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 shadow-lg lg:hidden">

          <div className="flex flex-col">

            {navItems.map((item) => {

              const isSection =
                item.label === "About" ||
                item.label === "Expertise" ||
                item.label === "Contact";

              /*
               * HOME
               */
              if (item.label === "Home") {
                return (
                  <Link
                    key={item.label}
                    to="/"
                    onClick={closeMenu}
                    className="border-b border-slate-100 py-3 font-serif text-[15px] font-semibold text-[#29465d] transition-all duration-300 hover:pl-2 hover:text-[#0879bd]"
                  >
                    {item.label}
                  </Link>
                );
              }

              /*
               * ABOUT / EXPERTISE / CONTACT
               */
              if (isSection) {
                const sectionId = item.label.toLowerCase();

                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={(e) =>
                      handleSectionClick(e, sectionId)
                    }
                    className="border-b border-slate-100 py-3 font-serif text-[15px] font-semibold text-[#29465d] transition-all duration-300 hover:pl-2 hover:text-[#0879bd]"
                  >
                    {item.label}
                  </Link>
                );
              }

              /*
               * BLOGS
               */
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={closeMenu}
                  className="border-b border-slate-100 py-3 font-serif text-[15px] font-semibold text-[#29465d] transition-all duration-300 hover:pl-2 hover:text-[#0879bd]"
                >
                  {item.label}
                </Link>
              );
            })}


            {/* =================================================
                BOOK APPOINTMENT
            ================================================= */}

            <Link
              to="/book-appointment"
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#075b91] py-3 font-serif text-[14px] font-bold text-white transition-all duration-300 hover:bg-[#064a77]"
            >
              <CalendarDays size={17} />

              Book an Appointment
            </Link>


            {/* =================================================
                CHECK APPOINTMENT
            ================================================= */}

            <Link
              to="/my-appointments"
              onClick={closeMenu}
              className="mt-3 text-center font-serif text-[12px] font-semibold text-[#075b91] transition-colors duration-300 hover:text-[#0879bd]"
            >
              Already booked? Check Appointment
            </Link>

          </div>

        </div>
      )}

    </header>
  );
}