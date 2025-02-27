"use client";

import * as React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Region = {
  id: string;
  name: string;
};

export function ComboBoxResponsive({
  onRegionSelect,
}: {
  onRegionSelect: (region: string) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedRegion, setSelectedRegion] = React.useState<Region | null>(null);
  const [regions, setRegions] = React.useState<Region[]>([]);

  React.useEffect(() => {
    fetch("http://localhost:1337/regions")
      .then((res) => res.json())
      .then((data) => setRegions(data))
      .catch((err) => console.error("Erreur lors du fetch des régions :", err));
  }, []);

  const handleRegionSelect = (region: Region | null) => {
    setSelectedRegion(region);
    setOpen(false);
    if (region) {
      console.log("ID de la région sélectionnée:", region.id); // Vérification
      onRegionSelect(region.id); // On envoie l'ID au parent
    }
  };
  

  return isDesktop ? (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          {selectedRegion ? selectedRegion.name : "Sélectionnez votre région"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <RegionList regions={regions} onRegionSelect={handleRegionSelect} />
      </PopoverContent>
    </Popover>
  ) : (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          {selectedRegion ? selectedRegion.name : "+ Sélectionnez votre région"}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <RegionList regions={regions} onRegionSelect={handleRegionSelect} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function RegionList({
  regions,
  onRegionSelect,
}: {
  regions: Region[];
  onRegionSelect: (region: Region | null) => void;
}) {
  return (
    <Command>
      <CommandInput placeholder="Rechercher votre région..." />
      <CommandList>
        <CommandEmpty>Aucun résultat trouvé.</CommandEmpty>
        <CommandGroup>
          {regions.map((region) => (
            <CommandItem
              key={region.id}
              value={region.id}
              onSelect={() => onRegionSelect(region)} // Passe l'objet entier
            >
              {region.name}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
