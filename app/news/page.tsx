import type { Metadata } from "next";
import { ogImage } from "@/lib/content";
import { Container } from "@/components/Container";
import { NewsGrid } from "@/components/NewsGrid";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "News",
  description:
    "School news and events at The Peers Education System, Shad Bagh.",
  openGraph: {
    title: "News | The Peers Education System",
    description:
      "School news and events at The Peers Education System, Shad Bagh.",
    images: [ogImage],
  },
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        kicker="News"
        title="What the school has been busy with."
        description="Sports days, assemblies, results, and notes for families. Filter by topic, or open a story to read more."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <NewsGrid />
        </Container>
      </section>
    </>
  );
}
