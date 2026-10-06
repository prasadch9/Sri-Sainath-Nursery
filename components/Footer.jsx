import Link from "next/link";
import { FiFacebook, FiInstagram, FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { business } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="bg-forestDark text-white">
      <div className="container-wide grid gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <h2 className="text-2xl font-extrabold">{business.name}</h2>
          <p className="mt-3 max-w-sm leading-7 text-green-50/85">
            A welcoming nursery for quality plants, trees, greenery and practical garden guidance.
          </p>
          <div className="mt-5 flex gap-3">
            <a aria-label="Facebook" href="#" className="rounded-full bg-white/10 p-3 hover:bg-white hover:text-forestDark">
              <FiFacebook />
            </a>
            <a aria-label="Instagram" href="#" className="rounded-full bg-white/10 p-3 hover:bg-white hover:text-forestDark">
              <FiInstagram />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Quick Links</h3>
          <div className="mt-4 flex flex-col gap-3 text-green-50/85">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/about" className="hover:text-white">About Us</Link>
            <Link href="/gallery" className="hover:text-white">Gallery</Link>
            <Link href="/contact" className="hover:text-white">Contact Us</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Business Information</h3>
          <div className="mt-4 space-y-4 text-sm leading-6 text-green-50/85">
            <p className="flex gap-3"><FiMapPin className="mt-1 shrink-0" />{business.address}</p>
            <p className="flex gap-3"><FiPhone className="mt-1 shrink-0" />{business.phone}</p>
            <p className="flex gap-3"><FiPhone className="mt-1 shrink-0" />+91 93939 88799</p>
            <p className="flex gap-3"><FiPhone className="mt-1 shrink-0" />+91 89198 58313</p>
            <p className="flex gap-3"><FiMail className="mt-1 shrink-0" />{business.email}</p>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Opening Days</h3>
          <p className="mt-4 flex gap-3 text-sm leading-6 text-green-50/85">
            <FiClock className="mt-1 shrink-0" />
            {business.hours}
          </p>
          <p className="mt-5 text-sm text-green-100/70">
            Phone and in-person enquiries are welcome.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-green-100/70">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
