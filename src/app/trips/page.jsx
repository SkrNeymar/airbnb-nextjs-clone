import EmptyState from "@/components/EmptyState"
import getCurrentUser from "@/actions/getCurrentUser"
import getReservations from "@/actions/getReservations"
import TripsClient from "@/app/trips/TripsClient"

const TripsPage = async () => {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please Login" />
  }

  const reservations = await getReservations({
    userId: currentUser.id,
  })

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No trips found"
        subtitle="Looks like you haven't reserved any trips"
      />
    )
  }

  return <TripsClient reservations={reservations} currentUser={currentUser} />
}

export default TripsPage
