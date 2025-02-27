"use client";

import React, { useState, useEffect } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast"; // Import du hook de toast
import userIcon from "@/public/user.png";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { useTheme } from "next-themes"; // Import du hook useTheme
import { BriefcaseBusinessIcon, Contact, LogInIcon, LogOutIcon, Moon, Sun, UserRoundPlus } from "lucide-react";

const ProfileMenu = () => {
    const { user, logout } = useAuth();
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(true);
    const { theme, setTheme } = useTheme(); // Utilisation du hook useTheme

    const avatarSrc = user ? `https://avatar.vercel.sh/${user.name}?rounded=60` : userIcon;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 750);

        return () => clearTimeout(timer);
    }, []);

    const handleLogout = () => {
        logout();
        toast({
            variant: "success",
            title: "Déconnecté avec succès",
            description: "À bientôt !",
        });
    };

    const handleThemeToggle = () => {
        // Bascule entre 'dark' et 'light', en respectant le thème système
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Image
                    src={avatarSrc}
                    alt="User profile"
                    width={34}
                    height={34}
                    className="cursor-pointer rounded-full transition-opacity duration-300"
                />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-48 p-2 shadow-md rounded-md">
                {isLoading ? (
                    <>
                        <DropdownMenuLabel>
                            <Skeleton className="w-full h-5" />
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Skeleton className="w-full h-8 my-1" />
                        <Skeleton className="w-full h-8 my-1" />
                        <Skeleton className="w-full h-8 my-1" />
                    </>
                ) : user ? (
                    <>
                        <DropdownMenuLabel>
                            <p>{user.name}</p>
                        </DropdownMenuLabel>

                        <DropdownMenuSeparator />

                        {(user.role === "president" || user.role === "directeur_agence") && (
                            <DropdownMenuItem asChild className="cursor-pointer">
                                <Link href="/validation-bdi" className="flex gap-2 items-center">
                                    <Contact/> Gérer les BDI
                                </Link>
                            </DropdownMenuItem>
                        )}

                        <DropdownMenuItem asChild className="cursor-pointer">
                            <Link className="flex gap-2 items-center" target="_blank" href="http://localhost:8069">
                                <BriefcaseBusinessIcon/> Extranet
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        {/* Item pour basculer entre les thèmes */}
                        <DropdownMenuItem onClick={handleThemeToggle} className="cursor-pointer flex gap-2 items-center">
                            {theme === "dark" ? (
                                <>
                                    <Sun /> Mode clair
                                </>
                            ) : (
                                <>
                                    <Moon /> Mode sombre
                                </>
                            )}
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem className="text-destructive cursor-pointer flex gap-2 items-center" onClick={handleLogout}>
                            <LogOutIcon/> Se déconnecter
                        </DropdownMenuItem>

                    </>
                ) : (
                    <>
                        <DropdownMenuLabel>Bienvenue</DropdownMenuLabel>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem asChild className="cursor-pointer">
                            <Link className="flex gap-2 items-center" href="/log">
                                <LogInIcon/> Se connecter
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild className="cursor-pointer">
                            <Link className="flex gap-2 items-center" href="/creation_compte">
                                <UserRoundPlus/> Créer un compte
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        {/* Item pour basculer entre les thèmes */}
                        <DropdownMenuItem onClick={handleThemeToggle} className="cursor-pointer flex gap-2 items-center">
                            {theme === "dark" ? (
                                <>
                                    <Sun /> Mode clair
                                </>
                            ) : (
                                <>
                                    <Moon /> Mode sombre
                                </>
                            )}
                        </DropdownMenuItem>
                    </>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ProfileMenu;