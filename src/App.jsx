import { useEffect, useRef, useState } from 'react'
import IntroEnvelope from './components/IntroEnvelope'
import HeroSection from './components/HeroSection'
import InvitationMessage from './components/InvitationMessage'
import SaveTheDateInteractive from './components/SaveTheDateInteractive'
import CeremonyTimeline from './components/CeremonyTimeline'
import BlessingCard from './components/BlessingCard'
import FinalInvitation from './components/FinalInvitation'
import Monogram from './components/Monogram'

const PRELOAD = [
  '/images/intro-luxury-botanical-desktop.webp',
  '/images/envelope-charcoal-paper-v1.webp',
  '/images/wedding-rings-wax-seal-v1.webp',
  '/images/desktop-hero.webp',
  '/images/nikkah-hero-couple-mobile.webp',
  '/images/botanical-line-art.webp',
  '/images/islamic-arch-line-art.webp',
  '/images/ivory-paper-texture.jpg',
  '/images/save-the-date-couple-desktop.webp',
  '/images/save-the-date-couple.webp',
  '/images/nikkah-ceremony-hands.webp',
  '/invite-desktop.webp?v=fn',
  '/invite.webp?v=fn',
]

const loadImage = (src) =>
  new Promise((resolve) => {
    const img = new Image()
    img.onload = resolve
    img.onerror = resolve
    img.src = src
  })

export default function App() {
  const [complete, setComplete] = useState(false) // envelope animation finished
  const [opened, setOpened] = useState(false) // seal clicked
  const [ready, setReady] = useState(false) // images preloaded
  const [playing, setPlaying] = useState(false)
  const music = useRef(null)

  useEffect(() => {
    const onVisibility = () => {
      if (music.current) music.current.muted = document.hidden
    }
    document.addEventListener('visibilitychange', onVisibility)
    Promise.all(PRELOAD.map(loadImage)).then(() => setReady(true))
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('invitation-locked', !complete)
    return () => document.body.classList.remove('invitation-locked')
  }, [complete])

  async function startMusic() {
    const a = music.current
    if (!a || !a.paused) return
    a.volume = 0.72
    try {
      await a.play()
      setPlaying(true)
    } catch {
      setPlaying(false)
    }
  }

  async function toggleMusic() {
    const a = music.current
    if (!a) return
    if (a.paused) await startMusic()
    else {
      a.pause()
      setPlaying(false)
    }
  }

  return (
    <>
      {!ready && (
        <div className="site-loader" role="status" aria-live="polite">
          Loading...
        </div>
      )}
      <audio
        ref={music}
        className="invitation-music"
        loop
        preload="auto"
        playsInline
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src="/music-invitation.mp3" type="audio/mpeg" />
      </audio>

      {ready && !complete && (
        <IntroEnvelope
          onPointerDown={startMusic}
          onOpen={() => {
            setOpened(true)
            startMusic()
          }}
          onComplete={() => setComplete(true)}
        />
      )}

      <div className={`invitation-shell${opened || complete ? ' is-open' : ''}`} aria-hidden={!complete}>
        <a className="skip-link" href="#invitation-main">Skip to invitation</a>
        <div className="floating-mark" aria-hidden="true">
          <Monogram compact />
        </div>
        <button
          className="music-control"
          type="button"
          aria-label={playing ? 'Pause background music' : 'Play background music'}
          aria-pressed={playing}
          onClick={toggleMusic}
        >
          <span className={`music-bars${playing ? ' is-playing' : ''}`} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>
        <main id="invitation-main">
          <HeroSection />
          <InvitationMessage />
          <div className="illustrated-story">
            <SaveTheDateInteractive>
              <CeremonyTimeline />
            </SaveTheDateInteractive>
            <BlessingCard />
            <FinalInvitation />
          </div>
        </main>
      </div>
    </>
  )
}
