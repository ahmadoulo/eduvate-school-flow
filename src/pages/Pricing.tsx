import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Check, ArrowRight, Sparkles, Zap, Shield, Clock, Users, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRef } from 'react';

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

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-28 pb-12 md:pb-16">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <motion.div 
          className="absolute top-20 left-1/4 w-[350px] h-[350px] bg-primary/15 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-5"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-primary">Tarification flexible</span>
            </motion.div>
            
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-foreground">Un tarif adapté à</span>{' '}
              <span className="gradient-text">votre école</span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tarification personnalisée selon la taille de votre établissement. 
              Toutes les fonctionnalités incluses, sans surprise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <AnimatedCard index={0}>
            <div className="max-w-3xl mx-auto">
              <div className="glass-strong rounded-2xl p-6 md:p-10 border border-primary/30 relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-[80px]" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/15 rounded-full blur-[80px]" />
                
                {/* Badge - Corrigé pour être visible */}
                <div className="flex justify-center mb-6">
                  <div className="bg-primary text-primary-foreground px-5 py-2 rounded-full font-semibold text-xs shadow-lg">
                    Solution complète
                  </div>
                </div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">Eduvate Pro</h2>
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <span className="text-3xl md:text-4xl font-bold gradient-text">Sur mesure</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Tarif calculé selon le nombre d'étudiants et vos besoins
                    </p>
                  </div>

                  {/* Key features */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {features.map((feature, index) => (
                      <AnimatedCard key={index} index={index + 1}>
                        <div className="flex items-center gap-3 glass rounded-xl p-3">
                          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                            <feature.icon className="w-4 h-4 text-primary" />
                          </div>
                          <span className="font-medium text-xs md:text-sm">{feature.text}</span>
                        </div>
                      </AnimatedCard>
                    ))}
                  </div>

                  {/* All features list */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-base mb-4 text-center">Tout inclus :</h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {allFeatures.map((feature, idx) => (
                        <AnimatedCard key={idx} index={idx}>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-xs text-muted-foreground">{feature}</span>
                          </div>
                        </AnimatedCard>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="text-center">
                    <Link to="/contact">
                      <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-sm bg-primary hover:bg-primary/90 shadow-xl shadow-primary/25 hover:scale-[1.02] transition-all duration-300">
                        Demander un devis <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <p className="text-xs text-muted-foreground mt-3">
                      Démonstration gratuite • Sans engagement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* FAQ-like info */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-xl md:text-3xl font-bold mb-3">
              Pourquoi choisir <span className="gradient-text">Eduvate</span> ?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Zap, title: 'Déploiement rapide', desc: 'Votre plateforme opérationnelle en 24h' },
              { icon: Shield, title: 'Données sécurisées', desc: 'Chiffrement et sauvegardes automatiques' },
              { icon: Users, title: 'Support dédié', desc: 'Équipe disponible pour vous accompagner' },
            ].map((item, index) => (
              <AnimatedCard key={index} index={index}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass-strong rounded-xl p-5 text-center border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-xs">{item.desc}</p>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <AnimatedCard index={0}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="max-w-2xl mx-auto text-center glass-strong rounded-2xl p-6 md:p-10 border border-primary/20"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-3">Prêt à commencer ?</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Contactez-nous pour une démonstration personnalisée et un devis adapté
              </p>
              <Link to="/contact">
                <Button size="lg" className="h-11 md:h-12 px-6 md:px-8 text-sm bg-primary hover:bg-primary/90 shadow-xl shadow-primary/25 hover:scale-[1.02] transition-all duration-300">
                  Nous contacter <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </AnimatedCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;