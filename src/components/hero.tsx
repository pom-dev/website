import { FadeIn, FadeInStagger } from "@/lib/fader-in";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden py-14">
      <div className="pom-pattern absolute h-full w-full z-1"></div>
      <div className="mx-auto max-w-4xl relative">
        <FadeInStagger>
          <div className="mx-auto max-w-4xl flex flex-col gap-y-12 items-center ">
            <FadeIn className="bg-white rounded-2xl shadow-sm py-5 px-10">
              <Image
                width={250}
                height={250}
                alt=""
                src="/img/pom-shadow.webp"
                className="w-36 sm:w-48 md:w-64 object-cover"
              />
            </FadeIn>
            <FadeIn>
              <Image
                width={2800}
                height={2200}
                alt=""
                src="/img/snake.webp"
                className="mt-10 w-full max-w-xl object-cover sm:mt-16 lg:mt-0 lg:max-w-[80rem] xl:mt-0"
              />
            </FadeIn>
          </div>
        </FadeInStagger>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>
  );
}
