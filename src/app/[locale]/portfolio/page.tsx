import { useTranslations } from "next-intl";
import { ReactElement } from "react";

export default function Page(): ReactElement {
  const t = useTranslations('portfolio')

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold p-8">Portfolio</h1>
      <article className="card bg-base-200 w-96 shaodow-sm">
        <figure></figure>

        <section className="card-body">
          <h2 className="card-title">Personal homepage</h2>
        </section>
      </article>
    </div>
  )
}
