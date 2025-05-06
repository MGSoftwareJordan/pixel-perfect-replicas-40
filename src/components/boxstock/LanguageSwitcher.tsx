
import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const LanguageSwitcher: React.FC = () => {
  const languages: Language[] = [
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ];

  const [currentLang, setCurrentLang] = useState<Language>(languages[0]);

  const handleLanguageChange = (lang: Language) => {
    if (lang.code === currentLang.code) return;
    
    setCurrentLang(lang);
    // Here you would typically implement actual language change functionality
    console.log(`Language changed to ${lang.name}`);
    
    // Notify the user that the language was changed
    toast.success(`Taal gewijzigd naar ${lang.name}`, {
      position: "top-right",
      duration: 3000,
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-[#00262F] hover:text-[#1EC0A3] transition-colors">
        <Globe size={16} />
        <span className="text-sm font-medium">{currentLang.code.toUpperCase()}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((lang) => (
          <DropdownMenuItem 
            key={lang.code}
            className={`flex items-center gap-2 ${lang.code === currentLang.code ? 'bg-gray-100' : ''}`}
            onClick={() => handleLanguageChange(lang)}
          >
            <span className="text-base">{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
