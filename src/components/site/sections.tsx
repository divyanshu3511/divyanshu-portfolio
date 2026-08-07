import { motion } from "motion/react";
import { BadgeCheck, Briefcase, Download, FileText, Quote } from "lucide-react";
import {
  RESPONSIBILITIES,
  SERVICES,
  SKILL_GROUPS,
  STATS,
  TECH_TAGS,
  TESTIMONIALS,
  WHY_HIRE_ME,
} from "./data";
import { Counter, GlassCard, Reveal, SectionHeading, Tag } from "./primitives";

export function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Profile" title="About Me" />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                I&apos;m a passionate Full Stack .NET Developer with nearly 2 years of professional
                experience building enterprise-grade software solutions.
              </p>
              <p>
                I enjoy solving complex business problems, optimizing systems, and creating scalable
                applications that improve productivity.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <GlassCard className="p-6">
              <h3 className="text-sm font-medium tracking-widest text-primary uppercase">
                Expertise
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {TECH_TAGS.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Career" title="Experience" />
        <Reveal>
          <div className="relative border-l border-border pl-8">
            <span className="absolute top-2 -left-[7px] h-3.5 w-3.5 rounded-full bg-primary shadow-[0_0_16px_var(--primary)]" />
            <GlassCard className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">Software Developer</h3>
                  <p className="mt-1 flex items-center gap-2 text-sm text-primary">
                    <Briefcase className="h-4 w-4" /> SuperTek Software Solutions
                  </p>
                </div>
                <span className="rounded-full border border-glass-border px-3 py-1 text-xs text-muted-foreground">
                  September 2024 – Present
                </span>
              </div>
              <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                {RESPONSIBILITIES.map((r) => (
                  <li key={r} className="flex items-start gap-2">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {r}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Toolbox"
          title="Skills"
          subtitle="The stack I use daily to ship production software."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.05}>
              <GlassCard className="h-full p-6">
                <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                <div className="mt-5 space-y-4">
                  {group.skills.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span className="text-foreground">{s.name}</span>
                        <span>{s.level}%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-secondary">
                        <motion.div
                          className="h-full rounded-full bg-primary"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section className="relative px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <GlassCard className="h-full p-6 text-center">
                <div className="font-display text-4xl font-bold text-primary">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{s.label}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Offering" title="Services" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <GlassCard className="h-full p-6">
                <span className="font-display text-xs text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyHireMe() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Value" title="Why Hire Me" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_HIRE_ME.map((w, i) => (
            <Reveal key={w} delay={i * 0.04}>
              <GlassCard className="flex h-full items-center gap-3 p-5">
                <BadgeCheck className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium">{w}</span>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Feedback" title="Testimonials" />
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <GlassCard className="h-full p-6">
                <Quote className="h-6 w-6 text-primary" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">“{t.quote}”</p>
                <div className="mt-6">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Resume() {
  return (
    <section id="resume" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Document" title="Resume" />
        <Reveal>
          <GlassCard className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_0.8fr]" hover={false}>
            <div>
              <h3 className="font-display text-2xl font-semibold">Divyanshu Mishra</h3>
              <p className="mt-1 text-sm text-primary">.NET Full Stack Developer</p>
              <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">Experience</p>
                  <p>Software Developer — SuperTek Software Solutions (Sep 2024 – Present)</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Core Stack</p>
                  <p>ASP.NET Core, C#, Angular, SQL Server, Entity Framework, Azure AI, Grooper</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Focus</p>
                  <p>
                    Enterprise web applications, REST APIs, intelligent document processing and SQL
                    performance.
                  </p>
                </div>
              </div>
              <a
                href="src/assets/Divyanshu_Mishra_Resume_.pdf"
                download
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </div>
          <div className="overflow-hidden rounded-2xl border border-glass-border">
  <iframe
    src="src/assets/Divyanshu_Mishra_Resume_.pdf"
    title="Resume Preview"
    className="h-[400px] w-full"
  />
</div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
