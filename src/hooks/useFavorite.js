import axios from "axios"
import { useRouter } from "next/navigation"
import { useCallback, useMemo } from "react"
import { toast } from "react-hot-toast"
import useLoginModal from "@/hooks/useLoginModal"

const useFavorite = ({ listingId, currentUser }) => {
  const router = useRouter()
  const loginModal = useLoginModal()

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || []

    return list.includes(listingId) // return true if the user has favorited the listing
  }, [currentUser, listingId])

  const toggleFavorite = useCallback(
    async (e) => {
      e.stopPropagation()

      if (!currentUser) {
        return loginModal.open()
      }

      try {
        let request
        if (hasFavorited) {
          request = () => axios.delete(`/api/favorites/${listingId}`)
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`)
        }

        await request()
        router.refresh()
        toast.success("Success")
      } catch (error) {
        toast.error("Something went wrong")
      }
    },
    [currentUser, hasFavorited, listingId, loginModal, router]
  )

  return { hasFavorited, toggleFavorite }
}

export default useFavorite
