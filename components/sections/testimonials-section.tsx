import { Quote } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="container space-y-10 py-24" id="testimonials">
      <SectionHeading
        eyebrow="Social Proof"
        title="Leaders trust Chaitanya with business-critical platforms"
        description="Direct feedback from executives who partnered to modernize delivery, security, and operations."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="relative overflow-hidden border bg-card/70 p-8 shadow-xl">
            <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
            <CardContent className="relative space-y-6 p-0">
              <Quote className="h-10 w-10 text-primary/50" />
              <p className="text-base leading-relaxed text-foreground">“{testimonial.quote}”</p>
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p>
                  {testimonial.title}, {testimonial.company}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
