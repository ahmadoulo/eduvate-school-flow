import { motion } from 'framer-motion';
import { GraduationCap, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-2xl font-bold text-primary mb-4">
            <GraduationCap className="w-10 h-10" />
            <span>Eduvate</span>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Connexion</h1>
          <p className="text-muted-foreground">Accédez à votre espace Eduvate</p>
        </div>

        <Card className="p-8 gradient-card border-primary/10">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input type="email" placeholder="votre@email.fr" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Mot de passe</label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Se souvenir de moi</span>
              </label>
              <a href="#" className="text-primary hover:underline">
                Mot de passe oublié ?
              </a>
            </div>
            <Button className="w-full gradient-primary shadow-glow">
              Se connecter
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
              Pas encore de compte ?{' '}
              <Link to="/contact" className="text-primary hover:underline font-medium">
                Demander une démo
              </Link>
            </p>
          </div>
        </Card>

        <div className="text-center mt-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth">
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
