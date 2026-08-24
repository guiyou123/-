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
        </div>
      </div>
    </section>
  )
}
