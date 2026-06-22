import { useState, useEffect } from 'react'
import BorderGlow from './BorderGlow'

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '关于', href: '#about' },
  { label: '作品', href: '#gallery' },
  { label: '游记', href: '#journal' },
  { label: '感悟', href: '#footer' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = navLinks.map(l => l.href.slice(1))
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id)
          return
        }
      }
      setActive('')
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={
avbar }>
      <div className="navbar__inner section-container">
        <a href="#hero" className="navbar__logo" onClick={(e) => scrollTo(e, '#hero')}>
          山河行记
        </a>
        <div className="navbar__links">
          {navLinks.map(link => (
            <BorderGlow
              key={link.href}
              borderRadius={8}
              glowRadius={6}
              glowIntensity={0.4}
              edgeSensitivity={35}
              colors={['#6d8cff', '#a78bfa', '#38bdf8']}
              noBorder
            >
            <a
              href={link.href}
              className={
avbar__link }
              onClick={(e) => scrollTo(e, link.href)}
            >
              {link.label}
            </a>
            </BorderGlow>
          ))}
        </div>
        <BorderGlow
          borderRadius={100}
          glowRadius={10}
          glowIntensity={0.5}
          edgeSensitivity={30}
          backgroundColor="var(--color-accent)"
          colors={['#6d8cff', '#a78bfa', '#38bdf8']}
          noBorder
        >
        <a href="#footer" className="navbar__contact" onClick={(e) => scrollTo(e, '#footer')}>
          飞升
        </a>
        </BorderGlow>
      </div>
    </nav>
  )
}
