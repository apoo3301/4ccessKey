"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin } from 'lucide-react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from 'react'

export default function ContactPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Formulaire soumis:', { name, email, message })
    }

    return (
        <div className="h-screen flex flex-col bg-white text-black overflow-hidden">
            <main className="flex-grow">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight mb-4">
                            Contactez-nous
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 mb-8">
                            Nous sommes là pour répondre à vos questions et vous aider
                        </p>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-2">
                        <Card className="w-full">
                            <CardHeader>
                                <CardTitle className="text-2xl mb-4">Envoyez-nous un message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Nom</Label>
                                        <Input
                                            id="name"
                                            placeholder="Votre nom"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="votre@email.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Votre message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                            className="min-h-[100px]"
                                        />
                                    </div>
                                    <Button type="submit" className="w-full">Envoyer</Button>
                                </form>
                            </CardContent>
                        </Card>
                        <Card className="w-full">
                            <CardHeader>
                                <CardTitle className="text-2xl mb-4">Nos coordonnées</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Mail className="h-6 w-6 text-gray-400 flex-shrink-0" />
                                    <span className="text-sm sm:text-base">apoo1809@proton.me</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <MapPin className="h-6 w-6 text-gray-400 flex-shrink-0 mt-1" />
                                    <span className="text-sm sm:text-base">127.0.0.1</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}
