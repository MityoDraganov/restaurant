import Image from "next/image"

export default function Gallery() {
  const images = [
    { src: '/pizza1.png', alt: 'Pizza preparation' },
    { src: '/placeholder.svg?height=400&width=600', alt: 'Pizza box' },
    { src: '/pizza1.png', alt: 'Fresh baked pizza' },
    { src: '/pizza2.png', alt: 'Delivery scooter' },
    { src: '/placeholder.svg?height=400&width=600', alt: 'Pizza with arugula' },
    { src: '/placeholder.svg?height=400&width=600', alt: 'Pizza cutting' },
    { src: '/placeholder.svg?height=400&width=600', alt: 'Pepperoni pizza' },
    { src: '/placeholder.svg?height=400&width=600', alt: 'Pizza with herbs' },
    { src: '/placeholder.svg?height=400&width=600', alt: 'Menu board' },
  ]

  return (
    <section className="grid grid-cols-2 gap-1 md:grid-cols-3">
      {images.map((image, index) => (
        <div key={index}>
          <Image width={400} height={400}
          src={image.src} 
          alt={image.alt} 
          className="h-full w-full object-cover" />
        </div>
      ))}
    </section>
  )
}

