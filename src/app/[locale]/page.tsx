import { useTranslations } from "next-intl";
import { ReactElement } from "react";

import Image from "next/image";

export default function Page(): ReactElement {
  const t = useTranslations('HomePage')

  return (
    <article className="flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold p-8">Mikko Rajakorpi</h1>

      <section className="prose max-w-none flex flex-col lg:flex-row items-center">
        <div className="hover-3d">
          <Image
            src="/portrait-500p.jpg"
            width={500}
            height={667}
            alt="Portrait of Mikko Rajakorpi in front of colorful background"
            className="m-8 w-xs shadow-lg rounded-xl mask-y-from-50% mask-x-from-50%"
          />

          {/* 8 empty divs needed for 3D effect */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <section className="p-8 max-w-md">
          <p>
            I am Mikko Rajakorpi, a computer science student at Tampere University.
            Welcome to my personal website!
          </p>
          <p>
            In terms of programming, I am interested in both front- and backend development.
            Most of my public projects lean more into frontend web development.
            However, I also have experience with more low level languages
          </p>
          <p>
            Outside of programming, I have also some experience in UX design and I know my way around the linux/macos terminal.
          </p>
        </section>
      </section>
    </article>
  )
}
