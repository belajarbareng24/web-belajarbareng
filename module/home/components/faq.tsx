"use client"

import { faq } from "@/utils/faq"
import { useState } from "react"
import { IoIosArrowBack } from "react-icons/io"

export default function Faq() {
  const [show, setShow] = useState<number | null>(null)

  const handleShow = (index: number) => {
    setShow(show === index ? null : index)
  }
  return (
    <div id="faq" className="w-full px-4 md:w-3/4 mx-auto">
      <div className="text-center">
        <p className="text-secondary text-lg my-3">Pertanyaan yang mungkin kamu tanyakan</p>
        <h1 className="font-sans font-bold text-4xl">Frequently Asked Questions</h1>
      </div>

      <div className="grid gap-4 my-12">
        {faq.map((faq) => (
          <div key={faq.id} className="bg-slate-950 rounded-lg p-4">
            <div className="flex items-center justify-between font-sans">
              <h1 className="font-bold text-lg md:text-xl">{faq.question}</h1>
              <button type="button" onClick={() => handleShow(faq.id)} className={`${show === faq.id ? "-rotate-90" : ""} duration-300 text-secondary`}>
                <IoIosArrowBack size={30} />
              </button>
            </div>
            {show === faq.id && <p className="mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
