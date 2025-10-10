import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { publications } from "@/lib/data";

export function PublicationsSection() {
  return (
    <section className="container space-y-10 py-24" id="publications">
      <SectionHeading
        eyebrow="Thought Leadership"
        title="Sharing DevOps playbooks"
        description="Practical guides on securing pipelines, scaling Kubernetes, and improving observability."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {publications.map((publication) => (
          <Card key={publication.title} className="flex flex-col">
            <CardHeader>
              <CardTitle>{publication.title}</CardTitle>
            </CardHeader>
            <CardContent className="mt-auto flex flex-col gap-4 text-sm text-muted-foreground">
              <p>{publication.description}</p>
              <Link
                href={publication.link}
                className="inline-flex items-center text-xs font-medium text-primary"
                target="_blank"
                rel="noreferrer"
              >
                Read article
                <ArrowUpRight className="ml-1 h-3 w-3" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
