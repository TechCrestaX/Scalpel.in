import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Hospital,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope,
  UserRound,
} from "lucide-react";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type HospitalData = {
  id: string;
  city: string;
  name: string;
  address: string;
  phone: string;
};

const hospitals: HospitalData[] = [
  {
    id: "sejuti",
    city: "Kolkata",
    name: "Sejuti Hospital",
    address: "3A, Waverly Lane, Kolkata – 700013",
    phone: "+91 90738 81874",
  },
  {
    id: "atlas",
    city: "Kolkata",
    name: "Atlas Health Point",
    address:
      "282, Purba Baidya Para, Khiristola More, Kolkata – 700150",
    phone: "033-7115 5555",
  },
  {
    id: "wellcare",
    city: "Kolkata",
    name: "Well Care Nursing Home",
    address:
      "Dehimedan Malla, Dakshin Gobindopur, Baruipur – 700145",
    phone: "+91 94753 32013",
  },
  {
    id: "aastha",
    city: "Siliguri",
    name: "Aastha Hospital",
    address:
      "Medical College Road, Kawakhari, Opposite Bharat Petrol Pump, Siliguri, West Bengal – 734012",
    phone: "+91 77193 68000",
  },
  {
    id: "mukherjee",
    city: "Siliguri",
    name: "Mukherjee Hospital",
    address:
      "Rajani Bagan, Hill Cart Road, Siliguri, West Bengal – 734001",
    phone: "+91 90029 36622",
  },
  {
    id: "kins",
    city: "Siliguri",
    name: "Kins Hospital",
    address:
      "Sevoke More, Hill Cart Road, Ward 6, Siliguri, West Bengal – 734001",
    phone: "+91 97359 87500",
  },
];

const appointmentTypes = [
  {
    id: "new",
    title: "New Consultation",
    description: "First-time consultation with the doctor",
    duration: "30 min",
  },
  {
    id: "followup",
    title: "Follow-up Consultation",
    description: "For an existing treatment or previous consultation",
    duration: "20 min",
  },
  {
    id: "surgical",
    title: "Surgical Consultation",
    description: "Detailed discussion regarding a surgical condition",
    duration: "30 min",
  },
];

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
];

const unavailableSlots = [
  "10:30 AM",
  "12:00 PM",
  "04:30 PM",
  "06:00 PM",
];

const reasons = [
  "Gallbladder / Biliary Problem",
  "Appendicitis / Emergency Surgery",
  "Hernia",
  "Colorectal Problem",
  "Gastrointestinal Problem",
  "Breast / Thyroid Problem",
  "Minor Surgical Procedure",
  "Second Opinion",
  "Other",
];

function getDateString(date: Date) {
  return date.toISOString().split("T")[0];
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

export default function BookAppointment() {
  const [step, setStep] = useState(1);

  const [selectedHospital, setSelectedHospital] =
    useState<string>("");

  const [appointmentType, setAppointmentType] =
    useState<string>("");

  const [selectedDate, setSelectedDate] =
    useState<string>("");

  const [selectedTime, setSelectedTime] =
    useState<string>("");

  const [patient, setPatient] = useState({
    name: "",
    phone: "",
    email: "",
    reason: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const [calendarMonth, setCalendarMonth] =
    useState(new Date());

  const selectedHospitalData = hospitals.find(
    (hospital) => hospital.id === selectedHospital
  );

  const calendarDays = useMemo(() => {
    const year = calendarMonth.getFullYear();
    const month = calendarMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const days: (Date | null)[] = [];

    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  }, [calendarMonth]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const canContinueStep1 =
    selectedHospital && appointmentType;

  const canContinueStep2 =
    selectedDate && selectedTime;

  const canSubmit =
    patient.name &&
    patient.phone &&
    patient.email &&
    patient.reason;

  const nextStep = () => {
    if (step === 1 && canContinueStep1) {
      setStep(2);
      return;
    }

    if (step === 2 && canContinueStep2) {
      setStep(3);
      return;
    }

    if (step === 3 && canSubmit) {
      setSuccess(true);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const changePatient = (
    field: keyof typeof patient,
    value: string
  ) => {
    setPatient((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  if (success) {
    return (
      <div className="min-h-screen bg-[#f5f9fb]">
        <Navbar />

        <main className="flex min-h-[75vh] items-center justify-center px-5 py-20">
          <div className="w-full max-w-[650px] rounded-3xl border border-[#d7e7ed] bg-white p-8 text-center shadow-[0_20px_60px_rgba(15,65,90,0.08)] sm:p-12">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#e8f7ef]">
              <CheckCircle2
                size={40}
                className="text-[#29966a]"
              />
            </div>

            <p className="mt-7 text-[9px] font-bold uppercase tracking-[0.25em] text-[#087fbd]">
              Appointment Request
            </p>

            <h1 className="mt-3 font-serif text-[32px] font-bold text-[#123f61] sm:text-[40px]">
              Appointment Requested
            </h1>

            <p className="mx-auto mt-4 max-w-[520px] text-[11px] leading-6 text-[#687f8e] sm:text-[12px]">
              Your appointment request has been recorded. The clinic
              will contact you to confirm the appointment and final
              availability.
            </p>

            <div className="mt-8 rounded-2xl bg-[#f5f9fb] p-5 text-left">

              <div className="flex items-start gap-3">
                <CalendarDays
                  size={16}
                  className="mt-0.5 text-[#087fbd]"
                />

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#8195a1]">
                    Requested Date & Time
                  </p>

                  <p className="mt-1 text-[12px] font-semibold text-[#173f5d]">
                    {selectedDate &&
                      formatDate(new Date(`${selectedDate}T00:00:00`))}
                    {" · "}
                    {selectedTime}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-3">
                <Hospital
                  size={16}
                  className="mt-0.5 text-[#087fbd]"
                />

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#8195a1]">
                    Hospital
                  </p>

                  <p className="mt-1 text-[12px] font-semibold text-[#173f5d]">
                    {selectedHospitalData?.name}
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-[#718795]">
                    {selectedHospitalData?.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#075b91] px-6 py-3 text-[10px] font-bold text-white transition hover:bg-[#064a77]"
              >
                Back to Home
              </Link>

              <a
                href="tel:9830997513"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#b9d3df] px-6 py-3 text-[10px] font-bold text-[#075b91] transition hover:bg-[#f1f8fb]"
              >
                <Phone size={13} />
                Call Clinic
              </a>

            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f9fb]">

      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#073653] pt-[105px]">

        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#b0c7cf] opacity-20 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#43a9d1] opacity-10 blur-3xl" />

        <div className="relative mx-auto max-w-[1350px] px-5 pb-14 sm:px-8 lg:px-10 lg:pb-16">

          <div className="mb-7 flex items-center gap-2 text-[10px] text-white/55">
            <Link
              to="/"
              className="hover:text-white"
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-white">
              Book an Appointment
            </span>
          </div>

          <div className="max-w-[750px]">

            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-[2px] w-9 bg-[#43a9d1]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#72c4e5]">
                Online Appointment
              </span>
            </div>

            <h1 className="font-serif text-[36px] font-bold leading-[1.08] text-white sm:text-[46px] lg:text-[55px]">
              Book your consultation
              <br />
              <span className="text-[#8bd0e8]">
                at your convenience.
              </span>
            </h1>

            <p className="mt-5 max-w-[620px] text-[11px] leading-6 text-white/65 sm:text-[12px]">
              Choose your hospital, consultation type, preferred date
              and available time slot before entering your details.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          BOOKING AREA
      ===================================================== */}

      <main className="mx-auto max-w-[1350px] px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">

        {/* ===================================================
            PROGRESS
        =================================================== */}

        <div className="mb-8 rounded-2xl border border-[#d7e6ed] bg-white p-4 shadow-[0_6px_24px_rgba(15,65,90,0.04)] sm:p-5">

          <div className="flex items-center justify-between">

            {[
              {
                number: 1,
                label: "Appointment",
              },
              {
                number: 2,
                label: "Date & Time",
              },
              {
                number: 3,
                label: "Patient Details",
              },
            ].map((item, index) => {

              const active = step >= item.number;

              return (
                <div
                  key={item.number}
                  className="flex flex-1 items-center"
                >

                  <div className="flex items-center gap-2">

                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-bold transition ${
                        active
                          ? "bg-[#075b91] text-white"
                          : "bg-[#edf4f7] text-[#8ba0ac]"
                      }`}
                    >
                      {step > item.number ? (
                        <Check size={14} />
                      ) : (
                        item.number
                      )}
                    </div>

                    <span
                      className={`hidden text-[9px] font-bold sm:block ${
                        active
                          ? "text-[#173f5d]"
                          : "text-[#91a3ad]"
                      }`}
                    >
                      {item.label}
                    </span>

                  </div>

                  {index < 2 && (
                    <div
                      className={`mx-3 h-px flex-1 ${
                        step > item.number
                          ? "bg-[#087fbd]"
                          : "bg-[#dce8ed]"
                      }`}
                    />
                  )}

                </div>
              );
            })}

          </div>

        </div>

        <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_350px]">

          {/* =================================================
              LEFT MAIN
          ================================================= */}

          <div className="rounded-2xl border border-[#d7e6ed] bg-white p-5 shadow-[0_10px_35px_rgba(15,65,90,0.05)] sm:p-7 lg:p-9">

            {/* =================================================
                STEP 1
            ================================================= */}

            {step === 1 && (
              <div>

                <div className="mb-8">
                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#087fbd]">
                    Step 1
                  </span>

                  <h2 className="mt-2 font-serif text-[27px] font-bold text-[#123f61]">
                    Choose your appointment
                  </h2>

                  <p className="mt-2 text-[10px] leading-5 text-[#718795]">
                    Select where you want to consult and what type of
                    appointment you need.
                  </p>
                </div>

                {/* HOSPITAL */}

                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <Hospital
                      size={16}
                      className="text-[#087fbd]"
                    />

                    <h3 className="text-[11px] font-bold text-[#173f5d]">
                      Select Hospital
                    </h3>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">

                    {hospitals.map((hospital) => {

                      const selected =
                        selectedHospital === hospital.id;

                      return (
                        <button
                          type="button"
                          key={hospital.id}
                          onClick={() =>
                            setSelectedHospital(hospital.id)
                          }
                          className={`relative rounded-xl border p-4 text-left transition-all duration-300 ${
                            selected
                              ? "border-[#087fbd] bg-[#f1f9fc] shadow-[0_5px_18px_rgba(8,127,189,0.08)]"
                              : "border-[#d8e6ec] bg-white hover:border-[#a9cad8] hover:bg-[#fbfdfe]"
                          }`}
                        >

                          {selected && (
                            <div className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#087fbd] text-white">
                              <Check size={11} />
                            </div>
                          )}

                          <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#087fbd]">
                            {hospital.city}
                          </span>

                          <h4 className="mt-2 font-serif text-[16px] font-bold text-[#173f5d]">
                            {hospital.name}
                          </h4>

                          <div className="mt-2 flex items-start gap-2">
                            <MapPin
                              size={12}
                              className="mt-0.5 shrink-0 text-[#819ba8]"
                            />

                            <p className="text-[9px] leading-4 text-[#8195a1]">
                              {hospital.address}
                            </p>
                          </div>

                        </button>
                      );
                    })}

                  </div>
                </div>

                {/* APPOINTMENT TYPE */}

                <div className="mt-9">

                  <div className="mb-4 flex items-center gap-2">
                    <Stethoscope
                      size={16}
                      className="text-[#087fbd]"
                    />

                    <h3 className="text-[11px] font-bold text-[#173f5d]">
                      Consultation Type
                    </h3>
                  </div>

                  <div className="space-y-3">

                    {appointmentTypes.map((type) => {

                      const selected =
                        appointmentType === type.id;

                      return (
                        <button
                          type="button"
                          key={type.id}
                          onClick={() =>
                            setAppointmentType(type.id)
                          }
                          className={`flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all ${
                            selected
                              ? "border-[#087fbd] bg-[#f1f9fc]"
                              : "border-[#d8e6ec] hover:border-[#a9cad8]"
                          }`}
                        >

                          <div className="flex items-start gap-3">

                            <div
                              className={`mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg ${
                                selected
                                  ? "bg-[#087fbd] text-white"
                                  : "bg-[#edf5f8] text-[#7894a2]"
                              }`}
                            >
                              <Stethoscope size={14} />
                            </div>

                            <div>
                              <p className="text-[11px] font-bold text-[#173f5d]">
                                {type.title}
                              </p>

                              <p className="mt-1 text-[9px] leading-4 text-[#8195a1]">
                                {type.description}
                              </p>
                            </div>

                          </div>

                          <span className="shrink-0 text-[8px] font-bold text-[#087fbd]">
                            {type.duration}
                          </span>

                        </button>
                      );
                    })}

                  </div>
                </div>

              </div>
            )}

            {/* =================================================
                STEP 2
            ================================================= */}

            {step === 2 && (
              <div>

                <div className="mb-8">
                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#087fbd]">
                    Step 2
                  </span>

                  <h2 className="mt-2 font-serif text-[27px] font-bold text-[#123f61]">
                    Choose date &amp; time
                  </h2>

                  <p className="mt-2 text-[10px] leading-5 text-[#718795]">
                    Select an available date and appointment slot.
                  </p>
                </div>

                <div className="grid gap-7 lg:grid-cols-[1fr_1fr]">

                  {/* CALENDAR */}

                  <div className="rounded-2xl border border-[#d9e7ed] p-5">

                    <div className="flex items-center justify-between">

                      <button
                        type="button"
                        onClick={() =>
                          setCalendarMonth(
                            new Date(
                              calendarMonth.getFullYear(),
                              calendarMonth.getMonth() - 1,
                              1
                            )
                          )
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#d8e6ec] text-[#527184] transition hover:bg-[#f2f8fa]"
                      >
                        <ChevronLeft size={15} />
                      </button>

                      <h3 className="font-serif text-[16px] font-bold text-[#173f5d]">
                        {calendarMonth.toLocaleDateString(
                          "en-IN",
                          {
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </h3>

                      <button
                        type="button"
                        onClick={() =>
                          setCalendarMonth(
                            new Date(
                              calendarMonth.getFullYear(),
                              calendarMonth.getMonth() + 1,
                              1
                            )
                          )
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#d8e6ec] text-[#527184] transition hover:bg-[#f2f8fa]"
                      >
                        <ChevronRight size={15} />
                      </button>

                    </div>

                    <div className="mt-6 grid grid-cols-7 gap-1 text-center">

                      {[
                        "Sun",
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat",
                      ].map((day) => (
                        <div
                          key={day}
                          className="py-2 text-[8px] font-bold uppercase text-[#9aabb4]"
                        >
                          {day}
                        </div>
                      ))}

                      {calendarDays.map((date, index) => {

                        if (!date) {
                          return (
                            <div
                              key={`empty-${index}`}
                              className="aspect-square"
                            />
                          );
                        }

                        const dateString =
                          getDateString(date);

                        const isPast = date < today;

                        const isSelected =
                          selectedDate === dateString;

                        const isSunday =
                          date.getDay() === 0;

                        const unavailable =
                          isSunday;

                        const disabled =
                          isPast || unavailable;

                        return (
                          <button
                            type="button"
                            key={dateString}
                            disabled={disabled}
                            onClick={() => {
                              setSelectedDate(dateString);
                              setSelectedTime("");
                            }}
                            className={`aspect-square rounded-lg text-[10px] font-semibold transition ${
                              isSelected
                                ? "bg-[#075b91] text-white"
                                : disabled
                                ? "cursor-not-allowed text-[#c8d2d7]"
                                : "text-[#4d6b7b] hover:bg-[#eaf5f9] hover:text-[#075b91]"
                            }`}
                          >
                            {date.getDate()}
                          </button>
                        );
                      })}

                    </div>

                    <div className="mt-5 flex items-center gap-4 text-[8px] text-[#8195a1]">

                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#075b91]" />
                        Selected
                      </span>

                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#dce5e9]" />
                        Unavailable
                      </span>

                    </div>

                  </div>

                  {/* TIME SLOTS */}

                  <div>

                    <div className="mb-4 flex items-center justify-between">

                      <div>
                        <h3 className="text-[11px] font-bold text-[#173f5d]">
                          Available Time Slots
                        </h3>

                        <p className="mt-1 text-[9px] text-[#8195a1]">
                          {selectedDate
                            ? formatDate(
                                new Date(
                                  `${selectedDate}T00:00:00`
                                )
                              )
                            : "Select a date first"}
                        </p>
                      </div>

                      <Clock3
                        size={16}
                        className="text-[#087fbd]"
                      />

                    </div>

                    {!selectedDate ? (
                      <div className="flex min-h-[240px] items-center justify-center rounded-2xl border border-dashed border-[#cbdde5] bg-[#fbfdfe] p-6 text-center">
                        <div>
                          <CalendarDays
                            size={28}
                            className="mx-auto text-[#aac0ca]"
                          />

                          <p className="mt-3 text-[10px] font-semibold text-[#718795]">
                            Select a date to view
                            available slots
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">

                        {timeSlots.map((time) => {

                          const unavailable =
                            unavailableSlots.includes(time);

                          const selected =
                            selectedTime === time;

                          return (
                            <button
                              type="button"
                              key={time}
                              disabled={unavailable}
                              onClick={() =>
                                setSelectedTime(time)
                              }
                              className={`rounded-lg border px-3 py-3 text-[9px] font-bold transition ${
                                selected
                                  ? "border-[#075b91] bg-[#075b91] text-white"
                                  : unavailable
                                  ? "cursor-not-allowed border-[#edf1f3] bg-[#f6f8f9] text-[#b7c3c9] line-through"
                                  : "border-[#d4e4ea] bg-white text-[#476777] hover:border-[#087fbd] hover:bg-[#f0f8fb] hover:text-[#075b91]"
                              }`}
                            >
                              {time}
                            </button>
                          );
                        })}

                      </div>
                    )}

                    <div className="mt-5 rounded-xl bg-[#f3f9fb] p-4">

                      <div className="flex items-start gap-2.5">
                        <ShieldCheck
                          size={14}
                          className="mt-0.5 text-[#087fbd]"
                        />

                        <p className="text-[9px] leading-5 text-[#718795]">
                          Available slots shown here are examples for
                          the frontend. Once connected to the backend,
                          these slots should come from the doctor's
                          actual schedule and booked appointments.
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </div>
            )}

            {/* =================================================
                STEP 3
            ================================================= */}

            {step === 3 && (
              <div>

                <div className="mb-8">
                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#087fbd]">
                    Step 3
                  </span>

                  <h2 className="mt-2 font-serif text-[27px] font-bold text-[#123f61]">
                    Patient details
                  </h2>

                  <p className="mt-2 text-[10px] leading-5 text-[#718795]">
                    Enter the details required to complete your
                    appointment request.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-[9px] font-bold text-[#36566b]">
                      Full Name *
                    </label>

                    <div className="relative">
                      <UserRound
                        size={14}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8da3ae]"
                      />

                      <input
                        type="text"
                        value={patient.name}
                        onChange={(e) =>
                          changePatient(
                            "name",
                            e.target.value
                          )
                        }
                        placeholder="Enter full name"
                        className="w-full rounded-lg border border-[#d3e2e9] bg-[#fbfdfe] py-3 pl-10 pr-4 text-[10px] text-[#173f5d] outline-none transition focus:border-[#087fbd] focus:ring-2 focus:ring-[#087fbd]/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-[9px] font-bold text-[#36566b]">
                      Mobile Number *
                    </label>

                    <div className="relative">
                      <Phone
                        size={14}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8da3ae]"
                      />

                      <input
                        type="tel"
                        value={patient.phone}
                        onChange={(e) =>
                          changePatient(
                            "phone",
                            e.target.value
                          )
                        }
                        placeholder="10-digit mobile number"
                        className="w-full rounded-lg border border-[#d3e2e9] bg-[#fbfdfe] py-3 pl-10 pr-4 text-[10px] text-[#173f5d] outline-none transition focus:border-[#087fbd] focus:ring-2 focus:ring-[#087fbd]/10"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-[9px] font-bold text-[#36566b]">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      value={patient.email}
                      onChange={(e) =>
                        changePatient(
                          "email",
                          e.target.value
                        )
                      }
                      placeholder="Enter email address"
                      className="w-full rounded-lg border border-[#d3e2e9] bg-[#fbfdfe] px-4 py-3 text-[10px] text-[#173f5d] outline-none transition focus:border-[#087fbd] focus:ring-2 focus:ring-[#087fbd]/10"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-[9px] font-bold text-[#36566b]">
                      Reason for Consultation *
                    </label>

                    <select
                      value={patient.reason}
                      onChange={(e) =>
                        changePatient(
                          "reason",
                          e.target.value
                        )
                      }
                      className="w-full rounded-lg border border-[#d3e2e9] bg-[#fbfdfe] px-4 py-3 text-[10px] text-[#173f5d] outline-none transition focus:border-[#087fbd] focus:ring-2 focus:ring-[#087fbd]/10"
                    >
                      <option value="">
                        Select reason
                      </option>

                      {reasons.map((reason) => (
                        <option key={reason} value={reason}>
                          {reason}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-[9px] font-bold text-[#36566b]">
                      Additional Information
                    </label>

                    <textarea
                      rows={5}
                      value={patient.message}
                      onChange={(e) =>
                        changePatient(
                          "message",
                          e.target.value
                        )
                      }
                      placeholder="Briefly describe your concern, previous reports, or anything the doctor should know..."
                      className="w-full resize-none rounded-lg border border-[#d3e2e9] bg-[#fbfdfe] px-4 py-3 text-[10px] leading-5 text-[#173f5d] outline-none transition focus:border-[#087fbd] focus:ring-2 focus:ring-[#087fbd]/10"
                    />
                  </div>

                </div>

                <div className="mt-7 rounded-xl bg-[#f2f8fa] p-4">

                  <div className="flex items-start gap-2.5">
                    <ShieldCheck
                      size={15}
                      className="mt-0.5 shrink-0 text-[#087fbd]"
                    />

                    <p className="text-[9px] leading-5 text-[#718795]">
                      Please do not use this form for medical emergencies.
                      For urgent medical assistance, contact the
                      appropriate emergency service or hospital directly.
                    </p>
                  </div>

                </div>

              </div>
            )}

            {/* =================================================
                NAVIGATION
            ================================================= */}

            <div className="mt-9 flex flex-col-reverse gap-3 border-t border-[#e4edf1] pt-6 sm:flex-row sm:items-center sm:justify-between">

              {step > 1 ? (
                <button
                  type="button"
                  onClick={previousStep}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#cbdde5] bg-white px-5 py-3 text-[10px] font-bold text-[#527184] transition hover:border-[#9ebdca] hover:bg-[#f7fbfc]"
                >
                  <ArrowLeft size={13} />
                  Back
                </button>
              ) : (
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#cbdde5] bg-white px-5 py-3 text-[10px] font-bold text-[#527184] transition hover:border-[#9ebdca] hover:bg-[#f7fbfc]"
                >
                  <ArrowLeft size={13} />
                  Cancel
                </Link>
              )}

              <button
                type="button"
                disabled={
                  (step === 1 && !canContinueStep1) ||
                  (step === 2 && !canContinueStep2) ||
                  (step === 3 && !canSubmit)
                }
                onClick={nextStep}
                className={`group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-[10px] font-bold text-white transition ${
                  (step === 1 && canContinueStep1) ||
                  (step === 2 && canContinueStep2) ||
                  (step === 3 && canSubmit)
                    ? "bg-[#075b91] shadow-[0_7px_20px_rgba(7,91,145,0.15)] hover:-translate-y-0.5 hover:bg-[#064a77]"
                    : "cursor-not-allowed bg-[#b6c9d2]"
                }`}
              >
                {step === 3
                  ? "Confirm Appointment"
                  : "Continue"}

                <ArrowRight
                  size={13}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

            </div>

          </div>

          {/* =================================================
              RIGHT SUMMARY
          ================================================= */}

          <aside className="h-fit space-y-5 lg:sticky lg:top-24">

            {/* BOOKING SUMMARY */}

            <div className="rounded-2xl border border-[#d7e6ed] bg-white p-5 shadow-[0_8px_28px_rgba(15,65,90,0.04)] sm:p-6">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf7fb]">
                  <CalendarDays
                    size={18}
                    className="text-[#087fbd]"
                  />
                </div>

                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#087fbd]">
                    Your Appointment
                  </p>

                  <h3 className="mt-1 font-serif text-[18px] font-bold text-[#123f61]">
                    Booking Summary
                  </h3>
                </div>

              </div>

              <div className="mt-6 space-y-4">

                <SummaryItem
                  label="Hospital"
                  value={
                    selectedHospitalData?.name ||
                    "Not selected"
                  }
                  icon={<Hospital size={13} />}
                />

                <SummaryItem
                  label="Location"
                  value={
                    selectedHospitalData?.city ||
                    "Not selected"
                  }
                  icon={<MapPin size={13} />}
                />

                <SummaryItem
                  label="Appointment"
                  value={
                    appointmentTypes.find(
                      (type) =>
                        type.id === appointmentType
                    )?.title || "Not selected"
                  }
                  icon={<Stethoscope size={13} />}
                />

                <SummaryItem
                  label="Date"
                  value={
                    selectedDate
                      ? formatDate(
                          new Date(
                            `${selectedDate}T00:00:00`
                          )
                        )
                      : "Not selected"
                  }
                  icon={<CalendarDays size={13} />}
                />

                <SummaryItem
                  label="Time"
                  value={
                    selectedTime || "Not selected"
                  }
                  icon={<Clock3 size={13} />}
                />

              </div>

            </div>

            {/* DOCTOR */}

            <div className="rounded-2xl bg-[#073653] p-6 text-white">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <Stethoscope
                  size={18}
                  className="text-[#8bd0e8]"
                />
              </div>

              <p className="mt-5 text-[8px] font-bold uppercase tracking-[0.2em] text-[#72c4e5]">
                Consultation With
              </p>

              <h3 className="mt-2 font-serif text-[20px] font-bold leading-tight">
                Dr. Rahul Bhanja Chowdhury
              </h3>

              <p className="mt-2 text-[9px] leading-5 text-white/60">
                Consultant General &amp; Laparoscopic Surgeon
              </p>

              <a
                href="tel:9830997513"
                className="mt-5 flex items-center gap-2 text-[9px] text-white/70 hover:text-white"
              >
                <Phone size={12} />
                9830997513
              </a>

            </div>

            {/* TRUST */}

            <div className="rounded-2xl border border-[#d7e6ed] bg-white p-5">

              <div className="flex items-start gap-3">

                <ShieldCheck
                  size={17}
                  className="mt-0.5 shrink-0 text-[#087fbd]"
                />

                <div>
                  <p className="text-[10px] font-bold text-[#173f5d]">
                    Secure appointment request
                  </p>

                  <p className="mt-1 text-[9px] leading-5 text-[#8195a1]">
                    Your appointment details are collected only
                    for scheduling and consultation purposes.
                  </p>
                </div>

              </div>

            </div>

          </aside>

        </div>

      </main>

      <Footer />
    </div>
  );
}

function SummaryItem({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">

      <div className="mt-0.5 text-[#087fbd]">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#9aaab2]">
          {label}
        </p>

        <p className="mt-1 truncate text-[10px] font-semibold text-[#476777]">
          {value}
        </p>
      </div>

    </div>
  );
}