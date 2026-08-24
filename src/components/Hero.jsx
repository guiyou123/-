import { useEffect, useRef } from 'react'
import { playHeroOpening } from '../animations'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    playHeroOpening(heroRef)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero" ref={heroRef}>
      {/* 开场遮罩 */}
      <div className="hero-mask" />

      {/* 视频背景（叠加在全局渐变之上） */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster=""
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <div className="container">
        <div className="hero-content">
          <div className="hero-eyebrow">Visual Designer · AI Designer · Brand Designer</div>
          <h1 className="hero-title">
            <span className="line"><span className="line-inner">用设计构建</span></span>
            <span className="line"><span className="line-inner">品牌的<span className="accent">视觉语言</span></span></span>
          </h1>
          <p className="hero-desc">
            7年视觉设计与品牌营销经验，深耕医疗与制造行业。
            擅长将AI工具与实拍融合，独立完成从品牌策略到视频成片的全链路内容生产。
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('projects')}>
              查看作品
              <span>→</span>
            </button>
            <button className="btn-ghost" onClick={() => scrollTo('contact')}>
              联系合作
            </button>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
