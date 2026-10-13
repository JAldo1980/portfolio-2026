import { useState } from 'react'
import { contact } from '../data/projects.js'
import Arrow from './Arrow.jsx'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${contact.email}`
    }
  }

  return (
    <section id="contact" className="bg-mustard">
      <div className="page py-20 lg:py-28">
        <p className="label">Contact</p>
        <h2 className="display mt-4 max-w-[14ch] text-[clamp(2.8rem,8vw,7rem)]">Hiring? Let’s talk.</h2>

        <div className="mt-12 flex flex-col gap-6 border-t-2 border-ink pt-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-lg">The quickest way to reach me is email.</p>
            <div className="mt-3 flex flex-wrap items-center gap-4">
              <a href={`mailto:${contact.email}`} className="display break-all text-[clamp(1.5rem,4vw,2.6rem)] underline decoration-[3px] underline-offset-8 hover:text-blue">
                {contact.email}
              </a>
              <button type="button" onClick={copy} className="label rounded-full border border-ink px-4 py-2 hover:bg-ink hover:text-mustard">
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>

          <ul className="flex gap-8 text-lg font-medium">
            <li>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="link-u hover:text-blue">
                LinkedIn <Arrow />
              </a>
            </li>
            <li>
              <a href={contact.github} target="_blank" rel="noreferrer" className="link-u hover:text-blue">
                GitHub <Arrow />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
