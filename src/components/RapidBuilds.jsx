import { rapid } from "../data/projects.js";
import Arrow from "./Arrow.jsx";

function List({ title, items, marker }) {
  return (
    <div>
      <h4 className="label text-ink-soft">{title}</h4>
      <ul className="mt-3 space-y-2">
        {items.map((t) => (
          <li key={t} className="flex gap-3 text-[15px] leading-snug">
            <span className={`mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full ${marker}`} aria-hidden="true" />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Build({ p }) {
  return (
    <article className="grid gap-10 lg:grid-cols-12 lg:items-start">
      <figure className="relative lg:col-span-7">
        <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-blue sm:translate-x-4 sm:translate-y-4" aria-hidden="true" />
        <div className="relative overflow-hidden rounded-2xl border-2 border-ink bg-paper">
          <img src={p.image} alt={`${p.name}: choosing the engagement type, with the live estimate and margin beside it`} width="1280" height="860" loading="lazy" className="block w-full" />
        </div>
      </figure>

      <div className="lg:col-span-5">
        <p className="label text-blue">{p.kind}</p>
        <h3 className="display mt-3 text-[clamp(2rem,3.6vw,2.8rem)]">{p.name}</h3>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">{p.problem}</p>
        <ul className="mt-6 space-y-2 border-t border-ink/15 pt-5">
          {p.features.map((f) => (
            <li key={f} className="flex gap-3 text-[15px] leading-snug">
              <span className="mt-[0.6em] h-px w-3 shrink-0 bg-ink" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span key={s} className="tag border-ink/25 text-ink-soft">{s}</span>
          ))}
        </div>
        {(p.live || p.code) && (
          <div className="mt-7 flex flex-wrap items-center gap-6">
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer" className="btn bg-mustard text-ink">
                Try the tool <Arrow />
              </a>
            )}
            {p.code && (
              <a href={p.code} target="_blank" rel="noreferrer" className="link-u font-medium decoration-ink/25 hover:text-blue">
                Code <Arrow />
              </a>
            )}
          </div>
        )}
      </div>

      <div className="grid gap-8 rounded-2xl border border-ink/15 bg-paper-dim p-6 sm:grid-cols-2 sm:p-8 lg:col-span-12">
        <List title="What I decided" items={p.decided} marker="bg-blue" />
        <List title="What AI helped with" items={p.aiHelped} marker="bg-mustard-deep" />
      </div>
    </article>
  );
}

export default function RapidBuilds() {
  return (
    <section id="rapid" className="border-t border-ink/15">
      <div className="page py-20 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label text-blue">Rapid builds</p>
            <h2 className="display mt-4 text-[clamp(2.2rem,4.5vw,3.6rem)] [text-wrap:balance]">Built fast, with AI</h2>
          </div>
          <p className="max-w-[32rem] text-lg text-ink-soft lg:col-span-6 lg:col-start-7 lg:pt-10">
            Small tools that solve a real business problem quickly. I set the brief, the rules and the
            design; AI speeds up the build. Each one shows which parts were which.
          </p>
        </div>
        <div className="mt-14 space-y-24">
          {rapid.map((p) => (
            <Build key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
