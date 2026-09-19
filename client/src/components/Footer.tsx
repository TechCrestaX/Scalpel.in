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

    // If currently on another route, go to Home + section
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    // Already on Home
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
          className="group flex items-center gap-2 text-[10px] text-[#c4d6e0] transition-all duration-300 hover:translate-x-1 hover:text-white sm:text-[11px]"
        >
          <ArrowRight
            size={10}
            className="text-[#5fc4e8] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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
          className="group flex items-center gap-2 text-[10px] text-[#c4d6e0] transition-all duration-300 hover:translate-x-1 hover:text-white sm:text-[11px]"
        >
          <ArrowRight
            size={10}
            className="text-[#5fc4e8] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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
        className="group flex cursor-pointer items-center gap-2 text-[10px] text-[#c4d6e0] transition-all duration-300 hover:translate-x-1 hover:text-white sm:text-[11px]"
      >
        <ArrowRight
          size={10}
          className="text-[#5fc4e8] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <span>{link.label}</span>
      </a>
    );
  };

  return (
    <footer
      id="contact"
      className="w-full bg-[#073653] text-white"
    >
      {/* =====================================================
          APPOINTMENT CTA
      ===================================================== */}

      <section className="border-y border-[#315b70] bg-[#0a3d5c]">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col justify-between gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center lg:px-10 lg:py-9">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-[2px] w-8 bg-[#5fc4e8]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#5fc4e8]">
                Consultation
              </span>
            </div>

            <h2 className="font-serif text-[23px] font-bold text-white sm:text-[28px]">
              Looking for the right surgical care?
            </h2>

            <p className="mt-1 text-[10px] text-[#c4d6e0] sm:text-[11px]">
              Schedule a consultation with Dr. Rahul Bhanja Chowdhury.
            </p>
          </div>

          <Link
            to="/book-appointment"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#5fc4e8] px-5 py-3 text-[10px] font-bold text-[#073653] shadow-[0_6px_18px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_9px_24px_rgba(0,0,0,0.22)] sm:px-6 sm:text-[11px]"
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
                className="h-auto w-[165px] object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            <h3 className="mt-7 font-serif text-[20px] font-bold text-white">
              Dr. Rahul Bhanja Chowdhury
            </h3>

            <p className="mt-1 text-[10px] font-semibold text-[#5fc4e8]">
              Consultant General &amp; Laparoscopic Surgeon
            </p>

            <p className="mt-4 max-w-[390px] text-[10px] leading-[1.85] text-[#c4d6e0] sm:text-[11px]">
              A new-generation Consultant General and Laparoscopic Surgeon
              focused on modern, patient-centric and technologically advanced
              surgical care with precision, evidence-based practice and
              compassionate treatment.
            </p>

            {/* CONTACT */}

            <div className="mt-6 space-y-3">
              <a
                href="tel:+919830997513"
                className="group flex items-center gap-3 text-[10px] text-[#d2e0e7] transition-colors duration-300 hover:text-white sm:text-[11px]"
              >
                <Phone
                  size={14}
                  className="shrink-0 text-[#5fc4e8] transition-transform duration-300 group-hover:scale-110"
                />

                <span>
                  +91 98309 97513
                </span>
              </a>

              <a
                href="mailto:scalpel2026@gmail.com"
                className="group flex items-center gap-3 text-[10px] text-[#d2e0e7] transition-colors duration-300 hover:text-white sm:text-[11px]"
              >
                <Mail
                  size={14}
                  className="shrink-0 text-[#5fc4e8] transition-transform duration-300 group-hover:scale-110"
                />

                <span>
                  scalpel2026@gmail.com
                </span>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=330+Netaji+Block+Chowhati+Kolkata+700149"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3 text-[10px] leading-5 text-[#d2e0e7] transition-colors duration-300 hover:text-white sm:text-[11px]"
              >
                <MapPin
                  size={14}
                  className="mt-0.5 shrink-0 text-[#5fc4e8] transition-transform duration-300 group-hover:scale-110"
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
              <p className="mb-3 text-[8px] font-bold uppercase tracking-[0.2em] text-[#91adbb]">
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
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#4c7185] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#5fc4e8] hover:bg-[#5fc4e8] hover:text-[#073653]"
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
            <h3 className="font-serif text-[17px] font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-3 h-[2px] w-8 bg-[#5fc4e8]" />

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

      <div className="border-y border-[#315b70] bg-[#062f49]">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-3 px-5 py-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div className="flex items-start gap-3">
            <Clock3
              size={15}
              className="mt-0.5 shrink-0 text-[#5fc4e8]"
            />

            <div>
              <p className="text-[10px] font-semibold text-white sm:text-[11px]">
                Hospital Availability
              </p>

              <p className="mt-1 text-[9px] leading-5 text-[#b9ced9] sm:text-[10px]">
                Consultation availability may vary by hospital and day.
                Please contact the respective hospital before visiting.
              </p>
            </div>
          </div>

          <a
            href="tel:+919830997513"
            className="inline-flex items-center gap-2 text-[10px] font-semibold text-[#5fc4e8] transition-colors duration-300 hover:text-white sm:text-[11px]"
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

      <div className="border-t border-[#315b70] bg-[#05263b]">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-3 px-5 py-5 text-[8px] text-[#9fb7c3] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
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
            className="group inline-flex items-center gap-1.5 font-medium text-[#a9c0cc] transition-colors duration-300 hover:text-white"
          >
            <span>
              Build by
            </span>

            <span className="font-semibold text-white group-hover:text-[#5fc4e8]">
              TechCrestaX
            </span>
            <span
              className="text-[10px] text-red-400 transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            >
              ❤️
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
          className="text-[#5fc4e8]"
        />

        <h3 className="font-serif text-[17px] font-bold text-white">
          {city}
        </h3>
      </div>

      <div className="mt-3 h-[2px] w-8 bg-[#5fc4e8]" />

      {/* HOSPITALS */}

      <div className="mt-5 space-y-5">
        {hospitals.map((hospital) => (
          <div
            key={hospital.name}
            className="border-b border-[#315b70] pb-4 last:border-0"
          >
            <h4 className="text-[10px] font-bold text-white sm:text-[11px]">
              {hospital.name}
            </h4>

            {/* CLICKABLE ADDRESS */}

            <a
              href={hospital.map}
              target="_blank"
              rel="noreferrer"
              className="mt-1.5 block text-[9px] leading-[1.6] text-[#c4d6e0] transition-colors duration-300 hover:text-white sm:text-[10px]"
            >
              {hospital.address}
            </a>

            {/* CLICKABLE PHONE */}

            <a
              href={`tel:${hospital.phone.replace(
                /[^0-9+]/g,
                ""
              )}`}
              className="mt-1.5 block text-[9px] font-medium text-[#5fc4e8] transition-colors duration-300 hover:text-white sm:text-[10px]"
            >
              {hospital.phone}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}