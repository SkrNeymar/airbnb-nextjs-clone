import { Nunito } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar/Navbar"

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
        <Navbar />
        {children}
      </body>
    </html>
  )
}
