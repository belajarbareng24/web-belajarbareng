import { getImageUrl } from "@/service/getImage"
import Image from "next/image"

interface ImageComponentsProps {
  url: string
  width: number
  height: number
}

export default async function ImageComponents({ url, width, height }: ImageComponentsProps) {
  const imageUrl = await getImageUrl(url)
  return (
    <>
      <Image src={imageUrl} alt={imageUrl} width={width} height={height} />
    </>
  )
}
