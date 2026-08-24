import { useState } from 'react'

// 鎸変綔鍝侀泦鏂囦欢澶瑰師鍚嶇粍缁囨暟鎹?
const categories = [
  {
    name: 'Medizymes 瑙嗚璇嗗埆绯荤粺',
    type: 'image',
    cover: '/works/Medizymes-瑙嗚璇嗗埆绯荤粺棣栧浘.jpg',
    images: [
      '/works/Medizymes-瑙嗚璇嗗埆绯荤粺棣栧浘.jpg',
      '/works/Medizymes-瑙嗚璇嗗埆绯荤粺1.jpg',
      '/works/Medizymes 瑙嗚璇嗗埆绯荤粺2.jpg',
    ],
    desc: '铔嬬櫧閰跺搧鐗岃瑙夎瘑鍒郴缁熻璁★紝寤虹珛缁熶竴鍝佺墝瑙嗚瑙勮寖銆?,
  },
  {
    name: 'novizme铔嬬櫧閰跺埗閫犲晢',
    type: 'image',
    cover: '/works/褰╅〉20231028_鐢绘澘-1.jpg',
    images: [
      '/works/褰╅〉20231028_鐢绘澘-1.jpg', '/works/褰╅〉20231028_鐢绘澘 1 鍓湰.jpg',
      '/works/褰╅〉20231028_鐢绘澘 1 鍓湰 2.jpg',
    ],
    desc: '铔嬬櫧閰跺埗閫犲晢浜у搧褰╅〉璁捐锛屽鐗堟湰鏂规杈撳嚭銆?,
  },
  {
    name: '鎬濇嘲鏋椾骇鍝佽璁?,
    type: 'image',
    cover: '/works/鎬濇嘲鏋楁竻娲楀墏绯诲垪浜у搧璁捐1.jpg',
    images: [
      '/works/鎬濇嘲鏋楁竻娲楀墏绯诲垪浜у搧璁捐1.jpg', '/works/鎬濇嘲鏋楁竻娲楀墏绯诲垪浜у搧璁捐2.jpg',
      '/works/鎬濇嘲鏋楁竻娲楀墏绯诲垪浜у搧璁捐3.jpg', '/works/鎬濇嘲鏋楁竻娲楀墏绯诲垪浜у搧璁捐4.jpg',
    ],
    desc: '鎬濇嘲鏋楁竻娲楀墏绯诲垪浜у搧鍖呰璁捐锛屽叏绯诲垪缁熶竴瑙嗚璇█銆?,
  },
  {
    name: '鐖卞繀閫傛竻娲楀墏',
    type: 'image',
    cover: '/works/鐖卞繀閫傜豢鐩栨晥鏋滃浘.jpg',
    images: [
      '/works/鐖卞繀閫傜豢鐩栨晥鏋滃浘.jpg', '/works/鐖卞繀閫傝摑鐩栨晥鏋滃浘.jpg',
    ],
    desc: '鐖卞繀閫傛竻娲楀墏浜у搧鏁堟灉鍥捐璁★紝缁跨洊/钃濈洊鍙岀増鏈€?,
  },
  {
    name: '浜у搧鍖呰绫?,
    type: 'image',
    cover: '/works/4ea70d43-6088-4855-b07b-6ce7660ee126.jpg',
    images: [
      '/works/2a0a3f4f-fb0f-4d57-899e-ac9547993c84.jpg',
      '/works/4a8e810b-6eb5-4802-871d-79fe85a31c2e.jpg',
      '/works/4e7195af-52b7-4eb8-a2cd-2f9c72dfd4fb.png',
      '/works/4ea70d43-6088-4855-b07b-6ce7660ee126.jpg',
      '/works/936f887c-4369-4b01-aaac-cb64df0c25ba.jpg',
      '/works/aab335df-fe51-4ebb-8983-421ce404ce73.png',
      '/works/ba784c7b-0ee1-45f1-9fcb-4cb7a2d215cb.jpg',
      '/works/c7022aef-b9f8-4c8b-9264-8f689299cf91.jpg',
    ],
    desc: '澶氬搧绫讳骇鍝佸寘瑁呰璁″悎闆嗭紝娑电洊鍖荤枟鍣ㄦ銆佸伐涓氳€楁潗绛夐鍩熴€?,
  },
  {
    name: '鏅栬嚧鍖昏嵂 路 鏂囧垱璁捐椤圭洰',
    type: 'image',
    cover: '/works/640.jpg',
    images: [
      '/works/640.jpg', '/works/640 (1).jpg',
      '/works/035c8d24-e92e-4187-a2ed-e43be9e9cd50.jpg',
      '/works/2e059b51-4185-4ce0-adba-ae8a6a185b51.png',
      '/works/3c2ce2de-a275-4afb-9563-51bb496cb5a9.jpg',
      '/works/47426b1a-5d72-445d-a0cc-059af54ba9db.jpg',
      '/works/56434c98-2071-40ad-b263-f7ecd70237b5.jpg',
      '/works/789a7c42-d6f6-4c1d-987b-08635d75521f.jpg',
      '/works/99799895-69af-48c5-b75e-54cd2b34f734.jpg',
      '/works/aff282c0-9d88-4d2d-9adf-7f5fe4ae20b7.jpg',
      '/works/cd521374-8a19-4004-84fa-0c6d891ef7a6.jpg',
      '/works/d5f518e4-3600-4728-baf5-0d9bc44e3b7e.jpg',
      '/works/df9ac87d-3a69-41ea-9430-bf26ec6db311.jpg',
      '/works/e04a457e-213c-4e89-8878-3e738707033d.jpg',
    ],
    desc: '鏅栬嚧鍖昏嵂鏂囧垱璁捐椤圭洰锛岃幏2022骞村害鏈€浣冲悎浣滀紮浼达紝鍚獻P褰㈣薄銆佺墿鏂欍€佹椿鍔ㄨ瑙夌瓑銆?,
  },
  {
    name: 'SKF鏂嚡瀛氬井淇″钩鍙?,
    type: 'image',
    cover: '/works/9c93729e-bf7f-438c-a56f-6766d82f4953.jpg',
    images: ['/works/9c93729e-bf7f-438c-a56f-6766d82f4953.jpg'],
    desc: 'SKF鏂嚡瀛氬井淇″钩鍙拌瑙夎璁★紝闀垮浘鎺ㄦ枃鍙婃椿鍔ㄧ墿鏂欍€?,
  },
  {
    name: '涓€姹借В鏀鹃暱鏄ユ櫤鎱у杞﹀叕鍙稿井淇″钩鍙?,
    type: 'image',
    cover: '/works/66289104-a7f6-4b66-8aec-b319516516ec.jpg',
    images: [
      '/works/66289104-a7f6-4b66-8aec-b319516516ec.jpg',
      '/works/871a1cdc-f429-4d0c-9c08-2ce145ac3c59.jpg',
      '/works/e4bc30e7-696f-431d-b837-510ebbddc228.jpg',
    ],
    desc: '涓€姹借В鏀炬櫤鎱у杞﹀井淇″钩鍙拌瑙夎璁★紝鍝佺墝鎺ㄦ枃鍙婃椿鍔ㄩ暱鍥俱€?,
  },
  {
    name: '鑻忓皵瀵垮井淇″钩鍙?,
    type: 'image',
    cover: '/works/45afc8ee-1834-41df-a741-38e3b6fa4cee.jpg',
    images: [
      '/works/45afc8ee-1834-41df-a741-38e3b6fa4cee.jpg',
      '/works/8bfeafd7-68e1-4f3a-83fd-84cd1db8e52c.jpg',
    ],
    desc: '鑻忓皵瀵垮井淇″钩鍙拌瑙夎璁★紝浼佷笟鎺ㄦ枃鍙婃椿鍔ㄧ墿鏂欍€?,
  },
  {
    name: 'LEPO涔愭櫘鍖荤枟宸ュ巶瀹ｄ紶鐗?,
    type: 'video',
    cover: null,
    images: [],
    desc: '涔愭櫘鍖荤枟鏃犵汉甯冨伐鍘傚浼犵墖锛屽疄鍦版媿鎽勪笌鍚庢湡鍒朵綔銆?,
  },
  {
    name: '鏄撳崥澹骇鍝佽棰?,
    type: 'video',
    cover: '/projects/yiboshi-cover.jpg',
    images: [],
    videos: [
      { src: '/projects/yiboshi-efoam.mp4', name: 'E-FOAM 楂樻晥娉℃搏淇濇箍鍓? },
      { src: '/projects/yiboshi-foambox.mp4', name: 'FOAM BOX 娉℃搏鍙戠敓鍣? },
      { src: '/projects/yiboshi-foamer.mp4', name: '渚挎惡寮忔场娌彂鐢熷櫒' },
    ],
    desc: '鏄撳崥澹棗涓嬫竻娲楀墏绯诲垪浜у搧瑙嗛锛屾兜鐩朎-FOAM楂樻晥娉℃搏淇濇箍鍓傘€丗OAM BOX娉℃搏鍙戠敓鍣ㄥ強渚挎惡寮忔场娌彂鐢熷櫒锛屼粠浜у搧灞曠ず鍒颁娇鐢ㄥ満鏅殑鍏ㄦ祦绋嬭棰戝埗浣溿€?,
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
        {/* 鎵嬮鐞存姌鍙犲垪琛?*/}
        <div className="accordion">
          {categories.map((cat, index) => (
            <div key={index} className={`accordion-item ${openIndex === index ? 'open' : ''}`}>
              {/* 鎶樺彔鏍囬鏍?*/}
              <button
                className="accordion-header"
                onClick={() => toggle(index)}
              >
                <div className="accordion-header-left">
                  <span className="accordion-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="accordion-name">{cat.name}</span>
                  {cat.type === 'video' && <span className="accordion-badge video">瑙嗛</span>}
                  {cat.type === 'image' && <span className="accordion-badge">{cat.images.length}寮?/span>}
                  {cat.type === 'empty' && <span className="accordion-badge">寰呮洿鏂?/span>}
                </div>
                <span className={`accordion-arrow ${openIndex === index ? 'up' : ''}`}>鈻?/span>
              </button>

              {/* 灞曞紑鍐呭 */}
              {openIndex === index && (
                <div className="accordion-content">
                  <div className="accordion-content-inner">
                    {/* 灏侀潰鍥?*/}
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
                              <span className="cover-zoom">馃攳 鐐瑰嚮鏌ョ湅鍏ㄩ儴 {cat.images.length} 寮?/span>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="accordion-cover-placeholder">
                          {cat.type === 'video' ? (
                            <>
                              <span className="placeholder-icon">鈻?/span>
                              <span className="placeholder-text">瑙嗛浣滃搧</span>
                            </>
                          ) : (
                            <>
                              <span className="placeholder-icon">馃搧</span>
                              <span className="placeholder-text">浣滃搧鏁寸悊涓?/span>
                            </>
                          )}
                        </div>
                      )}
                    </div>

                    {/* 椤圭洰鎻忚堪 */}
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

      {/* 鐏 */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>鉁?/button>
          <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>鈥?/button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={lightbox.images[lightbox.currentIndex]} alt={lightbox.title} />
            <div className="lightbox-title">
              {lightbox.title} 路 {lightbox.currentIndex + 1} / {lightbox.images.length}
            </div>
          </div>
          <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>鈥?/button>
        </div>
      )}
    </section>
  )
}
