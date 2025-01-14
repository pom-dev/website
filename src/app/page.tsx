import Header from "@/components/header";
import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <div className="relative isolate overflow-hidden pt-14">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto max-w-2xl flex flex-col gap-y-12 items-center">
            <h1 className=" font-semibold tracking-tight text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
              POM
            </h1>

            <Image
              width={100}
              height={100}
              alt=""
              src="/img/gifs/small.gif"
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}
