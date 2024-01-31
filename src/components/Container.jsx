"use client"

const Container = (props) => {
  const { children } = props
  return (
    <div className="max-x-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  )
}

export default Container
