"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
    role: string;
    email: string;
    region_name: string | null; // Peut être null si l'utilisateur n'a pas de région
}

export default function ValidationBDI() {
    const [requests, setRequests] = useState<User[]>([]);
    const [accepted, setAccepted] = useState<User[]>([]);

    // Fonction générique pour récupérer les utilisateurs
    const fetchUsers = async () => {
        try {
            const token = document.cookie.split("; ").find(row => row.startsWith("token="))?.split("=")[1];
    
            const [pendingRes, acceptedRes] = await Promise.all([
                fetch("http://localhost:1337/api/db/pending-users", {
                    headers: { Authorization: `Bearer ${token}` }
                }),
                fetch("http://localhost:1337/api/db/verified-users", {
                    headers: { Authorization: `Bearer ${token}` }
                })
            ]);
    
            if (!pendingRes.ok || !acceptedRes.ok) {
                throw new Error("Erreur lors de la récupération des utilisateurs");
            }
    
            const pendingData: User[] = await pendingRes.json();
            const acceptedData: User[] = await acceptedRes.json();
    
            setRequests(pendingData);
            setAccepted(acceptedData);
        } catch (error) {
            console.error("Erreur :", error);
        }
    };
    // Charger les utilisateurs au montage
    useEffect(() => {
        fetchUsers();
    }, []);

    // Fonction pour accepter un utilisateur
    const handleAccept = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:1337/api/db/verified-user`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, isVerified: true }),
            });

            if (!response.ok) {
                throw new Error("Erreur lors de la validation de l'utilisateur");
            }

            // Rafraîchir la liste complète
            fetchUsers();
        } catch (error) {
            console.error("Erreur :", error);
        }
    };

    // Fonction pour rejeter un utilisateur (juste en front)
    const handleReject = (id: number) => {
        setRequests((prev) => prev.filter((req) => req.id !== id));
    };

    return (
        <div className="p-4 h-screen">
            <div className="flex flex-col md:flex-row gap-4 min-h-[250px] mt-32 pb-32">
                {/* Demandes en attente */}
                <div className="border p-4 w-full md:w-1/2">
                    <h2 className="text-xl font-bold">Demandes en attente de validation ({requests.length})</h2>
                    <div className="mt-4 flex flex-col gap-2">
                        {requests.map((req) => (
                            <div key={req.id} className="border p-3 flex justify-between items-center">
                                <div>
                                    <p className="font-bold">{req.name}</p>
                                    <p className="text-sm">{req.role} - {req.region_name || "Aucune région"}</p>
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        onClick={() => handleAccept(req.id)}
                                        variant="success"
                                    >
                                        Accepter
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        onClick={() => handleReject(req.id)}
                                    >
                                        Refuser
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Utilisateurs acceptés */}
                <div className="border p-4 w-full md:w-1/2">
                    <h2 className="text-xl font-bold">Acceptés ({accepted.length})</h2>
                    <ul className="mt-4 flex flex-col gap-2">
                        {accepted.map((user) => (
                            <div key={user.id} className="border p-3">
                                <p className="font-bold">{user.name}</p>
                                <p className="text-sm">{user.role} - {user.region_name || "Aucune région"}</p>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}