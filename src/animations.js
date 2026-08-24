import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// 高级缓动预设
export const EASE = {
  smooth: 'power4.out',
  expo: 'expo.out',
  soft: 'power3.out',
  inOut: 'power3.inOut',
}

// 首屏 Opening Animation
export function playHeroOpening(heroRef) {
  const tl = gsap.timeline({ defaults: { ease: EASE.smooth } })

  const root = heroRef.current
  if (!root) return

  // 遮罩层
  const mask = root.querySelector('.hero-mask')
  const eyebrow = root.querySelector('.hero-eyebrow')
  const titleLines = root.querySelectorAll('.hero-title .line-inner')
  const desc = root.querySelector('.hero-desc')
  const actions = root.querySelector('.hero-actions')
  const scroll = root.querySelector('.hero-scroll')

  // 初始状态
  gsap.set(titleLines, { yPercent: 110 })
  gsap.set(eyebrow, { opacity: 0, y: 20 })
  gsap.set(desc, { opacity: 0, y: 30 })
  gsap.set(actions, { opacity: 0, y: 20 })
  gsap.set(scroll, { opacity: 0 })

  // 时间线
  tl
    // 遮罩向上揭开
    .to(mask, {
      yPercent: -100,
      duration: 1.4,
      ease: EASE.expo,
    }, 0)
    .to(eyebrow, { opacity: 1, y: 0, duration: 0.8 }, 0.6)
    // 标题行从遮罩下方滑入
    .to(titleLines, {
      yPercent: 0,
      duration: 1.3,
      stagger: 0.12,
      ease: EASE.expo,
    }, 0.8)
    // 标题压缩后归位（scaleY 拉伸后恢复）
    .fromTo(titleLines,
      { scaleY: 1.2, scaleX: 0.9, transformOrigin: 'bottom' },
      { scaleY: 1, scaleX: 1, duration: 0.7, stagger: 0.1, ease: EASE.soft },
      1.1
    )
    .to(desc, { opacity: 1, y: 0, duration: 0.9 }, 1.6)
    .to(actions, { opacity: 1, y: 0, duration: 0.8 }, 1.9)
    .to(scroll, { opacity: 1, duration: 0.8 }, 2.2)

  return tl
}

// 模块标题进场动画
export function animateSectionTitle(trigger) {
  const label = trigger.querySelector('.section-label')
  const title = trigger.querySelector('.section-title')

  if (label) {
    gsap.fromTo(label,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: EASE.smooth,
        scrollTrigger: { trigger, start: 'top 80%' },
      }
    )
  }

  if (title) {
    gsap.fromTo(title,
      { opacity: 0, y: 60, letterSpacing: '0.15em' },
      {
        opacity: 1,
        y: 0,
        letterSpacing: '-1px',
        duration: 1.2,
        ease: EASE.expo,
        scrollTrigger: { trigger, start: 'top 78%' },
      }
    )
  }
}

// 卡片 stagger 进场
export function animateCardsStagger(trigger, cardSelector, options = {}) {
  const cards = trigger.querySelectorAll(cardSelector)
  if (!cards.length) return

  gsap.fromTo(cards,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.12,
      ease: EASE.smooth,
      scrollTrigger: {
        trigger,
        start: 'top 75%',
      },
      ...options,
    }
  )
}

// 图片 Reveal（clip-path 揭开）
export function animateImageReveal(trigger, imgSelector) {
  const images = trigger.querySelectorAll(imgSelector)
  if (!images.length) return

  images.forEach(img => {
    // 给图片包一层 reveal 容器
    const wrapper = img.parentElement
    if (!wrapper.classList.contains('reveal-wrap')) {
      wrapper.classList.add('reveal-wrap')
      gsap.set(wrapper, { clipPath: 'inset(0 0 100% 0)' })
    }

    gsap.to(wrapper, {
      clipPath: 'inset(0 0 0% 0)',
      duration: 1.2,
      ease: EASE.expo,
      scrollTrigger: {
        trigger: wrapper,
        start: 'top 85%',
      },
    })

    // 图片内部轻微放大
    gsap.fromTo(img,
      { scale: 1.15 },
      {
        scale: 1,
        duration: 1.5,
        ease: EASE.soft,
        scrollTrigger: {
          trigger: wrapper,
          start: 'top 85%',
        },
      }
    )
  })
}

// 轻微 Parallax
export function animateParallax(trigger, elementSelector, speed = 0.1) {
  const elements = trigger.querySelectorAll(elementSelector)
  elements.forEach(el => {
    gsap.to(el, {
      yPercent: -speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  })
}

// 手风琴项目进场
export function animateAccordionItems(trigger) {
  const items = trigger.querySelectorAll('.accordion-item')
  if (!items.length) return

  gsap.fromTo(items,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.06,
      ease: EASE.smooth,
      scrollTrigger: { trigger, start: 'top 80%' },
    }
  )
}

export { gsap, ScrollTrigger }
