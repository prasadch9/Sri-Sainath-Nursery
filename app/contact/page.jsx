"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionHeading from "@/components/SectionHeading";
import { business } from "@/lib/siteData";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 2500);
  };

  return (
    <>
      <motion.section
        className="bg-sage/70"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-wide px-5 py-16 sm:px-8 lg:px-10">
          <span className="eyebrow">Contact Sri Sainath Nursery</span>
          <h1 className="text-4xl font-black text-gray-900 sm:text-5xl">
            Let&apos;s talk about your greenery
          </h1>
          <p className="mt-4 max-w-2xl leading-7 text-gray-600">
            Call, WhatsApp or visit us in person for plant requirements, garden guidance and bulk enquiries.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="section-pad"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-wide grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Get in Touch"
              title="Contact information"
            />

            <div className="space-y-4">
              <div className="card flex gap-4 p-5">
  <span className="rounded-2xl bg-sage p-3 text-forest">
    <FiPhone />
  </span>
  <div>
    <p className="text-sm text-gray-500">Phone</p>

    {/* First Number */}
    <a
      href={`tel:${business.phone.replace(/\s/g, "")}`}
      className="block font-bold text-gray-900 hover:text-forest"
    >
      {business.phone}
    </a>

    {/* Second Number */}
    <a
      href="tel:9876543210"
      className="block font-bold text-gray-900 hover:text-forest"
    >
      +91 93939 88799
    </a>

    {/* Third Number */}
    <a
      href="tel:9123456780"
      className="block font-bold text-gray-900 hover:text-forest"
    >
      +91 89198 58313
    </a>
  </div>
</div>

              <div className="card flex gap-4 p-5">
                <span className="rounded-2xl bg-sage p-3 text-forest">
                  <FaWhatsapp />
                </span>
                <div>
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <a
                    href={`https://wa.me/${business.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-gray-900 hover:text-forest"
                  >
                    99894 35886
                  </a>
                </div>
              </div>

              <div className="card flex gap-4 p-5">
                <span className="rounded-2xl bg-sage p-3 text-forest">
                  <FiMail />
                </span>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a
                    href={`mailto:${business.email}`}
                    className="font-bold text-gray-900 hover:text-forest"
                  >
                    {business.email}
                  </a>
                </div>
              </div>

              <div className="card flex gap-4 p-5">
                <span className="rounded-2xl bg-sage p-3 text-forest">
                  <FiMapPin />
                </span>
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-bold text-gray-900">
                    {business.address}
                  </p>
                </div>
              </div>

              <div className="card flex gap-4 p-5">
                <span className="rounded-2xl bg-sage p-3 text-forest">
                  <FiClock />
                </span>
                <div>
                  <p className="text-sm text-gray-500">Opening Days</p>
                  <p className="font-bold text-gray-900">
                    {business.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="card p-6 sm:p-8">
              <h2 className="text-2xl font-extrabold text-gray-900">
                Send an enquiry
              </h2>

              <p className="mt-2 text-sm text-gray-600">
                This form is a front-end enquiry form. Connect it to your preferred email/form service before production.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-7 grid gap-5 sm:grid-cols-2"
              >
                <label className="grid gap-2 text-sm font-semibold">
                  Name
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-forest focus:ring-2 focus:ring-green-100"
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold">
                  Phone
                  <input
                    required
                    type="tel"
                    placeholder="Your phone number"
                    className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-forest focus:ring-2 focus:ring-green-100"
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold sm:col-span-2">
                  Email
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-forest focus:ring-2 focus:ring-green-100"
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold sm:col-span-2">
                  Plant Requirement / Message
                  <textarea
                    rows="6"
                    placeholder="Tell us what plants or garden support you need..."
                    className="resize-y rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-forest focus:ring-2 focus:ring-green-100"
                  />
                </label>

                <button
                  type="submit"
                  className="primary-btn sm:col-span-2"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="px-5 pb-16 sm:px-8 lg:px-10"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-wide">
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900">
            Find Us
          </h2>

          <div className="overflow-hidden rounded-[2rem] border border-green-100 bg-gray-100 shadow-soft">
            <iframe
              title="Sri Sainath Nursery map"
              src="https://www.google.com/maps?q=16.8943985,81.8246373&output=embed"
              className="h-[380px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </motion.section>

      {submitted && (
        <div className="fixed right-5 top-5 z-[100] flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-2xl ring-1 ring-green-100">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-600">
            <FiCheck size={22} />
          </span>
          <span className="font-bold text-gray-900">Done</span>
        </div>
      )}

      <WhatsAppButton />
    </>
  );
}