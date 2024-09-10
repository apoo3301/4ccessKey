"use client"

import { useEffect, useState } from 'react'
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
import SignInForm from '@/components/externe/signInForm'
import SignUpForm from '@/components/externe/signUpForm'

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

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
      <main className="flex-1 overflow-hidden">
        <div className="h-full overflow-auto bg-gradient-to-b from-gray-50 to-white">
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-black tracking-tight mb-4">
                Bienvenue sur 4ccesskey
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
                  <SignInForm />
                  <SignUpForm />
                </Tabs>
              </CardContent>
              {/* <CardFooter className="p-6 bg-gray-50 border-t">
                <div className="w-full">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-gray-50 text-gray-500">Ou continuer avec</span>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full">
                      <GithubIcon className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                    <Button variant="outline" className="w-full">
                      <MailIcon className="mr-2 h-4 w-4" />
                      Google
                    </Button>
                  </div>
                </div>
              </CardFooter> */}
            </Card>
          </section>
        </div>
      </main>
    </div>
  )
}