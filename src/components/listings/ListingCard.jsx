"use client"
import useCountries from "@/hooks/useCountries"
import { useRouter } from "next/navigation"
import { useCallback, useMemo } from "react"
import { formate } from "date-fns"
import Image from "next/image"
import HeartButton from "@/components/HeartButton"
import Button from "@/components/Button"

const ListingCard = (props) => {
  const {
    data,
    reservation,
    onAction,
    disabled,
    actionLabel,
    actionId,
    currentUser,
  } = props
  const router = useRouter()
  const { getByValue } = useCountries()
  const location = getByValue(data.locationValue)

  const handleCancel = useCallback(
    (e) => {
      e.stopPropagation()

      if (disabled) {
        return
      }

      onAction?.(actionId)
    },
    [onAction, actionId, disabled]
  )

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice
    }

    return data.price
  }, [reservation, data.price])

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null
    }

    const startDate = new Date(reservation.startDate)
    const endDate = new Date(reservation.endDate)

    return `${format(startDate, "PP")} - ${format(endDate, "PP")}`
  }, [reservation])

  return (
    <div
      onClick={() => router.push(`/listings/{data.id}`)}
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col w-full gap-2">
        <div className="relative w-full overflow-hidden aspect-square rounded-xl">
          <Image
            fill
            alt="listing"
            src={data.imageSrc}
            className="object-cover w-full h-full transition group-hover:scale-110 group-hover:opacity-80"
          />
          <div className="absolute top-3 right-3">
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>
        <div className="text-lg font-semibold">
          {location?.region}, {location?.label}
        </div>
        <div className="font-light text-neutral-500">
          {reservationDate || data.category}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">$ {price}</div>
          {!reservation && <div className="font-light">night</div>}
        </div>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={handleCancel}
          />
        )}
      </div>
    </div>
  )
}

export default ListingCard
