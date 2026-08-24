const timeline = [
  {
    num: '01',
    period: '2023.06 — 至今',
    company: '莱恩医疗 Lion Medical',
    brand: '大连工厂',
    title: '品牌宣传专员 / 视觉负责人',
    desc: '主导V-Check微检产品线全球营销，连续三届学术会议新品发布全案，独立完成工厂宣传片制作，建立易博士品牌视觉规范。',
    tags: ['品牌全案', '学术会议', '视频制作', 'AI内容'],
    result: '独立完成工厂宣传片，建立品牌视觉规范',
    image: '/experience/lion-medical.jpg',
  },
  {
    num: '02',
    period: '2022.05 — 2023.05',
    company: '大连硕泰科技教育',
    brand: '硕泰教育',
    title: '网络运营主管',
    desc: '负责考研机构网络宣传运营，统筹媒体广告投放优化、品宣物料、招生手册、新媒体内容策划与设计。',
    tags: ['新媒体运营', '广告投放', '招生物料'],
    result: '统筹全渠道品宣与招生内容',
    image: '/experience/shuotai.jpg',
  },
  {
    num: '03',
    period: '2018.07 — 2022.04',
    company: '大连领科外企服务',
    brand: '领科设计',
    title: '设计专员',
    desc: '服务辉瑞、晖致医药、斯凯孚、一汽等客户，负责海报、物料、VI、手绘、网站搭建、微信推文设计。',
    tags: ['VI设计', '海报物料', '品牌服务', '印刷落地'],
    result: '获晖致医药2022年度最佳合作伙伴',
    image: '/experience/lingke.jpg',
  },
]

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        {/* 模块编号标题 */}
        <div className="module-header">
          <span className="module-num">02</span>
          <span className="module-label">/ EXPERIENCE</span>
          <h2 className="module-title">工作经历</h2>
        </div>

        <div className="exp-cards">
          {timeline.map((item, i) => (
            <div key={i} className="exp-card">
              {/* 右侧背景图 */}
              <div className="exp-card-image">
                {item.image ? (
                  <img src={item.image} alt={item.company} loading="lazy" />
                ) : (
                  <div className="exp-card-placeholder">
                    <span>{item.num}</span>
                  </div>
                )}
                <div className="exp-card-overlay" />
              </div>

              {/* 左侧内容 */}
              <div className="exp-card-content">
                <div className="exp-card-top">
                  <span className="exp-card-num">{item.num}</span>
                  <span className="exp-card-company">{item.company}</span>
                </div>

                <h3 className="exp-card-brand">{item.brand}</h3>

                <div className="exp-card-meta">
                  <span className="exp-card-title">{item.title}</span>
                  <span className="exp-card-period">{item.period}</span>
                </div>

                <p className="exp-card-desc">{item.desc}</p>

                <div className="exp-card-result">
                  <span className="result-label">代表成果</span>
                  <span className="result-text">{item.result}</span>
                </div>

                <div className="exp-card-tags">
                  {item.tags.map((tag, j) => (
                    <span key={j} className="exp-card-tag">{tag}</span>
                  ))}
                </div>
              </div>

              {/* 右下角查看链接 */}
              <div className="exp-card-more">
                <span>查看详细经历 →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
