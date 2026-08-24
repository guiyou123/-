import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 锁定滚动当菜单打开时
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (id) => {
    setMenuOpen(false)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  const navItems = [
    { id: 'projects', label: '精选项目' },
    { id: 'gallery', label: '作品展示' },
    { id: 'advantages', label: '核心能力' },
    { id: 'experience', label: '工作经历' },
    { id: 'contact', label: '联系我' },
  ]

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <div className="nav-logo" onClick={() => scrollTo('hero')} style={{ cursor: 'pointer' }}>
          HGY<span>.</span>
        </div>
        <nav>
          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item.id}>
                <a onClick={() => scrollTo(item.id)} style={{ cursor: 'pointer' }}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="nav-cta" onClick={() => scrollTo('contact')}>
          取得联系
        </button>
        {/* 汉堡菜单按钮 */}
        <button
          className={`nav-hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="菜单"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* 移动端全屏菜单 */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          {navItems.map((item, index) => (
            <div
              key={item.id}
              className="mobile-menu-item"
              style={{ transitionDelay: `${index * 0.08}s` }}
              onClick={() => scrollTo(item.id)}
            >
              <span className="mobile-menu-num">0{index + 1}</span>
              <span className="mobile-menu-label">{item.label}</span>
            </div>
          ))}
          <button
            className="mobile-menu-cta"
            onClick={() => scrollTo('contact')}
          >
            取得联系
          </button>
        </div>
      </div>
    </header>
  )
}
