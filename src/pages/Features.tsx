import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Users,
  GraduationCap,
  Calendar,
  CreditCard,
  MessageSquare,
  BarChart3,
  Shield,
  Cloud,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Users,
      title: 'Gestion des élèves',
      description: 'Interface professeur, étudiant et école. Base de données centralisée avec profils complets et accès instantané aux données.',
    },
    {
      icon: GraduationCap,
      title: 'Notes & Évaluations',
      description: 'Système de notation flexible avec export des notes en PDF. Bulletins automatisés et analyse de performance.',
    },
    {
      icon: Calendar,
      title: 'Présence via QR Code',
      description: 'Prise de présence instantanée par scan QR code. Export des présences en PDF et suivi en temps réel.',
    },
    {
      icon: BarChart3,
      title: 'Analyses & IA',
      description: 'Intelligence artificielle intégrée. Analyses avancées, prédictions et insights automatiques.',
    },
    {
      icon: MessageSquare,
      title: 'Communication',
      description: 'Messagerie intégrée, notifications push et portail parents-professeurs avec accès instantané.',
    },
    {
      icon: Shield,
      title: 'Support inclus',
      description: 'Support technique compris dans tous les plans. Assistance rapide et formation à la plateforme.',
    },
    {
      icon: Cloud,
      title: 'Cloud & Mobile',
      description: 'Accès depuis n\'importe où, synchronisation en temps réel. Données sécurisées dans le cloud.',
    },
    {
      icon: CreditCard,
      title: 'Export PDF',
      description: 'Exportez facilement notes, présences et rapports en PDF. Documents professionnels prêts à l\'emploi.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="gradient-hero pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">Fonctionnalités Complètes</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tout ce dont vous avez besoin pour gérer votre établissement scolaire de manière moderne et efficace. 
              Une plateforme tout-en-un qui simplifie chaque aspect de la gestion scolaire.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-smooth gradient-card border-primary/10">
                  <feature.icon className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Prêt à moderniser votre établissement ?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Découvrez comment Eduvate peut transformer la gestion de votre école avec l'intelligence artificielle.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/coming-soon">
                <Button size="lg" className="shadow-md hover:shadow-lg transition-smooth">
                  Découvrir la plateforme <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="shadow-sm hover:shadow-md transition-smooth">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
