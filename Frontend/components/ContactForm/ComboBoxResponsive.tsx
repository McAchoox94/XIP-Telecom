"use client"

import * as React from "react"

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ChevronDown } from "lucide-react";

type Region = {
  value: string
  label: string
}

const regions = [
  { value: "auvergne-rhone-alpes", label: "Auvergne-Rhône-Alpes - auvergne-rhone-alpes@xip-telecom.com" },
  { value: "bourgogne-franche-comte", label: "Bourgogne-Franche-Comté - bourgogne-franche-comte@xip-telecom.com" },
  { value: "bretagne", label: "Bretagne - bretagne@xip-telecom.com" },
  { value: "centre-val-de-loire", label: "Centre-Val de Loire - centre-val-de-loire@xip-telecom.com" },
  { value: "corse", label: "Corse - corse@xip-telecom.com" },
  { value: "grand-est", label: "Grand Est - grand-est@xip-telecom.com" },
  { value: "hauts-de-france", label: "Hauts-de-France - hauts-de-france@xip-telecom.com" },
  { value: "ile-de-france", label: "Île-de-France - ile-de-france@xip-telecom.com" },
  { value: "normandie", label: "Normandie - normandie@xip-telecom.com" },
  { value: "nouvelle-aquitaine", label: "Nouvelle-Aquitaine - nouvelle-aquitaine@xip-telecom.com" },
  { value: "occitanie", label: "Occitanie - occitanie@xip-telecom.com" },
  { value: "pays-de-la-loire", label: "Pays de la Loire - pays-de-la-loire@xip-telecom.com" },
  { value: "provence-alpes-cote-d-azur", label: "Provence-Alpes-Côte d'Azur - provence-alpes-cote-d-azur@xip-telecom.com" },
  { value: "guadeloupe", label: "Guadeloupe - guadeloupe@xip-telecom.com" },
  { value: "martinique", label: "Martinique - martinique@xip-telecom.com" },
  { value: "guyane", label: "Guyane - guyane@xip-telecom.com" },
  { value: "la-reunion", label: "La Réunion - la-reunion@xip-telecom.com" },
  { value: "mayotte", label: "Mayotte - mayotte@xip-telecom.com" },
];

export function ComboBoxResponsive({
  onRegionChange,
}: {
  onRegionChange: (region: Region | null) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedRegion, setSelectedRegion] = React.useState<Region | null>(
    null
  );

  const handleRegionSelect = (region: Region | null) => {
    setSelectedRegion(region);
    setOpen(false);
    onRegionChange(region); // Notifie le parent
  };

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-start">
            {selectedRegion ? (
              <>{selectedRegion.label}</>
            ) : (
              <div className="flex items-center gap-2">
                <ChevronDown /> Sélectionnez votre région...
              </div>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <RegionList
            setOpen={setOpen}
            onRegionSelect={handleRegionSelect}
          />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          {selectedRegion ? (
            <>{selectedRegion.label}</>
          ) : (
            <>+ Sélectionnez votre région</>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <RegionList
            setOpen={setOpen}
            onRegionSelect={handleRegionSelect}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function RegionList({
  onRegionSelect,
}: {
  setOpen: (open: boolean) => void;
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
              key={region.value}
              value={region.value}
              onSelect={(value) => {
                onRegionSelect(regions.find((r) => r.value === value) || null);
              }}
            >
              {region.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}