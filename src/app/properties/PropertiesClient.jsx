"use client"

import Container from "@/components/Container"
import Heading from "@/components/Heading"
import ListingCard from "@/components/listings/ListingCard"
import axios from "axios"
import { id } from "date-fns/locale"
import { useRouter } from "next/navigation"
import { useCallback, useState } from "react"
import toast from "react-hot-toast"

const PropertiesClient = (props) => {
  const { listings, currentUser } = props
  const router = useRouter()
  const [deletingId, setDeletingId] = useState("")

  const onCancel = useCallback(
    (id) => {
      setDeletingId(id)
      axios
        .delete(`/api/listings/${id}`)
        .then(() => {
          toast.success("Listings deleted")
          router.refresh()
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error)
        })
        .finally(() => {
          setDeletingId("")
        })
    },
    [router]
  )

  return (
    <Container>
      <Heading title="Properties" subtitle="List of you properties" />
      <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            actionId={listing.id}
            onAction={onCancel}
            disabled={deletingId === listing.id}
            actionLabel="Delete Property"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  )
}

export default PropertiesClient
