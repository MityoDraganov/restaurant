'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function ReservationForm() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-wider">MAKE A RESERVATION</h2>
        <form className="mx-auto max-w-2xl space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Input type="text" placeholder="Name" className="border-gray-300" />
            <Input type="email" placeholder="Email" className="border-gray-300" />
            <Input type="date" className="border-gray-300" />
            <Select>
              <SelectTrigger className="border-gray-300">
                <SelectValue placeholder="Time" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 8 }, (_, i) => i + 12).map((hour) => (
                  <SelectItem key={hour} value={`${hour}:00`}>
                    {hour}:00
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full bg-black text-white hover:bg-gray-800">Reserve Now</Button>
        </form>
      </div>
    </section>
  )
}

