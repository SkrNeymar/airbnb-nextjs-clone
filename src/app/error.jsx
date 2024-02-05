"use client"

import EmptyState from "@/components/EmptyState"
import { useEffect } from "react"

const Error = ({ error }) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return <EmptyState title="Oops" subtitle="Something went wrong!" />
}

export default Error
