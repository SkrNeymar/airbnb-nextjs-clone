import { NextResponse } from "next/server"

import getCurrentUser from "@/actions/getCurrentUser"
import prisma from "@/libs/prismadb"

export async function DELETE(req, { params }) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return NextResponse.error()
  }

  const { reservationId } = params

  if (!reservationId || typeof reservationId !== "string") {
    throw new Error("Invalid reservationId")
  }

  // Delete the reservation
  const reservation = await prisma.reservation.deleteMany({
    where: {
      id: reservationId,
      OR: [{ userId: currentUser.id }, { listing: { userId: currentUser.id } }],
    },
  })

  return NextResponse.json(reservation)
}
