import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Users, GraduationCap, Calendar, Brain, MessageSquare, BarChart3,
  Shield, Cloud, ArrowRight, QrCode, FileText, Video, Bell, BookOpen,
  DoorOpen, Clock, CreditCard, Settings, Eye, Target, Zap, CheckCircle2,
  Sparkles, TrendingUp, Database, Lock, Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Features = () => {
  const { t } = useTranslation();

  const mainFeatures = [
    {
      icon: Users,
      title: 'Gestion des étudiants',
      description: 'Base de données centralisée avec profils complets. Gérez inscriptions, dossiers administratifs, historique académique et suivi personnalisé de chaque étudiant.',
      highlights: ['Profils complets', 'Historique académique', 'Suivi personnalisé', 'Import/Export données'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: GraduationCap,
      title: 'Gestion des professeurs',
      description: 'Gérez vos enseignants efficacement. Calcul automatique des heures, attribution des cours, emplois du temps et suivi de performance.',
      highlights: ['Calcul heures auto', 'Attribution cours', 'Emplois du temps', 'Évaluation performance'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Calendar,
      title: 'Emplois du temps intelligents',
      description: 'Génération automatique des plannings par IA. Détection des conflits, optimisation des salles et respect des contraintes professeurs.',
      highlights: ['Génération IA', 'Détection conflits', 'Optimisation salles', 'Contraintes respectées'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Brain,
      title: 'Intelligence artificielle',
      description: 'L\'IA au cœur de votre gestion. Prédictions de performances, recommandations pédagogiques, analyse des absences et bulletins automatisés.',
      highlights: ['Prédictions IA', 'Recommandations', 'Analyse données', 'Automatisation'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: FileText,
      title: 'Documents administratifs',
      description: 'Générateur automatique de documents. Certificats de scolarité, attestations, lettres et relevés de notes en quelques clics.',
      highlights: ['Certificats auto', 'Attestations', 'Relevés de notes', 'Templates personnalisés'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: QrCode,
      title: 'Présence par QR Code',
      description: 'Système de présence rapide et fiable. Scan QR pour cours et événements, statistiques en temps réel et alertes automatiques.',
      highlights: ['Scan instantané', 'Statistiques live', 'Alertes parents', 'Historique complet'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'Examens sécurisés',
      description: 'Plateforme d\'examens en ligne avec détection de triche avancée. Surveillance IA, questions aléatoires et notation automatique.',
      highlights: ['Détection triche', 'Surveillance IA', 'Questions aléatoires', 'Notation auto'],
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: Video,
      title: 'Vidéosurveillance',
      description: 'Visualisez vos caméras de sécurité directement depuis la plateforme. Streaming en temps réel et archivage des enregistrements.',
      highlights: ['Streaming live', 'Multi-caméras', 'Archivage', 'Accès sécurisé'],
      color: 'from-rose-500 to-pink-500'
    },
    {
      icon: Bell,
      title: 'Notifications intelligentes',
      description: 'Communiquez avec étudiants, parents et professeurs en un clic. SMS, emails et notifications push personnalisées.',
      highlights: ['SMS & Email', 'Push notifications', 'Ciblage précis', 'Templates'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: BookOpen,
      title: 'Cahier de texte digital',
      description: 'Cahier de texte numérique accessible partout. Devoirs, ressources pédagogiques et suivi des progressions en temps réel.',
      highlights: ['Devoirs en ligne', 'Ressources', 'Suivi progression', 'Accessible partout'],
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: DoorOpen,
      title: 'Gestion des salles',
      description: 'Visualisez la disponibilité des salles en temps réel. Réservation, gestion des équipements et planning de maintenance.',
      highlights: ['Disponibilité live', 'Réservation facile', 'Équipements', 'Maintenance'],
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Bulletins automatisés',
      description: 'Génération automatique des bulletins scolaires. Calcul des moyennes, appréciations IA et envoi automatique aux parents.',
      highlights: ['Calcul moyennes', 'Appréciations IA', 'PDF automatique', 'Envoi parents'],
      color: 'from-emerald-500 to-teal-500'
    },
  ];

  const additionalFeatures = [
    { icon: Database, title: 'Base de données sécurisée', desc: 'Vos données protégées et sauvegardées' },
    { icon: Cloud, title: '100% Cloud', desc: 'Accessible partout, tout le temps' },
    { icon: Lock, title: 'Sécurité avancée', desc: 'Chiffrement et authentification 2FA' },
    { icon: Smartphone, title: 'Application mobile', desc: 'Gestion depuis votre smartphone' },
    { icon: Settings, title: 'Personnalisable', desc: 'Adaptez la plateforme à vos besoins' },
    { icon: MessageSquare, title: 'Messagerie intégrée', desc: 'Communication centralisée' },
    { icon: CreditCard, title: 'Gestion financière', desc: 'Paiements et facturation' },
    { icon: TrendingUp, title: 'Analytics avancés', desc: 'Tableaux de bord intelligents' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <motion.div 
          className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">12+ modules intégrés</span>
            </motion.div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Fonctionnalités</span>{' '}
              <span className="gradient-text">complètes</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Découvrez tous les outils puissants d'Eduvate pour transformer la gestion de votre établissement. 
              Chaque fonctionnalité est pensée pour vous faire gagner du temps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass-strong rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-foreground" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">{feature.description}</p>
                
                <div className="grid grid-cols-2 gap-2">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Et bien plus <span className="gradient-text">encore</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des fonctionnalités supplémentaires pour une gestion complète
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
          >
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-xl p-5 md:p-6 text-center border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-sm md:text-base mb-1">{feature.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center glass-strong rounded-3xl p-8 md:p-16 border border-primary/20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Zap className="w-12 h-12 md:w-16 md:h-16 text-primary" />
            </motion.div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Prêt à moderniser votre établissement ?</h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Rejoignez les écoles qui ont déjà transformé leur gestion avec Eduvate
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto h-12 md:h-14 px-8 text-lg bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30 hover:scale-105 transition-all duration-300">
                  Demander une démo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 md:h-14 px-8 text-lg glass hover:bg-primary/10 transition-all duration-300">
                  Voir les tarifs
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