import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Campus, events, sports, and classroom life at The Peers Education System.",
  openGraph: {
    title: "Gallery | The Peers Education System",
    description:
      "Campus, events, sports, and classroom life at The Peers Education System.",
  },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="Gallery"
        title="Life on Amir Road."
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
