import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const highlights = [
  "Security-first delivery with IAM controls, encryption standards, and access-governance guardrails.",
  "Automation-first operations with Jenkins, Azure DevOps, Terraform, Ansible, Docker, and Kubernetes.",
  "Enterprise release discipline with measurable outcomes in deployment speed, quality, and effort reduction.",
];

export function AboutSection() {
  return (
    <section className="container space-y-10 py-24" id="about">
      <Reveal>
        <SectionHeading
        eyebrow="About"
        title="DevOps engineer focused on secure automation and reliable delivery"
        description="Senior DevOps and Cloud Security Engineer with 9+ years of experience across AWS, Azure, CI/CD, infrastructure automation, and Kubernetes operations."
      />
      </Reveal>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p className="text-foreground">
            I specialize in modernizing enterprise delivery platforms by combining infrastructure-as-code, secure cloud implementation,
            and pragmatic DevOps operating models.
          </p>
          <p>
            My execution spans pipeline engineering for Java and .NET workloads, cloud security hardening, and automation initiatives
            that improve release velocity while reducing manual operational risk.
          </p>
        </div>
        <div className="space-y-4 rounded-3xl border bg-card/70 p-8 shadow-xl">
          <h3 className="text-lg font-semibold text-foreground">Operating principles</h3>
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
