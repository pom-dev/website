import Image from "next/image";

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

export default function Explorer() {
  return (
    <div className="py-24 sm:py-32 relative min-h-screen">
      <div className="pom-pizza absolute h-full w-full z-1 mt-[25rem] pt-24"></div>

      <div className="relative mx-auto max-w-12xl px-6 lg:px-8 z-10">
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-6"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="group shadow-lg rounded-2xl border border-gray-100"
            >
              <div className="p-4 ">
                <Image
                  width={400}
                  height={400}
                  alt=""
                  src={person.imageUrl}
                  className="aspect-[14/13] w-full rounded-2xl object-cover"
                />
                {/* <h3 className="mt-6 text-lg/8  tracking-tight text-gray-700 ">
                  {person.name}
                </h3> */}
              </div>

              <button className="w-full bg-orange-500 text-white py-2 rounded-b-2xl hover:bg-orange-500/90 text-lg font-semibold invisible group-hover:visible">
                Download
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
