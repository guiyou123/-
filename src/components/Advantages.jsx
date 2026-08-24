const capabilities = [
  {
    num: '01',
    title: 'AI驱动内容生产',
    desc: '精通文生图、图生视频、AI配音、AI脚本与文案生成全流程，掌握提示词工程，可独立完成从创意到成品的AI营销物料制作。',
  },
  {
    num: '02',
    title: 'AI+实拍视频全链路',
    desc: '兼具摄影师与剪辑师能力，能将AI生成视频、AI配音与实地拍摄素材融合，独立完成宣传片从策划、拍摄到后期剪辑调色的全流程。',
  },
  {
    num: '03',
    title: '品牌视觉全案设计',
    desc: '7年平面设计功底，精通PS/AI/PR/SAI，熟悉印刷工艺与落地执行。具备VI系统、海报、画册、物料、网站视觉等全案设计能力。',
  },
  {
    num: '04',
    title: '医疗行业深度认知',
    desc: '深耕医疗器械行业，熟悉消毒供应中心（CSSD）、蛋白残留检测、医疗清洗技术等专业领域，能将技术语言转化为高转化营销内容。',
  },
  {
    num: '05',
    title: '全链路品牌操盘',
    desc: '覆盖品牌策略、文案撰写、平面设计、视频制作、展会营销，可独立完成从0到1的新品发布营销全案，同时统筹多个项目并行推进。',
  },
  {
    num: '06',
    title: '结构化高效产出',
    desc: '习惯以JSON、对照表、带目录文档等结构化方式输出内容，注重素材来源管理与可追溯性，确保项目高效有序推进。',
  },
]

export default function Advantages() {
  return (
    <section className="advantages" id="advantages">
      <div className="container">
        <div className="capabilities-list">
          {capabilities.map((item, index) => (
            <div key={index} className="capability-item">
              <div className="capability-left">
                <span className="capability-num">{item.num}</span>
              </div>
              <div className="capability-right">
                <h3 className="capability-title">{item.title}</h3>
                <p className="capability-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
