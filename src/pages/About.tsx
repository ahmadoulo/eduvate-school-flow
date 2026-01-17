import { motion } from 'framer-motion';
import { 
  Target, Zap, Shield, Users, Globe, Award, Heart, Lightbulb,
  ArrowRight, CheckCircle2, Sparkles, TrendingUp, BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Notre Mission',
      description: 'Révolutionner la gestion scolaire en Afrique et dans le monde en offrant aux établissements des outils modernes, intuitifs et puissants.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Nous intégrons l\'intelligence artificielle pour automatiser les tâches répétitives et libérer du temps pour ce qui compte vraiment : l\'éducation.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Sécurité',
      description: 'La protection des données de vos élèves est notre priorité absolue. Chiffrement, sauvegardes et conformité aux normes internationales.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Heart,
      title: 'Engagement',
      description: 'Nous sommes passionnés par l\'éducation et nous nous engageons à accompagner chaque établissement vers le succès.',
      color: 'from-rose-500 to-pink-500'
    },
  ];

  const stats = [
    { value: '12+', label: 'Modules intégrés' },
    { value: '100%', label: 'Cloud & Mobile' },
    { value: '24/7', label: 'Support disponible' },
    { value: 'IA', label: 'Intelligence artificielle' },
  ];

  const problems = [
    'Fichiers Excel éparpillés et difficiles à maintenir',
    'Heures perdues à créer manuellement les emplois du temps',
    'Bulletins scolaires chronophages à générer',
    'Suivi des présences approximatif et peu fiable',
    'Communication difficile avec parents et étudiants',
    'Documents administratifs à refaire constamment',
  ];

  const solutions = [
    'Base de données centralisée et accessible partout',
    'Génération automatique des emplois du temps par IA',
    'Bulletins générés en un clic avec appréciations',
    'Présence par QR Code instantanée et précise',
    'Notifications SMS, email et push en un clic',
    'Générateur automatique de documents',
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
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <motion.div 
          className="absolute top-20 right-1/3 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px]"
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
              <span className="text-sm font-medium text-primary">Notre histoire</span>
            </motion.div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">À propos d'</span>
              <span className="gradient-text">Eduvate</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Nous transformons la gestion scolaire grâce à une plateforme cloud moderne, 
              intuitive et propulsée par l'intelligence artificielle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="glass-strong rounded-2xl p-6 text-center border border-border/50"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-8 md:p-12 border border-border/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold">Notre Histoire</h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Eduvate</strong> est née d'un constat simple : 
                de nombreux établissements scolaires en Afrique et dans le monde perdent un temps précieux 
                avec des systèmes obsolètes, fragmentés ou inexistants. Fichiers Excel éparpillés, 
                bulletins créés manuellement, emplois du temps difficiles à gérer...
              </p>
              <p>
                Notre équipe, composée d'experts en <strong className="text-foreground">éducation</strong> et 
                en <strong className="text-foreground">technologie</strong>, a développé une solution complète 
                qui centralise toutes les fonctions essentielles d'un établissement scolaire en une seule 
                plateforme cloud, propulsée par l'<strong className="text-foreground">intelligence artificielle</strong>.
              </p>
              <p>
                Nous croyons fermement que la technologie peut transformer l'éducation. Notre mission est 
                d'offrir aux écoles des outils <strong className="text-foreground">modernes, intuitifs et puissants</strong> 
                qui leur permettent de se concentrer sur l'essentiel : <strong className="text-foreground">l'éducation de qualité</strong>.
              </p>
              <p className="text-lg font-medium text-foreground">
                Rejoignez-nous dans cette révolution éducative. Ensemble, nous construisons l'avenir de la gestion scolaire.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem vs Solution */}
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
              Le problème que nous <span className="gradient-text">résolvons</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Problems */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-6 md:p-8 border border-red-500/20"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="text-red-500">✕</span> Avant Eduvate
              </h3>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-red-500 mt-1">•</span>
                    <span className="text-muted-foreground">{problem}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-6 md:p-8 border border-primary/20"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" /> Avec Eduvate
              </h3>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{solution}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Nos <span className="gradient-text">valeurs</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-strong rounded-2xl p-6 md:p-8 text-center border border-border/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} bg-opacity-10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center glass-strong rounded-3xl p-8 md:p-12 border border-primary/20"
          >
            <Globe className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Rejoignez la révolution</h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Faites partie des établissements qui transforment leur gestion avec Eduvate
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto h-12 md:h-14 px-8 text-lg bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30 hover:scale-105 transition-all duration-300">
                  Nous contacter <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/features">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 md:h-14 px-8 text-lg glass hover:bg-primary/10 transition-all duration-300">
                  Voir les fonctionnalités
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

export default About;