"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiX, FiZoomIn } from "react-icons/fi";
import SectionHeading from "@/components/SectionHeading";
import { galleryItems } from "@/lib/siteData";
import WhatsAppButton from "@/components/WhatsAppButton";

const filters = ["All", "Indoor Plants", "Fruit Trees", "Bonsai", "Nursery Setup"];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(
    () =>
      active === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === active),
    [active]
  );

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
          <span className="eyebrow">Sri Sainath Nursery Gallery</span>
          <h1 className="text-4xl font-black text-gray-900 sm:text-5xl">
            A glimpse of our greenery
          </h1>
          <p className="mt-4 max-w-2xl leading-7 text-gray-600">
            Explore plant categories and nursery scenes.
          </p>
        </div>
      </motion.section>

      <section className="section-pad">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Gallery"
            title="Browse by category"
            description="Tap a category to filter the gallery."
          />

          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active === filter
                    ? "bg-forest text-white"
                    : "bg-sage text-forest hover:bg-green-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((item) => (
              <button
                key={`${item.title}-${item.image}`}
                type="button"
                onClick={() => setSelected(item)}
                className="group relative h-72 overflow-hidden rounded-3xl bg-gray-100 text-left shadow-card"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-90" />

                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-green-200">
                    {item.category}
                  </p>

                  <h3 className="mt-1 text-xl font-bold">
                    {item.title}
                  </h3>
                </div>

                <span className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-forest opacity-0 transition group-hover:opacity-100">
                  <FiZoomIn />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            aria-label="Close image preview"
            onClick={() => setSelected(null)}
            className="absolute right-5 top-5 rounded-full bg-white p-3 text-gray-900 shadow-lg"
          >
            <FiX size={24} />
          </button>

          <div
            className="max-h-[90vh] max-w-6xl overflow-hidden rounded-2xl bg-white p-2 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selected.image}
              alt={selected.title}
              className="max-h-[82vh] w-auto max-w-full rounded-xl object-contain"
            />

            <div className="px-3 py-3">
              <h2 className="font-bold text-gray-900">
                {selected.title}
              </h2>

              <p className="text-sm text-gray-500">
                {selected.category}
              </p>
            </div>
          </div>
        </div>
      )}

      <WhatsAppButton />
    </>
  );
}