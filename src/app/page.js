import getCurrentUser from "@/actions/getCurrentUser"
import getListings from "@/actions/getListings"
import Container from "@/components/Container"
import EmptyState from "@/components/EmptyState"
import ListingCard from "@/components/listings/ListingCard"

const Home = async ({ searchParams }) => {
  const listings = await getListings(searchParams)
  const currentUser = await getCurrentUser()

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No exact matches"
        subtitle="Try changing or removing some of your filters"
        showReset
        showResetLabel="Remove all filters"
      />
    )
  }

  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 pt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {listings.map((listing) => {
          return (
            <ListingCard
              key={listing.id}
              data={listing}
              currentUser={currentUser}
            />
          )
        })}
      </div>
    </Container>
  )
}

export default Home
