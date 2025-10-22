import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Target, Rocket, Sparkles, Check, Brain, Clock, DollarSign, UserCog, QrCode, Calendar, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import heroDashboard from '@/assets/hero-dashboard.jpg';

const Home = () => {
  const { t } = useTranslation();

  const stats = [
    { 
      label: t('stats.vision'), 
      description: t('stats.visionText'), 
      icon: Target 
    },
    { 
      label: t('stats.join'), 
      description: t('stats.joinText'), 
      icon: Rocket 
    },
    { 
      label: t('stats.innovation'), 
      description: t('stats.innovationText'), 
      icon: Sparkles 
    },
  ];

  const keyFeatures = [
    {
      icon: Target,
      title: t('keyFeatures.management.title'),
      description: t('keyFeatures.management.description'),
    },
    {
      icon: Brain,
      title: t('keyFeatures.ai.title'),
      description: t('keyFeatures.ai.description'),
      subFeatures: [
        t('keyFeatures.ai.feature1'),
        t('keyFeatures.ai.feature2'),
        t('keyFeatures.ai.feature3'),
      ],
    },
    {
      icon: Clock,
      title: t('keyFeatures.instant.title'),
      description: t('keyFeatures.instant.description'),
    },
    {
      icon: DollarSign,
      title: t('keyFeatures.finance.title'),
      description: t('keyFeatures.finance.description'),
    },
    {
      icon: UserCog,
      title: t('keyFeatures.roles.title'),
      subFeatures: [
        t('keyFeatures.roles.admin'),
        t('keyFeatures.roles.teacher'),
        t('keyFeatures.roles.student'),
        t('keyFeatures.roles.parent'),
      ],
    },
    {
      icon: QrCode,
      title: t('keyFeatures.qr.title'),
      description: t('keyFeatures.qr.description'),
    },
    {
      icon: Calendar,
      title: t('keyFeatures.calendar.title'),
      description: t('keyFeatures.calendar.description'),
    },
    {
      icon: Bell,
      title: t('keyFeatures.notifications.title'),
      description: t('keyFeatures.notifications.description'),
    },
  ];

  const whyChooseFeatures = [
    t('whyChoose.feature1'),
    t('whyChoose.feature2'),
    t('whyChoose.feature3'),
    t('whyChoose.feature4'),
    t('whyChoose.feature5'),
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20 px-4 min-h-[90vh] flex items-center">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
              >
                🏫 Plateforme Scolaire IA
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
                {t('hero.title')}
              </h1>
              <p className="text-xl mb-4 text-foreground/90">
                {t('hero.subtitle')}
              </p>
              <p className="text-lg mb-10 max-w-lg text-muted-foreground">
                {t('hero.description')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/coming-soon">
                  <Button size="lg" className="shadow-md hover:shadow-lg transition-smooth text-base px-8 h-12">
                    {t('hero.cta')} <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="shadow-sm hover:shadow-md transition-smooth text-base px-8 h-12">
                    {t('hero.demo')}
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent blur-3xl rounded-full"></div>
              <img
                src={heroDashboard}
                alt="Eduvate Dashboard - Plateforme cloud de gestion scolaire moderne"
                className="relative rounded-xl shadow-2xl w-full border border-border/50"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-14 h-14 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold text-foreground mb-3">{stat.label}</h3>
                <p className="text-muted-foreground">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">{t('keyFeatures.title')}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-smooth border-primary/10">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  {feature.description && (
                    <p className="text-muted-foreground mb-3">{feature.description}</p>
                  )}
                  {feature.subFeatures && (
                    <ul className="space-y-2">
                      {feature.subFeatures.map((subFeature, subIndex) => (
                        <li key={subIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{subFeature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-8">{t('whyChoose.title')}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChooseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-lg">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              {t('finalCta.title')}
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              {t('finalCta.subtitle')}
            </p>
            <Link to="/coming-soon">
              <Button size="lg" variant="secondary" className="shadow-lg hover:shadow-xl transition-smooth">
                {t('hero.cta')} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">{t('faq.title')}</h2>
          </motion.div>

          <div className="space-y-6">
            {[1, 2, 3, 4, 5, 6].map((num, index) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-lg transition-smooth border-primary/10">
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {t(`faq.q${num}`)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`faq.a${num}`)}
                  </p>
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

export default Home;
