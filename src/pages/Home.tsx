import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  ArrowRight, Brain, Clock, Users, QrCode, Calendar, Bell, FileText, 
  Shield, Video, BookOpen, DoorOpen, Zap, GraduationCap, CheckCircle2,
  Sparkles, ChevronDown, BarChart3, CreditCard, Settings, Eye,
  MousePointer, Layers, Target, TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useRef } from 'react';

const Home = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    { icon: Users, title: 'Gestion complète', desc: 'Étudiants, professeurs, classes, admissions — tout centralisé dans une seule interface intuitive', color: 'from-blue-500 to-cyan-500' },
    { icon: Brain, title: 'IA intégrée', desc: 'Emplois du temps et bulletins générés automatiquement par intelligence artificielle', color: 'from-purple-500 to-pink-500' },
    { icon: Clock, title: 'Calcul automatique', desc: 'Heures de cours et séances professeurs calculées en temps réel sans intervention manuelle', color: 'from-orange-500 to-red-500' },
    { icon: FileText, title: 'Documents admin', desc: 'Générateur de documents administratifs — certificats, attestations, lettres en un clic', color: 'from-green-500 to-emerald-500' },
    { icon: QrCode, title: 'Présence QR', desc: 'Scan QR pour présence étudiants et événements — rapide, fiable, sécurisé', color: 'from-cyan-500 to-blue-500' },
    { icon: Calendar, title: 'Emplois du temps', desc: 'Génération automatique intelligente des plannings avec gestion des conflits', color: 'from-indigo-500 to-purple-500' },
    { icon: Bell, title: 'Notifications', desc: 'Alertez étudiants, parents et profs en un clic — SMS, email, push', color: 'from-yellow-500 to-orange-500' },
    { icon: Video, title: 'Caméras', desc: 'Visualisez les caméras de surveillance de l\'école en temps réel', color: 'from-rose-500 to-pink-500' },
    { icon: Shield, title: 'Examens sécurisés', desc: 'Examens en ligne avec détection de triche avancée par IA', color: 'from-red-500 to-rose-500' },
    { icon: BookOpen, title: 'Cahier de texte', desc: 'Cahier de texte digitalisé accessible par élèves et parents', color: 'from-teal-500 to-cyan-500' },
    { icon: DoorOpen, title: 'Gestion salles', desc: 'Vérification disponibilité et réservation de salles en temps réel', color: 'from-violet-500 to-purple-500' },
    { icon: GraduationCap, title: 'Bulletins auto', desc: 'Génération automatique des bulletins scolaires avec moyennes et appréciations', color: 'from-emerald-500 to-teal-500' },
  ];

  const stats = [
    { icon: BarChart3, value: '12+', label: 'Modules intégrés', desc: 'Gestion complète' },
    { icon: Zap, value: '100%', label: 'Automatisé', desc: 'Zéro tâche manuelle' },
    { icon: Shield, value: '24/7', label: 'Accessible', desc: 'Cloud sécurisé' },
    { icon: Brain, value: 'IA', label: 'Intégrée', desc: 'Intelligence artificielle' },
  ];

  const steps = [
    { num: '01', title: 'Inscription', desc: 'Créez votre compte école en quelques minutes', icon: MousePointer },
    { num: '02', title: 'Configuration', desc: 'Importez vos données et configurez vos paramètres', icon: Settings },
    { num: '03', title: 'Activation', desc: 'L\'IA configure automatiquement votre environnement', icon: Zap },
    { num: '04', title: 'Utilisation', desc: 'Gérez votre école depuis un seul tableau de bord', icon: Layers },
  ];

  const benefits = [
    { icon: Target, title: 'Gain de temps', desc: 'Réduisez 80% des tâches administratives répétitives' },
    { icon: TrendingUp, title: 'Performance', desc: 'Suivez les résultats et performances en temps réel' },
    { icon: Eye, title: 'Visibilité', desc: 'Vue d\'ensemble complète de votre établissement' },
    { icon: CreditCard, title: 'Économies', desc: 'Réduisez les coûts liés à la paperasse' },
  ];

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
    { q: t('faq.q6'), a: t('faq.a6') },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[100vh] flex items-center pt-16 md:pt-20">
        {/* Animated background */}
        <div className="absolute inset-0 bg-grid opacity-20" />
        <motion.div 
          className="absolute top-20 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/30 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-cyan-500/20 rounded-full blur-[100px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6 md:mb-8"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-xs md:text-sm font-medium text-primary">Plateforme IA de gestion scolaire #1</span>
              </motion.div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-[1.1]">
                <motion.span 
                  className="block text-foreground"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  La gestion scolaire
                </motion.span>
                <motion.span 
                  className="block gradient-text text-glow mt-2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  réinventée par l'IA
                </motion.span>
              </h1>

              {/* Subtitle */}
              <motion.p 
                className="text-base md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Gérez étudiants, professeurs, emplois du temps, finances, examens et documents — 
                le tout automatisé par l'intelligence artificielle. Fini les casse-têtes administratifs.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 text-base md:text-lg bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300">
                    Commencer maintenant
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="https://platform.eduvate.app" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 text-base md:text-lg glass border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-300">
                    Voir la plateforme
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto px-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-2xl p-4 md:p-6 border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2 md:mb-3" />
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm font-medium text-foreground">{stat.label}</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground mt-1">{stat.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Pourquoi Eduvate</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
              Transformez votre <span className="gradient-text">établissement</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Des résultats concrets pour votre école dès le premier jour
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-strong rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/30 group transition-all duration-500"
              >
                <motion.div 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Fonctionnalités</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
              Tout ce dont vous avez <span className="gradient-text">besoin</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              12+ modules puissants pour une gestion scolaire complète
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="feature-card group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-10 w-fit mb-4`}>
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Processus</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
              Comment ça <span className="gradient-text">marche</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Démarrez en quelques minutes, pas en quelques semaines
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <motion.div 
                  className="glass-strong rounded-2xl p-6 md:p-8 text-center border border-border/50 hover:border-primary/30 transition-all duration-300"
                  whileHover={{ y: -10 }}
                >
                  <div className="text-5xl md:text-6xl font-bold gradient-text opacity-20 mb-4">{step.num}</div>
                  <motion.div 
                    className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <step.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </motion.div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="max-w-4xl mx-auto text-center glass-strong rounded-3xl p-8 md:p-16 border border-primary/20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Zap className="w-12 h-12 md:w-16 md:h-16 text-primary" />
            </motion.div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">{t('finalCta.title')}</h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-2xl mx-auto">{t('finalCta.subtitle')}</p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
            >
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto h-12 md:h-14 px-8 text-lg bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30 hover:scale-105 transition-all duration-300">
                  Commencer maintenant <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-4">{t('faq.title')}</h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-strong rounded-2xl overflow-hidden border border-border/50 hover:border-primary/20 transition-colors duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 hover:bg-primary/5 transition-colors"
                >
                  <span className="font-semibold text-sm md:text-base text-foreground">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-muted-foreground">{faq.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;