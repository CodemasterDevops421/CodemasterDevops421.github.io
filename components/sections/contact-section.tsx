import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection() {
  return (
    <section className="container space-y-10 py-24" id="contact">
      <SectionHeading
        eyebrow="Engage"
        title="Partner on your next DevOps initiative"
        description="Share project goals, constraints, and timelines—expect a tailored roadmap and follow-up within two business days."
      />
      <div className="grid gap-8 rounded-3xl border bg-card/70 p-10 shadow-xl">
        <form
          className="grid gap-6 md:grid-cols-2"
          action="https://formspree.io/f/mayvljar"
          method="POST"
          autoComplete="off"
        >
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              minLength={2}
              className="h-11 rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Work email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="h-11 rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          <div className="md:col-span-2 grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              What problem can I solve?
            </label>
            <textarea
              id="message"
              name="message"
              required
              minLength={20}
              rows={4}
              className="rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              Prefer direct outreach? Email <a href="mailto:melamchaitanyakumar@gmail.com" className="font-medium text-primary">melamchaitanyakumar@gmail.com</a> or call +1 (630) 516-0561.
            </p>
            <Button type="submit" className="md:w-auto">
              Submit inquiry
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
