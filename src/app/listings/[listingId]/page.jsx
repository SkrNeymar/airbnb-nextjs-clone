import getCurrentUser from "@/actions/getCurrentUser"
import getListingById from "@/actions/getListingById"
import EmptyState from "@/components/EmptyState"
import ListingClient from "./ListingClient"
import getReservations from "@/actions/getReservations"

const ListingPage = async ({ params }) => {
  const listing = await getListingById(params)
  const currentUser = await getCurrentUser()
  const reservations = await getReservations(params)

  if (!listing || listing === null) {
    return (
      <EmptyState
        title="No Result Found"
        subtitle="Please check your query and try again."
        showReset
        showResetLabel="Back to Home"
      />
    )
  }

  return (
    <ListingClient
      listing={listing}
      currentUser={currentUser}
      reservations={reservations}
    />
  )
}

export default ListingPage
