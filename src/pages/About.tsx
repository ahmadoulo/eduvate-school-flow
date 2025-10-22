import { motion } from 'framer-motion';
import { Target, Zap, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Notre Mission',
      description: 'Simplifier la gestion scolaire pour permettre aux éducateurs de se concentrer sur l\'essentiel : l\'enseignement.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Nous développons des solutions modernes et intuitives qui s\'adaptent aux besoins évolutifs de l\'éducation.',
    },
    {
      icon: Shield,
      title: 'Sécurité',
      description: 'La protection des données de vos élèves et de votre établissement est notre priorité absolue.',
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
            <h1 className="text-5xl font-bold mb-6">À propos d'Eduvate</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nous transformons la gestion scolaire grâce à une plateforme cloud moderne, intuitive et accessible.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg mx-auto mb-20"
          >
            <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
            <p className="text-muted-foreground mb-4">
              Eduvate est née de la vision de rendre la gestion scolaire plus accessible et efficace. 
              Nous avons observé que de nombreux établissements en Afrique et dans le monde perdaient un temps précieux 
              avec des systèmes obsolètes, fragmentés ou inexistants.
            </p>
            <p className="text-muted-foreground mb-4">
              Notre équipe, composée d'experts en éducation et en technologie, développe une solution complète 
              qui centralise toutes les fonctions essentielles d'un établissement scolaire en une seule plateforme cloud 
              propulsée par l'intelligence artificielle.
            </p>
            <p className="text-muted-foreground mb-4">
              Nous croyons fermement que la technologie peut transformer l'éducation en Afrique. Notre mission est 
              d'offrir aux écoles des outils modernes, intuitifs et puissants qui leur permettent de se concentrer 
              sur l'essentiel : l'éducation de qualité.
            </p>
            <p className="text-muted-foreground">
              Rejoignez-nous dans cette révolution éducative. Ensemble, nous construisons l'avenir de la gestion scolaire.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full text-center gradient-card border-primary/10">
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
