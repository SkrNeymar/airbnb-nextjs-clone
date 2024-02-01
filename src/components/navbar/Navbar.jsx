"use client"
import React from "react"
import Container from "@/components/Container"
import Logo from "@/components/navbar/Logo"
import Search from "@/components/navbar/Search"
import UserMenu from "@/components/navbar/UserMenu"

const Navbar = () => {
  return (
    <div className="fixed z-10 w-full bg-white shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 select-none md:gap-0 ">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
