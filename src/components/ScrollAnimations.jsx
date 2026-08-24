import { useEffect } from 'react'
import { gsap, ScrollTrigger } from '../animations'

export default function ScrollAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      // ===== 模块编号标题进场 =====
      document.querySelectorAll('.module-header').forEach(header => {
        const section = header.closest('section')
        gsap.fromTo(header,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power4.out',
            scrollTrigger: { trigger: section, start: 'top 82%' },
          }
        )
      })

      // ===== 列表项 stagger 进场 =====
      const staggerItems = (selector, trigger) => {
        const items = document.querySelectorAll(selector)
        if (!items.length) return
        gsap.fromTo(items,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power4.out',
            scrollTrigger: { trigger, start: 'top 78%' },
          }
        )
      }

      staggerItems('#experience .exp-card', '#experience')
      staggerItems('#projects .project-card', '#projects')
      staggerItems('#advantages .capability-item', '#advantages')
      staggerItems('#gallery .accordion-item', '#gallery')
      staggerItems('.workflow-step', '#ai-workflow')

      // ===== Profile 左右进场 =====
      const profile = document.getElementById('profile')
      if (profile) {
        const portrait = profile.querySelector('.profile-portrait')
        const content = profile.querySelector('.profile-content')
        if (portrait) {
          gsap.fromTo(portrait,
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 1, ease: 'power4.out',
              scrollTrigger: { trigger: profile, start: 'top 75%' } }
          )
        }
        if (content) {
          gsap.fromTo(content,
            { opacity: 0, x: 30 },
            { opacity: 1, x: 0, duration: 1, ease: 'power4.out',
              scrollTrigger: { trigger: profile, start: 'top 75%' } }
          )
        }
      }

      // ===== 数据数字进场 =====
      document.querySelectorAll('.number-item, .project-mag-metric').forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        )
      })

      // ===== 联系页内容 stagger =====
      const contact = document.getElementById('contact')
      if (contact) {
        const children = contact.querySelectorAll('.contact-inner > *')
        if (children.length) {
          gsap.fromTo(children,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power4.out',
              scrollTrigger: { trigger: contact, start: 'top 70%' } }
          )
        }
      }

      // ===== 头像 reveal =====
      document.querySelectorAll('.portrait-frame').forEach(el => {
        const img = el.querySelector('img')
        if (!img) return
        gsap.set(el, { clipPath: 'inset(0 0 100% 0)' })
        gsap.to(el, {
          clipPath: 'inset(0 0 0% 0)',
          duration: 1.1, ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        })
        gsap.fromTo(img,
          { scale: 1.1 },
          { scale: 1, duration: 1.4, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' } }
        )
      })

      // ===== Hero parallax =====
      const hero = document.getElementById('hero')
      if (hero) {
        const video = hero.querySelector('.hero-video')
        if (video) {
          gsap.to(video, {
            yPercent: 12, ease: 'none',
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
