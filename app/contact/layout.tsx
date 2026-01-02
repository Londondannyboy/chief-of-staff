import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us 📧 Post a Chief of Staff Job Free",
  description:
    "📩 Contact our Chief of Staff recruitment agency. Post CoS jobs for free, enquire about executive recruitment, or partner with us. London-based, UK & global reach.",
  keywords: [
    "contact chief of staff recruitment",
    "post chief of staff job",
    "cos recruitment enquiry",
    "chief of staff job posting",
    "executive recruitment contact",
  ],
  openGraph: {
    title: "Contact Us 📧 Post a Chief of Staff Job Free",
    description: "📩 Contact our Chief of Staff recruitment agency. Post CoS jobs for free or enquire about executive recruitment.",
  },
  alternates: {
    canonical: "https://chiefofstaff.quest/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
