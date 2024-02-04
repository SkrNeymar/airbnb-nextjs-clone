"use client"

import { Range } from "react-date-range"
import Calendar from "@/components/inputs/Calendar"
import Button from "@/components/Button"

const ListingReservation = (props) => {
  const {
    price,
    dayCount,
    dateRange,
    totalPrice,
    onChangeDate,
    onSubmit,
    disabled,
    disabledDates,
  } = props

  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
      </div>
      <div className="flex flex-row items-center justify-between p-4 text-lg font-semibold">
        <div>Total</div>
        <div className="font-light text-neutral-500">{dayCount} Nights</div>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  )
}

export default ListingReservation
