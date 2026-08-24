import { useState, useEffect, useRef } from 'react'
import BorderGlow from './BorderGlow/BorderGlow'
import ProjectModal from './ProjectModal'

const projects = [
  {
    title: '莱恩工厂宣传片',
    category: 'Video Production · AI + 实拍',
    desc: '独立完成从策划、摄影到后期剪辑的全流程制作。融合AI脚本生成、AI文案、AI配音、AI视频生成与工厂实地拍摄素材，以一人团队实现专业级宣传片产出。',
    tags: ['AI视频生成', 'AI配音', '实拍摄影', '剪辑调色'],
    large: true,
    video: '/projects/lion-factory.mp4',
    media: [
      { type: 'video', src: '/projects/lion-factory.mp4' },
    ],
  },
  {
    title: 'V-Check微检 · 新品发布营销',
    category: 'Brand Marketing · Medical',
    desc: '连续主导三届消毒供应中心学术会议新品发布全案，以悬念式推广逻辑打造传播节奏，统一极简医疗留白风视觉体系。',
    tags: ['品牌全案', '学术会议', '海报设计', 'AI合成'],
    image: '/projects/vcheck-poster.jpg',
    media: [
      { type: 'image', src: '/works/V-Check产品海报.jpg' },
      { type: 'image', src: '/works/V-check新品海报.jpg' },
      { type: 'image', src: '/works/V-Check产品图1.jpg' },
      { type: 'image', src: '/works/V-Check产品图卡片.jpg' },
    ],
  },
  {
    title: '易博士清洗剂 · 品牌视觉系统',
    category: 'Brand Identity · Visual System',
    desc: '为旗下清洗剂品牌建立"极简医疗留白风、蓝白医疗色"视觉规范，统一海报、宣传册、产品外箱、社交媒体配图等全渠道物料设计语言。',
    tags: ['VI系统', '品牌规范', '物料设计'],
    image: '/projects/yiboshi-cover.jpg',
    media: [
      { type: 'image', src: '/works/视频封面E-FOAM常规款.jpg' },
      { type: 'image', src: '/works/新加坡彩页定稿_画板 1.jpg' },
      { type: 'image', src: '/works/新加坡彩页定稿-02.jpg' },
      { type: 'image', src: '/works/新加坡彩页定稿-03.jpg' },
      { type: 'image', src: '/works/新加坡彩页定稿-04.jpg' },
      { type: 'image', src: '/works/FOAM BOX泡沫发生器外箱.jpg' },
      { type: 'image', src: '/works/无纺布产品外箱.png' },
      { type: 'image', src: '/works/清洗剂产品外箱.jpg' },
      { type: 'video', src: '/projects/yiboshi-rust-wipe.mp4' },
      { type: 'video', src: '/projects/yiboshi-pouch.mp4' },
    ],
  },
  {
    title: '莱恩医疗吉祥物 · 狮小宝',
    category: 'IP Design · Mascot',
    desc: '主导品牌吉祥物全案设计，从概念草图到最终落地，产出节日海报、咖啡周边、实验室场景等系列衍生物料，强化品牌亲和力与记忆点。',
    tags: ['IP设计', '吉祥物', '周边衍生'],
    image: '/projects/shixiaobao.jpg',
    media: [
      { type: 'image', src: '/works/狮小宝.jpg' },
      { type: 'image', src: '/works/狮小宝1.png' },
      { type: 'image', src: '/works/狮小宝2.jpg' },
      { type: 'image', src: '/works/狮小宝3.jpg' },
      { type: 'image', src: '/works/狮小宝咖啡1.png' },
      { type: 'image', src: '/works/狮小宝咖啡2.png' },
      { type: 'image', src: '/works/2024新春活动海报.jpg' },
      { type: 'image', src: '/works/儿童节海报.jpg' },
      { type: 'image', src: '/works/AI升成圣诞氛围图.png' },
      { type: 'image', src: '/works/实验室场景图..jpg' },
      { type: 'video', src: '/projects/shixiaobao-animation.mp4' },
    ],
  },
  {
    title: '晖致医药 · 文创设计项目',
    category: 'Creative Design · Medical',
    desc: '创作IP"V宝"及多个衍生形象，产出校招推文、工厂介绍、空宣会直播装修、双选会物料，获晖致医药2022年度最佳合作伙伴。',
    tags: ['IP创作', '文创物料', '印刷落地'],
    image: '/projects/huizhi-cover.png',
    media: [
      { type: 'image', src: '/works/df9ac87d-3a69-41ea-9430-bf26ec6db311.png' },
      { type: 'image', src: '/works/aff282c0-9d88-4d2d-9adf-7f5fe4ae20b7.png' },
      { type: 'image', src: '/works/99799895-69af-48c5-b75e-54cd2b34f734.png' },
      { type: 'image', src: '/works/47426b1a-5d72-445d-a0cc-059af54ba9db.png' },
      { type: 'image', src: '/works/56434c98-2071-40ad-b263-f7ecd70237b5.png' },
      { type: 'image', src: '/works/3c2ce2de-a275-4afb-9563-51bb496cb5a9.png' },
      { type: 'image', src: '/works/e04a457e-213c-4e89-8878-3e738707033d.png' },
      { type: 'image', src: '/works/035c8d24-e92e-4187-a2ed-e43be9e9cd50.png' },
      { type: 'image', src: '/works/640.jpg' },
      { type: 'image', src: '/works/640 (1).jpg' },
    ],
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const videoRefs = useRef([])

  // IntersectionObserver: 视频只在视口内播放，离屏暂停节省性能
  useEffect(() => {
    const observers = []
    videoRefs.current.forEach(video => {
      if (!video) return
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {})
          } else {
            video.pause()
          }
        },
        { threshold: 0.2 }
      )
      io.observe(video)
      observers.push(io)
    })
    return () => observers.forEach(io => io.disconnect())
  }, [])

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-label">Selected Works</div>
        <h2 className="section-title">精选项目</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <BorderGlow
              key={index}
              className={`project-card-glow ${project.large ? 'large' : ''}`}
              edgeSensitivity={25}
              glowColor="225 80 72"
              backgroundColor="rgba(18, 18, 24, 0.5)"
              borderRadius={20}
              glowRadius={35}
              glowIntensity={1.3}
              coneSpread={22}
              animated={false}
              colors={['#6e8cff', '#a8b8ff', '#3d5afe']}
              fillOpacity={0.4}
            >
              <div
                className="project-image"
                onClick={() => setActiveProject(project)}
              >
                {project.video ? (
                  <video
                    ref={el => videoRefs.current[index] = el}
                    className="project-video-cover"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster=""
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                ) : (
                  <img src={project.image} alt={project.title} loading="lazy" />
                )}
                <div className="project-image-overlay" />
                {/* 点击查看提示 */}
                <div className="project-view-hint">
                  <span>查看详情</span>
                  <span className="hint-arrow">→</span>
                </div>
              </div>
              <div
                className="project-info"
                onClick={() => setActiveProject(project)}
              >
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-media-count">
                  {project.media.length > 0 && `${project.media.length} 个素材 · 点击查看`}
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>

      {/* 项目详情弹窗 */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  )
}
