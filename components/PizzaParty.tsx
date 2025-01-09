import { Button } from "./ui/button";

export default function PizzaParty() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-8 text-4xl font-bold tracking-wider">FANCY A PIZZA PARTY?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
          Let us cater your next event! Whether it's a birthday, corporate event, or any special occasion, we'll bring the
          pizza party to you. Custom menus and packages available.
        </p>
        <Button variant="outline" className="border-2 border-black px-8 py-6 text-lg hover:bg-black hover:text-white">
          Contact Us
        </Button>
      </div>
    </section>
  )
}

