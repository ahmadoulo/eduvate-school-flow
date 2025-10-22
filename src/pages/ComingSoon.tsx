import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Rocket, Sparkles, Shield, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ComingSoon = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Sparkles, text: t('comingSoon.feature1') },
    { icon: Rocket, text: t('comingSoon.feature2') },
    { icon: Globe, text: t('comingSoon.feature3') },
    { icon: Shield, text: t('comingSoon.feature4') },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="gradient-hero pt-32 pb-20 px-4 min-h-[80vh] flex items-center">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-6 px-6 py-3 rounded-full bg-primary/10 text-primary font-medium border border-primary/20">
              <Rocket className="w-5 h-5 inline mr-2" />
              {t('comingSoon.title')}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              {t('comingSoon.subtitle')}
            </h1>
            
            <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              {t('comingSoon.description')}
            </p>

            <Link to="/contact">
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-smooth text-base px-8 h-12">
                {t('comingSoon.cta')} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t('comingSoon.features')}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 flex items-start gap-4 hover:shadow-lg transition-smooth border-primary/10">
                  <feature.icon className="w-8 h-8 text-primary flex-shrink-0" />
                  <p className="text-lg">{feature.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-xl text-muted-foreground mb-6">
              {t('comingSoon.contact')}
            </p>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="shadow-sm hover:shadow-md transition-smooth">
                {t('comingSoon.cta')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComingSoon;
