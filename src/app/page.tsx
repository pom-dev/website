import Explorer from "@/components/explorer";
import Gifs from "@/components/gifs";
import Hero from "@/components/hero";
export default function Home() {
  return (
    <>
      <Hero />
      <Explorer id="explorer" />
      <Gifs id="gifs" className="mt-[30rem]" />
    </>
  );
}
