import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section className="container space-y-10 py-24" id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Resume-aligned initiatives"
        description="Representative engagements showcasing infrastructure automation, security hardening, and CI/CD acceleration."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.name} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </div>
                <div className="flex gap-2">
                  {project.link ? (
                    <Link
                      href={project.link}
                      className="inline-flex items-center text-sm font-medium text-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                  ) : null}
                  {project.repo ? (
                    <Link
                      href={project.repo}
                      className="inline-flex items-center text-sm font-medium text-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Repo
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                  ) : null}
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-4">
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2 text-xs">
                {project.stack.map((tool) => (
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
