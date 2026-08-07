import { motion } from "motion/react";
import { ExternalLink, FileText, Github } from "lucide-react";
import { PROJECTS } from "./data";
import { GlassCard, Reveal, SectionHeading, Tag } from "./primitives";

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Work"
          title="Featured Projects"
          subtitle="Production systems across document automation, payments, monitoring and enterprise dashboards."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className={p.featured ? "md:col-span-2" : ""}>
              <GlassCard className="flex h-full flex-col overflow-hidden">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={p.image}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className={`w-full object-cover ${p.featured ? "h-64 sm:h-80" : "h-48"}`}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  {p.featured ? (
                    <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Featured Project
                    </span>
                  ) : null}
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>

                  <ul className="grid gap-1.5 text-sm text-muted-foreground sm:grid-cols-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 rounded-full border border-glass-border px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                    >
                      <Github className="h-3.5 w-3.5" /> GitHub
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 rounded-full border border-glass-border px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                    >
                      <FileText className="h-3.5 w-3.5" /> Case Study
                    </a>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
