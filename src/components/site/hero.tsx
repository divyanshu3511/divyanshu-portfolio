import { motion } from "motion/react";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import profileAsset from "@/assets/profile.jpg";
import { CONTACT, ROLES } from "./data";
import { Typewriter } from "./primitives";

export function Hero() {
  return (
    <section id="hero" className="relative isolate px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-surface px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Available for full-time & freelance work
          </span>

          <h1 className="mt-6 text-4xl leading-[1.05] font-semibold sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="gradient-text">Divyanshu Mishra</span>
          </h1>

          <p className="font-display mt-5 min-h-[2.5rem] text-lg text-foreground/90 sm:text-2xl">
            <Typewriter words={ROLES} />
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            I build scalable web applications, intelligent document automation systems, and modern
            business solutions using .NET, Angular, SQL Server, Azure AI, and AI-powered workflows.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#projects"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
            >
              Hire Me
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { href: CONTACT.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: CONTACT.github, icon: Github, label: "GitHub" },
              { href: `mailto:${CONTACT.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="glass grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="glow-ring glass overflow-hidden rounded-[2rem] p-2">
            <img
              src={profileAsset}
              alt="Portrait of Divyanshu Mishra, .NET Full Stack Developer"
              width={964}
              height={853}
              className="h-full w-full rounded-[1.6rem] object-cover"
            />
          </div>
          <div className="glass absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-xs whitespace-nowrap">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
            2 yrs building enterprise .NET systems
          </div>
        </motion.div>
      </div>
    </section>
  );
}
