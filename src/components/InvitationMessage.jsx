import Reveal from './Reveal'
import SectionLabel from './SectionLabel'

const mobileLines = [
  { words: ['With', 'joyful', 'hearts,'], start: 0 },
  { words: ['we', 'invite', 'you', 'to', 'join', 'us', 'as', 'we', 'celebrate', 'a', 'beautiful', 'beginning'], start: 3 },
  { words: ['and', 'the', 'promise', 'of', 'a', 'lifetime', 'together.'], start: 15, emphasis: true },
]
const desktopLines = [
  { words: ['With', 'joyful', 'hearts,', 'we', 'invite', 'you'], start: 0 },
  { words: ['to', 'join', 'us', 'as', 'we', 'celebrate', 'a'], start: 6 },
  { words: ['beautiful', 'beginning', 'and', 'the'], start: 13 },
  { words: ['promise', 'of', 'a', 'lifetime', 'together.'], start: 17 },
]

const Words = ({ line }) =>
  line.words.map((word, i) => (
    <span key={i} className="message-word" style={{ '--word-delay': `${(line.start + i) * 160}ms` }}>
      {word}
    </span>
  ))

export default function InvitationMessage() {
  return (
    <section id="the-invitation" className="invitation-message section-pad" aria-labelledby="invitation-message-title">
      <Reveal as="img" className="message-arch" src="/images/islamic-arch-line-art.webp" alt="" aria-hidden="true" />
      <img className="message-arch message-arch-secondary" src="/images/islamic-arch-line-art.webp" alt="" aria-hidden="true" />

      <div className="message-desktop-layout">
        <SectionLabel text="THE INVITATION" light />
        <div className="message-desktop-copy">
          <span className="message-desktop-mark" aria-hidden="true">“</span>
          <Reveal as="h2" id="invitation-message-title">
            {desktopLines.map((line, i) => (
              <span key={i} className="message-desktop-line">
                <Words line={line} />
              </span>
            ))}
          </Reveal>
          <p>
            Your presence and prayers will make
            <br />
            our Nikah celebration complete.
          </p>
        </div>
      </div>

      <div className="section-inner message-grid message-mobile-layout">
        <SectionLabel text="THE INVITATION" light />
        <div className="message-copy">
          <span className="message-mark" aria-hidden="true">“</span>
          <Reveal as="h2">
            {mobileLines.map((line, i) => (
              <span key={i} className={`message-line${line.emphasis ? ' message-line-emphasis' : ''}`}>
                <Words line={line} />
              </span>
            ))}
          </Reveal>
          <Reveal className="message-foot" delay="340ms">
            <span />
            <p>
              Your presence and prayers will make
              <br />
              our Nikah celebration complete.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
