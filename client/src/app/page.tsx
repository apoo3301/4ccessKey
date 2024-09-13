import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MailIcon, MenuIcon, SearchIcon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-white text-black overflow-hidden">
      <header className="flex-shrink-0 border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0">
                <span className="text-2xl font-bold text-black">MonApp</span>
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
                  <SearchIcon className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm">
                🟢 API Status
                </Button>
              </div>
            </div>
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MenuIcon className="h-6 w-6" />
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
      <main className="flex-1 overflow-hidden">
        <div className="h-full overflow-auto bg-gradient-to-b from-gray-50 to-white">
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-black tracking-tight mb-4">
                Bienvenue sur MonApp
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Connectez-vous ou créez un compte pour commencer votre expérience.
              </p>
            </div>
          </section>
        </div>
      </main>
      <footer className="flex-shrink-0 bg-gray-50 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-gray-500">
            © 2023 MonApp. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  )
}