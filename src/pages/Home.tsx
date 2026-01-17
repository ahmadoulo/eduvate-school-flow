import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  ArrowRight, Brain, Clock, Users, QrCode, Calendar, Bell, FileText, 
  Shield, Video, BookOpen, DoorOpen, Zap, GraduationCap, CheckCircle2,
  Sparkles, ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

const Home = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    { icon: Users, title: 'Gestion complète', desc: 'Étudiants, professeurs, classes, admissions — tout centralisé' },
    { icon: Brain, title: 'IA intégrée', desc: 'Emplois du temps et bulletins générés automatiquement' },
    { icon: Clock, title: 'Calcul automatique', desc: 'Heures de cours et séances professeurs calculées en temps réel' },
    { icon: FileText, title: 'Documents admin', desc: 'Générateur de documents administratifs — fini les tâches manuelles' },
    { icon: QrCode, title: 'Présence QR', desc: 'Scan QR pour présence étudiants et événements' },
    { icon: Calendar, title: 'Emplois du temps', desc: 'Génération automatique intelligente des plannings' },
    { icon: Bell, title: 'Notifications', desc: 'Alertez étudiants, parents et profs en un clic' },
    { icon: Video, title: 'Caméras', desc: 'Visualisez les caméras de surveillance de l\'école' },
    { icon: Shield, title: 'Examens sécurisés', desc: 'Examens en ligne avec détection de triche avancée' },
    { icon: BookOpen, title: 'Cahier de texte', desc: 'Cahier de texte digitalisé et accessible' },
    { icon: DoorOpen, title: 'Gestion salles', desc: 'Vérification disponibilité et réservation de salles' },
    { icon: GraduationCap, title: 'Bulletins auto', desc: 'Génération automatique des bulletins scolaires' },
  ];

  const steps = [
    { num: '01', title: 'Inscription', desc: 'Créez votre compte école en quelques minutes' },
    { num: '02', title: 'Configuration', desc: 'Importez vos données et configurez vos paramètres' },
    { num: '03', title: 'Activation', desc: 'L\'IA configure automatiquement votre environnement' },
    { num: '04', title: 'Utilisation', desc: 'Gérez votre école depuis un seul tableau de bord' },
  ];

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
    { q: t('faq.q6'), a: t('faq.a6') },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[150px] opacity-50" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 mb-8"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Plateforme IA de gestion scolaire</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-foreground">La gestion scolaire</span>
                <br />
                <span className="gradient-text text-glow">réinventée par l'IA</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Une plateforme tout-en-un pour gérer étudiants, professeurs, emplois du temps, 
                finances, examens et documents — le tout automatisé par l'intelligence artificielle.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://platform.eduvate.app" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-primary/40 glow-primary transition-all duration-300">
                    Accéder à la plateforme
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg glass border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                    Demander une démo
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              {[
                { value: '100%', label: 'Automatisé' },
                { value: 'IA', label: 'Intégrée' },
                { value: '24/7', label: 'Accessible' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Tout ce dont vous avez <span className="gradient-text">besoin</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Une suite complète d'outils pour gérer votre établissement efficacement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="feature-card group"
              >
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Comment ça <span className="gradient-text">marche</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="text-6xl font-bold gradient-text opacity-30 mb-4">{step.num}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent -translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center glass-strong rounded-3xl p-12 border-primary/20"
          >
            <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('finalCta.title')}</h2>
            <p className="text-muted-foreground text-lg mb-8">{t('finalCta.subtitle')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://platform.eduvate.app" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                  Commencer maintenant <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="glass">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('faq.title')}</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-primary/5 transition-colors"
                >
                  <span className="font-semibold text-foreground">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-muted-foreground">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;