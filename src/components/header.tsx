"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { DiscordIcon, MagicEdenIcon, XIcon } from "./icons";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navigation = [
    {
      name: "EXPLORER",
      onClick: () => {
        if (pathname === "/") {
          scrolltoHash("explorer");
        } else {
          router.replace("/");
          setTimeout(() => {
            scrolltoHash("explorer");
          }, 500);
        }
      },
    },
    {
      name: "CUSTOMIZE",
      onClick: () => {
        toast.error("Coming Soon");
      },
    },
    {
      name: "LICENSE",
      onClick: () => router.push("/license"),
    },
    { name: "SHOP", onClick: () => router.push("/shop") },
  ];

  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  return (
    <header className="bg-white w-full">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div>
          <Link href="/" className="items-center gap-2 hidden lg:flex">
            <span className="sr-only">Pepe Ordinals Maxi</span>
            <Image
              alt="Your Company Logo"
              src="/img/pom-no-bg.webp"
              width={32}
              height={32}
              className="h-8 text-zinc-800 w-auto"
            />

            <h1 className="text-xl font-bold ms-2 text-zinc-800">
              Pepe Ordinals Maxi
            </h1>
          </Link>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-800"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Link href="https://x.com/Pepe_Ordinals" target="_blank">
              <XIcon className="w-6 h-6 fill-zinc-800" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Link
              href="https://magiceden.io/ordinals/marketplace/pom"
              target="_blank"
            >
              <MagicEdenIcon className="w-8 h-8 fill-zinc-800" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Link href="https://discord.gg/pepeordinalsmaxi" target="_blank">
              <DiscordIcon className="w-8 h-8 fill-zinc-800" />
            </Link>
          </motion.div>

          <span
            aria-hidden="true"
            className="mx-4 h-6 w-px bg-gray-200 lg:mx-6 hidden lg:block"
          />

          <div className="hidden lg:flex lg:gap-x-6">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={item.onClick}
                className="text-sm/6 font-semibold text-zinc-800"
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button
              type="button"
              onClick={() => {
                toast.error("Coming Soon");
              }}
              className="rounded bg-zinc-800 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-zinc-800/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
            >
              CONNECT
            </button>
          </div>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      item.onClick();
                    }}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-zinc-800 hover:bg-gray-50"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <div className="py-6">
                <button
                  type="button"
                  onClick={() => {
                    toast.error("Coming Soon");
                  }}
                  className="rounded bg-zinc-800 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-zinc-800/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                >
                  CONNECT
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
