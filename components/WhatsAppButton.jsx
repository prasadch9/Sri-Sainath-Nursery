import { FaWhatsapp } from "react-icons/fa";
import { business } from "@/lib/siteData";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello Sri Sainath Nursery, I would like to enquire about plants."
  );

  return (
    <a
      href={`https://wa.me/${business.whatsapp}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Sri Sainath Nursery on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
    >
      <FaWhatsapp size={22} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
