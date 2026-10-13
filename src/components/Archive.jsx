import { useState } from 'react'
import { archive } from '../data/projects.js'
import Arrow from './Arrow.jsx'

export default function Archive() {
  // Floating preview for rows that have a screenshot (pointer devices only)
  const [preview, setPreview] = useState(null)

  const move = (e, image) => {
    if (!image || e.pointerType === 'touch') return
    setPreview({ image, x: e.clientX, y: e.clientY })
  }

  return (
    <section className="page py-20 lg:py-28">
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="label text-blue">The workshop</p>
          <h2 className="display mt-4 text-[clamp(2.2rem,4.5vw,3.4rem)]">Practice builds and small tools</h2>
        </div>
        <p className="max-w-[30rem] text-lg text-ink-soft lg:col-span-6 lg:col-start-7 lg:pt-10">
          UI studies, course briefs and things I built because I needed them. Not polished case
          studies, but a fair record of how I learned.
        </p>
      </div>

      <ul className="mt-12 border-t border-ink" onPointerLeave={() => setPreview(null)}>
        {archive.map((p) => (
          <li
            key={p.name}
            onPointerMove={(e) => move(e, p.image)}
            onPointerLeave={() => setPreview(null)}
            className="grid grid-cols-1 gap-1 border-b border-ink/15 py-4 transition-colors hover:bg-mustard/25 sm:grid-cols-12 sm:items-baseline sm:gap-4 sm:px-2"
          >
            <span className="font-semibold sm:col-span-3">{p.name}</span>
            <span className="text-[15px] text-ink-soft sm:col-span-4">{p.note}</span>
            <span className="font-mono text-[12px] text-ink-soft sm:col-span-3">{p.stack}</span>
            <span className="flex gap-5 text-[14px] font-medium sm:col-span-2 sm:justify-end">
              <a href={p.live} target="_blank" rel="noreferrer" className="link-u decoration-mustard hover:text-blue" aria-label={`${p.name} live site`}>
                Live <Arrow />
              </a>
              {p.code && (
                <a href={p.code} target="_blank" rel="noreferrer" className="link-u decoration-ink/25 hover:text-blue" aria-label={`${p.name} code on GitHub`}>
                  Code <Arrow />
                </a>
              )}
            </span>
          </li>
        ))}
      </ul>

      {preview && (
        <img
          src={preview.image}
          alt=""
          aria-hidden="true"
          className="pointer-events-none fixed z-30 hidden w-72 rotate-2 rounded-lg border-2 border-ink shadow-[6px_6px_0_#14181D] lg:block"
          style={{ left: preview.x + 24, top: preview.y - 70 }}
        />
      )}
    </section>
  )
}
