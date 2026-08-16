import type { Metadata } from "next";
import { ConfirmBadge } from "@/components/ConfirmBadge";
import { Container } from "@/components/Container";
import { FaqAccordion } from "@/components/FaqAccordion";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  admissionSteps,
  ageCriteria,
  faqs,
  ogImage,
  requiredDocuments,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "How to apply to The Peers Education System — inquiry, campus visit, assessment, and enrollment.",
  openGraph: {
    title: "Admissions | The Peers Education System",
    description:
      "How to apply to The Peers Education System — inquiry, campus visit, assessment, and enrollment.",
    images: [ogImage],
  },
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        kicker="Admissions"
        title="Come and see the school first."
        description="A simple path from inquiry to enrollment for the 2026–27 session. Call if you would rather talk than fill a form."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading kicker="The process" title="Four steps to a seat" />
          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {admissionSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-[12px] border border-deep-navy/10 bg-white p-5 sm:p-6"
              >
                <p className="font-display text-3xl font-bold text-marigold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-display text-xl font-bold text-deep-navy sm:text-2xl">
                  {step.title}
                </h2>
                <p className="mt-2 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-cloud py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading kicker="Paperwork" title="Documents to bring" />
            <ul className="mt-6 space-y-3">
              {requiredDocuments.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-[10px] bg-white px-4 py-3 text-base text-ink ring-1 ring-deep-navy/8"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-marigold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base text-muted">
              Fee structure is shared in person or by phone, so families can
              ask questions properly.
              <ConfirmBadge>Fees</ConfirmBadge>
            </p>
          </div>
          <div>
            <SectionHeading kicker="Placement" title="Age criteria" />
            <p className="mt-3 text-base text-muted">
              Typical ages only. The office will confirm the right class for
              your child.
            </p>
            <div className="mt-6 overflow-x-auto rounded-[12px] border border-deep-navy/10 bg-white">
              <table className="w-full min-w-[32rem] text-left text-base">
                <thead className="bg-deep-navy text-white">
                  <tr>
                    <th className="px-4 py-3 font-medium">Class</th>
                    <th className="px-4 py-3 font-medium">Typical age</th>
                  </tr>
                </thead>
                <tbody>
                  {ageCriteria.map((row) => (
                    <tr
                      key={row.className}
                      className="border-t border-deep-navy/8 even:bg-cloud/60"
                    >
                      <td className="px-4 py-3 font-medium text-deep-navy">
                        {row.className}
                      </td>
                      <td className="px-4 py-3 text-muted">{row.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            kicker="Questions families ask"
            title="Before you visit"
          />
          <div className="mt-8">
            <FaqAccordion items={faqs} />
          </div>
        </Container>
      </section>

      <section className="bg-cloud py-16 sm:py-24">
        <Container className="max-w-4xl">
          <SectionHeading
            kicker="Start here"
            title="Admission inquiry"
            description="Send an inquiry and we will reply by phone, WhatsApp, or email."
          />
          <div className="mt-8 rounded-[12px] border border-deep-navy/10 bg-white p-4 sm:p-6 lg:p-8">
            <InquiryForm mode="admissions" />
          </div>
        </Container>
      </section>
    </>
  );
}
