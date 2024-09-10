import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { MenuIcon, SearchIcon } from 'lucide-react'

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0">
                <span className="text-2xl font-bold text-black">4ccesskey</span>
              </a>
              <nav className="hidden md:ml-10 md:flex md:space-x-8">
                <a href="/docs" className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Documentation</a>
                <a href="/contact" className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Contact</a>
                <a href="/about" className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">À propos</a>
              </nav>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <Button variant="ghost" size="sm">
                  <SearchIcon className="h-5 w-5 text-black" />
                </Button>
                <Button variant="outline" className='text-black' size="sm">
                🟢 API Active
                </Button>
              </div>
            </div>
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MenuIcon className="h-6 w-6 text-black" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    <a href="/docs" className="flex w-full">Documentation</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/contact" className="flex w-full">Contact</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/about" className="flex w-full">À propos</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header