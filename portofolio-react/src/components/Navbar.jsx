import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import clsx from 'clsx'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold tracking-tight">
          Dimas<span className="text-primary">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="ml-2 rounded-lg p-2 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setDark(!dark)}
            className="rounded-lg p-2 text-muted-foreground"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-muted-foreground"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass mx-4 mb-4 rounded-xl p-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
