import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      {/* Header */}
      <header className="bg-slate-800 text-white">
        <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-5">
            <div className="h-24 w-24 overflow-hidden rounded-full ring-2 ring-white/20">
              <Image
                src="/profile.jpg"
                alt="Cody Johnson headshot"
                width={160}
                height={160}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            <div>
              <h1 className="text-4xl font-semibold tracking-tight">Cody Johnson</h1>
              <p className="mt-1 text-white/80 text-lg">
                Supply Chain &amp; Operations | Data &amp; Process Analyst
              </p>
            </div>
          </div>

          {/* Quick actions */}
          <div className="sm:ml-auto flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              className="rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-medium hover:bg-white/90"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-white/25 px-4 py-2 text-sm font-medium hover:bg-white/10"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-[320px_1fr]">
          {/* Left sidebar */}
          <aside className="rounded-2xl bg-slate-50 border p-6">
            {/* Contact */}
            <section id="contact">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
                Contact Details
              </h2>

              <div className="mt-4 space-y-3 text-sm">
                <a className="flex items-center gap-3 hover:underline" href="mailto:Cody.Ramsdell@gmail.com">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-200 text-slate-700">
                    @
                  </span>
                  <span className="break-all">Cody.Ramsdell@gmail.com</span>
                </a>

                <a className="flex items-center gap-3 hover:underline" href="tel:+12182200489">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-200 text-slate-700">
                    ☎
                  </span>
                  <span>(218) 220-0489</span>
                </a>

                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-200 text-slate-700">
                    ⌂
                  </span>
                  <span>Thief River Falls, MN</span>
                </div>
              </div>
            </section>

            <hr className="my-8" />

            {/* Education */}
            <section id="education">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
                Education
              </h2>

              <div className="mt-4 space-y-4 text-sm">
                <div>
                  <p className="font-semibold">
                    Bachelor of Science — Supply Chain &amp; Operations Management
                  </p>
                  <p className="text-slate-600">Western Governors University (WGU)</p>
                  <p className="text-slate-500">Completed: January 2026</p>
                </div>

                <div>
                  <p className="font-semibold">Micro-Credentials</p>
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700">
                    <li>Business Analytics — Oct 2025</li>
                    <li>Operations Excellence — Dec 2025</li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="my-8" />

            {/* Skills */}
            <section id="skills">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
                Core Skills
              </h2>

              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li>Project Coordination &amp; Workflow Management</li>
                <li>Data Analysis &amp; Visualization (Excel, Dashboards, Reporting)</li>
                <li>Financial Tracking (Budgets, Invoices, AP Support)</li>
                <li>Process Improvement &amp; Lean Methodologies</li>
                <li>Stakeholder Communication &amp; Cross-Functional Collaboration</li>
                <li>Regulatory Compliance &amp; Documentation</li>
                <li>Vendor &amp; Contract Coordination</li>
                <li>Microsoft Office Suite (Advanced Excel Focus)</li>
              </ul>
            </section>
          </aside>

          {/* Right content */}
          <section className="rounded-2xl bg-white border p-6 md:p-8">
            {/* Summary */}
            <div>
              <h2 className="text-xl font-semibold">Summary</h2>
              <div className="mt-2 h-px w-full bg-slate-200" />
              <p className="mt-4 text-slate-700 leading-relaxed">
                Analytical and detail-oriented professional with a Bachelor of Science in Supply Chain &amp; Operations
                Management and micro-credentials in Business Analytics and Operations Excellence. Proven experience
                coordinating cross-functional projects, managing financial and operational data, and improving processes
                in a healthcare environment. Strong background in data analysis, reporting, and stakeholder communication,
                with the ability to manage multiple priorities and meet critical deadlines.
              </p>
            </div>

            {/* Experience */}
            <div className="mt-10">
              <h2 className="text-xl font-semibold">Work Experience</h2>
              <div className="mt-2 h-px w-full bg-slate-200" />

              <div className="mt-6 space-y-8">
                <Job
                  title="Supply Chain Manager"
                  org="Mahnomen Health"
                  dates="2025 – Present"
                  bullets={[
                    "Oversee operations across 10+ departments.",
                    "Manage purchasing workflows and vendor relationships.",
                    "Track spending and support budget oversight.",
                    "Serve as liaison between departments and vendors.",
                    "Develop Excel-based tracking tools.",
                    "Lead process improvement initiatives.",
                    "Maintain compliance with regulations.",
                  ]}
                />

                <Job
                  title="Customer Development Specialist"
                  org="DigiKey"
                  dates="2024 – 2025"
                  bullets={[
                    "Cultivated high-value customer relationships by supporting business development and revenue growth initiatives.",
                    "Analyzed purchasing patterns to identify opportunities for account expansion and retention.",
                    "Resolved complex order, pricing, and availability issues with a focus on long-term partnership.",
                    "Maintained account documentation and tracking to support strategic decision-making.",
                    "Served as team SME for Freshsales; leveraged multiple CRMs to find and engage customers.",
                    "Contributed to workflow improvements that enhanced communication tracking and response efficiency.",
                  ]}
                />

                <Job
                  title="Assigned Accounts"
                  org="DigiKey"
                  dates="2024"
                  bullets={[
                    "Managed a portfolio of assigned business accounts; primary point of contact for order management and support.",
                    "Managed 10–15 assigned accounts generating an average of $1M+ in annual gross sales.",
                    "Handled 50–100+ daily communications across POs and customer updates while maintaining accuracy and responsiveness.",
                    "Coordinated with internal teams and vendors to resolve discrepancies, delays, and supply issues.",
                    "Tracked account activity and order status using structured documentation within a command-based ERP system.",
                  ]}
                />

                <Job
                  title="Account Development Representative"
                  org="DigiKey"
                  dates="2022 – 2024"
                  bullets={[
                    "Supported account growth by identifying customers that fit criteria and recommending products/solutions.",
                    "Built and maintained relationships to improve engagement and repeat business.",
                    "Collaborated with internal teams on quoting, fulfillment, and issue resolution.",
                    "Tracked interactions and sales opportunities using internal systems and documentation tools.",
                  ]}
                />

                <Job
                  title="Global Customer Support Representative"
                  org="DigiKey"
                  dates="2020 – 2022"
                  bullets={[
                    "Provided front-line support for global clients; handled high-volume inquiries for orders, products, and availability.",
                    "Resolved issues efficiently and escalated complex cases when needed.",
                    "Documented interactions and order details to ensure continuity within a command-based ERP.",
                    "Developed foundational knowledge of products, systems, and customer service best practices.",
                  ]}
                />
              </div>
            </div>

            {/* Projects */}
            <div className="mt-10">
              <h2 className="text-xl font-semibold">Projects</h2>
              <div className="mt-2 h-px w-full bg-slate-200" />

              <div className="mt-6 space-y-8">
                <Project
                  title="QAPI Performance Dashboard Development (2026 Initiative)"
                  org="Mahnomen Health Center"
                  meta="Tools: Excel, dashboards, KPI reporting"
                  bullets={[
                    "Designed and implemented a multi-department QAPI dashboard tracking KPIs across departments.",
                    "Built Excel-based tracking using structured formulas to calculate compliance rates and trends.",
                    "Standardized data entry processes across departments to improve consistency and reporting accuracy.",
                    "Developed visual reporting tools for leadership and board-level reporting.",
                    "Collaborated with leaders to define measurable goals and targets.",
                    "Improved visibility into performance gaps to support proactive decision-making.",
                  ]}
                />

                <Project
                  title="Pharmacy Remodel & Compliance Coordination Project"
                  org="Mahnomen Health Center"
                  meta="Tools: vendor coordination, documentation, compliance requirements"
                  bullets={[
                    "Coordinated pharmacy remodel including wall removal and installation of new systems.",
                    "Collaborated with leadership, vendors, and contractors to align timelines and execution.",
                    "Ensured compliance with Minnesota pharmacy requirements throughout planning and completion.",
                    "Managed procurement decisions balancing cost, lead times, and operational constraints.",
                    "Maintained documentation of decisions and compliance considerations.",
                  ]}
                />

                <Project
                  title="Supply Chain Process Improvement Initiatives"
                  org="Mahnomen Health Center"
                  meta="Tools: SOPs, tracking systems, cross-functional communication"
                  bullets={[
                    "Led workflow improvements to streamline ordering and reduce delays.",
                    "Implemented standardized procedures for request tracking and follow-up.",
                    "Supported compliance initiatives through consistent documentation and process reinforcement.",
                    "Collaborated with leadership to align improvements with department goals and operational priorities.",
                  ]}
                />
              </div>
            </div>

            <footer className="mt-12 border-t pt-6 text-sm text-slate-500">
              © {new Date().getFullYear()} Cody Johnson
            </footer>
          </section>
        </div>
      </div>
    </main>
  );
}

function Job({
  title,
  org,
  dates,
  bullets,
}: {
  title: string;
  org: string;
  dates: string;
  bullets: string[];
}) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-semibold">
          {title}, <span className="font-semibold">{org}</span>
        </h3>
        <span className="text-sm text-slate-500">{dates}</span>
      </div>
      <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-700">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function Project({
  title,
  org,
  meta,
  bullets,
}: {
  title: string;
  org: string;
  meta: string;
  bullets: string[];
}) {
  return (
    <div>
      <h3 className="font-semibold">
        {title} — <span className="font-semibold">{org}</span>
      </h3>
      <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-700">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <p className="mt-3 text-sm text-slate-500">{meta}</p>
    </div>
  );
}