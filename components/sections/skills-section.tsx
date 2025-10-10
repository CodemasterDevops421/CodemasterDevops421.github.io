import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills } from "@/lib/data";

export function SkillsSection() {
  return (
    <section className="container space-y-10 py-24" id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Resume skill matrix"
        description="Core platforms, tools, and practices applied across engagements."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div key={skill.category} className="rounded-lg border bg-card/60 p-6 shadow-sm">
            <h3 className="text-lg font-semibold">{skill.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
