export default function SectionLabel({ index = '', text, light }) {
  return (
    <div className={`section-label${light ? ' section-label-light' : ''}`}>
      {index ? <span className="section-label-index">{index}</span> : null}
      <span className="section-label-line" aria-hidden="true" />
      <span>{text}</span>
    </div>
  )
}
