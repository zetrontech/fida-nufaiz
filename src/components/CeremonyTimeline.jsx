import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { CalendarDays, Clock3, MapPin } from './Icons'
import { wedding as w } from '../data/wedding'

const events = [
  {
    eyebrow: 'A SACRED PROMISE',
    title: 'The Nikah',
    description:
      'With faith in our hearts and our families beside us, we begin our life together in the grace of Allah.',
    date: `${w.day}, ${w.displayDate}`,
    time: w.nikah.time,
  },
  {
    eyebrow: 'A JOYFUL GATHERING',
    title: w.reception.title,
    description:
      'Please join us right after the Nikah as our families gather to celebrate, share a meal and welcome this new beginning.',
    date: w.reception.date,
    time: w.reception.time,
  },
]

export default function CeremonyTimeline() {
  return (
    <section className="day-section ceremony-details section-pad" aria-labelledby="day-title">
      <div className="section-inner ceremony-inner">
        <SectionLabel text="WEDDING DETAILS" light />
        <Reveal as="header" className="ceremony-heading">
          <div>
            <p>THE DAY</p>
            <span>Two gatherings, one beautiful beginning.</span>
          </div>
          <h2 id="day-title">
            <span>Wedding</span>
            <em>Ceremony</em>
          </h2>
        </Reveal>
        <Reveal as="figure" className="ceremony-photo" delay="80ms">
          <img src="/images/nikkah-ceremony-hands.webp" alt="A bride and groom holding hands above their Nikah contract" />
          <figcaption>{w.numericDate}</figcaption>
        </Reveal>
        <div className="ceremony-events" aria-label="Wedding event details">
          {events.map((e, i) => (
            <Reveal as="article" key={e.title} className="ceremony-event" delay={`${120 + i * 100}ms`}>
              <p className="ceremony-eyebrow">{e.eyebrow}</p>
              <h3>{e.title}</h3>
              <p className="ceremony-description">{e.description}</p>
              <dl className="event-facts">
                <div>
                  <dt>
                    <CalendarDays size={19} strokeWidth={1.25} />
                    <span className="sr-only">Date</span>
                  </dt>
                  <dd>{e.date}</dd>
                </div>
                <div>
                  <dt>
                    <Clock3 size={19} strokeWidth={1.25} />
                    <span className="sr-only">Time</span>
                  </dt>
                  <dd>{e.time}</dd>
                </div>
                <div>
                  <dt>
                    <MapPin size={19} strokeWidth={1.25} />
                    <span className="sr-only">Venue</span>
                  </dt>
                  <dd>
                    <strong>{w.venue.name}</strong>
                    <span>{w.venue.city}</span>
                  </dd>
                </div>
              </dl>
              <a className="ceremony-map-link" href={w.venue.mapUrl} target="_blank" rel="noopener">
                <MapPin size={17} strokeWidth={1.25} aria-hidden="true" /> Open in Maps <span aria-hidden="true">↗</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
