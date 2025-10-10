import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description, className, ...props }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {description ? <p className="text-muted-foreground md:text-lg">{description}</p> : null}
    </div>
  );
}
