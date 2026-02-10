import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section className="container space-y-10 py-24" id="experience">
      <Reveal>
        <SectionHeading
        eyebrow="Work Experience"
        title="Production DevOps leadership"
        description="Driving secure, automated delivery pipelines across global enterprises and regulated industries."
      />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((experience) => (
          <Card key={experience.company} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle>{experience.role}</CardTitle>
                  <p className="text-sm text-muted-foreground">{experience.company}</p>
                </div>
                <Badge variant="secondary">{experience.period}</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-4">
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                {experience.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2 text-xs">
                {experience.stack.map((tool) => (
                  <Badge key={tool} variant="outline" className="bg-background/60">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
