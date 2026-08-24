export default function PageHero({ num, label, title, subtitle, desc }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-header">
          <span className="module-num">{num}</span>
          <span className="module-label">/ {label}</span>
        </div>
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
        {desc && <p className="page-hero-desc">{desc}</p>}
      </div>
    </section>
  )
}
