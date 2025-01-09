import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-bold tracking-wider">COME GRAB A SLICE!</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                123 Pizza Street, Food City, FC 12345
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                (555) 123-4567
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                slice@pizzashop.com
              </p>
            </div>
          </div>
          <div className="h-[300px] w-full">
            {/* Replace with actual map implementation */}
            <div className="h-full w-full bg-gray-800"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

