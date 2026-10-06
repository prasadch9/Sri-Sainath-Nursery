# Sri Sainath Nursery — Next.js Website

A simple, responsive, non-e-commerce business website built with Next.js App Router, JSX and Tailwind CSS.

## Included pages

- Home
- About Us
- Gallery
- Contact Us
- Responsive Navbar + Footer
- Gallery category filters
- Gallery lightbox/modal
- WhatsApp floating button
- Google Maps embed
- Sri Sainath Nursery business logo included at `public/images/logo.png`

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## 3. Production build

```bash
npm run build
npm start
```

## Important: update business details

Open:

`lib/siteData.js`

Replace:

- Phone number
- WhatsApp number
- Email
- Nursery address
- Opening hours

The Google Maps iframe automatically uses the address from this file.

## Replace gallery images

Gallery sample images are defined in:

`lib/siteData.js`

Replace the image URLs with your own nursery images when ready.

## Replace logo

The provided logo is already included:

`public/images/logo.png`

If you want to replace it later, keep the same filename or update the references in `components/Navbar.jsx` and the relevant pages.

## Contact form

The contact form is currently front-end only. It intentionally does not include e-commerce/cart functionality. Before production, connect the form submit handler to your preferred email or form backend.
