import { useState, type FormEvent } from "react";
import { Briefcase, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { CONTACT } from "./data";
import { GlassCard, Reveal, SectionHeading } from "./primitives";
import { Heart } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    setSending(true);
    // EmailJS placeholder — wire your service/template IDs here.
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Thanks! Your message has been queued — I'll reply shortly.");
    }, 800);
  };

  const field =
    "w-full rounded-xl border border-glass-border bg-surface px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60";

  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          subtitle="Have a role, a product idea, or an automation problem? Send a message."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <Reveal>
            <GlassCard className="p-6 sm:p-8" hover={false}>
              <form onSubmit={onSubmit} className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs text-muted-foreground">
                      Name
                    </label>
                    <input id="name" name="name" className={field} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs text-muted-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={field}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-xs text-muted-foreground">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    className={field}
                    placeholder="What is this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={field}
                    placeholder="Tell me a bit more..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] disabled:opacity-60"
                >
                  <Send className="h-4 w-4" /> {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-4">
              {[
                { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                { icon: MapPin, label: "Location", value: CONTACT.location },
                { icon: Briefcase, label: "Availability", value: CONTACT.availability },
              ].map(({ icon: Icon, label, value, href }) => (
                <GlassCard key={label} className="flex items-start gap-4 p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-medium hover:text-primary">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{value}</p>
                    )}
                  </div>
                </GlassCard>
              ))}

              <div className="flex gap-3">
                {[
                  { href: CONTACT.linkedin, icon: Linkedin, label: "LinkedIn" },
                  { href: CONTACT.github, icon: Github, label: "GitHub" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="glass grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-glass-border/60">
      <div className="mx-auto max-w-6xl px-6 py-10">

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Left */}
          <div className="max-w-md">
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              Divyanshu Mishra
            </h3>

            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Building scalable .NET applications, AI-powered document
              automation, and modern web experiences with clean architecture
              and performance in mind.
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            {[
              {
                href: CONTACT.github,
                icon: Github,
                label: "GitHub",
              },
              {
                href: CONTACT.linkedin,
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: `mailto:${CONTACT.email}`,
                icon: Mail,
                label: "Email",
              },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-primary/50 hover:text-primary"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

        </div>

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">

          <p>
            © {new Date().getFullYear()} Divyanshu Mishra. All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            Built By Divyanshu Mishra
          </p>

        </div>

      </div>
    </footer>
  );
}
