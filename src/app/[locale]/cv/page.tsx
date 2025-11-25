import { useTranslations } from "next-intl"
import { ReactElement } from "react";

export default function Page(): ReactElement {
  const t = useTranslations('cv')

  return (
    <div>CV</div>
  )
}
