"use client"

import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa"

export default function ScrollToTop() {
  const [visibleScroll, setVisibleScroll] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 300 ? setVisibleScroll(true) : setVisibleScroll(false)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <div>
      {visibleScroll && (
        <button type="button" onClick={scrollToTop} className="border-2 border-slate-600 rounded-xl p-3 fixed bottom-5 right-5 text-secondary">
          <FaArrowUp size={25} />
        </button>
      )}
    </div>
  )
}
