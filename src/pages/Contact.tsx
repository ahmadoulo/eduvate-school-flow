import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "04eb2431-29a4-4cd9-b71a-937cf4b0e47d",
          ...formData
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast({
          title: t('contact.successTitle'),
          description: t('contact.successMessage'),
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: "Erreur",
          description: t('contact.errorMessage'),
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: t('contact.errorMessage'),
        variant: "destructive",
      });
    }
  };

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
            <h1 className="font-bold mb-6">{t('contact.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">{t('contact.formTitle')}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.name')}</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder={t('contact.namePlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.email')}</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.message')}</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    placeholder={t('contact.messagePlaceholder')}
                  />
                </div>
                <Button type="submit" className="w-full shadow-md hover:shadow-lg transition-smooth">
                  <Send className="mr-2 w-5 h-5" />
                  {t('contact.send')}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="p-8 gradient-card border-primary/10 shadow-md hover:shadow-lg transition-smooth">
                <Mail className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{t('contact.emailLabel')}</h3>
                <p className="text-muted-foreground">{t('contact.emailValue')}</p>
              </Card>

              <Card className="p-8 gradient-card border-primary/10 shadow-md hover:shadow-lg transition-smooth">
                <MessageSquare className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{t('contact.demoTitle')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('contact.demoText')}
                </p>
                <Button variant="outline" className="w-full">
                  {t('contact.scheduleDemo')}
                </Button>
              </Card>

              <Card className="p-8 bg-primary text-primary-foreground shadow-lg">
                <h3 className="font-semibold mb-2">{t('contact.supportTitle')}</h3>
                <p className="mb-3">{t('contact.supportText')}</p>
                <p className="font-medium">{t('contact.supportEmail')}</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
