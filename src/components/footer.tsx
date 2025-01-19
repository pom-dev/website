import Link from "next/link";
import { DiscordIcon, MagicEdenIcon, XIcon } from "./icons";

const navigation = {
  main: [],
  socials: [
    {
      name: "X",
      item: () => (
        <Link key="x" href="https://x.com/Pepe_Ordinals" target="_blank">
          <XIcon className="w-8 h-8 fill-white" />
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
          <MagicEdenIcon className="w-8 h-8 fill-white" />
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
          <DiscordIcon className="w-8 h-8 fill-white" />
        </Link>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 relative">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          aria-label="Footer"
          className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        >
          {/* {navigation.main.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-white"
            >
              {item.name}
            </a>
          ))} */}
        </nav>
        <div className="mt-16 flex justify-center gap-x-10">
          {navigation.socials.map((social) => social.item())}
        </div>
        <p className="mt-10 text-center text-sm/6 text-gray-400">
          &copy; 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
