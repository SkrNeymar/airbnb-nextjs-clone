"use client"

const ListingCategory = (props) => {
  const { icon: Icon, label, description } = props
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <Icon className="text-neutral-600" size={40} />
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{label}</div>
          <div className="font-light text-neutral-500">{description}</div>
        </div>
      </div>
    </div>
  )
}

export default ListingCategory
