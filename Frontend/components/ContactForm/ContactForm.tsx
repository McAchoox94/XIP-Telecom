'use client';

import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { Checkbox } from '@/components/ui/checkbox';
import { useRouter } from 'next/navigation';
import { ComboBoxResponsive } from './ComboBoxResponsive';

interface ContactFormProps {
    showAction?: boolean;
    actionText?: string;
}
type Region = {
    label: string;
    value: string;
};

const ContactForm: React.FC<ContactFormProps> = ({ showAction = false, actionText = "Retour à l'accueil" }) => {
    const [loading, setLoading] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
    const { toast } = useToast();
    const router = useRouter();

    const options = [
        { id: 'telfixe', label: 'Téléphonie fixe' },
        { id: 'telvoip', label: 'Téléphonie VoiP' },
        { id: 'webacces', label: 'Accès internet (SDSL, Fibre, VPN)' },
        { id: 'conseilaudit', label: 'Conseil audit' },
    ];

    const handleRegionChange = (region: Region | null) => {
        setSelectedRegion(region); // Met à jour l'état quand la région change
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
    
        const formData = new FormData(e.currentTarget);
        const data: Record<string, string | string[]> = {};
        formData.forEach((value, key) => {
            if (data[key]) {
                if (Array.isArray(data[key])) {
                    data[key].push(value as string);
                } else {
                    data[key] = [data[key] as string, value as string];
                }
            } else {
                data[key] = value as string;
            }
        });
    
        if (selectedRegion) {
            data.region = selectedRegion.value;
        }

        console.log('Données du formulaire :', data);

        try {
            // Simuler un temps de chargement
            const startTime = performance.now();
            await new Promise((resolve) => setTimeout(resolve, 2500));
            const elapsed = performance.now() - startTime;
            console.log(`Temps écoulé pour l'envoi : ${elapsed}ms`);

            // Simuler l'envoi des données
            const response = await fetch('/api/send-message', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Une erreur est survenue lors de l\'envoi du message.');
            }

            // Afficher une notification de succès
            toast({
                variant: "success",
                title: "Message envoyé avec succès.",
                description:
                    "Votre message a bien été transmis à nos équipes. Vous serez recontacté dans les plus brefs délais.",
                ...(showAction && {
                    action: (
                        <ToastAction
                            onClick={() => router.push('/')}
                            altText={actionText}
                        >
                            {actionText}
                        </ToastAction>
                    ),
                }),
            });
        } catch (error) {
            // Afficher une notification d'erreur
            toast({
                variant: "destructive",
                title: "Erreur d'envoi.",
                description: `Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer. Erreur : ${error}`,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full py-32 px-4">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4">Contactez-nous</h1>
            <p className="leading-7 text-center mb-8">
                Vous avez une question ? Nos équipes sont là pour vous !
            </p>

            <form
                className="w-full max-w-lg bg-background p-6 rounded-lg shadow-md dark:shadow-border"
                onSubmit={handleSubmit}
            >
                {/* Informations personnelles */}
                <h2 className="text-2xl font-semibold mb-4">Informations personnelles</h2>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <div className="flex-1">
                        <Label htmlFor="nom">Votre NOM<span className="text-red-500 font-bold">*</span></Label>
                        <Input name="nom" required id="nom" type="text" placeholder="NOM" />
                    </div>
                    <div className="flex-1">
                        <Label htmlFor="prenom">Votre prénom<span className="text-red-500 font-bold">*</span></Label>
                        <Input name="prenom" required id="prenom" type="text" placeholder="Prénom" />
                    </div>
                </div>

                {/* Adresse mail */}
                <div className="mb-4">
                    <Label htmlFor="email">Adresse mail<span className="text-red-500 font-bold">*</span></Label>
                    <Input name="email" required id="email" type="email" placeholder="exemple@email.com" />
                </div>

                {/* Numéro de téléphone */}
                <div className="mb-4">
                    <Label htmlFor="telephone">Numéro de téléphone</Label>
                    <Input name="telephone" id="telephone" type="tel" placeholder="01 23 45 67 89" />
                </div>

                <hr className="my-6 bg-border" />

                {/* Informations professionnelles */}
                <h2 className="text-2xl font-semibold mb-4">Informations professionnelles</h2>
                <div className="flex-1">
                    <Label htmlFor="societe">Votre société<span className="text-red-500 font-bold">*</span></Label>
                    <Input name="societe" id="societe" required type="text" placeholder="Nom de votre société" />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-2 mb-2">
                    <div className="flex-1">
                        <Label htmlFor="activite">Activité</Label>
                        <Input name="activite" id="activite" type="text" />
                    </div>
                    <div className="flex-1">
                        <Label htmlFor="effectif">Effectif</Label>
                        <Input name="effectif" id="effectif" type="text" placeholder="" />
                    </div>
                </div>

                <hr className="my-6 bg-border" />

                {/* Raison de votre message */}
                <h2 className="text-2xl font-semibold mb-4">Raison de votre message</h2>
                <div className="mb-4">
                    <Label htmlFor="besoins">Vos besoins<span className="text-red-500 font-bold">*</span> :</Label>
                    <div className="space-y-3 mt-2 ml-4">
                        {options.map((option) => (
                            <div key={option.id} className="flex items-center space-x-2">
                                <Checkbox id={option.id} name="besoins" value={option.label} />
                                <Label htmlFor={option.id}>{option.label}</Label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <Label>Qui contacter<span className="text-red-500 font-bold">*</span> :</Label>
                    <ComboBoxResponsive onRegionChange={handleRegionChange} />
                </div>

                <div className='mb-4'>
                    <Label htmlFor="objet">Objet<span className="text-red-500 font-bold">*</span></Label>
                    <Input name="objet" required id="objet" type="text" placeholder="Objet du message" />
                </div>

                <div className="mb-4">
                    <Label htmlFor="message">Votre message<span className="text-red-500 font-bold">*</span></Label>
                    <Textarea name="message" id="message" className="resize-none h-36" placeholder="Contenu de votre message ici..." />
                </div>

                <div>
                    {!loading ? (
                        <Button
                            className="w-full bg-xip-orange-50 mt-2"
                            type="submit"
                        >
                            Envoyer
                        </Button>
                    ) : (
                        <Button className="w-full bg-xip-orange-50 mt-2 hover:cursor-not-allowed" disabled>
                            <Loader2 className="animate-spin mr-2" /> Envoi en cours...
                        </Button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default ContactForm;