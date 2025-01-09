export default function Passion() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold tracking-wider">THE PASSION FOR PIZZA</h2>
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="md:w-1/2">
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Pizza chef"
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed text-gray-600">
              Our passion for pizza goes beyond just making food. It's about creating moments, sharing joy, and delivering
              the perfect slice every time. With decades of experience and the finest ingredients, we craft each pizza with
              dedication and love.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

