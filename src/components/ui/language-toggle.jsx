import { LuEarth } from 'react-icons/lu';
import { Button } from '@/components/ui/button.jsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.jsx';
import { useLanguage } from '@/components/ui/language-provider.jsx';
import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const { i18n } = useTranslation();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-transparent" size="icon">
          <LuEarth className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem
          onClick={() => {
            setLanguage('en');
            localStorage.setItem('language', 'en');
            i18n.changeLanguage('en');
          }}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setLanguage('tr');
            localStorage.setItem('language', 'tr');
            i18n.changeLanguage('tr');
          }}
        >
          Türkçe
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
