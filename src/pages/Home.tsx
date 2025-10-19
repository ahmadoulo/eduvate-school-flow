import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Users, Building2, Globe2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import heroDashboard from '@/assets/hero-dashboard.jpg';

const Home = () => {
  const { t } = useTranslation();

  const stats = [
    { number: '500+', label: t('stats.schools'), icon: Building2 },
    { number: '50K+', label: t('stats.students'), icon: Users },
    { number: '15+', label: t('stats.countries'), icon: Globe2 },
  ];

  const features = [
    'Gestion des inscriptions en temps réel',
    'Suivi personnalisé des notes et évaluations',
    'Emplois du temps automatisés',
    'Communication parents-professeurs',
    'Tableaux de bord analytics',
    'Paiements en ligne sécurisés',
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20 px-4 min-h-[85vh] flex items-center">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-4 px-4 py-2 rounded-full bg-muted text-sm font-medium"
              >
                Eduvate.io
              </motion.div>
              <h1 className="font-bold mb-6 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-lg mb-10 max-w-lg">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="shadow-md hover:shadow-lg transition-smooth text-base px-8 h-12">
                    {t('hero.cta')} <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="shadow-sm hover:shadow-md transition-smooth text-base px-8 h-12">
                    {t('hero.demo')}
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent blur-3xl rounded-full"></div>
              <img
                src={heroDashboard}
                alt="Eduvate Dashboard - Plateforme cloud de gestion scolaire moderne"
                className="relative rounded-xl shadow-2xl w-full border border-border/50"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">{t('features.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('features.subtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-smooth gradient-card border-primary/10">
                  <Check className="w-8 h-8 text-primary mb-4" />
                  <p className="font-medium">{feature}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/features">
              <Button variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-smooth">
                Découvrir toutes les fonctionnalités <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">
              Prêt à transformer votre établissement ?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Rejoignez des centaines d'écoles qui ont choisi Eduvate pour simplifier leur gestion quotidienne.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="shadow-lg hover:shadow-xl transition-smooth">
                Démarrer gratuitement <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
