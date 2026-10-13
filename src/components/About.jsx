const details = [
  ["Front end", "React, TypeScript, JavaScript, Tailwind, HTML, CSS"],
  ["Also", "Node, PHP, WordPress, WooCommerce, Figma"],
  ["Marketing", "HubSpot email and landing pages, SEO, performance reporting"],
  [
    "Study",
    "BA (Hons) International Development & Politics, University of Leeds",
  ],
  [
    "",
    "Level 6 Professional Diploma in Digital Marketing, Institute of Digital Marketing",
  ],
];

export default function About() {
  return (
    <section id="about" className="border-t border-ink/15">
      <div className="page grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-4">
          <p className="label text-blue">About</p>
          <h2 className="display mt-4 text-[clamp(2.2rem,4.5vw,3.4rem)]">
            The short version
          </h2>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <div className="space-y-6 text-lg leading-relaxed sm:text-xl">
            <p>
              I’ve spent 13 years on start-up, client-side and agency digital:
              managing B2B accounts, running SEO and ABM campaigns, and
              co-founding a digital marketing business. Along the way I kept
              ending up in the code, first with WordPress blogs at university,
              then Squarespace and Wix, and now React and TypeScript.
            </p>
            <p className="text-ink-soft">
              That mix is the point. I can take a brief from a sales director,
              turn it into a sensible component structure, and explain
              afterwards why the enquiry form sits where it does.
            </p>
            <p className="text-ink-soft">
              I use AI tools like Claude as part of my workflow, so I spend
              less time on boilerplate and more on the parts that matter to the
              client.
            </p>
            <p className="text-ink-soft">
              Some of my favourite builds started as personal itches: a name
              generator for Warhammer players, and a currency converter I needed
              on a trip to Thailand.
            </p>
          </div>

          <dl className="mt-12 border-t border-ink">
            {details.map(([k, v]) => (
              <div
                key={v}
                className="grid gap-1 border-b border-ink/15 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6"
              >
                <dt className="label pt-1 text-ink-soft">{k}</dt>
                <dd className="text-[16px]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
