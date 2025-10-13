import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section className="bg-muted/40 py-24" id="process">
      <div className="container space-y-10">
        <SectionHeading
          eyebrow="Engagement Model"
          title="Four-phase playbook that keeps delivery auditable"
          description="A collaborative, metrics-driven approach that de-risks transformation while building team capability."
        />
        <ol className="grid gap-8 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <li key={step.title} className="group relative overflow-hidden rounded-3xl border bg-background/70 p-8 shadow-lg">
              <div className="absolute -top-8 left-0 h-28 w-28 rounded-full bg-primary/10 blur-3xl transition-transform group-hover:translate-x-4" />
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-lg font-semibold text-primary-foreground shadow">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">Phase {index + 1}</p>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                </div>
              </div>
              <p className="mt-6 text-sm font-medium text-foreground">{step.summary}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
