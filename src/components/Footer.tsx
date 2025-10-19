import { useTranslation } from 'react-i18next';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-muted/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-bold text-primary">
              <GraduationCap className="w-8 h-8" />
              <span>Eduvate</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Produit</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="text-muted-foreground hover:text-primary transition-smooth">Fonctionnalités</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-smooth">Tarifs</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">Démo</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth">À propos</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Légal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Mentions légales</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Confidentialité</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">CGU</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Eduvate. {t('footer.rights')}.</p>
          <p className="mt-2">
            {t('footer.createdBy')}{' '}
            <a
              href="https://senovate-it.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Senovate IT
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
