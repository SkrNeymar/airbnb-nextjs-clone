"use client"

import Container from "@/components/Container"
import Heading from "@/components/Heading"
import ListingCard from "@/components/listings/ListingCard"

const FavoritesClient = (props) => {
  const { listings, currentUser } = props
  return (
    <Container>
      <Heading
        title="Favorites"
        subtitle="List of places you have favorited!"
      />
      <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {listings.map((listings) => (
          <ListingCard
            currentUser={currentUser}
            key={listings.id}
            data={listings}
          />
        ))}
      </div>
    </Container>
  )
}

export default FavoritesClient
