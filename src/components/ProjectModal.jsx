import { useState, useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // ESC 关闭
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKey)
    // 锁定滚动
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const media = project?.media || []
  const current = media[currentIndex]

  const prev = () => {
    setCurrentIndex(i => (i === 0 ? media.length - 1 : i - 1))
  }
  const next = () => {
    setCurrentIndex(i => (i === media.length - 1 ? 0 : i + 1))
  }

  if (!project) return null

  return (
    <div className="project-modal" onClick={onClose}>
      <div className="modal-backdrop" />

      <div className="modal-container" onClick={e => e.stopPropagation()}>
        {/* 关闭按钮 */}
        <button className="modal-close" onClick={onClose}>✕</button>

        {/* 头部信息 */}
        <div className="modal-header">
          <div className="modal-category">{project.category}</div>
          <h3 className="modal-title">{project.title}</h3>
          <p className="modal-desc">{project.desc}</p>
          <div className="modal-tags">
            {project.tags?.map((tag, i) => (
              <span key={i} className="modal-tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* 媒体展示区 */}
        {media.length > 0 && (
          <div className="modal-media">
            <div className="modal-media-main">
              {current?.type === 'video' ? (
                <video
                  className="modal-video"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                >
                  <source src={current.src} type="video/mp4" />
                </video>
              ) : (
                <img src={current?.src} alt={`${project.title} ${currentIndex + 1}`} />
              )}

              {/* 左右切换 */}
              {media.length > 1 && (
                <>
                  <button className="modal-nav prev" onClick={prev}>‹</button>
                  <button className="modal-nav next" onClick={next}>›</button>
                </>
              )}

              {/* 计数器 */}
              {media.length > 1 && (
                <div className="modal-counter">{currentIndex + 1} / {media.length}</div>
              )}
            </div>

            {/* 缩略图 */}
            {media.length > 1 && (
              <div className="modal-thumbs">
                {media.map((item, i) => (
                  <div
                    key={i}
                    className={`modal-thumb ${i === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(i)}
                  >
                    {item.type === 'video' ? (
                      <div className="modal-thumb-video">
                        <span>▶</span>
                      </div>
                    ) : (
                      <img src={item.src} alt={`thumb ${i + 1}`} loading="lazy" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {media.length === 0 && (
          <div className="modal-empty">更多作品整理中…</div>
        )}
      </div>
    </div>
  )
}
