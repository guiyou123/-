import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 路由切换时关闭菜单并滚动到顶部
  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navItems = [
    { path: '/', label: '首页' },
    { path: '/projects', label: '代表项目' },
    { path: '/gallery', label: '作品展示' },
    { path: '/advantages', label: '核心能力' },
    { path: '/experience', label: '工作经历' },
    { path: '/contact', label: '联系我' },
  ]

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="nav-logo">
          HGY<span>.</span>
        </Link>
        <nav>
          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item.path}>
                <Link to={item.path} className={location.pathname === item.path ? 'active' : ''}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link to="/contact" className="nav-cta">
          取得联系
        </Link>
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
            <Link
              key={item.path}
              to={item.path}
              className="mobile-menu-item"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <span className="mobile-menu-num">0{index + 1}</span>
              <span className="mobile-menu-label">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
