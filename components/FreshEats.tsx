import Image from "next/image";

export default function FreshEats() {
  return (
    <section className="relative ">
      <div className="absolute inset-0">
        <Image
          width={2048}
          height={1360}
          src="/pizza3.png"
          alt="Pizza preparation"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative flex h-full items-center justify-center">
        <div className="rotate-45 border-2 border-white p-16">
          <div className="-rotate-45">
            <h2 className="text-center text-3xl font-bold tracking-wider text-white">FRESH EATS</h2>
            <p className="mt-2 text-center text-sm tracking-wider text-white">Made Fresh Daily</p>
          </div>
        </div>
      </div>
    </section>
  )
}

