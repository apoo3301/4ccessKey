import React, { useState } from 'react'
import { TabsContent } from '../ui/tabs'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

function SignInForm() {
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
    )
}

export default SignInForm