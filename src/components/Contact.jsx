import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'Guiyouhou@outlook.com'

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-bg" />
      <div className="container">
        <div className="contact-inner">
          <div className="contact-eyebrow">
            <span className="module-num">07</span>
            <span className="module-label">/ CONTACT</span>
          </div>

          <h2 className="contact-title-mag">
            让视觉成为<br />
            <span className="accent">增长的一部分。</span>
          </h2>

          <p className="contact-desc-mag">
            无论是品牌视觉全案、AI内容生产、宣传片制作，还是求职合作机会，欢迎随时联系。
          </p>

          <div className="contact-actions-mag">
            <button className="contact-email-btn" onClick={copyEmail}>
              {copied ? '已复制 ✓' : '复制邮箱'}
              <span className="arrow">↗</span>
            </button>
            <a href={`mailto:${email}`} className="contact-mail-link">
              {email}
            </a>
          </div>

          <div className="contact-info-mag">
            <div className="contact-info-col">
              <span className="info-label">PHONE</span>
              <span className="info-value">18340837605</span>
            </div>
            <div className="contact-info-col">
              <span className="info-label">EMAIL</span>
              <span className="info-value">{email}</span>
            </div>
            <div className="contact-info-col">
              <span className="info-label">LOCATION</span>
              <span className="info-value">大连 · 金普新区</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-mag">
        <span>HOU GUIYOU / 2026</span>
        <span>Designed & Built with passion</span>
      </div>
    </section>
  )
}
