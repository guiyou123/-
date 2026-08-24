const timeline = [
  {
    year: '至今',
    title: '品牌宣传专员 / 视觉负责人',
    company: '莱恩医疗 Lion Medical（大连工厂）',
    desc: '主导V-Check微检产品线全球营销，连续三届学术会议新品发布全案，独立完成工厂宣传片制作，建立易博士品牌视觉规范。',
  },
  {
    year: '2022 — 2023',
    title: '网络运营主管',
    company: '大连硕泰科技教育有限公司',
    desc: '负责考研机构网络宣传运营，统筹媒体广告投放优化、品宣物料、招生手册、新媒体内容策划与设计。',
  },
  {
    year: '2018 — 2022',
    title: '设计专员',
    company: '大连领科外企服务有限公司',
    desc: '服务辉瑞、晖致医药、斯凯孚、一汽等客户，负责海报、物料、VI、手绘、网站搭建、微信推文设计，获晖致医药年度最佳合作伙伴。',
  },
]

const stats = [
  { number: '7+', label: '年设计经验' },
  { number: '50+', label: '服务项目' },
  { number: '10+', label: '行业客户' },
]

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-label">About & Experience</div>
        <h2 className="section-title">个人经历</h2>

        <div className="experience-inner">
          {/* 左侧头像 */}
          <div className="exp-portrait">
            <div className="portrait-frame">
              <img src="/avatar.jpg" alt="侯贵有" loading="lazy" />
              <div className="portrait-info">
                <div className="portrait-name">侯贵有</div>
                <div className="portrait-role">视觉设计师 / AI设计师 / 品牌设计师</div>
              </div>
            </div>
          </div>

          {/* 右侧内容 */}
          <div className="exp-content">
            <h3>关于我</h3>
            <p className="exp-text">
              大连工业大学视觉传达专业毕业，自幼学习绘画，7年视觉设计与品牌营销从业经历。
              现任莱恩医疗品牌宣传专员兼视觉负责人，兼顾摄影、剪辑与品牌策划。
              熟练结合AI工具赋能内容生产，可独立完成宣传片从策划到成片的完整项目交付。
              过往服务辉瑞、晖致医药、斯凯孚、一汽解放等知名客户，覆盖医药、制造、快消、教育等多行业，
              具备从品牌策略到视觉落地的全链路能力。
            </p>

            {/* 数据统计 */}
            <div className="exp-stats">
              {stats.map((stat, i) => (
                <div key={i} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* 时间线 */}
            <div className="exp-timeline">
              {timeline.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-body">
                    <h4>{item.title}</h4>
                    <div className="timeline-company">{item.company}</div>
                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
