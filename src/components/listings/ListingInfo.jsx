"use client"

import useCountries from "@/hooks/useCountries"
import Avatar from "@/components/Avatar"
import ListingCategory from "@/components/listings/ListingCategory"

const ListingInfo = (props) => {
  const {
    user,
    category,
    description,
    roomCount,
    guestCount,
    bathroomCount,
    locationValue,
  } = props
  const { getByValue } = useCountries()

  const coordinates = getByValue(locationValue)?.latlng

  return (
    <div className="flex flex-col col-span-4 gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2 text-xl font-semibold ">
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.avatar} />
        </div>
        <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
          <div>{guestCount} guests</div>
          <div>{roomCount} rooms</div>
          <div>{bathroomCount} bathrooms</div>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category?.label}
          description={category?.description}
        />
      )}
      <hr />
      <div className="text-lg font-light text-neutral-500">{description}</div>
      <hr />
    </div>
  )
}

export default ListingInfo
