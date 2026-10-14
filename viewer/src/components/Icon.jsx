export function Icon({ children, className = '' }) {
  return (
    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${className}`}>
      {children}
    </span>
  )
}
