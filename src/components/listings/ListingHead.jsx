"use client"
import useCountries from "@/hooks/useCountries"
import Heading from "@/components/Heading"
import Image from "next/image"
import HeartButton from "@/components/HeartButton"

const ListingHead = (props) => {
  const { title, imageSrc, locationValue, id, currentUser } = props
  const { getByValue } = useCountries()
  const location = getByValue(locationValue)

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div className="w-full md:h-[60vh] h-[30vh] overflow-hidden rounded-xl relative">
        <Image
          alt="Image"
          src={imageSrc}
          fill
          className="object-cover w-full"
        />
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  )
}

export default ListingHead
