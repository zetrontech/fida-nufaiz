import { wedding as w } from '../data/wedding'

export default function BlessingCard() {
  return (
    <section className="blessing-section" aria-labelledby="blessing-title">
      <h2 id="blessing-title" className="sr-only">A Prayer for Two</h2>
      <picture className="blessing-card-picture">
        <source media="(max-width: 700px)" srcSet="/invite.webp?v=fn" />
        <img
          className="blessing-card-image"
          src="/invite-desktop.webp?v=fn"
          alt={`A prayer for ${w.bride.name} and ${w.groom.name}: ${w.blessing.translation}`}
          loading="lazy"
          decoding="async"
        />
      </picture>
    </section>
  )
}
