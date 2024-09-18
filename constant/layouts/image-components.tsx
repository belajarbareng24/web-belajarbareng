import { getImageUrl } from "@/service/getImage"
import Image from "next/image"

interface ImageComponentsProps {
  url: string
  customClassname?: string
}

export default async function ImageComponents({ url, customClassname }: ImageComponentsProps) {
  const imageUrl = await getImageUrl(url)
  return (
    <>
      <Image src={imageUrl} alt={imageUrl} width={800} height={800} className={customClassname} />
    </>
  )
}
