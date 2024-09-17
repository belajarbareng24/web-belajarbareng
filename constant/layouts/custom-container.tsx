import Footer from "@/module/footer"
import Navbar from "@/module/navbar"

interface CustomContainerProps {
  children: React.ReactNode
}

export default function CustomContainer({ children }: CustomContainerProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
