import { NextResponse } from "next/server"
import prisma from "@/libs/prismadb"
import getCurrentUser from "@/actions/getCurrentUser"

export async function DELETE(req, { params }) {
  const currentUser = getCurrentUser()

  if (!currentUser) {
    return NextResponse.error()
  }

  const { listingId } = params

  if (!listingId || typeof listingId !== "string") {
    return NextResponse.error()
  }

  const listing = await prisma.listing.deleteMany({
    where: {
      id: listingId,
      userId: currentUser.id,
    },
  })

  return NextResponse.json(listing)
}
