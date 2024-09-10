"use client"

import { type SignupInput, SignupSchema } from "@/validators/signUpValidator"
import { useForm } from "react-hook-form"
import { valibotResolver } from "@hookform/resolvers/valibot"

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { TabsContent } from '../ui/tabs'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

function SignUpForm() {
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
                    <div className="space-y-2">
                        <Label htmlFor="signup-password" className="text-sm font-medium text-gray-700">Confirm Mot de passe</Label>
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
    )
}

export default SignUpForm