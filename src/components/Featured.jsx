import { featured as p } from '../data/projects.js'
import Arrow from './Arrow.jsx'

function Column({ title, items }) {
  return (
    <div>
      <h3 className="label text-mustard-light">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((t) => (
          <li key={t} className="flex gap-3 text-[16px] leading-relaxed text-paper/90">
            <span className="mt-[0.7em] h-px w-3 shrink-0 bg-mustard" aria-hidden="true" />
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Featured() {
  return (
    <section id="work" className="bg-blue text-paper">
      <div className="page py-20 lg:py-28">
        <div className="flex items-center justify-between border-b border-paper/25 pb-4">
          <p className="label">Selected work</p>
          <p className="label text-paper/70">{p.index} · Case study</p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <p className="label text-mustard-light">{p.kind}</p>
            <h2 className="display mt-4 text-[clamp(2.6rem,6vw,5rem)]">{p.name}</h2>
            <p className="mt-6 text-lg leading-relaxed text-paper/85">{p.summary}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="tag border-paper/40 text-paper/90">{s}</span>
              ))}
            </div>
            <a href={p.live} target="_blank" rel="noreferrer" className="btn mt-10 bg-mustard text-ink">
              Visit the live site <Arrow />
            </a>
          </div>

          <figure className="relative lg:col-span-7">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-mustard sm:translate-x-5 sm:translate-y-5" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border-2 border-blue-ink bg-blue-ink">
              <div className="flex items-center gap-1.5 px-4 py-3" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-paper/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-paper/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-paper/30" />
                <span className="label ml-3 text-[10px] text-paper/50">thecircleline.co.uk</span>
              </div>
              <img src={p.image} alt="The Circle Line homepage: 'Mindset Matters' hero with two buttons, For me and For my business" className="block w-full" width="504" height="255" />
            </div>
          </figure>
        </div>

        <div className="mt-16 grid gap-10 border-t border-paper/25 pt-10 md:grid-cols-2 lg:mt-20">
          <Column title="The brief" items={p.brief} />
          <Column title="What I did" items={p.did} />
        </div>
      </div>
    </section>
  )
}
