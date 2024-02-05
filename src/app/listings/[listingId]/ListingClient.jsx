"use client"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import Container from "@/components/Container"
import { categories } from "@/components/navbar/Categories"
import ListingHead from "@/components/listings/ListingHead"
import ListingInfo from "@/components/listings/ListingInfo"
import ListingReservation from "@/components/listings/ListingReservation"
import useLoginModal from "@/hooks/useLoginModal"
import axios from "axios"
import toast from "react-hot-toast"
import { differenceInCalendarDays, eachDayOfInterval, set } from "date-fns"

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
}

const ListingClient = (props) => {
  const { reservations = [], listing, currentUser } = props

  const category = useMemo(() => {
    return categories.find((category) => category.label === listing.category)
  }, [listing.category])

  const loginModal = useLoginModal()
  const router = useRouter()

  const disabledDates = useMemo(() => {
    let dates = []

    reservations.forEach((reservation) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate),
      })

      dates = [...dates, ...range]
    })

    return dates
  }, [reservations])

  const [isLoading, setIsLoading] = useState(false)
  const [totalPrice, setTotalPrice] = useState(listing.price)
  const [dateRange, setDateRange] = useState(initialDateRange)
  const [dayCount, setDayCount] = useState(1)

  const onCreateReservation = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen()
    }

    setIsLoading(true)

    axios
      .post("/api/reservations", {
        listingId: listing?.id,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
        totalPrice,
      })
      .then(() => {
        toast.success("Reservation created successfully")
        setDateRange(initialDateRange)
        router.push("/trips")
      })
      .catch(() => {
        toast.error("Something went wrong")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [totalPrice, dateRange, listing, currentUser, loginModal, router])

  // Calculate the total price
  useEffect(() => {
    let count = 1
    if (dateRange.startDate && dateRange.endDate) {
      count = differenceInCalendarDays(dateRange.endDate, dateRange.startDate)
    }

    setDayCount(count)

    if (count && listing.price) {
      setTotalPrice(count * listing.price)
    } else {
      setTotalPrice(listing.price)
    }
  }, [dateRange, listing.price])

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
          <div className="grid grid-cols-1 mt-6 md:grid-cols-7 md:gap-10">
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              guestCount={listing.guestCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.locationValue}
            />
            <div className="order-first mb-10 md:order-last md:col-span-3">
              <ListingReservation
                price={listing.price}
                dayCount={dayCount}
                totalPrice={totalPrice}
                onChangeDate={(value) => setDateRange(value)}
                dateRange={dateRange}
                onSubmit={onCreateReservation}
                disabled={isLoading}
                disabledDates={disabledDates}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ListingClient
