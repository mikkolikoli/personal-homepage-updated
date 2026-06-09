import { useTranslations } from "next-intl"
import { ReactElement } from "react"
import Image from "next/image"

export default function Page(): ReactElement {
  const t = useTranslations('cv')

  return (
    <article className="flex flex-col md:flex-row items-center p-8">
      <section className="flex flex-col">
        <div className="avatar">
          <div className="mask mask-circle w-3xs shadow-lg">
            <Image
              src="/portrait-500p.jpg"
              width={500}
              height={667}
              alt="Portrait of Mikko Rajakorpi in front of colorful background"
            />
          </div>
        </div>

        <section className="flex flex-col prose pt-8">
          <h1>Mikko Rajakorpi</h1>

          <section>
            <h2>Contact</h2>

          </section>
        </section>
      </section>

      <section></section>
    </article>
  )
}
