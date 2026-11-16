import { useEffect, useRef } from 'react'
import Monogram from './Monogram'
import { wedding as w } from '../data/wedding'

const COUPLE_MOBILE = '/images/save-the-date-couple.webp'

export default function SaveTheDateInteractive({ children }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    let frame = 0
    let last = -1

    function update() {
      frame = 0
      if (!el) return
      const rect = el.getBoundingClientRect()
      const travel = Math.max(el.offsetHeight - window.innerHeight, 1)
      const range = Math.min(travel, Math.max(window.innerHeight * 0.55, 1))
      const progress = Math.min(1, Math.max(0, -rect.top / range))
      if (Math.abs(progress - last) < 0.002) return
      last = progress
      el.style.setProperty('--split-progress', progress.toFixed(3))
      el.classList.toggle('is-revealed', progress >= 0.999)
    }
    function schedule() {
      frame ||= requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={sectionRef} className="save-date">
      <section className="save-date-sticky" aria-labelledby="save-date-title">
        <div className="date-reveal">
          <picture aria-hidden="true">
            <source media="(max-width: 700px)" srcSet={COUPLE_MOBILE} />
            <img className="date-reveal-bg" src="/images/save-the-date-couple-desktop.webp" alt="" />
          </picture>
          <div className="date-reveal-shade" aria-hidden="true" />
          <div className="date-caption">SAVE THE DATE</div>
          <div className="date-main">
            <strong id="save-date-title">{w.dayNumber}</strong>
            <div>
              <span>{w.month.toUpperCase()}</span>
              <em>{w.year}</em>
            </div>
          </div>
          <div className="date-meta">
            <span>{w.day}</span>
            <i />
            <span>{w.time}</span>
          </div>
          <p>TWO LIVES · ONE BEGINNING</p>
        </div>
        <div className="split-panel split-left">
          <span>{w.bride.label}</span>
          <small>THE BRIDE</small>
        </div>
        <div className="split-panel split-right">
          <span>{w.groom.label}</span>
          <small>THE GROOM</small>
        </div>
        <div className="split-monogram">
          <Monogram light />
        </div>
        <div className="split-scroll">
          CONTINUE TO REVEAL <i />
        </div>
      </section>
      <div className="save-date-scroll-space" aria-hidden="true" />
      {children}
    </div>
  )
}
