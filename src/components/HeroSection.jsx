import Monogram from './Monogram'
import { wedding as w } from '../data/wedding'

const HERO_MOBILE = '/images/nikkah-hero-couple-mobile.webp'

export default function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <picture className="hero-background" aria-hidden="true">
        <source media="(max-width: 700px)" srcSet={HERO_MOBILE} />
        <img src="/images/desktop-hero.webp" alt="" />
      </picture>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-ghost" aria-hidden="true">NIKAH</div>

      <div className="hero-desktop-card hero-reveal hero-delay-2">
        <p className="hero-desktop-prayer">
          In the name of Allah
          <br />
          the Most Gracious and Merciful
        </p>
        <div className="hero-desktop-main">
          <p className="hero-desktop-overline">{w.hosts}</p>
          <h1 className="hero-desktop-title">
            <span>{w.bride.name}</span>
            <i>&amp;</i>
            <span>{w.groom.name}</span>
          </h1>
          <p className="hero-desktop-invite">
            Invite you to the Nikah
            <br />
            of their beloved daughter
          </p>
        </div>
        <div className="hero-desktop-date">
          <strong className="hero-desktop-day">{w.dayNumber}</strong>
          <i aria-hidden="true" />
          <span>
            <b>{w.day}</b>
            <b>{w.month}</b>
          </span>
          <i className="hero-desktop-year-rule" aria-hidden="true" />
          <strong className="hero-desktop-year">{w.year}</strong>
        </div>
      </div>

      <div className="hero-topline hero-reveal hero-delay-1">
        <Monogram compact />
        <p>
          In the name of Allah,
          <br />
          the Most Gracious and Merciful
        </p>
        <span>{w.numericDate}</span>
      </div>

      <div className="hero-composition">
        <div className="hero-kicker hero-reveal hero-delay-2">
          <span className="vertical-rule" />
          <span>
            A celebration
            <br />
            of faith &amp; love
          </span>
        </div>
        <div className="hero-title-wrap">
          <p className="hero-overline hero-reveal hero-delay-2">{w.hosts}</p>
          <h1 id="hero-title" className="hero-title">
            <span className="hero-name hero-reveal hero-delay-3">{w.bride.name}</span>
            <i className="hero-ampersand hero-reveal hero-delay-4">&amp;</i>
            <span className="hero-name hero-reveal hero-delay-5">{w.groom.name}</span>
          </h1>
          <p className="hero-invite hero-reveal hero-delay-6">
            invite you to the Nikah of their beloved daughter
          </p>
        </div>
        <div className="hero-date hero-reveal hero-delay-6">
          <span>{w.day}</span>
          <strong>{w.dayNumber}</strong>
          <span>
            {w.month} · {w.year}
          </span>
        </div>
      </div>

      <a className="scroll-cue hero-reveal hero-delay-6" href="#the-invitation" aria-label="Scroll to the invitation">
        <span>SCROLL</span>
        <i aria-hidden="true" />
      </a>
    </section>
  )
}
