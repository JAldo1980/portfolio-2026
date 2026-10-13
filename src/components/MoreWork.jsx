import { builds } from '../data/projects.js'
import Arrow from './Arrow.jsx'

function Card({ p, i }) {
  return (
    <article className="group flex flex-col">
      <a href={p.live} target="_blank" rel="noreferrer" className="block" aria-label={`${p.name}, live site`}>
        <div className="overflow-hidden rounded-xl border border-ink/15 bg-paper-dim transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_14px_0_-6px_#F2C53B]">
          <img
            src={p.image}
            alt=""
            loading="lazy"
            width="504"
            height="255"
            className="aspect-[504/255] w-full object-cover object-top"
          />
        </div>
      </a>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="display text-2xl">{p.name}</h3>
        <span className="label text-ink-soft">{String(i + 2).padStart(2, '0')}</span>
      </div>
      <p className="label mt-1 text-blue">{p.kind}</p>
      <p className="mt-3 text-[16px] leading-relaxed text-ink-soft">{p.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span key={s} className="tag border-ink/25 text-ink-soft">{s}</span>
        ))}
      </div>
      <div className="mt-5 flex gap-6 text-[15px] font-medium">
        <a href={p.live} target="_blank" rel="noreferrer" className="link-u decoration-mustard hover:text-blue">
          Live site <Arrow />
        </a>
        {p.code && (
          <a href={p.code} target="_blank" rel="noreferrer" className="link-u decoration-ink/25 hover:text-blue">
            Code <Arrow />
          </a>
        )}
      </div>
    </article>
  )
}

export default function MoreWork() {
  return (
    <section className="page py-20 lg:py-28">
      <div className="grid gap-6 lg:grid-cols-12">
        <h2 className="display text-[clamp(2.2rem,4.5vw,3.6rem)] lg:col-span-5">More builds</h2>
        <p className="max-w-[30rem] text-lg text-ink-soft lg:col-span-6 lg:col-start-7 lg:pt-3">
          Marketing sites, templates and a working tool. Each one is live, and the code is on GitHub
          if you want to look under the bonnet.
        </p>
      </div>

      <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {builds.map((p, i) => (
          <Card key={p.name} p={p} i={i} />
        ))}
      </div>
    </section>
  )
}
