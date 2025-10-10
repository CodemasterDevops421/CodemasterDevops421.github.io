import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications } from "@/lib/data";

export function CertificationsSection() {
  return (
    <section className="container space-y-10 py-24" id="certifications">
      <SectionHeading
        eyebrow="Credentials"
        title="Industry-recognized expertise"
        description="Validated proficiency across AWS, Kubernetes, and Azure administration."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {certifications.map((certification) => (
          <Card key={certification.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{certification.name}</CardTitle>
              <Badge variant="secondary">{certification.year}</Badge>
            </CardHeader>
            <CardContent className="mt-auto flex flex-col gap-4 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">{certification.issuer}</p>
              {certification.credentialUrl ? (
                <Link
                  href={certification.credentialUrl}
                  className="inline-flex items-center text-xs font-medium text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  View credential
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
