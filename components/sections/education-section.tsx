import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/lib/data";

export function EducationSection() {
  return (
    <section className="container space-y-10 py-24" id="education">
      <SectionHeading
        eyebrow="Education"
        title="Continuous learning anchored in engineering rigor"
        description="Advanced studies in cloud security, distributed systems, and applied computer science."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((entry) => (
          <Card key={entry.institution} className="flex flex-col">
            <CardHeader>
              <CardTitle>{entry.institution}</CardTitle>
              <p className="text-sm text-muted-foreground">{entry.degree}</p>
              <p className="text-xs text-muted-foreground">{entry.period}</p>
            </CardHeader>
            {entry.details?.length ? (
              <CardContent className="mt-auto">
                <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                  {entry.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
            ) : null}
          </Card>
        ))}
      </div>
    </section>
  );
}
