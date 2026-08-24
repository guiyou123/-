import { useState } from 'react'
import ProjectModal from './ProjectModal'

const projects = [
  {
    num: '01',
    category: 'VIDEO PRODUCTION · AI + 实拍',
    title: '莱恩工厂宣传片',
    desc: '独立完成从策划、摄影到后期剪辑的全流程制作。融合AI脚本生成、AI文案、AI配音、AI视频生成与工厂实地拍摄素材，以一人团队实现专业级宣传片产出。',
    tags: ['AI视频生成', 'AI配音', '实拍摄影', '剪辑调色'],
    result: '1人独立完成全流程，AI+实拍结合',
    video: '/projects/lion-factory.mp4',
    image: '/projects/lion-factory-cover.jpg',
    media: [
      { type: 'video', src: '/projects/lion-factory.mp4' },
    ],
  },
  {
    num: '02',
    category: 'BRAND MARKETING · MEDICAL',
    title: 'V-Check微检 · 新品发布营销',
    desc: '连续主导三届消毒供应中心学术会议新品发布全案，以悬念式推广逻辑打造传播节奏，统一极简医疗留白风视觉体系。',
    tags: ['品牌全案', '学术会议', '海报设计', 'AI合成'],
    result: '连续3届学术会议全案，全渠道物料统一',
    image: '/projects/vcheck-poster.jpg',
    media: [
      { type: 'image', src: '/works/V-Check产品海报.jpg' },
      { type: 'image', src: '/works/V-check新品海报.jpg' },
      { type: 'image', src: '/works/V-Check产品图1.jpg' },
      { type: 'image', src: '/works/V-Check产品图卡片.jpg' },
    ],
  },
  {
    num: '03',
    category: 'BRAND IDENTITY · VISUAL SYSTEM',
    title: '易博士清洗剂 · 品牌视觉系统',
    desc: '为旗下清洗剂品牌建立"极简医疗留白风、蓝白医疗色"视觉规范，统一海报、宣传册、产品外箱、社交媒体配图等全渠道物料设计语言。',
    tags: ['VI系统', '品牌规范', '物料设计'],
    result: '10+素材类型，全渠道视觉统一',
    image: '/projects/yiboshi-cover.jpg',
    media: [
      { type: 'image', src: '/works/视频封面E-FOAM常规款.jpg' },
      { type: 'image', src: '/works/新加坡彩页定稿_画板 1.jpg' },
      { type: 'image', src: '/works/新加坡彩页定稿-02.jpg' },
      { type: 'image', src: '/works/新加坡彩页定稿-03.jpg' },
      { type: 'image', src: '/works/新加坡彩页定稿-04.jpg' },
      { type: 'image', src: '/works/FOAM BOX泡沫发生器外箱.jpg' },
      { type: 'image', src: '/works/无纺布产品外箱.jpg' },
      { type: 'image', src: '/works/清洗剂产品外箱.jpg' },
      { type: 'video', src: '/projects/yiboshi-rust-wipe.mp4' },
      { type: 'video', src: '/projects/yiboshi-pouch.mp4' },
    ],
  },
  {
    num: '04',
    category: 'IP DESIGN · MASCOT',
    title: '莱恩医疗吉祥物 · 狮小宝',
    desc: '主导品牌吉祥物全案设计，从概念草图到最终落地，产出节日海报、咖啡周边、实验室场景等系列衍生物料，强化品牌亲和力与记忆点。',
    tags: ['IP设计', '吉祥物', '周边衍生'],
    result: '10+衍生物料，概念到落地全案',
    image: '/projects/shixiaobao.jpg',
    media: [
      { type: 'image', src: '/works/狮小宝.jpg' },
      { type: 'image', src: '/works/狮小宝1.jpg' },
      { type: 'image', src: '/works/狮小宝2.jpg' },
      { type: 'image', src: '/works/狮小宝3.jpg' },
      { type: 'image', src: '/works/狮小宝咖啡1.jpg' },
      { type: 'image', src: '/works/狮小宝咖啡2.jpg' },
      { type: 'image', src: '/works/2024新春活动海报.jpg' },
      { type: 'image', src: '/works/儿童节海报.jpg' },
      { type: 'image', src: '/works/AI升成圣诞氛围图.jpg' },
      { type: 'image', src: '/works/实验室场景图..jpg' },
      { type: 'video', src: '/projects/shixiaobao-animation.mp4' },
    ],
  },
  {
    num: '05',
    category: 'CREATIVE DESIGN · MEDICAL',
    title: '晖致医药 · 文创设计项目',
    desc: '创作IP"V宝"及多个衍生形象，产出校招推文、工厂介绍、空宣会直播装修、双选会物料，获晖致医药2022年度最佳合作伙伴。',
    tags: ['IP创作', '文创物料', '印刷落地'],
    result: '获晖致医药2022年度最佳合作伙伴',
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
              {/* 右侧背景图/视频 */}
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

              {/* 左侧内容 */}
              <div className="project-card-large-content">
                <div className="project-card-large-top">
                  <span className="project-card-large-num">{project.num}</span>
                  <span className="project-card-large-category">{project.category}</span>
                </div>

                <h3 className="project-card-large-title">{project.title}</h3>

                <p className="project-card-large-desc">{project.desc}</p>

                <div className="project-card-large-result">
                  <span className="result-label">核心成果</span>
                  <span className="result-text">{project.result}</span>
                </div>

                <div className="project-card-large-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-card-large-tag">{tag}</span>
                  ))}
                </div>
              </div>

              {/* 右下角查看链接 */}
              <div className="project-card-large-more">
                <span>查看项目详情 →</span>
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
