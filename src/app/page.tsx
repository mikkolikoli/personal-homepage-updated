import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = await useTranslations('HomePage')
  return <div>Test</div>
}
