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

  const getFeatures = () => [
    `✨ ${t('pricing.aiPowered')}`,
    `📊 ${t('pricing.analytics')}`,
    `📄 ${t('pricing.pdfExport')}`,
    `👥 ${t('pricing.multiInterface')}`,
    `📱 ${t('pricing.qrAttendance')}`,
    `⚡ ${t('pricing.instantData')}`,
    `💬 Communication temps réel`,
    `🛡️ ${t('pricing.support')}`,
    `☁️ Stockage cloud sécurisé`,
  ];

  const plans = [
    {
      name: 'Eduvate',
      basePrice: 120,
      features: getFeatures(),
      popular: true,
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
            <h1 className="font-bold mb-6">{t('pricing.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('pricing.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex justify-center max-w-2xl mx-auto">
            {plans.map((plan, index) => {
              const pricing = convertPrice(plan.basePrice, country);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <Card className="p-10 relative border-2 border-primary shadow-glow">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold">
                      Offre Unique
                    </div>
                    
                    <div className="text-center mb-8">
                      <h3 className="font-bold mb-4">{plan.name}</h3>
                      
                      <div className="mb-2">
                        <div className="flex flex-col items-center justify-center gap-2">
                          <span className="text-3xl font-bold text-primary">{t('pricing.contactUs')}</span>
                          <span className="text-muted-foreground">{t('pricing.customPricing')}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3 mb-10">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact" className="block">
                      <Button className="w-full shadow-md hover:shadow-lg transition-smooth" size="lg">
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
