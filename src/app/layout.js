import { Nunito } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar/Navbar"
import Modal from "@/components/modals/Modal"
import RegisterModal from "@/components/modals/RegisterModal"
import ToasterProvider from "@/providers/ToasterProvider"
import LoginModal from "@/components/modals/LoginModal"
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
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  )
}
