import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Globe, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <GraduationCap className="w-8 h-8" />
            <span>Eduvate</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground/80 hover:text-primary transition-smooth">
              {t('nav.home')}
            </Link>
            <Link to="/features" className="text-foreground/80 hover:text-primary transition-smooth">
              {t('nav.features')}
            </Link>
            <Link to="/pricing" className="text-foreground/80 hover:text-primary transition-smooth">
              {t('nav.pricing')}
            </Link>
            <Link to="/about" className="text-foreground/80 hover:text-primary transition-smooth">
              {t('nav.about')}
            </Link>
            <Link to="/contact" className="text-foreground/80 hover:text-primary transition-smooth">
              {t('nav.contact')}
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => changeLanguage('fr')}>
                  🇫🇷 Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('en')}>
                  🇬🇧 English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('es')}>
                  🇪🇸 Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>

            <a href="https://dash.eduvate.io" target="_blank" rel="noopener noreferrer">
              <Button className="shadow-md hover:shadow-lg transition-smooth">{t('nav.login')}</Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
