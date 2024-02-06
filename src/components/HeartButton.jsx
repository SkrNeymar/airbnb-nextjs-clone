"use client"

import useFavorite from "@/hooks/useFavorite"
import useLoginModal from "@/hooks/useLoginModal"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

const HeartButton = (props) => {
  const { listingId, currentUser } = props
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  })
  const loginModal = useLoginModal()

  return (
    <div
      onClick={currentUser ? toggleFavorite : loginModal.onOpen}
      className="relative transition cursor-pointer hover:opacity-80"
    >
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart
        size={24}
        className={hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  )
}

export default HeartButton
