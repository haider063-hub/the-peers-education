import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";
import { ogImage, school } from "@/lib/content";
import { galleryPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Campus, events, sports, and classroom life at The Peers Education System.",
  openGraph: {
    title: "Gallery | The Peers Education System",
    description:
      "Campus, events, sports, and classroom life at The Peers Education System.",
    images: [ogImage],
  },
};

export default function GalleryPage() {
  return (
    <>
      <SchemaJsonLd jsonLd={galleryPageSchema()} />
      <PageHero
        kicker="Gallery"
        title={`Life at ${school.name}.`}
        description="Campus mornings, assemblies, sports days, and classroom work. Click a photograph to open it."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
    </>
  );
}
