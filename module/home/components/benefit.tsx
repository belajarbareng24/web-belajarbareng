import ImageComponents from "@/constant/layouts/image-components"

export default function Benefit() {
  return (
    <div className="w-full px-4 md:w-3/4 mx-auto">
      <ImageComponents url="coding.png" customClassname="w-full border-8 border-secondary rounded" />

      <div id="benefit" className="grid lg:grid-cols-2 my-24 gap-y-10 pt-16">
        <div className="grid gap-12">
          <ImageComponents url="next.png" customClassname="w-[90%] border-4 border-secondary hover:scale-110 duration-500 cursor-pointer rounded" />
          <ImageComponents url="flutter.png" customClassname="ml-8 w-[90%] border-4 border-secondary hover:scale-110 duration-500 cursor-pointer rounded" />
        </div>
        <div className="px-6">
          <p>Disupport dan dibimbing</p>
          <h1 className="font-sans text-4xl text-secondary font-bold">Keuntungan Bergabung Belajar Bareng</h1>
          <p className="text-slate-400 mt-10">Komunitas ini adalah tempat untuk saling mendukung dan bertukar ide dengan teman-teman satu kampus. Kamu bisa belajar bersama, berdiskusi, dan berkolaborasi dalam proyek coding yang seru.</p>

          <div className="my-5">
            <div className="flex items-center gap-3">
              <p className="text-3xl text-secondary font-sans font-bold">&#10003;</p>
              <p>Solidaritas dan kebersamaan dalam belajar coding</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-3xl text-secondary font-sans font-bold">&#10003;</p>
              <p>Mendapatkan mentor yang akan membimbing kamu</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-3xl text-secondary font-sans font-bold">&#10003;</p>
              <p>Mendapatkan teman-teman baru yang memiliki minat yang sama</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
