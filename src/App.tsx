function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="text-lg font-semibold tracking-tight">
            Anwar Endris
          </a>

          <div className="hidden gap-8 text-sm text-slate-600 sm:flex">
            <a href="#work" className="transition hover:text-slate-900">
              Work
            </a>
            <a href="#skills" className="transition hover:text-slate-900">
              Skills
            </a>
            <a href="#about" className="transition hover:text-slate-900">
              About
            </a>
            <a href="#contact" className="transition hover:text-slate-900">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pb-24 pt-24 sm:pb-32 sm:pt-32">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Full-Stack Developer
            </p>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              I build software that solves real problems.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              I build modern web applications, reliable APIs, and practical
              software systems with a focus on clean architecture and
              maintainable code.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
              >
                View my work
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Contact me
              </a>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="border-y border-slate-200 bg-slate-50"
        >
          <div className="mx-auto max-w-6xl px-6 py-12">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Technologies
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-base text-slate-700">
              <span>React</span>
              <span>TypeScript</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>NestJS</span>
              <span>PostgreSQL</span>
              <span>MongoDB</span>
              <span>Docker</span>
              <span>Python</span>
              <span>REST APIs</span>
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Selected work
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Projects built with purpose.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 p-7 transition hover:border-slate-300 hover:shadow-sm">
              <p className="text-sm text-slate-500">Full-Stack Application</p>

              <h3 className="mt-3 text-xl font-semibold">
                Web Application
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                A full-stack application built with React, TypeScript, Node.js,
                and PostgreSQL, with a focus on reliable business logic and
                maintainable architecture.
              </p>

              <p className="mt-6 text-sm text-slate-500">
                React · TypeScript · Node.js · PostgreSQL
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-7 transition hover:border-slate-300 hover:shadow-sm">
              <p className="text-sm text-slate-500">Backend Engineering</p>

              <h3 className="mt-3 text-xl font-semibold">
                REST API Platform
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Backend services designed around clear APIs, structured
                business logic, database persistence, and integration with
                external services.
              </p>

              <p className="mt-6 text-sm text-slate-500">
                Node.js · NestJS · PostgreSQL · REST APIs
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-7 transition hover:border-slate-300 hover:shadow-sm">
              <p className="text-sm text-slate-500">Automation</p>

              <h3 className="mt-3 text-xl font-semibold">
                Automation & Integrations
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Practical automation connecting APIs, webhooks, external
                services, and custom workflows to reduce repetitive work.
              </p>

              <p className="mt-6 text-sm text-slate-500">
                Python · Node.js · APIs · Webhooks
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-7 transition hover:border-slate-300 hover:shadow-sm">
              <p className="text-sm text-slate-500">Engineering</p>

              <h3 className="mt-3 text-xl font-semibold">
                Software Architecture
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Systems designed around clear boundaries, event-driven
                workflows, data integrity, and maintainable backend
                architecture.
              </p>

              <p className="mt-6 text-sm text-slate-500">
                TypeScript · Node.js · PostgreSQL · Docker
              </p>
            </article>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                About
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                A practical approach to software.
              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-600">
                I enjoy turning ideas and difficult technical problems into
                working software. My focus is full-stack development, with an
                emphasis on strong backend foundations, clear APIs, and
                maintainable frontend applications.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Contact
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Have a project in mind?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              I'm open to remote opportunities, freelance work, and
              interesting software projects.
            </p>

            <a
              href="mailto:anwarendo@gmail.com"
              className="mt-8 inline-flex items-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Get in touch
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-500">
          © 2026 Anwar Endris. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
