import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { playHeroOpening } from '../animations'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    playHeroOpening(heroRef)
  }, [])

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero-mask" />

      {/* 视频背景 */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/projects/lion-factory-cover.jpg"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <div className="container">
        <div className="hero-content">
          {/* 顶部标签行 */}
          <div className="hero-top-row">
            <span className="hero-portfolio-tag">PORTFOLIO</span>
            <span className="hero-year">HOU GUIYOU / PORTFOLIO 2026</span>
          </div>

          {/* 主标题 - 杂志风 */}
          <h1 className="hero-title">
            <span className="line"><span className="line-inner">用设计构建</span></span>
            <span className="line"><span className="line-inner">品牌的<span className="accent">视觉语言</span></span></span>
          </h1>

          {/* 副标题 */}
          <p className="hero-subtitle-mag">
            以视觉设计连接品牌表达与商业增长
          </p>

          {/* 底部信息行 */}
          <div className="hero-bottom-row">
            <div className="hero-role">
              <span className="role-label">VISUAL DESIGNER · AI DESIGNER · BRAND DESIGNER</span>
              <span className="role-cn">视觉设计 · AI设计 · 品牌设计</span>
            </div>
            <Link to="/projects" className="hero-cta-mag">
              查看作品
              <span className="arrow">↗</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 滚动提示 */}
      <div className="hero-scroll">
        <span>SCROLL</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
