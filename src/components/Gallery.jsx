import { useState } from 'react'

// 按作品集文件夹原名组织数据
const categories = [
  {
    name: 'Medizymes 视觉识别系统',
    type: 'image',
    cover: '/works/Medizymes-视觉识别系统首图.jpg',
    images: [
      '/works/Medizymes-视觉识别系统首图.jpg',
      '/works/Medizymes-视觉识别系统1.jpg',
      '/works/Medizymes 视觉识别系统2.jpg',
    ],
    desc: '蛋白酶品牌视觉识别系统设计，建立统一品牌视觉规范。',
  },
  {
    name: 'novizme蛋白酶制造商',
    type: 'image',
    cover: '/works/彩页20231028_画板-1.jpg',
    images: [
      '/works/彩页20231028_画板-1.jpg', '/works/彩页20231028_画板 1 副本.jpg',
      '/works/彩页20231028_画板 1 副本 2.jpg',
    ],
    desc: '蛋白酶制造商产品彩页设计，多版本方案输出。',
  },
  {
    name: '思泰林产品设计',
    type: 'image',
    cover: '/works/思泰林清洗剂系列产品设计1.jpg',
    images: [
      '/works/思泰林清洗剂系列产品设计1.jpg', '/works/思泰林清洗剂系列产品设计2.jpg',
      '/works/思泰林清洗剂系列产品设计3.jpg', '/works/思泰林清洗剂系列产品设计4.jpg',
    ],
    desc: '思泰林清洗剂系列产品包装设计，全系列统一视觉语言。',
  },
  {
    name: '爱必适清洗剂',
    type: 'image',
    cover: '/works/爱必适绿盖效果图.jpg',
    images: [
      '/works/爱必适绿盖效果图.jpg', '/works/爱必适蓝盖效果图.jpg',
    ],
    desc: '爱必适清洗剂产品效果图设计，绿盖/蓝盖双版本。',
  },
  {
    name: '产品包装类',
    type: 'image',
    cover: '/works/4ea70d43-6088-4855-b07b-6ce7660ee126.png',
    images: [
      '/works/2a0a3f4f-fb0f-4d57-899e-ac9547993c84.png',
      '/works/4a8e810b-6eb5-4802-871d-79fe85a31c2e.png',
      '/works/4e7195af-52b7-4eb8-a2cd-2f9c72dfd4fb.png',
      '/works/4ea70d43-6088-4855-b07b-6ce7660ee126.png',
      '/works/936f887c-4369-4b01-aaac-cb64df0c25ba.png',
      '/works/aab335df-fe51-4ebb-8983-421ce404ce73.png',
      '/works/ba784c7b-0ee1-45f1-9fcb-4cb7a2d215cb.png',
      '/works/c7022aef-b9f8-4c8b-9264-8f689299cf91.png',
    ],
    desc: '多品类产品包装设计合集，涵盖医疗器械、工业耗材等领域。',
  },
  {
    name: '晖致医药 · 文创设计项目',
    type: 'image',
    cover: '/works/640.jpg',
    images: [
      '/works/640.jpg', '/works/640 (1).jpg',
      '/works/035c8d24-e92e-4187-a2ed-e43be9e9cd50.png',
      '/works/2e059b51-4185-4ce0-adba-ae8a6a185b51.png',
      '/works/3c2ce2de-a275-4afb-9563-51bb496cb5a9.png',
      '/works/47426b1a-5d72-445d-a0cc-059af54ba9db.png',
      '/works/56434c98-2071-40ad-b263-f7ecd70237b5.png',
      '/works/789a7c42-d6f6-4c1d-987b-08635d75521f.png',
      '/works/99799895-69af-48c5-b75e-54cd2b34f734.png',
      '/works/aff282c0-9d88-4d2d-9adf-7f5fe4ae20b7.png',
      '/works/cd521374-8a19-4004-84fa-0c6d891ef7a6.png',
      '/works/d5f518e4-3600-4728-baf5-0d9bc44e3b7e.png',
      '/works/df9ac87d-3a69-41ea-9430-bf26ec6db311.png',
      '/works/e04a457e-213c-4e89-8878-3e738707033d.png',
    ],
    desc: '晖致医药文创设计项目，获2022年度最佳合作伙伴，含IP形象、物料、活动视觉等。',
  },
  {
    name: 'SKF斯凯孚微信平台',
    type: 'image',
    cover: '/works/9c93729e-bf7f-438c-a56f-6766d82f4953.png',
    images: ['/works/9c93729e-bf7f-438c-a56f-6766d82f4953.png'],
    desc: 'SKF斯凯孚微信平台视觉设计，长图推文及活动物料。',
  },
  {
    name: '一汽解放长春智慧客车公司微信平台',
    type: 'image',
    cover: '/works/66289104-a7f6-4b66-8aec-b319516516ec.png',
    images: [
      '/works/66289104-a7f6-4b66-8aec-b319516516ec.png',
      '/works/871a1cdc-f429-4d0c-9c08-2ce145ac3c59.png',
      '/works/e4bc30e7-696f-431d-b837-510ebbddc228.png',
    ],
    desc: '一汽解放智慧客车微信平台视觉设计，品牌推文及活动长图。',
  },
  {
    name: '苏尔寿微信平台',
    type: 'image',
    cover: '/works/45afc8ee-1834-41df-a741-38e3b6fa4cee.png',
    images: [
      '/works/45afc8ee-1834-41df-a741-38e3b6fa4cee.png',
      '/works/8bfeafd7-68e1-4f3a-83fd-84cd1db8e52c.png',
    ],
    desc: '苏尔寿微信平台视觉设计，企业推文及活动物料。',
  },
  {
    name: 'LEPO乐普医疗工厂宣传片',
    type: 'video',
    cover: null,
    images: [],
    desc: '乐普医疗无纺布工厂宣传片，实地拍摄与后期制作。',
  },
  {
    name: '易博士产品视频',
    type: 'video',
    cover: '/projects/yiboshi-cover.jpg',
    images: [],
    videos: [
      { src: '/projects/yiboshi-efoam.mp4', name: 'E-FOAM 高效泡沫保湿剂' },
      { src: '/projects/yiboshi-foambox.mp4', name: 'FOAM BOX 泡沫发生器' },
      { src: '/projects/yiboshi-foamer.mp4', name: '便携式泡沫发生器' },
    ],
    desc: '易博士旗下清洗剂系列产品视频，涵盖E-FOAM高效泡沫保湿剂、FOAM BOX泡沫发生器及便携式泡沫发生器，从产品展示到使用场景的全流程视频制作。',
  },
]

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(0)
  const [lightbox, setLightbox] = useState(null) // { images, currentIndex }

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  const openLightbox = (cat) => {
    if (cat.images.length > 0) {
      setLightbox({ images: cat.images, currentIndex: 0, title: cat.name })
    }
  }

  const prevImage = () => {
    setLightbox(prev => ({
      ...prev,
      currentIndex: prev.currentIndex === 0 ? prev.images.length - 1 : prev.currentIndex - 1
    }))
  }

  const nextImage = () => {
    setLightbox(prev => ({
      ...prev,
      currentIndex: prev.currentIndex === prev.images.length - 1 ? 0 : prev.currentIndex + 1
    }))
  }

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-label">Portfolio Gallery</div>
        <h2 className="section-title">作品展示</h2>

        {/* 手风琴折叠列表 */}
        <div className="accordion">
          {categories.map((cat, index) => (
            <div key={index} className={`accordion-item ${openIndex === index ? 'open' : ''}`}>
              {/* 折叠标题栏 */}
              <button
                className="accordion-header"
                onClick={() => toggle(index)}
              >
                <div className="accordion-header-left">
                  <span className="accordion-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="accordion-name">{cat.name}</span>
                  {cat.type === 'video' && <span className="accordion-badge video">视频</span>}
                  {cat.type === 'image' && <span className="accordion-badge">{cat.images.length}张</span>}
                  {cat.type === 'empty' && <span className="accordion-badge">待更新</span>}
                </div>
                <span className={`accordion-arrow ${openIndex === index ? 'up' : ''}`}>▼</span>
              </button>

              {/* 展开内容 */}
              {openIndex === index && (
                <div className="accordion-content">
                  <div className="accordion-content-inner">
                    {/* 封面图 */}
                    <div
                      className="accordion-cover"
                      onClick={() => openLightbox(cat)}
                      style={{ cursor: cat.images.length > 0 ? 'pointer' : 'default' }}
                    >
                      {cat.cover ? (
                        <>
                          <img src={cat.cover} alt={cat.name} loading="lazy" />
                          {cat.images.length > 1 && (
                            <div className="accordion-cover-overlay">
                              <span className="cover-zoom">🔍 点击查看全部 {cat.images.length} 张</span>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="accordion-cover-placeholder">
                          {cat.type === 'video' ? (
                            <>
                              <span className="placeholder-icon">▶</span>
                              <span className="placeholder-text">视频作品</span>
                            </>
                          ) : (
                            <>
                              <span className="placeholder-icon">📁</span>
                              <span className="placeholder-text">作品整理中</span>
                            </>
                          )}
                        </div>
                      )}
                    </div>

                    {/* 项目描述 */}
                    <div className="accordion-desc">
                      <p>{cat.desc}</p>
                      {cat.images.length > 0 && (
                        <div className="accordion-thumbs">
                          {cat.images.slice(0, 6).map((img, i) => (
                            <div
                              key={i}
                              className="thumb"
                              onClick={() => setLightbox({ images: cat.images, currentIndex: i, title: cat.name })}
                            >
                              <img src={img} alt={`${cat.name} ${i + 1}`} loading="lazy" />
                            </div>
                          ))}
                          {cat.images.length > 6 && (
                            <div className="thumb thumb-more" onClick={() => openLightbox(cat)}>
                              <span>+{cat.images.length - 6}</span>
                            </div>
                          )}
                        </div>
                      )}
                      {cat.videos && cat.videos.length > 0 && (
                        <div className="accordion-videos">
                          {cat.videos.map((video, i) => (
                            <div key={i} className="accordion-video-item">
                              <div className="accordion-video-name">{video.name}</div>
                              <video
                                className="accordion-video"
                                controls
                                preload="metadata"
                                playsInline
                              >
                                <source src={video.src} type="video/mp4" />
                              </video>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 灯箱 */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>‹</button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={lightbox.images[lightbox.currentIndex]} alt={lightbox.title} />
            <div className="lightbox-title">
              {lightbox.title} · {lightbox.currentIndex + 1} / {lightbox.images.length}
            </div>
          </div>
          <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>›</button>
        </div>
      )}
    </section>
  )
}
