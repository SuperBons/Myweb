import { createFileRoute } from "@tanstack/react-router";
import { ScanOverlay } from "@/components/ScanOverlay";
import { profile, roles, projects, skillGroups, coursework } from "@/data/resume";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Alejandro Sanchez Rubio — Systems Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Alejandro Sanchez Rubio, systems engineering test conductor for Level 4 autonomous vehicles and full-stack AI engineer based in Merced, CA.",
      },
      { property: "og:title", content: "Alejandro Sanchez Rubio — Systems Engineer" },
      {
        property: "og:description",
        content:
          "L4 autonomous vehicle diagnostics, thermal validation, and AI/full-stack engineering. UC Merced BS CSE, 2025.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.role,
          email: `mailto:${profile.email}`,
          telephone: profile.phone,
          address: { "@type": "PostalAddress", addressLocality: "Merced", addressRegion: "CA" },
          alumniOf: { "@type": "CollegeOrUniversity", name: "University of California, Merced" },
          worksFor: { "@type": "Organization", name: "Transdev with Waymo" },
          sameAs: [profile.githubUrl, profile.linkedinUrl],
        }),
      },
    ],
  }),
});

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-16 flex items-center gap-4">
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{children}</h2>
      <div className="h-[2px] flex-1 rounded-full bg-muted/40" />
    </div>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen bg-background font-sans text-foreground">
      <ScanOverlay />

      {/* Nav / Telemetry Rail */}
      <nav className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background/80 px-6 py-3 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="size-2 animate-pulse rounded-full bg-accent" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            System Status: Nominal // 2025.05
          </span>
        </div>
        <div className="flex gap-6 font-mono text-[10px] uppercase tracking-widest">
          <a href="#experience" className="text-muted transition-colors hover:text-accent">
            01. Experience
          </a>
          <a href="#projects" className="text-muted transition-colors hover:text-accent">
            02. Projects
          </a>
          <a href="#skills" className="text-muted transition-colors hover:text-accent">
            03. Skills
          </a>
          <a href="#contact" className="text-muted transition-colors hover:text-accent">
            04. Contact
          </a>
        </div>
      </nav>

      <main className="relative z-10 mx-auto max-w-5xl px-6 pt-24 pb-32">
        {/* Hero */}
        <section className="mb-32 animate-fade-up">
          <div className="mb-8 inline-block rounded-[2px] border border-accent/20 bg-accent/5 px-2 py-1">
            <span className="font-mono text-[10px] uppercase tracking-tighter text-accent">
              {profile.role}
            </span>
          </div>
          <h1 className="mb-8 text-6xl font-bold tracking-tighter text-balance md:text-8xl">
            {profile.firstName} <br /> {profile.lastName}
          </h1>
          <div className="grid grid-cols-1 gap-12 border-t border-border pt-8 md:grid-cols-2">
            <p className="max-w-[45ch] leading-relaxed text-pretty text-muted">{profile.summary}</p>
            <div className="grid grid-cols-2 gap-4 font-mono text-xs">
              <div className="flex flex-col gap-1">
                <span className="text-muted">LOCATION</span>
                <span>{profile.location}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-muted">ACADEMIC</span>
                <span>{profile.academic}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-muted">GITHUB</span>
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  {profile.github}
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-muted">CONTACT</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="break-all text-accent hover:underline"
                >
                  {profile.email}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience: Vertical Rail */}
        <section id="experience" className="mb-32 scroll-mt-24">
          <SectionLabel>Log_01: Professional Experience</SectionLabel>

          <div className="relative space-y-0">
            <div className="absolute top-2 bottom-0 left-[7px] w-px bg-border" />

            {roles.map((role) => (
              <div
                key={`${role.org}-${role.title}`}
                className="group relative pb-16 pl-10 last:pb-0"
              >
                <div
                  className={`absolute top-2 left-0 size-3 rounded-full bg-background transition-colors ${
                    role.current
                      ? "border border-accent group-hover:bg-accent"
                      : "border border-muted group-hover:border-accent"
                  }`}
                />
                <div className="mb-4 flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{role.org}</h3>
                    <p className="mt-1 font-mono text-xs uppercase text-accent">{role.title}</p>
                  </div>
                  <div className="mt-2 flex flex-col md:mt-0 md:items-end">
                    <span className="font-mono text-[10px] text-muted">{role.dates}</span>
                    <span className="font-mono text-[10px] text-muted">{role.location}</span>
                  </div>
                </div>
                <ul className="max-w-2xl space-y-3 text-sm leading-relaxed text-muted">
                  {role.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="font-bold text-accent">→</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-32 scroll-mt-24">
          <SectionLabel>Log_02: Projects</SectionLabel>

          <div className="relative space-y-0">
            <div className="absolute top-2 bottom-0 left-[7px] w-px bg-border" />

            {projects.map((project) => (
              <div
                key={project.name}
                className="group relative pb-16 pl-10 last:pb-0"
              >
                <div className="absolute top-2 left-0 size-3 rounded-full border border-accent bg-background transition-colors group-hover:bg-accent" />
                <div className="mb-4 flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
                    <p className="mt-1 font-mono text-xs uppercase text-accent">{project.tech}</p>
                  </div>
                </div>
                <ul className="max-w-2xl space-y-3 text-sm leading-relaxed text-muted">
                  {project.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="font-bold text-accent">→</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Matrix */}
        <section id="skills" className="mb-32 scroll-mt-24">
          <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.label} className="border border-border p-6">
                <h3 className="mb-6 font-mono text-[10px] uppercase text-muted">{group.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="cursor-default border border-border bg-surface px-2 py-1 font-mono text-[10px] hover:border-accent/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coursework Grid */}
        <section className="mb-32">
          <h2 className="mb-12 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Log_03: Academic Foundation
          </h2>
          <div className="mb-12 flex flex-col gap-1 border-l border-accent pl-4">
            <p className="text-lg font-semibold tracking-tight">
              University of California, Merced
            </p>
            <p className="text-sm text-muted">Bachelor of Science, Computer Science & Engineering</p>
            <p className="font-mono text-[10px] uppercase text-accent">Graduated May 2025</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {coursework.map((c) => (
              <div
                key={c.code}
                className="border-l border-border p-4 transition-colors hover:border-accent"
              >
                <p className="mb-1 font-mono text-xs text-muted">{c.code}</p>
                <p className="text-sm">{c.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer / CTA */}
      <footer
        id="contact"
        className="relative z-10 scroll-mt-24 border-t border-border bg-surface px-6 py-24"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-12 md:flex-row md:items-end">
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase text-accent">
              Transmission End // 2025
            </p>
            <h2 className="text-4xl font-bold tracking-tighter">
              Ready for <br /> deployment.
            </h2>
            <a
              href="/jul26.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-[2px] border border-accent/30 bg-accent/5 px-5 py-3 font-mono text-xs uppercase tracking-wider text-accent transition-all hover:bg-accent/15 hover:border-accent/60 group"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-y-0.5"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span className="flex items-center gap-2">
                View Resume
                <span className="font-mono text-[8px] text-muted">PDF // 124 KB</span>
              </span>
            </a>
          </div>
          <div className="flex flex-col gap-2 md:items-end">
            <a
              href={`mailto:${profile.email}`}
              className="border-b border-accent text-lg transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
            <a href={profile.phoneHref} className="font-mono text-[10px] text-muted">
              {profile.phone}
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[10px] text-muted transition-colors hover:text-accent"
            >
              linkedin.com/in/alex-sanchez2002
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
