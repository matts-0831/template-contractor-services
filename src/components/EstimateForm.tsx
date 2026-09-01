"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

function formatPhone(value: string) {
  const digits = digitsOnly(value).slice(0, 10);
  if (digits.length < 4) return digits;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export function EstimateForm() {
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("fullName") || "").trim();
    const phone = String(data.get("phone") || "");
    const service = String(data.get("serviceNeeded") || "");
    const description = String(data.get("projectDescription") || "").trim();
    const nextErrors: Record<string, string> = {};

    if (name.length < 2) nextErrors.fullName = "Please enter your full name.";
    if (digitsOnly(phone).length !== 10) nextErrors.phone = "Enter a 10-digit phone number.";
    if (!service) nextErrors.serviceNeeded = "Select the service you need.";
    if (description.length < 10) nextErrors.projectDescription = "Tell us a bit about the job (at least 10 characters).";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setSuccess(true);
  }

  return (
    <section className="bg-linear-to-b from-[#1a130c] to-[#24180e] py-[4.5rem] pb-20" id="estimate">
      <div className="mx-auto grid w-[min(calc(100%-2rem),1180px)] gap-8 lg:grid-cols-[1fr_0.92fr]">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-safety">{site.estimate.eyebrow}</p>
          <h2 className="mb-4 max-w-[18ch] text-[clamp(1.85rem,4.4vw,3.1rem)]">{site.estimate.heading}</h2>
          <p className="max-w-[52ch] text-[#d5cbb8]">{site.estimate.lede}</p>
          <ul className="mt-5 grid gap-3 text-[#d5cbb8]">
            {site.estimate.points.map((point) => (
              <li key={point} className="border-l-[3px] border-accent pl-4">
                {point}
              </li>
            ))}
          </ul>
        </div>

        {success ? (
          <div className="rounded-[18px] bg-paper p-5 text-paper-ink shadow-2xl" tabIndex={-1}>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#9a6b00]">Request received</p>
            <h2 className="mb-3 text-paper-ink">Thanks — we’ll be in touch.</h2>
            <p className="mb-5">Your estimate request is in. If the job is time-sensitive, call the shop now.</p>
            <a
              className="inline-flex min-h-14 items-center justify-center rounded-lg bg-safety px-5 py-3 font-extrabold uppercase tracking-wide text-ink hover:bg-safety-2"
              href={site.phoneTel}
            >
              Call {site.phoneDisplay}
            </a>
          </div>
        ) : (
          <form className="rounded-[18px] bg-paper p-5 text-paper-ink shadow-2xl" onSubmit={onSubmit} noValidate>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-bold" htmlFor="full-name">
                Full Name
              </label>
              <input
                className="w-full rounded-[10px] border-[1.5px] border-[#cfc6b6] bg-white px-3 py-3 text-paper-ink outline-none focus:border-safety focus:outline-2 focus:outline-safety"
                id="full-name"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                placeholder="Jane Smith"
                aria-invalid={Boolean(errors.fullName)}
              />
              <p className="mt-1 min-h-[1.1em] text-sm font-semibold text-danger" role="alert">
                {errors.fullName}
              </p>
            </div>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-bold" htmlFor="phone">
                Phone Number
              </label>
              <input
                className="w-full rounded-[10px] border-[1.5px] border-[#cfc6b6] bg-white px-3 py-3 text-paper-ink outline-none focus:border-safety focus:outline-2 focus:outline-safety"
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                placeholder="(555) 555-0100"
                aria-invalid={Boolean(errors.phone)}
                onInput={(event) => {
                  event.currentTarget.value = formatPhone(event.currentTarget.value);
                }}
              />
              <p className="mt-1 min-h-[1.1em] text-sm font-semibold text-danger" role="alert">
                {errors.phone}
              </p>
            </div>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-bold" htmlFor="service-needed">
                Service Needed
              </label>
              <select
                className="w-full rounded-[10px] border-[1.5px] border-[#cfc6b6] bg-white px-3 py-3 text-paper-ink outline-none focus:border-safety focus:outline-2 focus:outline-safety"
                id="service-needed"
                name="serviceNeeded"
                required
                defaultValue=""
                aria-invalid={Boolean(errors.serviceNeeded)}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {site.estimate.serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <p className="mt-1 min-h-[1.1em] text-sm font-semibold text-danger" role="alert">
                {errors.serviceNeeded}
              </p>
            </div>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-bold" htmlFor="project-description">
                Project Description
              </label>
              <textarea
                className="min-h-[132px] w-full resize-y rounded-[10px] border-[1.5px] border-[#cfc6b6] bg-white px-3 py-3 text-paper-ink outline-none focus:border-safety focus:outline-2 focus:outline-safety"
                id="project-description"
                name="projectDescription"
                rows={5}
                required
                placeholder={site.estimate.descriptionPlaceholder}
                aria-invalid={Boolean(errors.projectDescription)}
              />
              <p className="mt-1 min-h-[1.1em] text-sm font-semibold text-danger" role="alert">
                {errors.projectDescription}
              </p>
            </div>
            <button
              className="inline-flex min-h-14 w-full items-center justify-center rounded-lg bg-safety px-5 py-3 font-extrabold uppercase tracking-wide text-ink hover:bg-safety-2"
              type="submit"
            >
              Request Free Quote
            </button>
            <p className="mt-3 text-center text-sm text-[#5d564b]">
              Prefer the phone?{" "}
              <a className="font-bold text-[#8a4b00]" href={site.phoneTel}>
                Call {site.phoneDisplay}
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
