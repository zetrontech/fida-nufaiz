import { useState } from 'react'
import Reveal from './Reveal'
import Monogram from './Monogram'
import Credit from './Credit'
import { CalendarPlus, Share2 } from './Icons'
import { wedding as w, shareTitle } from '../data/wedding'

function icsEvent(uid, summary, start, end, description) {
  return [
    'BEGIN:VEVENT',
    `UID:${uid}@fida-nufaiz`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${summary}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${w.venue.name}\\, ${w.venue.city}`,
    'END:VEVENT',
  ].join('\r\n')
}

// One .ics with both events; works on every phone, unlike Google's render link for signed-out browsers.
function downloadCalendar() {
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Fida & Nufaiz//Nikah Invitation//EN',
    'CALSCALE:GREGORIAN',
    icsEvent('nikah', `${w.bride.name} & ${w.groom.name} — Nikah`, w.nikah.start, w.nikah.end, 'Join us as we celebrate our Nikah.'),
    icsEvent('reception', `${w.bride.name} & ${w.groom.name} — Wedding Reception`, w.reception.start, w.reception.end, 'Join us for the wedding reception.'),
    'END:VCALENDAR',
  ].join('\r\n')
  const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar;charset=utf-8' }))
  const a = document.createElement('a')
  a.href = url
  a.download = 'fida-nufaiz-nikah.ics'
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

export default function FinalInvitation() {
  const [status, setStatus] = useState('')

  async function share() {
    const data = {
      title: shareTitle,
      text: `Join us for our Nikah on ${w.displayDate} at ${w.venue.name}, ${w.venue.city}.`,
      url: window.location.href,
    }
    try {
      if (navigator.share) {
        await navigator.share(data)
        setStatus('Invitation shared')
      } else {
        await navigator.clipboard.writeText(window.location.href)
        setStatus('Invitation link copied')
      }
    } catch (e) {
      if (e?.name !== 'AbortError') setStatus('Share this page from your browser')
    }
    window.setTimeout(() => setStatus(''), 3000)
  }

  return (
    <footer className="final-section" aria-labelledby="final-title">
      <div className="final-photo-bg" aria-hidden="true" />
      <div className="final-inner">
        <header className="final-intro">
          <Reveal as="p" className="final-kicker">WITH JOY IN OUR HEARTS</Reveal>
          <Reveal as="h2" id="final-title" delay="80ms">
            <span className="final-title-lead">We can't wait</span>
            <span className="final-title-main">to celebrate</span>
            <em>with you.</em>
          </Reveal>
          <span className="final-intro-ornament" aria-hidden="true">
            <i />
            <b>✦</b>
            <i />
          </span>
        </header>
        <p className="sr-only">{w.bride.name} and {w.groom.name} walking hand in hand beneath an Islamic arch.</p>
        <Reveal as="p" className="final-copy" delay="140ms">
          Your presence, prayers and blessings will make this beginning all the more meaningful. We look forward to
          sharing the joy of our Nikah with you.
        </Reveal>
        <Reveal className="final-details" delay="160ms">
          <div className="final-names">
            <span>{w.bride.name}</span>
            <i>&amp;</i>
            <span>{w.groom.name}</span>
          </div>
          <p className="final-families">
            <span><b>{w.bride.fullName}</b>{w.bride.family}</span>
            <span><b>{w.groom.fullName}</b>{w.groom.family}</span>
            <span className="final-hosts">With love, {w.hostsFull}</span>
          </p>
          <p className="final-date">{w.dotDate}</p>
          <Monogram className="final-monogram" />
          <div className="final-actions">
            <button className="text-action" type="button" onClick={downloadCalendar}>
              <CalendarPlus size={16} strokeWidth={1.25} aria-hidden="true" /> Add to calendar
            </button>
            <button className="text-action" type="button" onClick={share}>
              <Share2 size={16} strokeWidth={1.25} aria-hidden="true" /> Share invitation
            </button>
          </div>
          <p className="share-status" role="status" aria-live="polite">{status}</p>
        </Reveal>
      </div>
      <div className="footer-line">
        <span>{w.bride.initial} × {w.groom.initial}</span>
        <span>{w.venue.city} · {w.year}</span>
        <span className="footer-credit">
          <Credit />
        </span>
      </div>
    </footer>
  )
}
