import CustomContainer from "@/constant/layouts/custom-container"
import ScrollToTop from "@/constant/layouts/scroll-to-top"
import HomePage from "@/module/home"

export default function Home() {
  return (
    <CustomContainer>
      <HomePage />
      <ScrollToTop />
    </CustomContainer>
  )
}
