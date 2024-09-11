"use client"

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MenuIcon, SearchIcon, Users, Rocket, History } from 'lucide-react'

const AboutPage = () => {
    const [scrollDisabled, setScrollDisabled] = useState(true);
    useEffect(() => {
        document.body.style.overflow = scrollDisabled ? 'hidden' : 'auto';
      }, [scrollDisabled]);

    return (
        <div className="h-screen flex flex-col bg-white text-black overflow-hidden">
            <main className="flex-1 overflow-hidden">
                <div className="h-full overflow-auto bg-gradient-to-b from-gray-50 to-white">
                    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                        <div className="max-w-3xl mx-auto text-center mb-12">
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-black tracking-tight mb-4">
                                Découvrez MonApp
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Innovons ensemble pour un avenir numérique meilleur
                            </p>
                        </div>
                        <div className="grid gap-8 md:grid-cols-3">
                            <Card className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
                                <CardHeader>
                                    <History className="w-12 h-12 mb-4" />
                                    <CardTitle className="text-2xl">Notre Histoire</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-100">Depuis 2023, MonApp transforme la façon dont les gens interagissent avec la technologie. Notre parcours est marqué par l'innovation constante et l'engagement envers nos utilisateurs.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-gradient-to-br from-green-500 to-teal-600 text-white">
                                <CardHeader>
                                    <Rocket className="w-12 h-12 mb-4" />
                                    <CardTitle className="text-2xl">Notre Mission</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-100">Nous nous efforçons de créer des solutions technologiques intuitives qui améliorent la vie quotidienne. Notre objectif est de rendre la technologie accessible et bénéfique pour tous.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-gradient-to-br from-pink-500 to-red-600 text-white">
                                <CardHeader>
                                    <Users className="w-12 h-12 mb-4" />
                                    <CardTitle className="text-2xl">Notre Équipe</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-100">Derrière MonApp se trouve une équipe diversifiée de passionnés. Nos talents variés convergent vers un objectif commun : créer des produits exceptionnels pour nos utilisateurs.</p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="mt-16 text-center">
                            <h2 className="text-3xl font-bold mb-6">Rejoignez l'aventure MonApp</h2>
                            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                Nous sommes toujours à la recherche de nouveaux talents pour enrichir notre équipe et contribuer à notre mission.
                            </p>
                            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                Postulez maintenant
                            </Button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default AboutPage
