import { useEffect } from 'react'
import { gsap, ScrollTrigger } from '../animations'

export default function ScrollAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      // ===== 模块标题进场（批量处理所有 section）=====
      document.querySelectorAll('section').forEach(section => {
        const label = section.querySelector('.section-label')
        const title = section.querySelector('.section-title')

        if (label) {
          gsap.fromTo(label,
            { opacity: 0, x: -24 },
            {
              opacity: 1, x: 0, duration: 0.7, ease: 'power4.out',
              scrollTrigger: { trigger: section, start: 'top 82%' },
            }
          )
        }
        if (title) {
          gsap.fromTo(title,
            { opacity: 0, y: 50, letterSpacing: '0.12em' },
            {
              opacity: 1, y: 0, letterSpacing: '-1px',
              duration: 1.1, ease: 'expo.out',
              scrollTrigger: { trigger: section, start: 'top 80%' },
            }
          )
        }
      })

      // ===== 卡片 stagger 进场（统一函数）=====
      const staggerCards = (selector, trigger) => {
        const cards = document.querySelectorAll(selector)
        if (!cards.length) return
        gsap.fromTo(cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power4.out',
            scrollTrigger: { trigger, start: 'top 75%' },
          }
        )
      }

      staggerCards('#projects .project-card-glow', '#projects')
      staggerCards('#advantages .advantage-card', '#advantages')
      staggerCards('#gallery .accordion-item', '#gallery')

      // ===== 个人经历：左右对称进场 =====
      const exp = document.getElementById('experience')
      if (exp) {
        const portrait = exp.querySelector('.exp-portrait')
        const content = exp.querySelector('.exp-content')
        if (portrait) {
          gsap.fromTo(portrait,
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 1.1, ease: 'power4.out',
              scrollTrigger: { trigger: exp, start: 'top 75%' } }
          )
        }
        if (content) {
          gsap.fromTo(content,
            { opacity: 0, x: 30 },
            { opacity: 1, x: 0, duration: 1.1, ease: 'power4.out',
              scrollTrigger: { trigger: exp, start: 'top 75%' } }
          )
        }
      }

      // ===== 联系页内容 stagger =====
      const contact = document.getElementById('contact')
      if (contact) {
        const children = contact.querySelectorAll('.contact-content > *')
        if (children.length) {
          gsap.fromTo(children,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power4.out',
              scrollTrigger: { trigger: contact, start: 'top 70%' } }
          )
        }
      }

      // ===== 图片 reveal（批量处理，一个触发器 per 元素但用统一设置）=====
      document.querySelectorAll('.project-image, .exp-portrait, .accordion-cover').forEach(el => {
        const img = el.querySelector('img')
        if (!img) return
        gsap.set(el, { clipPath: 'inset(0 0 100% 0)' })
        gsap.to(el, {
          clipPath: 'inset(0 0 0% 0)',
          duration: 1.1, ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        })
        gsap.fromTo(img,
          { scale: 1.12 },
          { scale: 1, duration: 1.4, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' } }
        )
      })

      // ===== Hero parallax（scrub 动画，轻量）=====
      const hero = document.getElementById('hero')
      if (hero) {
        const video = hero.querySelector('.hero-video')
        const grainient = hero.querySelector('.hero-grainient')
        if (video) {
          gsap.to(video, {
            yPercent: 12, ease: 'none',
            scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
          })
        }
        if (grainient) {
          gsap.to(grainient, {
            yPercent: 8, ease: 'none',
            scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
          })
        }
      }

    })

    ScrollTrigger.refresh()

    return () => ctx.revert()
  }, [])

  return null
}
