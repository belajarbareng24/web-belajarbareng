import ImageComponents from "@/constant/layouts/image-components"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="grid gap-6 px-10 lg:flex items-center justify-between py-8 md:px-20 w-full">
      <div className="flex items-center">
        <ImageComponents url="icons.png" customClassname="w-32 lg:w-16 hover:scale-110 transition transform duration-500 ease-in-out hover:animate-blink" />
        <Link href={"/"} className="hover:bg-secondary hover:text-primary rounded-sm">
          <h1 className="font-bold text-xl md:text-2xl ">BELAJAR BARENG</h1>
          <i className="-tracking-tighter text-sm md:text-lg">Komunitas Coding Universitas Indra Prasta PGRI</i>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-8 text-xl font-semibold">
        <Link href={"#benefit"} className="hover:animate-blink hover:text-secondary">
          Benefit
        </Link>
        <Link href={"#faq"} className="hover:animate-blink hover:text-secondary">
          Faq
        </Link>
        <Link href={"#materi"} className="hover:animate-blink hover:text-secondary">
          Materi
        </Link>
      </div>
    </nav>
  )
}
