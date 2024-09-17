import { getImageUrl } from "@/service/getImage"
import Image from "next/image"

interface ImageComponentsProps {
  url: string
  customClassName?: string
}

export default async function ImageComponents({ url, customClassName }: ImageComponentsProps) {
  const imageUrl = await getImageUrl(url)
  return <Image src={imageUrl} alt={imageUrl} width={300} height={300} className={`${customClassName}`} />
}
