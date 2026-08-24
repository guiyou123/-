import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <div className="nav-logo" onClick={() => scrollTo('hero')} style={{ cursor: 'pointer' }}>
          侯贵有<span>.</span>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a onClick={() => scrollTo('projects')} style={{ cursor: 'pointer' }}>精选项目</a></li>
            <li><a onClick={() => scrollTo('gallery')} style={{ cursor: 'pointer' }}>作品展示</a></li>
            <li><a onClick={() => scrollTo('advantages')} style={{ cursor: 'pointer' }}>个人优势</a></li>
            <li><a onClick={() => scrollTo('experience')} style={{ cursor: 'pointer' }}>个人经历</a></li>
            <li><a onClick={() => scrollTo('contact')} style={{ cursor: 'pointer' }}>联系我</a></li>
          </ul>
        </nav>
        <button className="nav-cta" onClick={() => scrollTo('contact')}>
          取得联系
        </button>
      </div>
    </header>
  )
}
