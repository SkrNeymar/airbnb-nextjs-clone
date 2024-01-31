"use client"
const MenuItem = (props) => {
  const { onClick, label } = props
  return (
    <div
      className="px-4 py-3 font-semibold transition hover:bg-neutral-100"
      onClick={onClick}
    >
      {label}
    </div>
  )
}

export default MenuItem
