import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message envoyé !',
      description: 'Nous vous répondrons dans les plus brefs délais.',
    });
    setFormData({ name: '', email: '', message: '' });
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
            <h1 className="text-5xl font-bold mb-6">Contactez-nous</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une question ? Besoin d'une démo ? Notre équipe est là pour vous aider.
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
              <h2 className="text-3xl font-bold mb-6">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom complet</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="jean.dupont@ecole.fr"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    placeholder="Parlez-nous de votre établissement et de vos besoins..."
                  />
                </div>
                <Button type="submit" className="w-full gradient-primary shadow-glow">
                  <Send className="mr-2 w-5 h-5" />
                  Envoyer le message
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
              <Card className="p-8 gradient-card border-primary/10">
                <Mail className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">contact@eduvate.com</p>
              </Card>

              <Card className="p-8 gradient-card border-primary/10">
                <MessageSquare className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Demander une démo</h3>
                <p className="text-muted-foreground mb-4">
                  Découvrez comment Eduvate peut transformer votre établissement en 30 minutes.
                </p>
                <Button variant="outline" className="w-full">
                  Planifier une démo
                </Button>
              </Card>

              <Card className="p-8 gradient-primary text-white">
                <h3 className="text-xl font-semibold mb-2">Support disponible</h3>
                <p className="text-white/90">
                  Notre équipe répond à vos questions du lundi au vendredi, de 9h à 18h.
                </p>
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
