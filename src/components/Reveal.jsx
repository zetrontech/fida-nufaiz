import { useEffect, useRef, useState } from 'react'

// React port of the reference site's v-reveal directive (IntersectionObserver, one-shot).
export default function Reveal({ as: Tag = 'div', delay, className = '', style, children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`${className} reveal${shown ? ' is-revealed' : ''}`.trim()}
      style={delay ? { ...style, '--reveal-delay': delay } : style}
      {...rest}
    >
      {children}
    </Tag>
  )
}
