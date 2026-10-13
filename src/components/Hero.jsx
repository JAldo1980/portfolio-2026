import { contact } from '../data/projects.js'

const facts = [
  ['Based', 'Stafford, UK'],
  ['Builds in', 'React, TypeScript, Tailwind'],
  ['Background', '13 years in B2B client services and digital marketing'],
  ['Looking for', 'Front-end / React developer roles'],
]

const proof = [
  ['13+', 'years in client services and digital marketing'],
  ['15+', 'B2B accounts managed'],
  ['20+', 'sites, apps and tools shipped'],
]

export default function Hero() {
  return (
    <section id="top" className="page pb-16 pt-10 sm:pt-16 lg:pb-24">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <p className="label flex items-center gap-2 text-ink-soft">
            <span className="h-2.5 w-2.5 rounded-full bg-mustard ring-2 ring-mustard/40" aria-hidden="true" />
            React developer · Open to new roles
          </p>

          <h1 className="display mt-6 text-[clamp(2.9rem,7.4vw,6.4rem)]">
            I build websites that have to <span className="scribble">earn their keep.</span>
          </h1>

          <p className="mt-8 max-w-[34rem] text-lg text-ink-soft sm:text-xl">
            I’m James. I spent 13 years being measured on leads and client results before I started
            writing the code myself. Now I build React sites with the commercial goal in mind from the
            first component.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href="#work" className="btn bg-mustard text-ink">
              See selected work <span aria-hidden="true">↓</span>
            </a>
            <a href={`mailto:${contact.email}`} className="link-u font-medium decoration-mustard hover:text-blue">
              {contact.email}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:col-span-4 lg:mt-4">
          <div className="relative overflow-hidden rounded-[28px] bg-mustard">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-[18px] border-blue/90" aria-hidden="true" />
            <img
              src="/james.webp"
              alt="James Alderman"
              width="500"
              height="500"
              className="relative mx-auto -mb-1 w-[92%] pt-8"
            />
          </div>
          <dl className="relative -mt-10 ml-6 rotate-[-1.5deg] rounded-xl border border-ink bg-paper p-5 shadow-[6px_6px_0_#14181D] sm:ml-10">
            {facts.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-3 border-b border-ink/10 py-2 text-[14px] last:border-0">
                <dt className="label pt-[3px] text-[11px] text-ink-soft">{k}</dt>
                <dd className="font-medium leading-snug">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <ul className="mt-16 grid border-y border-ink/15 sm:grid-cols-3 lg:mt-20">
        {proof.map(([n, t], i) => (
          <li
            key={n}
            className={`flex items-baseline gap-4 py-5 sm:px-6 ${i > 0 ? 'border-t border-ink/15 sm:border-l sm:border-t-0' : 'sm:pl-0'}`}
          >
            <span className="display text-4xl text-blue">{n}</span>
            <span className="text-[15px] leading-snug text-ink-soft">{t}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
