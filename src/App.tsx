const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'NestJS',
  'Express',
  'PostgreSQL',
  'MongoDB ',
  'REST APIs',
  'Docker',
  'Python',
]

const areas = [
  {
    number: '01',
    title: 'Full-Stack Development',
    description:
      'Building modern web applications with typed frontend and backend code, clear application boundaries, and maintainable business logic.',
    technologies: 'React · TypeScript · Node.js · PostgreSQL',
  },
  {
    number: '02',
    title: 'Backend & APIs',
    description:
      'Designing reliable APIs and backend services with structured validation, persistence, integration points, and explicit business logic.',
    technologies: 'Node.js · NestJS · Express · REST APIs',
  },
  {
    number: '03',
    title: 'System Architecture',
    description:
      'Thinking beyond individual features: state, data ownership, system boundaries, event-driven workflows, integrity, and recovery.',
    technologies: 'TypeScript · PostgreSQL · Docker · Architecture',
  },
  {
    number: '04',
    title: 'Automation & Integrations',
    description:
      'Connecting APIs, webhooks, external services, and custom workflows to turn repetitive processes into reliable software.',
    technologies: 'Python · Node.js · APIs · Webhooks',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="#"
            className="text-lg font-semibold tracking-tight"
            aria-label="Anwar Endris home"
          >
            Anwar Endris
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-600 sm:flex">
            <a className="transition hover:text-slate-950" href="#work">
              Work
            </a>
            <a className="transition hover:text-slate-950" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-slate-950" href="#about">
              About
            </a>
            <a className="transition hover:text-slate-950" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 pb-28 pt-28 sm:pb-36 sm:pt-36">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Full-Stack Developer
            </p>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              I build full-stack applications.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              I work across React, TypeScript, Node.js, and PostgreSQL, building applications and backend systems where the frontend, APIs, and data layer work together as one system.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-lg bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                View my work
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="border-y border-slate-200 bg-slate-50"
        >
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                  Core stack
                </p>

                <p className="mt-2 max-w-xs text-slate-600">
                  Technologies I use to build and ship software.
                </p>
              </div>

              <div className="flex max-w-3xl flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="work"
          className="mx-auto max-w-6xl px-6 py-28 sm:py-36"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              What I build
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Engineering focused on the parts that matter.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              From user-facing applications to backend infrastructure, I care
              about building software that remains understandable and reliable
              as it grows.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {areas.map((area) => (
              <article
                key={area.number}
                className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <p className="text-sm font-medium text-slate-400">
                    {area.number}
                  </p>

                  <span className="h-2 w-2 rounded-full bg-slate-300" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                  {area.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {area.description}
                </p>

                <p className="mt-7 text-sm text-slate-500">
                  {area.technologies}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                  About
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Practical engineering.
                </h2>
              </div>

              <div className="max-w-2xl text-lg leading-8 text-slate-600">
                <p>
                  I enjoy taking difficult technical problems and turning them
                  into working software. My focus is full-stack development,
                  with particular attention to backend architecture, APIs,
                  data integrity, and maintainable frontend applications.
                </p>

                <p className="mt-6">
                  I think about software beyond the happy path: how state
                  changes, how components communicate, how data is persisted,
                  and how a system can recover when something goes wrong.
                </p>

                <p className="mt-6">
                  I value simple interfaces, explicit system boundaries, and
                  code that another developer can understand and extend.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-6xl px-6 py-28 sm:py-36"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Contact
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s build something useful.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I&apos;m open to remote opportunities, freelance work, and
              interesting software projects.
            </p>

            <a
              href="mailto:anwarendo@gmail.com"
              className="mt-9 inline-flex items-center justify-center rounded-lg bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              anwarendo@gmail.com
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Anwar Endris.</p>
          <p>Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
