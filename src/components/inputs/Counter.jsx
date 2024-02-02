"use client"

import { useCallback } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

const Counter = (props) => {
  const { title, subtitle, value, onChange, maxCount } = props
  const onAdd = useCallback(() => {
    if (value >= maxCount) {
      return
    }
    onChange(value + 1), [value, onChange]
  })
  const onReduce = useCallback(() => {
    if (value === 1) {
      return
    }
    onChange(value - 1), [value, onChange]
  })

  return (
    <div className="flex flex-row items-center justify-between select-none">
      <div className="flex flex-col">
        <div className="font-medium">{title}</div>
        <div className="font-light text-gray-600">{subtitle}</div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div
          onClick={onReduce}
          className="
          w-10 
          h-10 
          rounded-full
          border-[1px]
        border-neutral-400 
          flex items-center 
          justify-center
          text-neutral-600 
          cursor-pointer 
          hover-opacity-80
          transition
          "
        >
          <AiOutlineMinus />
        </div>
        <div className="text-xl font-light text-neutral-600">{value}</div>
        <div
          onClick={onAdd}
          className={`
          w-10 
          h-10 
          rounded-full
          border-[1px]
          ${value === maxCount ? "border-rose-500" : "border-neutral-400"}
          flex items-center 
          justify-center
          text-neutral-600 
          cursor-pointer 
          hover-opacity-80
          transition
          `}
        >
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  )
}

export default Counter
