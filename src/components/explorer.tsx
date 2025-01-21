"use client";

import { FadeIn } from "@/lib/fader-in";
import { FadeInStagger } from "@/lib/fader-in";
import { motion } from "framer-motion";
import Image from "next/image";
import toast from "react-hot-toast";

const people = [
  {
    name: "Pom Dragon 1",
    imageUrl: "/img/avatars/1.png",
  },
  {
    name: "Pom Dragon 2",
    imageUrl: "/img/avatars/2.png",
  },
  {
    name: "Pom Dragon 3",
    imageUrl: "/img/avatars/3.png",
  },
  {
    name: "Pom Dragon 4",
    imageUrl: "/img/avatars/4.png",
  },
  {
    name: "Pom Dragon 5",
    imageUrl: "/img/avatars/5.png",
  },
  {
    name: "Pom Dragon 6",
    imageUrl: "/img/avatars/6.png",
  },
  // More people...
];

export default function Explorer({ id }: { id: string }) {
  return (
    <div className="bg-zinc-800 text-white pt-24 sm:pt-32 relative">
      <div id={id} className="relative mx-auto max-w-12xl px-6 lg:px-8 z-10">
        <FadeIn>
          <div className="flex justify-between items-center border-zinc-500 border-b pb-2 mb-10">
            <h2 className="text-pretty text-zinc-100 text-md sm:text-2xl md:text-4xl tracking-tight">
              NFT EXPLORER
            </h2>
            <button
              onClick={() => {
                toast.error("Coming Soon");
              }}
              className=" bg-orange-500 text-white py-1 px-2 sm:py-2 sm:px-4 rounded-lg hover:bg-orange-500/90 text-md sm:text-lg "
            >
              Connect Wallet
            </button>
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="text-pretty text-zinc-100 text-md sm:text-lg md:text-3xl tracking-tight  mb-5 ">
            Avatars
          </h2>
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mx-auto grid max-w-2xl lg:max-w-none gap-x-8 gap-y-14 grid-cols-2 sm:grid-cols-3 lg:mx-0 lg:grid-cols-6"
          >
            {people.map((person) => (
              <FadeIn key={person.name}>
                <motion.li
                  className="group shadow-lg rounded-2xl border border-zinc-700"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div className="pb-4">
                    <Image
                      width={400}
                      height={400}
                      alt=""
                      src={person.imageUrl}
                      className="aspect-[14/13] rounded-t-2xl w-full object-cover"
                    />
                  </motion.div>

                  <button
                    onClick={() => {
                      toast.error("Coming Soon");
                    }}
                    className="w-full bg-orange-500 text-white py-2 rounded-b-2xl hover:bg-orange-500/90 text-lg font-semibold invisible group-hover:visible"
                  >
                    Download
                  </button>
                </motion.li>
              </FadeIn>
            ))}
          </ul>
        </FadeInStagger>

        <FadeIn>
          <div className="flex flex-1 justify-end mt-10">
            <motion.button
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => {
                toast.error("Coming Soon");
              }}
              className="text-md sm:text-lg font-semibold text-zinc-100"
            >
              View All <span aria-hidden="true">&rarr;</span>
            </motion.button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
