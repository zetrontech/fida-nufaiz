import { wedding } from '../data/wedding'

export default function Monogram({ compact, light, className = '' }) {
  const cls = ['monogram', compact && 'monogram-compact', light && 'monogram-light', className]
    .filter(Boolean)
    .join(' ')
  return (
    <span className={cls} aria-label={`${wedding.bride.initial} and ${wedding.groom.initial}`}>
      <span>{wedding.bride.initial}</span>
      <i>×</i>
      <span>{wedding.groom.initial}</span>
    </span>
  )
}
