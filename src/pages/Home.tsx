import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  ArrowRight, Brain, Clock, Users, QrCode, Calendar, Bell, FileText, 
  Shield, Video, BookOpen, DoorOpen, Zap, GraduationCap,
  Sparkles, ChevronDown, BarChart3, Settings,
  MousePointer, Layers, Target, TrendingUp, Eye, CreditCard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useRef } from 'react';

// Composant pour les cards avec animation au scroll
const AnimatedCard = ({ children, index, className }: { children: React.ReactNode; index: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.08,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    { icon: Users, title: 'Gestion complète', desc: 'Étudiants, professeurs, classes, admissions — tout centralisé' },
    { icon: Brain, title: 'IA intégrée', desc: 'Emplois du temps et bulletins générés automatiquement' },
    { icon: Clock, title: 'Calcul automatique', desc: 'Heures et séances calculées en temps réel' },
    { icon: FileText, title: 'Documents admin', desc: 'Certificats, attestations, lettres en un clic' },
    { icon: QrCode, title: 'Présence QR', desc: 'Scan QR pour présence étudiants et événements' },
    { icon: Calendar, title: 'Emplois du temps', desc: 'Génération automatique avec gestion des conflits' },
    { icon: Bell, title: 'Notifications', desc: 'Alertez étudiants, parents et profs — SMS, email, push' },
    { icon: Video, title: 'Caméras', desc: 'Visualisez les caméras de surveillance en temps réel' },
    { icon: Shield, title: 'Examens sécurisés', desc: 'Examens en ligne avec détection de triche IA' },
    { icon: BookOpen, title: 'Cahier de texte', desc: 'Digitalisé et accessible par élèves et parents' },
    { icon: DoorOpen, title: 'Gestion salles', desc: 'Réservation et vérification de disponibilité' },
    { icon: GraduationCap, title: 'Bulletins auto', desc: 'Génération automatique avec moyennes' },
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

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-16 md:pt-20">
        {/* Animated background */}
        <div className="absolute inset-0 bg-grid opacity-20" />
        <motion.div 
          className="absolute top-20 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/20 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-1/4 w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-primary/15 rounded-full blur-[100px]"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
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
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-xs md:text-sm font-medium text-primary">Plateforme IA de gestion scolaire #1</span>
              </motion.div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-[1.1]">
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
                className="text-sm md:text-lg text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Gérez étudiants, professeurs, emplois du temps, finances, examens et documents — 
                le tout automatisé par l'intelligence artificielle.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto h-12 md:h-13 px-6 md:px-8 text-sm md:text-base bg-primary hover:bg-primary/90 shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300">
                    Commencer maintenant
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <a href="https://platform.eduvate.app" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 md:h-13 px-6 md:px-8 text-sm md:text-base glass border-border/50 hover:border-primary/50 hover:bg-primary/5 hover:scale-[1.02] transition-all duration-300">
                    Voir la plateforme
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto px-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03, y: -3 }}
                  className="glass rounded-xl p-4 md:p-5 border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-2" />
                  <div className="text-xl md:text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm font-medium text-foreground">{stat.label}</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground mt-0.5">{stat.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-10 md:mb-14"
          >
            <span className="text-primary font-semibold text-xs uppercase tracking-wider">Pourquoi Eduvate</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-3">
              Transformez votre <span className="gradient-text">établissement</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
              Des résultats concrets pour votre école dès le premier jour
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <AnimatedCard key={index} index={index}>
                <motion.div 
                  className="glass-strong rounded-xl p-5 md:p-6 border border-border/50 hover:border-primary/30 group transition-all duration-500 h-full"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <motion.div 
                    className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-base md:text-lg font-bold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{benefit.desc}</p>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-10 md:mb-14"
          >
            <span className="text-primary font-semibold text-xs uppercase tracking-wider">Fonctionnalités</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-3">
              Tout ce dont vous avez <span className="gradient-text">besoin</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
              12+ modules puissants pour une gestion scolaire complète
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <AnimatedCard key={index} index={index}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-strong rounded-xl p-5 md:p-6 border border-border/50 hover:border-primary/30 group transition-all duration-500 h-full"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-10 md:mb-14"
          >
            <span className="text-primary font-semibold text-xs uppercase tracking-wider">Processus</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-3">
              Comment ça <span className="gradient-text">marche</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
              Démarrez en quelques minutes, pas en quelques semaines
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <AnimatedCard key={index} index={index}>
                <motion.div 
                  className="glass-strong rounded-xl p-5 md:p-6 text-center border border-border/50 hover:border-primary/30 transition-all duration-300 h-full"
                  whileHover={{ y: -8 }}
                >
                  <div className="text-4xl md:text-5xl font-bold gradient-text opacity-30 mb-3">{step.num}</div>
                  <motion.div 
                    className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <step.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-base md:text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{step.desc}</p>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="max-w-3xl mx-auto text-center glass-strong rounded-2xl p-6 md:p-12 border border-primary/20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-4 md:mb-6"
            >
              <Zap className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            </motion.div>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">{t('finalCta.title')}</h2>
            <p className="text-muted-foreground text-sm md:text-base mb-6 md:mb-8 max-w-xl mx-auto">{t('finalCta.subtitle')}</p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-3"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
            >
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto h-11 md:h-12 px-6 md:px-8 text-sm md:text-base bg-primary hover:bg-primary/90 shadow-xl shadow-primary/25 hover:scale-[1.02] transition-all duration-300">
                  Commencer maintenant <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-14"
          >
            <span className="text-primary font-semibold text-xs uppercase tracking-wider">FAQ</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3">{t('faq.title')}</h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <AnimatedCard key={index} index={index}>
                <div className="glass-strong rounded-xl overflow-hidden border border-border/50 hover:border-primary/20 transition-colors duration-300">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-4 md:p-5 text-left flex items-center justify-between gap-4 hover:bg-primary/5 transition-colors"
                  >
                    <span className="font-semibold text-xs md:text-sm text-foreground">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4 text-primary flex-shrink-0" />
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
                    <p className="px-4 md:px-5 pb-4 md:pb-5 text-xs md:text-sm text-muted-foreground">{faq.a}</p>
                  </motion.div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
