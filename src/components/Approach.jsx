const points = [
  {
    title: "I know what the site is for",
    body: "I’ve managed many B2B accounts, so I’ve been in the meetings where a website is judged on enquiries, not looks. That shapes how I build: clear routes, obvious next steps, forms that people actually finish.",
  },
  {
    title: "Search is built in, not bolted on",
    body: "I’ve worked as an SEO account manager, so sensible heading structure, fast pages, real copy in the markup and tidy metadata come as standard, not as a ticket after launch.",
  },
  {
    title: "I can talk to the client",
    body: "Years of account management means I can take a brief from a non-technical stakeholder, push back when something won’t work, and explain the trade-offs in plain English.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="border-y border-ink/15 bg-paper-dim">
      <div className="page grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-4">
          <p className="label text-blue">Approach</p>
          <h2 className="display mt-4 text-[clamp(2.2rem,4.5vw,3.4rem)]">
            Why hire a marketer who codes?
          </h2>
        </div>
        <ol className="grid gap-10 lg:col-span-7 lg:col-start-6">
          {points.map((p, i) => (
            <li
              key={p.title}
              className="grid grid-cols-[3rem_1fr] gap-4 border-t border-ink/20 pt-6"
            >
              <span className="display text-2xl text-blue">{i + 1}</span>
              <div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
