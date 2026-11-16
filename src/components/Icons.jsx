const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}
const Icon = ({ size = 24, strokeWidth = 2, children, ...rest }) => (
  <svg {...base} width={size} height={size} strokeWidth={strokeWidth} className="lucide" {...rest}>
    {children}
  </svg>
)

export const CalendarDays = (p) => (
  <Icon {...p}>
    <path d="M8 2v3" /><path d="M16 2v3" />
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
    <path d="M8 13h.01" /><path d="M12 13h.01" /><path d="M16 13h.01" />
    <path d="M8 17h.01" /><path d="M12 17h.01" /><path d="M16 17h.01" />
  </Icon>
)
export const CalendarPlus = (p) => (
  <Icon {...p}>
    <path d="M16 18h6" /><path d="M16 2v3" /><path d="M19 15v6" />
    <path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3" />
    <path d="M3 9h18" /><path d="M8 2v3" />
  </Icon>
)
export const Clock3 = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6h4" />
  </Icon>
)
export const MapPin = (p) => (
  <Icon {...p}>
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </Icon>
)
export const Share2 = (p) => (
  <Icon {...p}>
    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
  </Icon>
)
