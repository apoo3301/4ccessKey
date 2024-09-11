"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SignupForm } from '@/components/extern/signUpform'

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
                                    <SignupForm />
                                </Tabs>
                            </CardContent>
                        </Card>
                    </section>
                </div>
            </main>
        </div>
    )
}
