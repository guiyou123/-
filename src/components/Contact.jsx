export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-bg" />
      <div className="contact-content">
        <div className="contact-label">Get In Touch</div>
        <h2 className="contact-title">
          有项目想法？<br />
          <span className="accent">让我们聊聊</span>
        </h2>
        <p className="contact-desc">
          无论是品牌视觉全案、AI内容生产、宣传片制作，
          还是求职合作机会，欢迎随时联系。
        </p>

        <div className="contact-actions">
          <a href="mailto:【Guiyouhou@outlook.com】" className="btn-primary">
            发送邮件
            <span>→</span>
          </a>
          <a href="tel:【18340837605】" className="btn-ghost">
            电话联系
          </a>
        </div>

        <div className="contact-info">
          <div className="contact-info-item">
            <span className="label">Phone</span>
            <span className="value">【18340837605】</span>
          </div>
          <div className="contact-info-item">
            <span className="label">Email</span>
            <span className="value">【Guiyouhou@outlook.com】</span>
          </div>
          <div className="contact-info-item">
            <span className="label">Location</span>
            <span className="value">大连 · 金普新区</span>
          </div>
        </div>
      </div>

      <div className="footer">
        © 2026 侯贵有 ·  Designed & Built with passion
      </div>
    </section>
  )
}
