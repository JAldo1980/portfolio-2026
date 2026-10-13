import { useEffect, useState } from 'react'
import { contact } from '../data/projects.js'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#approach', label: 'Approach' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 bg-paper/95 backdrop-blur transition-[border-color] ${
        scrolled ? 'border-b border-ink/15' : 'border-b border-transparent'
      }`}
    >
      <div className="page flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-baseline gap-3" aria-label="James Alderman, back to top">
          <span className="display text-[22px] text-blue">JA</span>
          <span className="hidden font-medium sm:inline">James Alderman</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[15px] hover:text-blue">
              {l.label}
            </a>
          ))}
          <a href={`mailto:${contact.email}`} className="btn bg-ink px-5 py-2 text-[15px] text-paper">
            Email me
          </a>
        </nav>

        <button
          type="button"
          className="label rounded-full border border-ink px-4 py-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="page flex flex-col border-t border-ink/15 pb-6 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="display border-b border-ink/10 py-4 text-3xl"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
