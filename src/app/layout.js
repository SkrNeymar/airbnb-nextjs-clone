import { Nunito } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar/Navbar"
import Modal from "@/components/modals/Modal"
import RegisterModal from "@/components/modals/RegisterModal"
import ToasterProvider from "@/providers/ToasterProvider"

export const metadata = {
  title: "Airbnb",
  description: "Airbnb NextJs Clone",
}

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
