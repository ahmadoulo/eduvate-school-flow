import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Check, ArrowRight, Sparkles, Zap, Shield, Clock, Users, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Pricing = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Users, text: 'Gestion complète étudiants & professeurs' },
    { icon: Brain, text: 'Intelligence artificielle intégrée' },
    { icon: Clock, text: 'Emplois du temps automatisés' },
    { icon: Shield, text: 'Examens en ligne sécurisés' },
  ];

  const allFeatures = [
    'Gestion étudiants illimitée',
    'Gestion professeurs illimitée',
    'Génération emplois du temps IA',
    'Bulletins automatisés',
    'Présence par QR Code',
    'Documents administratifs',
    'Examens en ligne sécurisés',
    'Détection de triche IA',
    'Cahier de texte digital',
    'Gestion des salles',
    'Notifications SMS & Email',
    'Vidéosurveillance intégrée',
    'Analytics & rapports',
    'Support technique dédié',
    'Formation incluse',
    'Mises à jour gratuites',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <motion.div 
          className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px]"
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
              <span className="text-sm font-medium text-primary">Tarification flexible</span>
            </motion.div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Un tarif adapté à</span>{' '}
              <span className="gradient-text">votre école</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tarification personnalisée selon la taille de votre établissement. 
              Toutes les fonctionnalités incluses, sans surprise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-strong rounded-3xl p-8 md:p-12 border-2 border-primary/30 relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/30 rounded-full blur-[80px]" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-[80px]" />
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -top-4 left-1/2 -translate-x-1/2"
              >
                <div className="bg-gradient-to-r from-primary to-cyan-500 text-primary-foreground px-6 py-2 rounded-full font-semibold text-sm shadow-lg">
                  Solution complète
                </div>
              </motion.div>

              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Eduvate Pro</h2>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-4xl md:text-5xl font-bold gradient-text">Sur mesure</span>
                  </div>
                  <p className="text-muted-foreground">
                    Tarif calculé selon le nombre d'étudiants et vos besoins
                  </p>
                </div>

                {/* Key features */}
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 glass rounded-xl p-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium text-sm md:text-base">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* All features list */}
                <div className="mb-10">
                  <h3 className="font-semibold text-lg mb-4 text-center">Tout inclus :</h3>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-2 gap-3"
                  >
                    {allFeatures.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="flex items-center gap-2"
                      >
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <Link to="/contact">
                    <Button size="lg" className="w-full sm:w-auto h-14 px-10 text-lg bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30 hover:scale-105 transition-all duration-300">
                      Demander un devis <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <p className="text-sm text-muted-foreground mt-4">
                    Démonstration gratuite • Sans engagement
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ-like info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Pourquoi choisir <span className="gradient-text">Eduvate</span> ?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'Déploiement rapide', desc: 'Votre plateforme opérationnelle en 24h' },
              { icon: Shield, title: 'Données sécurisées', desc: 'Chiffrement et sauvegardes automatiques' },
              { icon: Users, title: 'Support dédié', desc: 'Équipe disponible pour vous accompagner' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-strong rounded-2xl p-6 text-center border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center glass-strong rounded-3xl p-8 md:p-12 border border-primary/20"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Prêt à commencer ?</h2>
            <p className="text-muted-foreground mb-8">
              Contactez-nous pour une démonstration personnalisée et un devis adapté à vos besoins
            </p>
            <Link to="/contact">
              <Button size="lg" className="h-12 md:h-14 px-8 text-lg bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30 hover:scale-105 transition-all duration-300">
                Nous contacter <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;