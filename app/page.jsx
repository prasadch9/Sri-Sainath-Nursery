"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiPhone,
  FiSun,
  FiMapPin,
  FiClock,
  FiDroplet,
  FiHeart,
  FiStar,
} from "react-icons/fi";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";
import StatsCounter from "@/components/StatsCounter";
import { business } from "@/lib/siteData";

const categories = [
  {
    title: "Indoor",
    description: "Healthy fruit-bearing plants for home gardens, farms and larger landscapes.",
    image: "/indoor/Fern.jpg",
  },
  {
    title: "Fruit Plants",
    description: "Fresh foliage varieties that bring natural colour and life to every space.",
    image: "/Fruit/Star Fruit.jpg",
  },
  {
    title: "Flowering Plants",
    description: "Colourful flowering choices for balconies, gardens, entrances and special spaces.",
    image: "/flower.jpg",
  },
  {
    title: "Landscape Trees",
    description: "Beautiful trees and greenery selected for shade, structure and long-term landscapes.",
    image: "/Bonsai/Bonsai 8.jpg",
  },
];

const benefits = [
  ["30+ Years Experience", "Practical nursery knowledge built through years of caring for plants."],
  ["Healthy & Quality Plants", "We focus on strong, well-maintained plants ready for their next home."],
  ["Bulk Nursery Orders", "Talk to us directly for larger requirements and nursery supplies."],
  ["Expert Maintenance Guidance", "Get simple, practical advice for planting and garden care."],
];

const stats = [
  ["30+", "Years of experience"],
  ["500+", "Plant varieties"],
  ["10,000+", "Happy customers"],
  ["100%", "Healthy, well-kept plants"],
];

const steps = [
  ["Visit or call us", "Tell us about your space, sunlight and what you'd like to grow."],
  ["Choose your plants", "We suggest healthy plants that suit your needs and budget."],
  ["Plant with guidance", "Get simple tips on soil, pot size and planting."],
  ["Enjoy & maintain", "Come back anytime for watering, feeding and care advice."],
];

const careTips = [
  [FiSun, "Right light", "Match each plant to the sunlight your space actually gets."],
  [FiDroplet, "Water wisely", "Water deeply but less often. Let the top soil dry slightly between waterings."],
  [FiHeart, "Feed regularly", "A little organic manure every few weeks keeps plants strong and green."],
];

const faqs = [
  ["Do you accept bulk orders?", "Yes. Call or WhatsApp us with your requirement and we will help you with plants and supplies."],
  ["Can I visit the nursery?", "Absolutely. You are welcome to walk through, see the plants in person and pick what you like."],
  ["Will you guide me on plant care?", "Yes. Our team shares practical tips on planting, watering and maintenance."],
  ["Do you have plants for small balconies?", "Yes. We have compact indoor, flowering and fruit plants that grow well in pots."],
];

export default function HomePage() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden bg-forestDark"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/home page.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-forestDark/80 via-forestDark/75 to-forestDark/35" />

        <div className="container-wide relative grid min-h-[620px] items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div className="max-w-2xl text-white">
            <span className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
              {business.tagline}
            </span>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Quality plants & trees for a greener tomorrow.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-green-50/90 sm:text-lg">
              Discover a beautiful range of greenery for homes, farms, gardens and landscapes — with friendly guidance from our nursery team.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/gallery" className="primary-btn">
                Explore Gallery <FiArrowRight className="ml-2" />
              </Link>

              <Link href="/contact" className="secondary-btn">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="hidden justify-center lg:flex">
            <div className="rounded-[2rem] border border-white/25 bg-white/10 p-4 shadow-2xl backdrop-blur-md">
              <Image
                src="/images/logo.png"
                alt="Sri Sainath Nursery"
                width={520}
                height={352}
                className="h-auto w-[430px] object-contain"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white"
      >
        <div className="container-wide grid grid-cols-2 gap-6 px-5 py-10 text-center sm:px-8 lg:grid-cols-4 lg:px-10">
          <StatsCounter stats={stats} />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="section-pad"
      >
        <div className="container-wide">
          <SectionHeading
            eyebrow="Explore Our Greenery"
            title="Plants for every kind of space"
            description="From compact indoor greens to flowering plants and landscape trees, find varieties that suit your garden goals."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((item) => (
              <article key={item.title} className="card overflow-hidden transition hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="section-pad bg-sage/60"
      >
        <div className="container-wide">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="More than plants — practical nursery guidance"
            description="We aim to make choosing, planting and caring for greenery simple and enjoyable."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(([title, description]) => (
              <div key={title} className="rounded-3xl bg-white p-7 shadow-soft">
                <FiCheckCircle className="text-3xl text-forest" />
                <h3 className="mt-5 text-xl font-bold text-gray-900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="section-pad"
      >
        <div className="container-wide">
          <SectionHeading
            eyebrow="How It Works"
            title="From first visit to a thriving garden"
            description="A simple process to help you pick the right plants and keep them healthy."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([title, description], i) => (
              <div key={title} className="card p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest font-bold text-white">
                  {i + 1}
                </span>

                <h3 className="mt-5 text-lg font-bold text-gray-900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="section-pad bg-sage/60"
      >
        <div className="container-wide">
          <SectionHeading
            eyebrow="Plant Care"
            title="Easy tips to keep your plants happy"
            description="A few simple habits make a big difference to how well your plants grow."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {careTips.map(([Icon, title, description]) => (
              <div key={title} className="rounded-3xl bg-white p-7 shadow-soft">
                <Icon className="text-3xl text-forest" />
                <h3 className="mt-5 text-xl font-bold text-gray-900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="section-pad bg-sage/60"
      >
        <div className="container-wide max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            description="Quick answers before you visit or call."
          />

          <div className="space-y-4">
            {faqs.map(([q, a]) => (
              <details key={q} className="group rounded-2xl bg-white p-6 shadow-soft">
                <summary className="cursor-pointer list-none font-bold text-gray-900">
                  {q}
                </summary>

                <p className="mt-3 text-sm leading-7 text-gray-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="section-pad"
      >
        <div className="container-wide overflow-hidden rounded-[2rem] bg-forestDark px-6 py-12 text-center text-white shadow-soft sm:px-10">
          <FiSun className="mx-auto text-4xl text-green-200" />

          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Planning a garden or a bulk plant requirement?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-green-50/85">
            Visit the nursery or call us directly. We can discuss your requirements and help you choose suitable plants.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${business.phone.replace(/\s/g, "")}`}
              className="primary-btn bg-white text-forest hover:bg-green-50"
            >
              <FiPhone className="mr-2" /> Call Now
            </a>

            <Link href="/contact" className="secondary-btn">
              Get Directions & Contact
            </Link>
          </div>
        </div>
      </motion.section>

      <WhatsAppButton />
    </>
  );
}
