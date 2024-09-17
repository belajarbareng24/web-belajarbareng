import { supabase } from "@/utils/supabase"

export async function getImageUrl(imagePath: string) {
  const { data } = await supabase.storage.from("image").getPublicUrl(imagePath)

  if (!data || !data.publicUrl) console.error("failed to get public url")

  return data.publicUrl
}
