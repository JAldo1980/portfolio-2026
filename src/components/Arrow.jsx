// Small north-east arrow for external links
export default function Arrow({ className = '' }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={`inline-block h-[0.8em] w-[0.8em] ${className}`} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 12 12 4M5 4h7v7" />
    </svg>
  )
}
