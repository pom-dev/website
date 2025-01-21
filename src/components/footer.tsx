"use client";

import Link from "next/link";
import { DiscordIcon, MagicEdenIcon, XIcon } from "./icons";
import { motion } from "framer-motion";
import { FadeIn, FadeInStagger } from "@/lib/fader-in";

const navigation = {
  main: [],
  socials: [
    {
      name: "X",
      item: () => (
        <Link key="x" href="https://x.com/Pepe_Ordinals" target="_blank">
          <XIcon className="w-8 h-8 fill-zinc-800" />
        </Link>
      ),
    },
    {
      name: "Magic Eden",
      item: () => (
        <Link
          key="magic-eden"
          href="https://magiceden.io/ordinals/marketplace/pom"
          target="_blank"
        >
          <MagicEdenIcon className="w-8 h-8 fill-zinc-800" />
        </Link>
      ),
    },
    {
      name: "Discord",
      item: () => (
        <Link
          key="discord"
          href="https://discord.gg/pepeordinalsmaxi"
          target="_blank"
        >
          <DiscordIcon className="w-8 h-8 fill-zinc-800" />
        </Link>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <FadeInStagger>
      <footer className="bg-white relative">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav
            aria-label="Footer"
            className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
          ></nav>

          <div className="mt-16 flex justify-center gap-x-10">
            {navigation.socials.map((social) => (
              <FadeIn key={social.name}>
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {social.item()}
                </motion.div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p className="mt-10 text-center text-sm/6 text-zinc-900">
              &copy; 2024 Pepe Ordinals Maxi. All rights reserved.
            </p>
          </FadeIn>
        </div>
      </footer>
    </FadeInStagger>
  );
}
