"use client"

import { useRouter } from "next/navigation"
import Heading from "@/components/Heading"
import Button from "@/components/Button"

const EmptyState = (props) => {
  const { title, subtitle, showReset, showResetLabel } = props
  const router = useRouter()
  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading center title={title} subtitle={subtitle} />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label={showResetLabel}
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  )
}

export default EmptyState
