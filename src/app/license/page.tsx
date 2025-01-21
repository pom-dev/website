"use client";
import { FadeIn, FadeInStagger } from "@/lib/fader-in";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-white py-24 sm:py-32 relative">
      <FadeInStagger faster>
        <div className="relative max-w-12xl px-6 lg:px-8 z-10 mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5 ">
          <div className="col-span-2 items-center justify-center relative z-10 hidden lg:block">
            <FadeIn>
              <Image
                width={3400}
                height={2800}
                alt=""
                src="/img/pizza.webp"
                className="mt-10 w-full object-cover sm:mt-16 lg:mt-24"
              />
            </FadeIn>
          </div>
          <div className="col-span-3 relative z-10 text-justify text-zinc-800 px-10">
            <FadeIn>
              <h1 className="mt-2 text-pretty text-2xl font-semibold tracking-tight sm:text-4xl">
                IP, Commercial Rights, and Fair Use Policy
              </h1>
            </FadeIn>
            <FadeIn>
              <p className="mt-6 text-lg sm:text-xl ">
                Pepe Ordinals Maxi (POM) grants all holders of its collection
                both intellectual property (IP) and commercial rights per
                inscription they hold. This allows holders to use their
                inscription for both personal and business use-cases, including
                starting a business, launching a product, or even sub-licensing
                out your high-quality art.
              </p>
            </FadeIn>
            <FadeIn>
              <p className="mt-4 text-lg sm:text-xl">
                This does not, however, include the right to use the Pepe
                Ordinals Maxi (otherwise known as &quot;POM&quot;) logo, brand,
                name, or marketing material. This policy is designed to
                safeguard the core long-term web2 and web3 interests of the POM
                brand and project, including future product launches, whilst
                also allowing holders who support our vision access and fair-use
                of their ordinals and inscriptions.
              </p>
            </FadeIn>
            <FadeIn>
              <p className="mt-4 text-lg sm:text-xl">
                The license below can also be compared to the &quot;Can&apos;t
                Be Evil&quot;{" "}
                <Link
                  className="text-orange-500"
                  href="https://a16zcrypto.com/posts/article/introducing-nft-licenses/"
                >
                  License
                </Link>{" "}
                , specifically the{" "}
                <Link
                  className="text-orange-500"
                  href="https://7q7win2vvm2wnqvltzauqamrnuyhq3jn57yqad2nrgau4fe3l5ya.arweave.net/_D9kN1WrNWbCq55BSAGRbTB4bS3v8QAPTYmBThSbX3A/3"
                >
                  CBE-COMMERCIAL-NO HATE
                </Link>{" "}
                license.
              </p>
            </FadeIn>
            <FadeIn>
              <p className="mt-4 text-lg sm:text-xl">
                In the event of a discrepancy between the CBE-COMMERCIAL-NO HATE
                license and the official POM license below, then the official
                license should be the guiding factor in your decision.
              </p>
            </FadeIn>
            <FadeIn>
              <h1 className="mt-10 text-pretty text-2xl font-semibold tracking-tight sm:text-4xl">
                Official License
              </h1>
            </FadeIn>
            <FadeIn>
              <ul className="mt-6 text-lg sm:text-xl">
                <li className="mb-4">
                  <strong>1) Intellectual Property (IP) Rights: </strong>
                  POM grants to the Holder a worldwide non-exclusive,
                  assignable, perpetual, and royalty-free license to display the
                  Ordinal solely for non-commercial purposes. This license
                  provides the Holder with the right to showcase the Ordinal in
                  non-commercial settings without any additional fees or
                  restrictions.
                </li>
                <li className="mb-4">
                  <strong>2) Commercial Rights: </strong>
                  Holders are granted commercial rights to the specific ORDINALS
                  held by that individual. This allows the Holder to create and
                  sell commercial products featuring the owned Ordinal, using
                  the token ID to signify ownership. However, the name or logo
                  associated with POM cannot be used in relation to the
                  commercial products.
                </li>
                <li>
                  <strong>3) Restrictions: </strong>
                  A. The commercial rights granted do NOT include the use of:{" "}
                  <br />
                  <ul>
                    <li>
                      <strong>(i)</strong> POM logo(s) or similar likenesses.{" "}
                    </li>
                    <li>
                      <strong>(ii)</strong> Components/unique traits within the
                      POM Ordinals for sale or promotion independently of the
                      original form within the owned Ordinal(s). <br />
                    </li>
                    <li>
                      <strong>(iii)</strong> Names directly associated with POM.{" "}
                    </li>
                    <li>
                      <strong>(iv)</strong> Images, including original artworks
                      found on social media platforms, websites, or marketing
                      materials, for public consumption. <br />
                    </li>
                  </ul>
                  <br />
                  B. The Holder agrees not to create derivative works using the
                  purchased POM that depict or promote illegal acts, or involve
                  inappropriate content such as pornography, racism, homophobia,
                  transphobia, obscenity, violence, libel, or slander.
                </li>
              </ul>
            </FadeIn>
            <FadeIn>
              <p className="mt-4 text-lg sm:text-xl">
                By adhering to this policy, we aim to promote creativity,
                safeguard intellectual property, and offer transparency and
                longevity to the digital art ecosystem within the POM project.
              </p>
            </FadeIn>
          </div>
        </div>
      </FadeInStagger>
    </div>
  );
}
