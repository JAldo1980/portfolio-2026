export default function Footer() {
  return (
    <footer className="bg-ink text-paper/70">
      <div className="page flex flex-col gap-3 py-8 text-[14px] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} James Alderman · Stafford, UK</p>
        <p>
          Built with React and Tailwind ·{' '}
          <a href="#top" className="link-u decoration-paper/30 hover:text-mustard">
            Back to top
          </a>
        </p>
      </div>
    </footer>
  )
}
