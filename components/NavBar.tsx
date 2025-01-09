'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold tracking-wider">
          PIZZA<span className="text-amber-600">SHOP</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden space-x-8 md:flex">
          <Link href="#menu" className="text-sm font-medium tracking-wider hover:text-amber-600">
            MENU
          </Link>
          <Link href="#about" className="text-sm font-medium tracking-wider hover:text-amber-600">
            ABOUT
          </Link>
          <Link href="#reservation" className="text-sm font-medium tracking-wider hover:text-amber-600">
            RESERVATION
          </Link>
          <Link href="#contact" className="text-sm font-medium tracking-wider hover:text-amber-600">
            CONTACT
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="mt-8 flex flex-col space-y-4">
              <Link
                href="#menu"
                className="text-lg font-medium tracking-wider transition-colors hover:text-amber-600"
              >
                MENU
              </Link>
              <Link
                href="#about"
                className="text-lg font-medium tracking-wider transition-colors hover:text-amber-600"
              >
                ABOUT
              </Link>
              <Link
                href="#reservation"
                className="text-lg font-medium tracking-wider transition-colors hover:text-amber-600"
              >
                RESERVATION
              </Link>
              <Link
                href="#contact"
                className="text-lg font-medium tracking-wider transition-colors hover:text-amber-600"
              >
                CONTACT
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
