import React from "react"

export default function Course() {
  return (
    <div id="materi" className="w-full px-4 md:w-3/4 mx-auto mt-24 mb-20">
      <h1 className="text-center text-secondary  text-4xl font-sans font-bold my-6">Materi yang akan diberikan</h1>
      <p className="text-gray-400">Komunitas ini akan mengadakan sesi pelatihan dan juga akan ada seminar kedepannya , adapun framework framework yang akan digunakan untuk pelatihan ini adalah :</p>
      <div className="grid gap-2 my-8">
        <div className="flex items-center gap-3">
          <p className="text-3xl text-secondary font-sans font-bold">&#10003;</p>
          <p>Flutter: Buat aplikasi mobile yang indah dan responsif untuk iOS & Android dengan satu kode.</p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-3xl text-secondary font-sans font-bold">&#10003;</p>
          <p>Next.js: Pelajari framework React yang powerful untuk membangun aplikasi web modern dan cepat.</p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-3xl text-secondary font-sans font-bold">&#10003;</p>
          <p>React.js: Kuasai React, library front-end paling populer untuk membuat antarmuka interaktif.</p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-3xl text-secondary font-sans font-bold">&#10003;</p>
          <p>Laravel: Temukan kemudahan membangun aplikasi web dengan framework PHP yang elegan dan kuat.</p>
        </div>
      </div>
    </div>
  )
}
