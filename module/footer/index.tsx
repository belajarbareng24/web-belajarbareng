import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full px-4 md:w-3/4 py-10 mx-auto border-t-2 border-slate-950">
      <p className="text-center font-sans font-bold text-xl">&copy; Belajar Bareng 2024</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-8 gap-8">
        <div>
          <Link href={"/"} className="text-3xl hover:animate-blink hover:text-secondary">
            Belajar Bareng
          </Link>
          <div className="mt-3 text-gray-400">
            Untuk pertanyaan lebih lanjut, silahkan hubungi admin melalui
            <a href="https://wa.me/+6283137446693" target="_blank" className="text-secondary px-1 rounded hover:animate-blink">
              here
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-3xl">Programming</h1>
          <div className="flex flex-col gap-2 mt-3 max-w-max text-gray-400">
            <a href="https://react.dev/" target="_blank" className="hover:animate-blink hover:text-secondary">
              ReactJS
            </a>
            <a href="https://nextjs.org/" target="_blank" className="hover:animate-blink hover:text-secondary">
              NextJS
            </a>
            <a href="https://laravel.com/" target="_blank" className="hover:animate-blink hover:text-secondary">
              Laravel
            </a>
            <a href="https://flutter.dev/" target="_blank" className="hover:animate-blink hover:text-secondary">
              Flutter
            </a>
          </div>
        </div>

        <div>
          <h1 className="text-3xl">Important Links</h1>
          <div className="flex flex-col gap-2 mt-3 max-w-max text-gray-400">
            <Link href={"/"} target="_blank" className="hover:animate-blink hover:text-secondary">
              Belajar
            </Link>
            <Link href={"/"} target="_blank" className="hover:animate-blink hover:text-secondary">
              Komunitas
            </Link>
            <Link href={"/"} target="_blank" className="hover:animate-blink hover:text-secondary">
              Artikel
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
