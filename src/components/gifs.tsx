import { cn } from "@/lib/cn";
import Image from "next/image";

const gifs = [
  {
    name: "Good Morning",
    imageUrl: "/img/gifs/GIF_1.gif",
    description: "Spam report",
  },
  {
    name: "Let's Cook",
    imageUrl: "/img/gifs/GIF_2_var1.gif",
    description: "Spam report",
  },
  {
    name: "let's work together",
    imageUrl: "/img/gifs/GIF_3_var1.gif",
    description: "Spam report",
  },
  {
    name: "Eff off",
    imageUrl: "/img/gifs/GIF_4.gif",
    description: "Spam report",
  },
  {
    name: "To The Mooon",
    imageUrl: "/img/gifs/GIF_5.gif",
    description: "Spam report",
  },
  {
    name: "Take Over",
    imageUrl: "/img/gifs/GIF_6.gif",
    description: "Spam report",
  },
];

export default function Gifs({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  return (
    <div id={id} className={cn("bg-white py-24 sm:py-32 relative", className)}>
      <div className="pom-pattern absolute h-full w-full z-0"></div>

      <div className="relative mx-auto max-w-12xl px-6 lg:px-8 z-10">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5 relative z-10">
          <div className="col-span-2 flex flex-col items-center justify-center relative z-10">
            <Image
              width={250}
              height={250}
              alt=""
              src="/img/pom-shadow.webp"
              className="mt-10 w-[10rem] object-cover sm:mt-16 lg:mt-24 lg:max-w-48"
            />
            <Image
              width={400}
              height={400}
              alt=""
              src="/img/avatars/1.png"
              className="mt-10 w-[20rem] object-cover sm:mt-16 lg:mt-24"
            />
          </div>
          <ul className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-3 relative z-10 ">
            {gifs.map((gif) => (
              <li
                key={gif.name}
                className="group rounded-sm border border-gray-100 shadow-md bg-white"
              >
                <div className=" ">
                  <Image
                    width={400}
                    height={400}
                    alt=""
                    src={gif.imageUrl}
                    className="aspect-[14/13] w-full rounded-sm object-cover"
                  />
                  <h3 className="mx-4 mb-4 mt-6 text-lg/8  tracking-tight text-gray-700 ">
                    {gif.name}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
