import { useState } from 'react'
import ProjectModal from './ProjectModal'

const projects = [
  {
    num: '01',
    category: 'VIDEO PRODUCTION 路 AI + 瀹炴媿',
    title: '鑾辨仼宸ュ巶瀹ｄ紶鐗?,
    desc: '鐙珛瀹屾垚浠庣瓥鍒掋€佹憚褰卞埌鍚庢湡鍓緫鐨勫叏娴佺▼鍒朵綔銆傝瀺鍚圓I鑴氭湰鐢熸垚銆丄I鏂囨銆丄I閰嶉煶銆丄I瑙嗛鐢熸垚涓庡伐鍘傚疄鍦版媿鎽勭礌鏉愶紝浠ヤ竴浜哄洟闃熷疄鐜颁笓涓氱骇瀹ｄ紶鐗囦骇鍑恒€?,
    tags: ['AI瑙嗛鐢熸垚', 'AI閰嶉煶', '瀹炴媿鎽勫奖', '鍓緫璋冭壊'],
    result: '1浜虹嫭绔嬪畬鎴愬叏娴佺▼锛孉I+瀹炴媿缁撳悎',
    video: '/projects/lion-factory.mp4',
    image: '/projects/lion-factory-cover.jpg',
    media: [
      { type: 'video', src: '/projects/lion-factory.mp4' },
    ],
  },
  {
    num: '02',
    category: 'BRAND MARKETING 路 MEDICAL',
    title: 'V-Check寰 路 鏂板搧鍙戝竷钀ラ攢',
    desc: '杩炵画涓诲涓夊眾娑堟瘨渚涘簲涓績瀛︽湳浼氳鏂板搧鍙戝竷鍏ㄦ锛屼互鎮康寮忔帹骞块€昏緫鎵撻€犱紶鎾妭濂忥紝缁熶竴鏋佺畝鍖荤枟鐣欑櫧椋庤瑙変綋绯汇€?,
    tags: ['鍝佺墝鍏ㄦ', '瀛︽湳浼氳', '娴锋姤璁捐', 'AI鍚堟垚'],
    result: '杩炵画3灞婂鏈細璁叏妗堬紝鍏ㄦ笭閬撶墿鏂欑粺涓€',
    image: '/projects/vcheck-poster.jpg',
    media: [
      { type: 'image', src: '/works/V-Check浜у搧娴锋姤.jpg' },
      { type: 'image', src: '/works/V-check鏂板搧娴锋姤.jpg' },
      { type: 'image', src: '/works/V-Check浜у搧鍥?.jpg' },
      { type: 'image', src: '/works/V-Check浜у搧鍥惧崱鐗?jpg' },
    ],
  },
  {
    num: '03',
    category: 'BRAND IDENTITY 路 VISUAL SYSTEM',
    title: '鏄撳崥澹竻娲楀墏 路 鍝佺墝瑙嗚绯荤粺',
    desc: '涓烘棗涓嬫竻娲楀墏鍝佺墝寤虹珛"鏋佺畝鍖荤枟鐣欑櫧椋庛€佽摑鐧藉尰鐤楄壊"瑙嗚瑙勮寖锛岀粺涓€娴锋姤銆佸浼犲唽銆佷骇鍝佸绠便€佺ぞ浜ゅ獟浣撻厤鍥剧瓑鍏ㄦ笭閬撶墿鏂欒璁¤瑷€銆?,
    tags: ['VI绯荤粺', '鍝佺墝瑙勮寖', '鐗╂枡璁捐'],
    result: '10+绱犳潗绫诲瀷锛屽叏娓犻亾瑙嗚缁熶竴',
    image: '/projects/yiboshi-cover.jpg',
    media: [
      { type: 'image', src: '/works/瑙嗛灏侀潰E-FOAM甯歌娆?jpg' },
      { type: 'image', src: '/works/鏂板姞鍧″僵椤靛畾绋縚鐢绘澘 1.jpg' },
      { type: 'image', src: '/works/鏂板姞鍧″僵椤靛畾绋?02.jpg' },
      { type: 'image', src: '/works/鏂板姞鍧″僵椤靛畾绋?03.jpg' },
      { type: 'image', src: '/works/鏂板姞鍧″僵椤靛畾绋?04.jpg' },
      { type: 'image', src: '/works/FOAM BOX娉℃搏鍙戠敓鍣ㄥ绠?jpg' },
      { type: 'image', src: '/works/鏃犵汉甯冧骇鍝佸绠?png' },
      { type: 'image', src: '/works/娓呮礂鍓備骇鍝佸绠?jpg' },
      { type: 'video', src: '/projects/yiboshi-rust-wipe.mp4' },
      { type: 'video', src: '/projects/yiboshi-pouch.mp4' },
    ],
  },
  {
    num: '04',
    category: 'IP DESIGN 路 MASCOT',
    title: '鑾辨仼鍖荤枟鍚夌ゥ鐗?路 鐙皬瀹?,
    desc: '涓诲鍝佺墝鍚夌ゥ鐗╁叏妗堣璁★紝浠庢蹇佃崏鍥惧埌鏈€缁堣惤鍦帮紝浜у嚭鑺傛棩娴锋姤銆佸挅鍟″懆杈广€佸疄楠屽鍦烘櫙绛夌郴鍒楄鐢熺墿鏂欙紝寮哄寲鍝佺墝浜插拰鍔涗笌璁板繂鐐广€?,
    tags: ['IP璁捐', '鍚夌ゥ鐗?, '鍛ㄨ竟琛嶇敓'],
    result: '10+琛嶇敓鐗╂枡锛屾蹇靛埌钀藉湴鍏ㄦ',
    image: '/projects/shixiaobao.jpg',
    media: [
      { type: 'image', src: '/works/鐙皬瀹?jpg' },
      { type: 'image', src: '/works/鐙皬瀹?.png' },
      { type: 'image', src: '/works/鐙皬瀹?.jpg' },
      { type: 'image', src: '/works/鐙皬瀹?.jpg' },
      { type: 'image', src: '/works/鐙皬瀹濆挅鍟?.png' },
      { type: 'image', src: '/works/鐙皬瀹濆挅鍟?.png' },
      { type: 'image', src: '/works/2024鏂版槬娲诲姩娴锋姤.jpg' },
      { type: 'image', src: '/works/鍎跨鑺傛捣鎶?jpg' },
      { type: 'image', src: '/works/AI鍗囨垚鍦ｈ癁姘涘洿鍥?png' },
      { type: 'image', src: '/works/瀹為獙瀹ゅ満鏅浘..jpg' },
      { type: 'video', src: '/projects/shixiaobao-animation.mp4' },
    ],
  },
  {
    num: '05',
    category: 'CREATIVE DESIGN 路 MEDICAL',
    title: '鏅栬嚧鍖昏嵂 路 鏂囧垱璁捐椤圭洰',
    desc: '鍒涗綔IP"V瀹?鍙婂涓鐢熷舰璞★紝浜у嚭鏍℃嫑鎺ㄦ枃銆佸伐鍘備粙缁嶃€佺┖瀹ｄ細鐩存挱瑁呬慨銆佸弻閫変細鐗╂枡锛岃幏鏅栬嚧鍖昏嵂2022骞村害鏈€浣冲悎浣滀紮浼淬€?,
    tags: ['IP鍒涗綔', '鏂囧垱鐗╂枡', '鍗板埛钀藉湴'],
    result: '鑾锋櫀鑷村尰鑽?022骞村害鏈€浣冲悎浣滀紮浼?,
    image: '/projects/huizhi-cover.png',
    media: [
      { type: 'image', src: '/works/df9ac87d-3a69-41ea-9430-bf26ec6db311.jpg' },
      { type: 'image', src: '/works/aff282c0-9d88-4d2d-9adf-7f5fe4ae20b7.jpg' },
      { type: 'image', src: '/works/99799895-69af-48c5-b75e-54cd2b34f734.jpg' },
      { type: 'image', src: '/works/47426b1a-5d72-445d-a0cc-059af54ba9db.jpg' },
      { type: 'image', src: '/works/56434c98-2071-40ad-b263-f7ecd70237b5.jpg' },
    ],
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="project-cards">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card-large"
              onClick={() => setActiveProject(project)}
            >
              {/* 鍙充晶鑳屾櫙鍥?瑙嗛 */}
              <div className="project-card-large-image">
                {project.video ? (
                  <video
                    src={project.video}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={project.image}
                    onMouseEnter={(e) => e.target.play().catch(() => {})}
                    onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0 }}
                  />
                ) : project.image ? (
                  <img src={project.image} alt={project.title} loading="lazy" />
                ) : (
                  <div className="project-card-large-placeholder">
                    <span>{project.num}</span>
                  </div>
                )}
                <div className="project-card-large-overlay" />
              </div>

              {/* 宸︿晶鍐呭 */}
              <div className="project-card-large-content">
                <div className="project-card-large-top">
                  <span className="project-card-large-num">{project.num}</span>
                  <span className="project-card-large-category">{project.category}</span>
                </div>

                <h3 className="project-card-large-title">{project.title}</h3>

                <p className="project-card-large-desc">{project.desc}</p>

                <div className="project-card-large-result">
                  <span className="result-label">鏍稿績鎴愭灉</span>
                  <span className="result-text">{project.result}</span>
                </div>

                <div className="project-card-large-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-card-large-tag">{tag}</span>
                  ))}
                </div>
              </div>

              {/* 鍙充笅瑙掓煡鐪嬮摼鎺?*/}
              <div className="project-card-large-more">
                <span>鏌ョ湅椤圭洰璇︽儏 鈫?/span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  )
}
