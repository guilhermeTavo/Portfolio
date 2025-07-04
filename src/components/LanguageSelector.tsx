import { Button } from "@/components/ui/button";
import { useLanguage, Language } from "@/hooks/useLanguage";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  return (
    <div className="flex gap-2">
      {languages.map(({ code, name, flag }) => (
        <Button
          key={code}
          variant={language === code ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage(code)}
          className="hover-lift"
        >
          <span className="mr-1">{flag}</span>
          <span className="hidden sm:inline">{name}</span>
          <span className="sm:hidden">{code.toUpperCase()}</span>
        </Button>
      ))}
    </div>
  );
};

export default LanguageSelector;