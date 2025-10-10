import { SectionHeading } from "@/components/ui/section-heading";
import { achievements } from "@/lib/data";

export function AchievementsSection() {
  return (
    <section className="container space-y-10 py-24" id="achievements">
      <SectionHeading
        eyebrow="Impact"
        title="Operational outcomes delivered"
        description="Highlights that demonstrate measurable business value from DevOps investments."
      />
      <div className="grid gap-4 rounded-3xl border bg-card/70 p-10 shadow-xl">
        <ul className="list-inside list-disc space-y-4 text-base text-muted-foreground">
          {achievements.map((item) => (
            <li key={item.statement} className="text-foreground">
              {item.statement}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
