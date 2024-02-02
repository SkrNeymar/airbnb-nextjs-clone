import { Nunito } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar/Navbar"
import Modal from "@/components/modals/Modal"
import ToasterProvider from "@/providers/ToasterProvider"
import LoginModal from "@/components/modals/LoginModal"
import RentModal from "@/components/modals/RentModal"
import RegisterModal from "@/components/modals/RegisterModal"
import getCurrentUser from "@/actions/getCurrentUser"

export const metadata = {
  title: "Airbnb",
  description: "Airbnb NextJs Clone",
}

const font = Nunito({
  subsets: ["latin"],
})

export default async function RootLayout({ children }) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  )
}
