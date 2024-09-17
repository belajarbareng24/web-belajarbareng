import ImageComponents from "@/constant/layouts/image-components"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-around py-12 px-4 w-full">
      <div>
        <ImageComponents url="icons.png" width={50} height={50} />
      </div>
      <h1>test</h1>
    </nav>
  )
}
