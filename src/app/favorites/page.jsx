import EmptyState from "@/components/EmptyState"
import getFavoritesListings from "@/actions/getFavoritesListings"
import getCurrentUser from "@/actions/getCurrentUser"
import FavoritesClient from "@/app/favorites/FavoritesClient"

const ListingPage = async () => {
  const listings = await getFavoritesListings()
  const currentUser = await getCurrentUser()

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Looks like you have no favorite listings"
      />
    )
  }

  return <FavoritesClient listings={listings} currentUser={currentUser} />
}

export default ListingPage
