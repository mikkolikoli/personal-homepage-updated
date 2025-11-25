import { useTranslations } from "next-intl";
import { ReactElement } from "react";

export default function Page(): ReactElement {
  const t = useTranslations('music')

  return (
    <div>Music</div>
  )
}
