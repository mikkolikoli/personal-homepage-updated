import { useTranslations } from "next-intl";
import { ReactElement } from "react";

export default function Page(): ReactElement {
  const t = useTranslations('portfolio')

  return (
    <div>Portfolio</div>
  )
}
