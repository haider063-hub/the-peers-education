import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon } from "@/components/FacebookIcon";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { navLinks, school } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      <Image
        src="/images/modern-hero.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#0e2238]/88" />

      <Container className="relative grid gap-8 py-16 lg:grid-cols-[minmax(0,1fr)_auto_minmax(16rem,20rem)] lg:items-start lg:gap-12">
        <div>
          <div className="inline-flex rounded-[10px] bg-white px-3 py-2">
            <Logo className="h-14 sm:h-16" />
          </div>
          <p className="mt-4 max-w-xs text-base leading-relaxed text-white/80">
            A neighbourhood school on Amir Road, Shad Bagh — shaping confident
            learners from Playgroup through Matric.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 sm:gap-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-white">
            Explore
          </p>
          <ul className="mt-6 flex flex-col gap-2 text-base">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="link-underline text-white/80"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-white">
            Contact
          </p>
          <ul className="mt-6 flex flex-col gap-3 text-base text-white/85">
            <li className="flex gap-3">
              <Phone size={16} className="mt-1 shrink-0 text-marigold" />
              <a
                href={school.phoneHref}
                className="link-underline w-fit transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-marigold"
              >
                {school.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-1 shrink-0 text-marigold" />
              <a
                href={`mailto:${school.email}`}
                className="link-underline w-fit break-all transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-marigold"
              >
                {school.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin size={16} className="mt-1 shrink-0 text-marigold" />
              <a
                href={school.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline w-fit transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-marigold"
              >
                {school.location}
                <span className="mt-0.5 block text-base text-white/55">
                  {school.plusCode}
                </span>
              </a>
            </li>
          </ul>
        </div>
        </div>

        <div className="min-w-0">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-white">
            Campus map
          </p>
          <div className="mt-6 overflow-hidden rounded-[12px] ring-1 ring-marigold/40">
            <iframe
              title="The Peers Education System campus map"
              src={school.mapsEmbed}
              className="h-48 w-full border-0 sm:h-56"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={school.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-4 inline-block text-base text-white/80"
          >
            Open in Google Maps
          </a>
        </div>
      </Container>

      <div className="relative border-t border-white/15">
        <Container className="flex flex-col items-start gap-4 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between sm:text-base">
          <p className="max-w-sm leading-snug sm:max-w-none">
            © {new Date().getFullYear()} {school.name}, Shad Bagh, Lahore.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={school.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-marigold transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-white"
            >
              <FacebookIcon size={32} />
            </a>
            <a
              href={school.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-marigold transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-white"
            >
              <WhatsAppIcon size={32} />
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
