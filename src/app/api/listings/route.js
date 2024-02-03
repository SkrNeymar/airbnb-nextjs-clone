import { NextResponse } from "next/server"
import prisma from "@/libs/prismadb"
import getCurrentUser from "@/actions/getCurrentUser"
import { parse } from "dotenv"

export async function POST(request) {
  const currentUser = await getCurrentUser()
  // If the user is not logged in, return an error
  if (!currentUser) {
    return NextResponse.error()
  }

  // If the user is logged in, create a new listing
  // extract the data from the post request body
  const body = await request.json()
  const {
    title,
    description,
    imageSrc,
    category,
    roomCount,
    bathroomCount,
    guestCount,
    location,
    price,
  } = body

  const listing = await prisma.listing.create({
    data: {
      title,
      description,
      imageSrc,
      category,
      roomCount,
      bathroomCount,
      guestCount,
      locationValue: location.value,
      price: parseInt(price),
      userId: currentUser.id,
    },
  })

  return NextResponse.json(listing)
}
