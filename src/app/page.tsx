const projects = [
  {
    number: "01",
    name: "Baiak Idle Deluxe",
    type: "Production Browser Extension",
    description:
      "A complete browser-extension product currently published and used by real customers.",
    technologies: [
      "JavaScript",
      "Browser Extensions",
      "REST APIs",
      "Cloudflare",
      "Testing",
    ],
    status: "Production",
    href: "https://github.com/FelipeLucenaDev/baiak-idle-deluxe",
  },
  {
    number: "02",
    name: "Albion Analytics",
    type: "Windows Desktop Application",
    description:
      "A Windows-first analytics application built with C#/.NET, Avalonia and local data processing.",
    technologies: ["C#", ".NET", "Avalonia", "SQLite", "Testing"],
    status: "In Development",
    href: "https://github.com/FelipeLucenaDev/albion-analytics",
  },
];

const technicalAreas = [
  {
    title: "Languages",
    items: ["JavaScript", "C#", "SQL", "HTML", "CSS"],
  },
  {
    title: "Application Development",
    items: [".NET", "Avalonia UI", "Browser Extensions"],
  },
  {
    title: "Backend & Data",
    items: ["REST APIs", "SQLite", "Cloudflare"],
  },
  {
    title: "Engineering",
    items: [
      "Software Architecture",
      "Automated Testing",
      "QA",
      "Debugging",
      "Release Engineering",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0d10] text-[#f5f7fa]">
      <header className="border-b border-[#232a33]">
        <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 lg:px-10">
          <a
            href="#top"
            className="text-sm font-semibold tracking-[-0.01em] transition-colors hover:text-[#4f8cff]"
          >
            Felipe Lucena Marcos
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 text-sm text-[#9ca3af] md:flex"
          >
            <a
              href="#about"
              className="transition-colors hover:text-[#f5f7fa]"
            >
              About
            </a>
            <a
              href="#projects"
              className="transition-colors hover:text-[#f5f7fa]"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-[#f5f7fa]"
            >
              Contact
            </a>

            <a
              href="https://github.com/FelipeLucenaDev"
              target="_blank"
              rel="noreferrer"
              className="border border-[#303844] px-4 py-2 text-[#f5f7fa] transition-colors hover:border-[#4f8cff] hover:text-[#4f8cff]"
            >
              GitHub ↗
            </a>
          </nav>
        </div>
      </header>

      <section
        id="top"
        className="mx-auto flex min-h-[calc(100vh-81px)] max-w-[1280px] items-center px-6 py-24 lg:px-10"
      >
        <div className="max-w-5xl">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.22em] text-[#4f8cff]">
            Software Developer · Software Engineering Student
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
            Building software
            <br />
            from architecture
            <br />
            to production.
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-8 text-[#9ca3af]">
            I develop desktop applications, browser extensions and software
            products with a focus on maintainability, testing and real-world
            use.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-[#f5f7fa] px-6 py-3 text-sm font-semibold text-[#0b0d10] transition-colors hover:bg-[#4f8cff] hover:text-white"
            >
              View Projects
            </a>

            <a
              href="https://github.com/FelipeLucenaDev"
              target="_blank"
              rel="noreferrer"
              className="border border-[#303844] px-6 py-3 text-sm font-semibold transition-colors hover:border-[#4f8cff] hover:text-[#4f8cff]"
            >
              GitHub ↗
            </a>
          </div>

          <div className="mt-20 flex flex-col gap-2 border-l border-[#303844] pl-5 text-sm text-[#6b7280]">
            <span>Based in Brazil</span>
            <span>Focused on practical software engineering</span>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="border-t border-[#232a33] px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-16 flex items-end justify-between gap-8">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#4f8cff]">
                Selected Work
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                Projects built around
                <br />
                real engineering problems.
              </h2>
            </div>

            <span className="hidden text-sm text-[#6b7280] md:block">
              2026
            </span>
          </div>

          <div className="border-t border-[#232a33]">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group grid gap-8 border-b border-[#232a33] py-12 transition-colors md:grid-cols-[80px_1fr_240px] md:py-16"
              >
                <span className="text-sm text-[#6b7280]">{project.number}</span>

                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <h3 className="text-3xl font-semibold tracking-[-0.035em]">
                      {project.name}
                    </h3>

                    <span className="border border-[#303844] px-2.5 py-1 text-[11px] uppercase tracking-wider text-[#9ca3af]">
                      {project.status}
                    </span>
                  </div>

                  <p className="mb-5 text-sm text-[#4f8cff]">
                    {project.type}
                  </p>

                  <p className="max-w-2xl leading-7 text-[#9ca3af]">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="text-xs text-[#6b7280]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-end md:justify-end">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold transition-colors group-hover:text-[#4f8cff]"
                  >
                    View Case Study ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-t border-[#232a33] px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4f8cff]">
              About
            </p>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
              Engineering knowledge developed through practical software.
            </h2>

            <div className="mt-10 space-y-6 text-lg leading-8 text-[#9ca3af]">
              <p>
                I&apos;m a Software Engineering student and software developer
                focused on building practical applications and understanding
                the engineering behind reliable software.
              </p>

              <p>
                My current work ranges from production browser extensions to
                Windows desktop applications, covering architecture, backend
                integration, testing, deployment, debugging and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#232a33] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <p className="mb-16 text-xs font-semibold uppercase tracking-[0.22em] text-[#4f8cff]">
            Technical Focus
          </p>

          <div className="grid border-t border-l border-[#232a33] sm:grid-cols-2 lg:grid-cols-4">
            {technicalAreas.map((area) => (
              <div
                key={area.title}
                className="min-h-72 border-r border-b border-[#232a33] p-8"
              >
                <h3 className="mb-10 text-sm font-semibold">{area.title}</h3>

                <ul className="space-y-3">
                  {area.items.map((item) => (
                    <li key={item} className="text-sm text-[#9ca3af]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#232a33] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4f8cff]">
              Currently
            </p>
          </div>

          <div className="divide-y divide-[#232a33] border-t border-[#232a33]">
            {[
              "Maintaining and evolving Baiak Idle Deluxe",
              "Building the Windows Alpha of Albion Analytics",
              "Studying Software Engineering",
              "Improving software architecture, testing and development practices",
            ].map((item, index) => (
              <div
                key={item}
                className="grid gap-5 py-7 sm:grid-cols-[50px_1fr]"
              >
                <span className="text-sm text-[#6b7280]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-[#232a33] px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-[1280px]">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.22em] text-[#4f8cff]">
            Contact
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl lg:text-7xl">
            Let&apos;s connect and build something useful.
          </h2>

          <div className="mt-12">
            <a
              href="https://github.com/FelipeLucenaDev"
              target="_blank"
              rel="noreferrer"
              className="inline-block border-b border-[#303844] pb-1 text-lg transition-colors hover:border-[#4f8cff] hover:text-[#4f8cff]"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#232a33] px-6 py-10 lg:px-10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-5 text-xs text-[#6b7280] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[#9ca3af]">Felipe Lucena Marcos</p>
            <p className="mt-1">Software Developer</p>
          </div>

          <div className="sm:text-right">
            <p>© 2026 Felipe Lucena Marcos</p>
            <p className="mt-1">Built with Next.js & TypeScript</p>
          </div>
        </div>
      </footer>
    </main>
  );
}