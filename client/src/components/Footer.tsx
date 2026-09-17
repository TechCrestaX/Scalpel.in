import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useEffect } from "react";


// =========================================================
// HOSPITAL DATA
// =========================================================

const kolkataHospitals = [
  {
    name: "Sejuti Hospital",
    address: "3A, Waverly Lane, Kolkata – 700013",
    phone: "+91 90738 81874",
    map: "https://www.google.com/maps/search/?api=1&query=Sejuti+Hospital+3A+Waverly+Lane+Kolkata",
  },
  {
    name: "Atlas Health Point",
    address:
      "282, Purba Baidya Para, Khiristola More, Kolkata – 700150",
    phone: "033-7115 5555",
    map: "https://www.google.com/maps/search/?api=1&query=Atlas+Health+Point+282+Purba+Baidya+Para+Kolkata",
  },
  {
    name: "Well Care Nursing Home",
    address:
      "Dehimedan Malla, Dakshin Gobindopur, Baruipur – 700145",
    phone: "+91 94753 32013",
    map: "https://www.google.com/maps/search/?api=1&query=Well+Care+Nursing+Home+Dehimedan+Malla+Baruipur",
  },
];

const siliguriHospitals = [
  {
    name: "Aastha Hospital",
    address:
      "Medical College Road, Kawakhari, Opposite Bharat Petrol Pump, Siliguri, West Bengal – 734012",
    phone: "+91 77193 68000 / +91 77193 69000",
    map: "https://www.google.com/maps/search/?api=1&query=Aastha+Hospital+Medical+College+Road+Kawakhari+Siliguri",
  },
  {
    name: "Mukherjee Hospital",
    address:
      "Rajani Bagan, Hill Cart Road, Siliguri, West Bengal – 734001",
    phone: "+91 90029 36622 / +91 35335 00151",
    map: "https://www.google.com/maps/search/?api=1&query=Mukherjee+Hospital+Rajani+Bagan+Hill+Cart+Road+Siliguri",
  },
  {
    name: "Kins Hospital",
    address:
      "Sevoke More, Hill Cart Road, Ward 6, Siliguri, West Bengal – 734001",
    phone: "+91 97359 87500",
    map: "https://www.google.com/maps/search/?api=1&query=Kins+Hospital+Sevoke+More+Siliguri",
  },
];


// =========================================================
// QUICK LINKS
// =========================================================

const quickLinks = [
  {
    label: "Home",
    type: "home",
  },
  {
    label: "About",
    type: "section",
    id: "about",
  },
  {
    label: "Expertise",
    type: "section",
    id: "expertise",
  },
  {
    label: "Blogs",
    type: "blogs",
  },
  {
    label: "FAQ",
    type: "section",
    id: "faq",
  },
  {
    label: "Contact",
    type: "section",
    id: "contact",
  },
];


// =========================================================
// SOCIAL LINKS
// =========================================================

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    label: "YouTube",
    href: "#",
    icon: FaYoutube,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },
];


// =========================================================
// FOOTER
// =========================================================

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  // -------------------------------------------------------
  // Handle section navigation
  // -------------------------------------------------------

  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    // Close / move to Home if currently on another route
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    // Already on Home
    const element = document.getElementById(id);

    if (element) {
      // Update URL hash without causing a page reload
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
  };


  // -------------------------------------------------------
  // Handle hash after navigating from another page
  // -------------------------------------------------------

  useEffect(() => {
    if (
      location.pathname === "/" &&
      location.hash
    ) {
      const id = location.hash.substring(1);

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
  }, [location.pathname, location.hash]);


  // -------------------------------------------------------
  // Quick link renderer
  // -------------------------------------------------------

  const renderQuickLink = (
    link: (typeof quickLinks)[number]
  ) => {

    // HOME
    if (link.type === "home") {
      return (
        <Link
          to="/"
          className="group flex items-center gap-2 text-[10px] text-[#637b8a] transition-all duration-300 hover:translate-x-1 hover:text-[#0879bd]"
        >
          <ArrowRight
            size={10}
            className="text-[#0879bd] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />

          <span>{link.label}</span>
        </Link>
      );
    }


    // BLOGS
    if (link.type === "blogs") {
      return (
        <Link
          to="/blogs"
          className="group flex items-center gap-2 text-[10px] text-[#637b8a] transition-all duration-300 hover:translate-x-1 hover:text-[#0879bd]"
        >
          <ArrowRight
            size={10}
            className="text-[#0879bd] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />

          <span>{link.label}</span>
        </Link>
      );
    }


    // ABOUT / EXPERTISE / FAQ / CONTACT
    return (
      <a
        href={`/#${link.id}`}
        onClick={(e) =>
          handleSectionClick(
            e,
            link.id as string
          )
        }
        className="group flex cursor-pointer items-center gap-2 text-[10px] text-[#637b8a] transition-all duration-300 hover:translate-x-1 hover:text-[#0879bd]"
      >
        <ArrowRight
          size={10}
          className="text-[#0879bd] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <span>{link.label}</span>
      </a>
    );
  };


  return (
    <footer
      id="contact"
      className="w-full bg-white text-[#123f61]"
    >

      {/* =====================================================
          APPOINTMENT CTA
      ===================================================== */}

      <section className="border-y border-[#dce8ee] bg-[#f4f9fc]">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col justify-between gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center lg:px-10 lg:py-9">

          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-[2px] w-8 bg-[#0879bd]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#0879bd]">
                Consultation
              </span>
            </div>

            <h2 className="font-serif text-[23px] font-bold text-[#123f61] sm:text-[28px]">
              Looking for the right surgical care?
            </h2>

            <p className="mt-1 text-[10px] text-[#657f90] sm:text-[11px]">
              Schedule a consultation with Dr. Rahul Bhanja Chowdhury.
            </p>
          </div>


          <Link
            to="/book-appointment"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#a9b8c2] px-5 py-3 text-[10px] font-bold text-white shadow-[0_6px_18px_rgba(7,91,145,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#96992b] hover:shadow-[0_9px_24px_rgba(7,91,145,0.22)] sm:px-6 sm:text-[11px]"
          >
            <CalendarDays
              size={15}
              className="transition-transform duration-300 group-hover:scale-110"
            />

            <span>
              Book an Appointment
            </span>

            <ArrowRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>
      </section>


      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="mx-auto w-full max-w-[1600px] px-5 py-12 sm:px-8 lg:px-10 lg:py-14">

        <div className="grid gap-11 md:grid-cols-2 lg:grid-cols-[1.25fr_0.55fr_1fr_1fr]">


          {/* =================================================
              BRAND / DOCTOR
          ================================================= */}

          <div>

            {/* LOGO */}

            <Link
              to="/"
              className="group inline-flex items-center"
            >
              <img
                src="/scalpel-logo.png"
                alt="Scalpel.in"
                className="h-auto w-[165px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>


            <h3 className="mt-7 font-serif text-[20px] font-bold text-[#123f61]">
              Dr. Rahul Bhanja Chowdhury
            </h3>

            <p className="mt-1 text-[10px] font-semibold text-[#0879bd]">
              Consultant General &amp; Laparoscopic Surgeon
            </p>


            <p className="mt-4 max-w-[390px] text-[10px] leading-[1.85] text-[#637b8a] sm:text-[11px]">
              A new-generation Consultant General and Laparoscopic Surgeon
              focused on modern, patient-centric and technologically advanced
              surgical care with precision, evidence-based practice and
              compassionate treatment.
            </p>


            {/* CONTACT */}

            <div className="mt-6 space-y-3">

              <a
                href="tel:+919830997513"
                className="group flex items-center gap-3 text-[10px] text-[#526d80] transition-colors duration-300 hover:text-[#0879bd]"
              >
                <Phone
                  size={14}
                  className="shrink-0 text-[#0879bd] transition-transform duration-300 group-hover:scale-110"
                />

                <span>
                  +91 98309 97513
                </span>
              </a>


              <a
                href="mailto:scalpel2026@gmail.com"
                className="group flex items-center gap-3 text-[10px] text-[#526d80] transition-colors duration-300 hover:text-[#0879bd]"
              >
                <Mail
                  size={14}
                  className="shrink-0 text-[#0879bd] transition-transform duration-300 group-hover:scale-110"
                />

                <span>
                  scalpel2026@gmail.com
                </span>
              </a>


              <a
                href="https://www.google.com/maps/search/?api=1&query=330+Netaji+Block+Chowhati+Kolkata+700149"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3 text-[10px] leading-5 text-[#526d80] transition-colors duration-300 hover:text-[#0879bd]"
              >
                <MapPin
                  size={14}
                  className="mt-0.5 shrink-0 text-[#0879bd] transition-transform duration-300 group-hover:scale-110"
                />

                <span>
                  330 Netaji Block, Chowhati,
                  <br />
                  Kolkata 700149
                </span>
              </a>

            </div>


            {/* SOCIAL MEDIA */}

            <div className="mt-7">

              <p className="mb-3 text-[8px] font-bold uppercase tracking-[0.2em] text-[#8296a3]">
                Follow Us
              </p>

              <div className="flex items-center gap-3">

                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cddde6] text-[#075b91] transition-all duration-300 hover:-translate-y-1 hover:border-[#075b91] hover:bg-[#075b91] hover:text-white"
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}

              </div>

            </div>

          </div>


          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div>

            <h3 className="font-serif text-[17px] font-bold text-[#123f61]">
              Quick Links
            </h3>

            <div className="mt-3 h-[2px] w-8 bg-[#0879bd]" />


            <nav className="mt-5 flex flex-col gap-3">

              {quickLinks.map((link) => (
                <div key={link.label}>
                  {renderQuickLink(link)}
                </div>
              ))}

            </nav>

          </div>


          {/* =================================================
              KOLKATA
          ================================================= */}

          <HospitalColumn
            city="Kolkata"
            hospitals={kolkataHospitals}
          />


          {/* =================================================
              SILIGURI
          ================================================= */}

          <HospitalColumn
            city="Siliguri"
            hospitals={siliguriHospitals}
          />

        </div>

      </div>


      {/* =====================================================
          AVAILABILITY
      ===================================================== */}

      <div className="border-y border-[#dce8ee] bg-[#f4f9fc]">

        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-3 px-5 py-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">

          <div className="flex items-start gap-3">

            <Clock3
              size={15}
              className="mt-0.5 shrink-0 text-[#0879bd]"
            />

            <div>

              <p className="text-[10px] font-semibold text-[#123f61]">
                Hospital Availability
              </p>

              <p className="mt-1 text-[9px] leading-5 text-[#718795]">
                Consultation availability may vary by hospital and day.
                Please contact the respective hospital before visiting.
              </p>

            </div>

          </div>


          <a
            href="tel:+919830997513"
            className="inline-flex items-center gap-2 text-[10px] font-semibold text-[#0879bd] transition-colors duration-300 hover:text-[#075b91]"
          >
            <Phone size={12} />

            <span>
              Call for Consultation
            </span>
          </a>

        </div>

      </div>


      {/* =====================================================
          BOTTOM / CREDIT
      ===================================================== */}

      <div className="border-t border-[#e0e9ee] bg-white">

        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-3 px-5 py-5 text-[8px] text-[#8093a0] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">

          <p>
            © {new Date().getFullYear()} scalpel.in. All rights reserved.
          </p>


          <p>
            Dr. Rahul Bhanja Chowdhury • General &amp; Laparoscopic Surgery
          </p>


          <a
            href="https://www.techcrestax.com/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 font-medium text-[#718795] transition-colors duration-300 hover:text-[#0879bd]"
          >
            <span>
              Build with
            </span>

            <span
              className="text-[10px] text-red-500 transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            >
              ❤️
            </span>

            <span className="font-semibold text-[#123f61] group-hover:text-[#0879bd]">
              TechCrestax
            </span>
          </a>

        </div>

      </div>

    </footer>
  );
}


// =========================================================
// HOSPITAL COLUMN
// =========================================================

function HospitalColumn({
  city,
  hospitals,
}: {
  city: string;
  hospitals: {
    name: string;
    address: string;
    phone: string;
    map: string;
  }[];
}) {

  return (
    <div>

      {/* CITY HEADING */}

      <div className="flex items-center gap-2">

        <MapPin
          size={15}
          className="text-[#0879bd]"
        />

        <h3 className="font-serif text-[17px] font-bold text-[#123f61]">
          {city}
        </h3>

      </div>


      <div className="mt-3 h-[2px] w-8 bg-[#0879bd]" />


      {/* HOSPITALS */}

      <div className="mt-5 space-y-5">

        {hospitals.map((hospital) => (

          <div
            key={hospital.name}
            className="border-b border-[#e2ebef] pb-4 last:border-0"
          >

            <h4 className="text-[10px] font-bold text-[#123f61]">
              {hospital.name}
            </h4>


            {/* CLICKABLE ADDRESS */}

            <a
              href={hospital.map}
              target="_blank"
              rel="noreferrer"
              className="mt-1.5 block text-[9px] leading-[1.6] text-[#637b8a] transition-colors duration-300 hover:text-[#0879bd]"
            >
              {hospital.address}
            </a>


            {/* CLICKABLE PHONE */}

            <a
              href={`tel:${hospital.phone.replace(
                /[^0-9+]/g,
                ""
              )}`}
              className="mt-1.5 block text-[9px] font-medium text-[#0879bd] transition-colors duration-300 hover:text-[#075b91]"
            >
              {hospital.phone}
            </a>

          </div>

        ))}

      </div>

    </div>
  );
}