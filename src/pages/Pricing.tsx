import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useState, useEffect } from 'react';
import { detectCountry, convertPrice } from '@/lib/currency';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const { t } = useTranslation();
  const [country, setCountry] = useState('FR');

  useEffect(() => {
    setCountry(detectCountry());
  }, []);

  const plans = [
    {
      name: t('pricing.basic'),
      basePrice: 5,
      features: [
        'Jusqu\'à 100 élèves',
        'Gestion des notes',
        'Emploi du temps basique',
        'Support email',
        'Stockage 5GB',
      ],
    },
    {
      name: t('pricing.standard'),
      basePrice: 10,
      features: [
        'Jusqu\'à 500 élèves',
        'Toutes les fonctionnalités Basic',
        'Paiements en ligne',
        'Communication parents',
        'Analytics avancés',
        'Support prioritaire',
        'Stockage 50GB',
      ],
      popular: true,
    },
    {
      name: t('pricing.premium'),
      basePrice: 20,
      features: [
        'Élèves illimités',
        'Toutes les fonctionnalités Standard',
        'API & Intégrations',
        'Personnalisation complète',
        'Support 24/7',
        'Formation dédiée',
        'Stockage illimité',
      ],
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
            <h1 className="text-5xl font-bold mb-6">{t('pricing.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('pricing.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => {
              const pricing = convertPrice(plan.basePrice, country);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className={`p-8 h-full relative ${
                      plan.popular
                        ? 'border-2 border-primary shadow-glow gradient-card'
                        : 'border-border'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Populaire
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold">{pricing.price}</span>
                        <span className="text-xl text-muted-foreground">{pricing.symbol}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {t('pricing.perStudent')} / {t('pricing.monthly')}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact">
                      <Button
                        className={`w-full ${
                          plan.popular ? 'gradient-primary shadow-glow' : ''
                        }`}
                        variant={plan.popular ? 'default' : 'outline'}
                      >
                        {t('pricing.cta')}
                      </Button>
                    </Link>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
