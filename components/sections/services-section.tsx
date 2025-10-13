import { ServerCog, ShieldCheck, Workflow } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/data";

const serviceIcons = [ShieldCheck, Workflow, ServerCog];

export function ServicesSection() {
  return (
    <section className="container space-y-10 py-24" id="services">
      <SectionHeading
        eyebrow="Services"
        title="Engagements engineered for velocity, security, and trust"
        description="Targeted packages that modernize delivery platforms while embedding governance, enablement, and measurable outcomes."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, index) => {
          const Icon = serviceIcons[index % serviceIcons.length];

          return (
            <Card key={service.title} className="relative overflow-hidden border bg-card/70 shadow-xl">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              <CardHeader className="space-y-4">
                <Badge variant="outline" className="w-fit border-primary/40 bg-primary/5 text-xs uppercase tracking-wide">
                  {service.focus}
                </Badge>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <CardTitle>{service.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
