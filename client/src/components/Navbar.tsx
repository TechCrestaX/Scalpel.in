import {
  CalendarDays,
  Menu,
  X,
} from "lucide-react";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // =====================================================
  // NAVIGATION ITEMS
  // =====================================================

  const navItems = [
    {
      label: "About",
      id: "about",
    },
    {
      label: "Expertise",
      id: "expertise",
    },
    {
      label: "Blogs",
      path: "/blogs",
    },
    {
      label: "Contact",
      id: "contact",
    },
  ];


  // =====================================================
  // HASH SCROLL
  // =====================================================

  useEffect(() => {
    if (
      location.pathname === "/" &&
      location.hash
    ) {
      const id = location.hash.replace("#", "");

      const timer = window.setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 150);

      return () => {
        window.clearTimeout(timer);
      };
    }
  }, [
    location.pathname,
    location.hash,
  ]);


  // =====================================================
  // SECTION NAVIGATION
  // =====================================================

  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    setMenuOpen(false);

    // Already on Home
    if (location.pathname === "/") {
      const element = document.getElementById(id);

      if (element) {
        window.history.pushState(
          null,
          "",
          `/#${id}`
        );

        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    // Coming from another page
    navigate(`/#${id}`);
  };


  // =====================================================
  // LOGO CLICK
  // =====================================================

  const handleLogoClick = () => {
    setMenuOpen(false);

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };


  return (
    <header
      className="
        fixed
        left-0
        top-0
        z-50
        w-full
        border-b
        border-slate-200
        bg-white
      "
    >

      <nav
        className="
          mx-auto
          flex
          h-[58px]
          max-w-[1440px]
          items-center
          justify-between
          px-5
          sm:h-[64px]
          sm:px-8
          lg:px-10
        "
      >

        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          to="/"
          onClick={handleLogoClick}
          className="
            group
            flex
            items-center
          "
        >

          <img
            src="/scalpel-logo.png"
            alt="Scalpel.in"
            className="
              h-auto
              w-[135px]
              object-contain
              transition-all
              duration-300
              group-hover:scale-[1.02]
              sm:w-[155px]
            "
          />

        </Link>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <div
          className="
            hidden
            items-center
            gap-7
            lg:flex
          "
        >

          {navItems.map((item) => {

            {/* -------------------------------------------------
                BLOGS
            ------------------------------------------------- */}

            if (item.path) {
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className="
                    group
                    relative
                    py-2
                    font-serif
                    text-[13px]
                    font-semibold
                    tracking-[0.01em]
                    text-[#29465d]
                    transition-all
                    duration-300
                    hover:text-[#0879bd]
                  "
                >
                  {item.label}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      h-[2px]
                      w-0
                      -translate-x-1/2
                      rounded-full
                      bg-[#0879bd]
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </Link>
              );
            }


            {/* -------------------------------------------------
                ABOUT / EXPERTISE / CONTACT
            ------------------------------------------------- */}

            return (
              <a
                key={item.label}
                href={`/#${item.id}`}
                onClick={(e) =>
                  handleSectionClick(
                    e,
                    item.id!
                  )
                }
                className="
                  group
                  relative
                  cursor-pointer
                  py-2
                  font-serif
                  text-[13px]
                  font-semibold
                  tracking-[0.01em]
                  text-[#29465d]
                  transition-all
                  duration-300
                  hover:text-[#0879bd]
                "
              >

                {item.label}

                <span
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    rounded-full
                    bg-[#0879bd]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />

              </a>
            );
          })}


          {/* =================================================
              APPOINTMENT BUTTON
          ================================================= */}

          <Link
            to="/book-appointment"
            className="
              group
              ml-2
              flex
              items-center
              gap-2
              rounded-lg
              bg-[#d0dae1]
              px-5
              py-2.5
              font-serif
              text-[13px]
              font-bold
              tracking-[0.01em]
              text-white
              shadow-[0_5px_15px_rgba(7,91,145,0.16)]
              transition-all
              duration-300
              hover:-translate-y-[1px]
              hover:bg-[#a1864d]
              hover:shadow-[0_8px_20px_rgba(7,91,145,0.25)]
            "
          >

            <CalendarDays
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />

            <span>
              Book an Appointment
            </span>

          </Link>

        </div>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={() =>
            setMenuOpen(
              (value) => !value
            )
          }
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-md
            border
            border-slate-200
            text-[#123f61]
            transition-all
            duration-300
            hover:border-[#0879bd]
            hover:bg-[#f1f8fc]
            hover:text-[#0879bd]
            lg:hidden
          "
          aria-label={
            menuOpen
              ? "Close menu"
              : "Open menu"
          }
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
        <div
          className="
            border-t
            border-slate-200
            bg-white
            px-5
            py-4
            shadow-lg
            lg:hidden
          "
        >

          <div className="flex flex-col">

            {navItems.map((item) => {

              {/* -------------------------------------------------
                  BLOGS
              ------------------------------------------------- */}

              if (item.path) {
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className="
                      border-b
                      border-slate-100
                      py-3
                      font-serif
                      text-[15px]
                      font-semibold
                      text-[#29465d]
                      transition-all
                      duration-300
                      hover:pl-2
                      hover:text-[#0879bd]
                    "
                  >
                    {item.label}
                  </Link>
                );
              }


              {/* -------------------------------------------------
                  ABOUT / EXPERTISE / CONTACT
              ------------------------------------------------- */}

              return (
                <a
                  key={item.label}
                  href={`/#${item.id}`}
                  onClick={(e) =>
                    handleSectionClick(
                      e,
                      item.id!
                    )
                  }
                  className="
                    border-b
                    border-slate-100
                    py-3
                    font-serif
                    text-[15px]
                    font-semibold
                    text-[#29465d]
                    transition-all
                    duration-300
                    hover:pl-2
                    hover:text-[#0879bd]
                  "
                >
                  {item.label}
                </a>
              );
            })}


            {/* =================================================
                APPOINTMENT
            ================================================= */}

            <Link
              to="/book-appointment"
              onClick={() =>
                setMenuOpen(false)
              }
              className="
                mt-4
                flex
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-[#075b91]
                py-3
                font-serif
                text-[14px]
                font-bold
                text-white
                transition-all
                duration-300
                hover:bg-[#064a77]
              "
            >

              <CalendarDays size={17} />

              Book an Appointment

            </Link>


            {/* =================================================
                CHECK APPOINTMENT
            ================================================= */}

            <Link
              to="/my-appointments"
              onClick={() =>
                setMenuOpen(false)
              }
              className="
                mt-3
                text-center
                font-serif
                text-[12px]
                font-semibold
                text-[#075b91]
                transition-colors
                duration-300
                hover:text-[#0879bd]
              "
            >
              Already booked? Check Appointment
            </Link>

          </div>

        </div>
      )}

    </header>
  );
}