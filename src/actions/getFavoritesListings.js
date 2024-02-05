import prisma from "@/libs/prismadb"
import getCurrentUser from "@/actions/getCurrentUser"

export default async function getFavoritesListings() {
  try {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
      return []
    }

    const favorites = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])],
        },
      },
    })

    return favorites
  } catch (error) {
    throw new Error(error)
  }
}
