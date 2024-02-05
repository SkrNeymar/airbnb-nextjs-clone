"use client"

import Container from "@/components/Container"
import Heading from "@/components/Heading"
import axios from "axios"
import { set } from "date-fns"
import { useRouter } from "next/navigation"
import { useCallback, useState } from "react"
import toast from "react-hot-toast"
import ListingCard from "@/components/listings/ListingCard"

const ReservationsClient = (props) => {
  const { reservations, currentUser } = props
  const router = useRouter()
  const [deletingId, setDeletingId] = useState("")

  const onCancel = useCallback((id) => {
    setDeletingId(id)

    axios
      .delete(`/api/reservations/${id}`)
      .then(() => {
        toast.success("Reservation cancelled")
        router.refresh()
      })
      .catch(() => {
        toast.error("Something went wrong")
      })
      .finally(() => {
        setDeletingId("")
      })
  }, [])

  return (
    <Container>
      <Heading title="Reservations" subtitle="Booking on your properties" />
      <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {reservations.map((reservation) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel="Cancel guest reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  )
}

export default ReservationsClient
