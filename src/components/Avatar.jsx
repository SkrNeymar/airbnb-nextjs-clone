"use client"
import Image from "next/image"

const Avatar = (props) => {
  const { src } = props
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={src || "/images/placeholder.jpg"}
    />
  )
}

export default Avatar
