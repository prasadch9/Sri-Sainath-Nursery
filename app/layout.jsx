import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sri Sainath Nursery | Plants, Trees & Garden Guidance",
  description:
    "Sri Sainath Nursery — quality plants, trees, greenery and garden guidance for homes, farms and landscapes.",
    icons: {
    icon: "/logo-original.png",
    shortcut: "/logo-original.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
