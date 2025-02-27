'use client';

import ContactForm from '@/components/ContactForm/ContactForm';

export default function ContactPage() {
    return (
        <div>
            <ContactForm showAction={true} actionText="Retourner à l'accueil" />
        </div>
    );
}