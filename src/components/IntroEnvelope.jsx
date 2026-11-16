import { useState } from 'react'
import { wedding } from '../data/wedding'

const HERO_MOBILE = '/images/nikkah-hero-couple-mobile.webp'

export default function IntroEnvelope({ onOpen, onComplete, onPointerDown }) {
  const [opening, setOpening] = useState(false)

  function open() {
    if (opening) return
    setOpening(true)
    onOpen?.()
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const desktop = window.matchMedia('(min-width: 701px)').matches
    window.setTimeout(() => onComplete?.(), reduced ? 250 : desktop ? 3750 : 3300)
  }

  return (
    <section
      className={`intro${opening ? ' is-opening' : ''}`}
      aria-label="Wedding invitation envelope"
      onPointerDown={onPointerDown}
    >
      <img className="intro-botanical intro-botanical-left" src="/images/botanical-line-art.webp" alt="" aria-hidden="true" />
      <img className="intro-botanical intro-botanical-right" src="/images/botanical-line-art.webp" alt="" aria-hidden="true" />
      <div className="intro-corner intro-corner-top">THE NIKAH · 2026</div>
      <div className="intro-corner intro-corner-bottom">
        {wedding.bride.label} &amp; {wedding.groom.label}
      </div>
      <button
        className="envelope-trigger"
        type="button"
        disabled={opening}
        aria-label={`Open ${wedding.bride.name} and ${wedding.groom.name}'s Nikah invitation`}
        onClick={open}
      >
        <span className="envelope-stage" aria-hidden="true">
          <picture className="envelope-reveal">
            <source media="(max-width: 700px)" srcSet={HERO_MOBILE} />
            <img src="/images/desktop-hero.webp" alt="" />
          </picture>
          <span className="envelope-reveal-shade" />
          <span className="desktop-envelope-group">
            <span className="desktop-envelope-body" />
            <span className="desktop-envelope-flap" />
            <span className="envelope-seal desktop-envelope-seal">
              <img src="/images/wedding-rings-wax-seal-v1.webp" alt="" />
            </span>
          </span>
          <span className="envelope-left-group">
            <span className="envelope-left-edge" />
            <span className="envelope-flap envelope-flap-top" />
            <span className="envelope-flap envelope-flap-left" />
            <span className="envelope-flap envelope-flap-bottom" />
          </span>
          <span className="envelope-right-group">
            <span className="envelope-flap-edge" />
            <span className="envelope-flap envelope-flap-right" />
            <span className="envelope-seal">
              <img src="/images/wedding-rings-wax-seal-v1.webp" alt="" />
            </span>
          </span>
          <span className="envelope-reveal-copy">
            <small>THE NIKAH OF</small>
            <strong>
              {wedding.bride.name} <i>&amp;</i> {wedding.groom.name}
            </strong>
            <span>{wedding.numericDate}</span>
          </span>
          <span className="envelope-instruction">
            <small>WEDDING INVITATION</small>
            <span className="instruction-desktop">Click the seal to open</span>
            <span className="instruction-mobile">Tap the seal to open</span>
          </span>
        </span>
      </button>
    </section>
  )
}
