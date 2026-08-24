const workflow = [
  { num: '01', title: '需求拆解', desc: '明确项目目标、受众、传播渠道与核心卖点' },
  { num: '02', title: '脚本与文案', desc: 'AI辅助生成脚本框架，人工优化叙事逻辑与文案' },
  { num: '03', title: '视觉生成', desc: 'AI生成图片、视频、配音素材，提示词精准控制' },
  { num: '04', title: '人工筛选修正', desc: '设计判断、真实性审核、品牌调性校准与修正' },
  { num: '05', title: '整合交付', desc: '实拍素材融合、剪辑调色、最终成片与物料交付' },
]

export default function AIWorkflow() {
  return (
    <section className="ai-workflow" id="ai-workflow">
      <div className="container">
        {/* 模块编号标题 */}
        <div className="module-header">
          <span className="module-num">06</span>
          <span className="module-label">/ AI WORKFLOW</span>
        </div>

        <div className="ai-workflow-inner">
          <h2 className="ai-workflow-title">
            让创意更快进入<br />
            <span className="accent">真实决策。</span>
          </h2>
          <p className="ai-workflow-subtitle">
            AI负责加速表达，设计判断、品牌逻辑和真实性审核仍由人完成。
          </p>

          <div className="workflow-steps">
            {workflow.map((step, i) => (
              <div key={i} className="workflow-step">
                <span className="workflow-num">{step.num}</span>
                <h4 className="workflow-step-title">{step.title}</h4>
                <p className="workflow-step-desc">{step.desc}</p>
                {i < workflow.length - 1 && <span className="workflow-arrow">→</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
