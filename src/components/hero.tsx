import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden pt-14">
      <div className="pom-pattern absolute h-full w-full z-1"></div>
      <div className="mx-auto max-w-4xl relative">
        <div className="mx-auto max-w-4xl flex flex-col gap-y-12 items-center ">
          <Image
            width={250}
            height={250}
            alt=""
            src="/img/pom-shadow.webp"
            className="mt-10 w-full max-w-md object-cover sm:mt-16 lg:mt-24 lg:max-w-48"
          />

          <Image
            width={2800}
            height={2200}
            alt=""
            src="/img/snake.webp"
            className="mt-10 w-full max-w-xl object-cover sm:mt-16 lg:mt-0 lg:max-w-[80rem] xl:mt-0"
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>
  );
}
