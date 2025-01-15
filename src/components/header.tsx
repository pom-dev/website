"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "EXPLORER", href: "#" },
  { name: "CUSTOMIZE", href: "#" },
  { name: "GIFS", href: "#" },
  { name: "LICENSE", href: "#" },
  { name: "SHOP", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="sr-only">Pepe Ordinals Maxi</span>
            <Image
              alt="Your Company Logo"
              src="/img/pom-no-bg.webp"
              width={32}
              height={32}
              className="h-8 text-foreground w-auto"
            />

            <h1 className="text-xl font-bold ms-2">Pepe Ordinals Maxi</h1>
          </Link>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Link href="https://x.com/Pepe_Ordinals" target="_blank">
            <Image
              className="w-6 h-6"
              src="/x.svg"
              alt="X"
              width={50}
              height={50}
            />
          </Link>
          <Link
            href="https://magiceden.io/ordinals/marketplace/pom"
            target="_blank"
          >
            <Image
              className="w-8 h-8"
              src="/magic-eden.svg"
              alt="Magic Eden"
              width={80}
              height={40}
            />
          </Link>
          <Link href="https://discord.gg/pepeordinalsmaxi" target="_blank">
            <Image
              className="w-8 h-8"
              src="/discord.svg"
              alt="Discord"
              width={60}
              height={60}
            />
          </Link>

          <span
            aria-hidden="true"
            className="mx-4 h-6 w-px bg-gray-200 lg:mx-6"
          />

          <div className="hidden lg:flex lg:gap-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button
              type="button"
              className="rounded bg-gray-900 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-gray-900/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
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
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
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
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
