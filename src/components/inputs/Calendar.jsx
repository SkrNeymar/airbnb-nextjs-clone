"use client"
import { DateRange, Range, RangeKeyDict } from "react-date-range"

import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"

const Calendar = (props) => {
  const { value, disabledDates, onChange } = props
  return (
    <DateRange
      rangeColors={["#f43f5e"]}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
    />
  )
}

export default Calendar
