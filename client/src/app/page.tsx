"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GithubIcon, MailIcon, MenuIcon, SearchIcon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login avec:', email, password)
  }

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Inscription avec:', name, email, password)
  }

  return (
    <div className="h-screen flex flex-col bg-white text-black overflow-hidden">
      <header className="flex-shrink-0 border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0">
                <span className="text-2xl font-bold text-black">4ccess CRM</span>
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
                Bienvenue sur le Dashboard
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Connectez-vous ou créez un compte pour commencer votre expérience.
              </p>
            </div>
            <Card className="w-full max-w-md mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
              <CardHeader className="p-6 bg-gray-50 border-b">
                <CardTitle className="text-2xl font-bold text-center text-black">Authentification</CardTitle>
                <CardDescription className="text-center text-gray-600">Connectez-vous ou créez un compte</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="login">Connexion</TabsTrigger>
                    <TabsTrigger value="signup">Inscription</TabsTrigger>
                  </TabsList>
                  <TabsContent value="login">
                    <form onSubmit={handleLogin}>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="login-email" className="text-sm font-medium text-gray-700">Email</Label>
                          <Input 
                            id="login-email" 
                            placeholder="votre@email.com" 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                            className="w-full"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="login-password" className="text-sm font-medium text-gray-700">Mot de passe</Label>
                          <Input 
                            id="login-password" 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                            className="w-full"
                          />
                        </div>
                      </div>
                      <Button className="w-full mt-6" type="submit">Se connecter</Button>
                    </form>
                  </TabsContent>
                  <TabsContent value="signup">
                    <form onSubmit={handleSignup}>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="signup-name" className="text-sm font-medium text-gray-700">Nom</Label>
                          <Input 
                            id="signup-name" 
                            placeholder="Votre nom" 
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required 
                            className="w-full"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="signup-email" className="text-sm font-medium text-gray-700">Email</Label>
                          <Input 
                            id="signup-email" 
                            placeholder="votre@email.com" 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                            className="w-full"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="signup-password" className="text-sm font-medium text-gray-700">Mot de passe</Label>
                          <Input 
                            id="signup-password" 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                            className="w-full"
                          />
                        </div>
                      </div>
                      <Button className="w-full mt-6" type="submit">S'inscrire</Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      <footer className="flex-shrink-0 bg-gray-50 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="text-center text-sm text-gray-500">
            © 2023 MonApp. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  )
}