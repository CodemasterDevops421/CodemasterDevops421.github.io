import { SectionHeading } from "@/components/ui/section-heading";

const highlights = [
  "Security-first automation with IAM least privilege, policy-as-code, and zero-trust networking.",
  "Data-driven operations with SLOs, actionable observability, and continuous improvement cadences.",
  "Enablement mindset—pairing, mentoring, and building reusable accelerators for platform adoption.",
];

export function AboutSection() {
  return (
    <section className="container space-y-10 py-24" id="about">
      <SectionHeading
        eyebrow="About"
        title="DevOps leader delivering compliant, resilient platforms"
        description="Senior engineer with 10+ years designing secure multi-cloud infrastructure, streamlining CI/CD, and operationalizing observability at scale."
      />
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p className="text-foreground">
            I align platform roadmaps to business outcomes—codifying landing zones with Terraform, scaling Kubernetes workloads on AWS and Azure, and embedding security controls from day zero.
          </p>
          <p>
            My playbook blends automation, governance, and coaching. From GitOps pipelines with automated compliance to hands-on incident leadership, I help teams ship faster while staying audit-ready.
          </p>
        </div>
        <div className="space-y-4 rounded-3xl border bg-card/70 p-8 shadow-xl">
          <h3 className="text-lg font-semibold text-foreground">Principles I operate by</h3>
          <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
