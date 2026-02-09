import { submitContactForm } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection() {
  return (
    <section className="container space-y-10 py-24" id="contact">
      <SectionHeading
        eyebrow="Engage"
        title="Book a high-impact DevOps execution sprint"
        description="Share architecture constraints, reliability goals, and compliance requirements. You will get a practical implementation plan with milestones, risks, and ownership within one business day."
      />
      <div className="grid gap-8 rounded-3xl border bg-card/70 p-10 shadow-xl">
        <form className="grid gap-6 md:grid-cols-2" action={submitContactForm} autoComplete="off">
          <input type="text" name="website" className="hidden" tabIndex={-1} aria-hidden="true" />
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
          <div className="grid gap-2">
            <label htmlFor="company" className="text-sm font-medium">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="h-11 rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="budget" className="text-sm font-medium">
              Budget range
            </label>
            <select
              id="budget"
              name="budget"
              required
              defaultValue="discuss"
              className="h-11 rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="under-25k">Under $25k</option>
              <option value="25k-50k">$25k - $50k</option>
              <option value="50k-plus">$50k+</option>
              <option value="discuss">Need discovery</option>
            </select>
          </div>
          <div className="md:col-span-2 grid gap-2">
            <label htmlFor="timeline" className="text-sm font-medium">
              Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              required
              defaultValue="30-days"
              className="h-11 rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="asap">Immediate execution</option>
              <option value="30-days">Within 30 days</option>
              <option value="90-days">Within 90 days</option>
              <option value="exploration">Exploration phase</option>
            </select>
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
              rows={5}
              className="rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              Prefer direct outreach? Email{" "}
              <a href="mailto:melamchaitanyakumar@gmail.com" className="font-medium text-primary">
                melamchaitanyakumar@gmail.com
              </a>{" "}
              or call +1 (630) 516-0561.
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
