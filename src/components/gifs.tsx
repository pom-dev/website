"use client";

import { cn } from "@/lib/cn";
import { FadeIn, FadeInStagger } from "@/lib/fader-in";
import GifViewer from "@/lib/gif-viewer";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

const gifs = [
  {
    name: "Good Morning",
    gifId: "GIF_1",
    description: "Spam report",
  },
  {
    name: "Let's Cook",
    gifId: "GIF_2",
    description: "Spam report",
  },
  {
    name: "let's work together",
    gifId: "GIF_3",
    description: "Spam report",
  },
  {
    name: "Eff off",
    gifId: "GIF_4",
    description: "Spam report",
  },
  {
    name: "To The Mooon",
    gifId: "GIF_5",
    description: "Spam report",
  },
  {
    name: "Take Over",
    gifId: "GIF_6",
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
    <div
      id={id}
      className={cn("bg-zinc-800 max-w-12xl px-6 lg:px-8 pb-24", className)}
    >
      <FadeIn>
        <h2 className="text-pretty text-zinc-100 text-md sm:text-lg md:text-2xl tracking-tight mb-5 ">
          GIFS
        </h2>
      </FadeIn>

      <FadeInStagger faster>
        <ul className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-3 lg:grid-cols-6 relative z-10 ">
          {gifs.map((gif) => (
            <FadeIn key={gif.name}>
              <motion.li
                key={gif.name}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group shadow-lg rounded-2xl border border-zinc-700"
              >
                <GifViewer
                  gifId={gif.gifId}
                  className="aspect-[14/13] w-full rounded-t-2xl object-cover pb-4"
                />

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
  );
}
