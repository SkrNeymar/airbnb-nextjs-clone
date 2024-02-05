import getCurrentUser from "@/actions/getCurrentUser"
import { NextResponse } from "next/server"
import prisma from "@/libs/prismadb"
export const dynamic = "force-dynamic"

export async function POST(req, { params }) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return NextResponse.error()
  }

  const { listingId } = params

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid Listing ID")
  }

  let favoriteIds = [...(currentUser.favoriteIds || [])]
  favoriteIds.push(listingId)

  const user = await prisma.user.update({
    where: { id: currentUser.id },
    data: { favoriteIds },
  })

  return NextResponse.json(user)
}

export async function DELETE(req, { params }) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return NextResponse.error()
  }

  const { listingId } = params

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid Listing ID")
  }

  let favoriteIds = [...(currentUser.favoriteIds || [])]
  favoriteIds = favoriteIds.filter((id) => id !== listingId)

  const user = await prisma.user.update({
    where: { id: currentUser.id },
    data: { favoriteIds },
  })

  return NextResponse.json(user)
}
