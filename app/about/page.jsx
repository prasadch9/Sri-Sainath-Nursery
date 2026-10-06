"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiCheck, FiHeart, FiSun, FiUsers } from "react-icons/fi";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";

const services = [
  "Wholesale plant supply",
  "Landscape consulting",
  "Garden setup guidance",
  "Plant selection support",
];

const testimonials = [
  {
    quote: "I should give a major credit to the owner. 1 year back we gave advance for some plants and for some personal reasons we couldnt finish the deal. When we remembered this advance after an year, he understood and gave back the refund which was in 5 figures. Gem of a person!!",
    name: "Teja Padarthi",
  },
  {
    quote: "A pleasant place to explore greenery. The staff were friendly and helpful throughout our visit.",
    name: "Rajesh Kumar",
  },
  {
    quote: "We needed several plants for a larger project and were able to discuss the requirement directly.",
    name: "Landscape Customer",
  },
];

const values = [
  {
    icon: FiHeart,
    title: "Care for every plant",
    text: "Each plant is looked after with attention so it reaches you healthy and ready to grow.",
  },
  {
    icon: FiUsers,
    title: "Friendly guidance",
    text: "Our team takes time to understand your space and suggests plants that suit it.",
  },
  {
    icon: FiSun,
    title: "Practical advice",
    text: "We focus on simple, useful tips on sunlight, watering and upkeep that you can actually follow.",
  },
];

const whoWeServe = [
  "Home gardens and balconies",
  "Farms and large open spaces",
  "Offices and commercial properties",
  "Landscape and construction projects",
  "Gardening hobbyists and plant lovers",
  "Bulk and wholesale buyers",
];

const steps = [
  {
    title: "Call or visit us",
    text: "Reach out by phone or walk into the nursery to explore the greenery in person.",
  },
  {
    title: "Share your requirement",
    text: "Tell us about your space, the look you want and the quantity of plants you need.",
  },
  {
    title: "Choose the right plants",
    text: "We help you shortlist plant varieties that match your space, light and budget.",
  },
  {
    title: "Grow with confidence",
    text: "Get simple care guidance so your plants settle in well and keep thriving.",
  },
];

const faqs = [
  {
    q: "Do you sell plants online?",
    a: "No. We do not operate as an online shopping store. Please call us or visit the nursery in person.",
  },
  {
    q: "Can I place a large or wholesale order?",
    a: "Yes. For larger projects and bulk requirements, you can discuss your needs with us directly.",
  },
  {
    q: "Do you help me choose the right plants?",
    a: "Absolutely. Tell us about your space and we will guide you towards suitable options.",
  },
  {
    q: "Can you help with setting up a garden or landscape?",
    a: "Yes. We offer landscape consulting and garden setup guidance for homes, farms and projects.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <motion.section
        className="bg-sage/70"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-wide px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <span className="eyebrow">About Sri Sainath Nursery</span>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
            Nurturing plants, gardens and a greener way of living.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Sri Sainath Nursery is built around a simple idea: healthy greenery can make everyday spaces more beautiful, comfortable and alive.
          </p>
        </div>
      </motion.section>

      {/* Our Story */}
      <motion.section
        className="section-pad"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-wide grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem]">
            <Image
              src="/about flowers.jpg"
              alt="Sri Sainath Nursery logo"
              width={900}
              height={608}
              className="h-auto w-full object-contain"
            />
          </div>

          <div>
            <span className="eyebrow">Our Story</span>

            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              A passion for greening surroundings
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              We believe every garden starts with the right plant and the right guidance. Our nursery brings together greenery for homes, outdoor spaces, farms and landscape projects, while keeping the experience friendly and straightforward.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Customers can visit us in person or call to discuss plant requirements, larger orders and garden setup needs. We do not operate as an online shopping store.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="section-pad bg-sage/60"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-wide">
          <SectionHeading
            eyebrow="Mission & Vision"
            title="Growing with care and purpose"
            description="Our focus is on useful greenery, responsible plant care and helping customers create spaces they can enjoy for years."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="card p-8">
              <FiSun className="text-4xl text-forest" />

              <h3 className="mt-5 text-2xl font-bold">
                Our Mission
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                To make quality plant varieties and practical garden guidance accessible for homes, businesses, farms and landscape projects.
              </p>
            </div>

            <div className="card p-8">
              <FiHeart className="text-4xl text-forest" />

              <h3 className="mt-5 text-2xl font-bold">
                Our Vision
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                To encourage greener surroundings by helping more people confidently grow and care for plants.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* What We Provide */}
      <motion.section
        className="section-pad"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-wide">
          <SectionHeading
            eyebrow="What We Provide"
            title="Support for your planting journey"
            description="For orders and enquiries, simply call us or visit the nursery in person."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="card flex items-center gap-3 p-6"
              >
                <span className="rounded-full bg-sage p-2 text-forest">
                  <FiCheck />
                </span>

                <span className="font-semibold">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section
        className="section-pad bg-sage/60"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-wide">
          <SectionHeading
            eyebrow="Our Values"
            title="What we stand for"
            description="The principles that guide how we work with every plant and every customer."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((item) => (
              <div key={item.title} className="card p-8">
                <item.icon className="text-4xl text-forest" />

                <h3 className="mt-5 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Who We Serve */}
      <motion.section
        className="section-pad"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-wide grid items-start gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Who We Serve</span>

            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Greenery for every kind of space
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Whether you are planting a small balcony or planning a large landscape project, we are happy to understand your requirement and guide you with the right plant choices.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Our team enjoys working with first-time gardeners as much as with experienced growers and project teams, so no requirement is too small or too big to discuss.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whoWeServe.map((item) => (
              <div
                key={item}
                className="card flex items-center gap-3 p-5"
              >
                <span className="rounded-full bg-sage p-2 text-forest">
                  <FiCheck />
                </span>

                <span className="font-semibold">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        className="section-pad bg-sage/60"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-wide">
          <SectionHeading
            eyebrow="How It Works"
            title="A simple way to get started"
            description="No complicated process. Just a friendly conversation and the right plants for your space."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="card p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage font-black text-forest">
                  {index + 1}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Customer Voices */}
      <motion.section
        className="section-pad bg-gray-50"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-wide">
          <SectionHeading
            eyebrow="Customer Voices"
            title="What customers say"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="card p-7">
                <FiUsers className="text-3xl text-forest" />

                <p className="mt-5 leading-7 text-gray-700">
                  “{item.quote}”
                </p>

                <p className="mt-5 font-bold text-forest">
                  {item.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        className="section-pad"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-wide">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Quick answers to the things customers ask us most often."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.q} className="card p-7">
                <h3 className="text-xl font-bold text-gray-900">
                  {item.q}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Visit / Call CTA */}
      <motion.section
        className="section-pad bg-sage/70"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-wide text-center">
          <span className="eyebrow">Visit Us</span>

          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Come see the greenery for yourself
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
            Drop by the nursery or give us a call to talk about your plant requirements, larger orders or garden setup. We would be happy to help you get started.
          </p>
        </div>
      </motion.section>

      <WhatsAppButton />
    </>
  );
}