import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-[85dvh]">
      <div className="absolute inset-0">
        <Image
          src="/pizza.png"
          width={1920}
          height={1080}
          alt="Close up of pizza"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="mb-8 text-6xl font-bold tracking-widest">PIZZA SHOP</h1>
        <p className="text-xl font-light tracking-wider">FRESH & DELICIOUS</p>
      </div>
    </div>
  )
}

