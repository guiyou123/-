const skills = [
  '品牌视觉全案',
  'AI内容生产',
  '视频全链路',
  '摄影剪辑',
  '医疗行业',
  'VI系统设计',
]

const keyNumbers = [
  { number: '7+', label: '年视觉设计与品牌营销经验', sub: '个人经历' },
  { number: '50+', label: '服务品牌与项目', sub: '项目经验' },
  { number: '10+', label: '行业客户覆盖', sub: '客户资源' },
  { number: '40-50%', label: 'AI辅助设计与内容周期缩短', sub: '效率提升' },
]

export default function Profile() {
  return (
    <section className="profile" id="profile">
      <div className="container">
        {/* 模块编号标题 */}
        <div className="module-header">
          <span className="module-num">01</span>
          <span className="module-label">/ PROFILE</span>
        </div>

        <div className="profile-inner">
          {/* 左侧头像 */}
          <div className="profile-portrait">
            <div className="portrait-frame">
              <img src="/avatar.jpg" alt="侯贵有" loading="lazy" />
            </div>
            <div className="portrait-meta">
              <div className="portrait-name">侯贵有</div>
              <div className="portrait-role">视觉设计师 / AI设计师 / 品牌设计师</div>
            </div>
          </div>

          {/* 右侧内容 */}
          <div className="profile-content">
            <h2 className="profile-title">
              全链路视觉设计与品牌内容生产者
            </h2>
            <p className="profile-text">
              大连工业大学视觉传达专业毕业，7年视觉设计与品牌营销从业经历。
              现任莱恩医疗品牌宣传专员兼视觉负责人，兼顾摄影、剪辑与品牌策划。
              熟练结合AI工具赋能内容生产，可独立完成宣传片从策划到成片的完整项目交付。
              过往服务辉瑞、晖致医药、斯凯孚、一汽解放等知名客户，覆盖医药、制造、快消、教育等多行业。
            </p>

            {/* 技能标签 */}
            <div className="profile-skills">
              {skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>

            {/* 核心数据 */}
            <div className="profile-numbers">
              {keyNumbers.map((item, i) => (
                <div key={i} className="number-item">
                  <div className="number-value">{item.number}</div>
                  <div className="number-label">{item.label}</div>
                  <div className="number-sub">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
