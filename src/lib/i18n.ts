import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        features: 'Fonctionnalités',
        pricing: 'Tarifs',
        about: 'À propos',
        contact: 'Contact',
        login: 'Connexion',
      },
      hero: {
        title: 'Simplifiez la vie scolaire',
        subtitle: 'De l\'inscription à la gestion des notes, tout en un seul clic.',
        cta: 'Essayer gratuitement',
        demo: 'Demander une démo',
      },
      stats: {
        schools: 'Écoles',
        students: 'Élèves',
        countries: 'Pays',
      },
      features: {
        title: 'Tout ce dont vous avez besoin',
        subtitle: 'Une plateforme complète pour gérer votre établissement',
      },
      pricing: {
        title: 'Des tarifs adaptés à votre établissement',
        subtitle: 'Choisissez le plan qui correspond à vos besoins',
        monthly: 'mois',
        perStudent: 'par élève',
        basic: 'Basic',
        standard: 'Standard',
        premium: 'Premium',
        cta: 'Commencer',
      },
      footer: {
        tagline: 'La plateforme cloud qui réinvente la gestion scolaire',
        rights: 'Tous droits réservés',
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        features: 'Features',
        pricing: 'Pricing',
        about: 'About',
        contact: 'Contact',
        login: 'Login',
      },
      hero: {
        title: 'Simplify School Life',
        subtitle: 'From enrollment to grades management, everything in one click.',
        cta: 'Try for Free',
        demo: 'Request Demo',
      },
      stats: {
        schools: 'Schools',
        students: 'Students',
        countries: 'Countries',
      },
      features: {
        title: 'Everything You Need',
        subtitle: 'A complete platform to manage your institution',
      },
      pricing: {
        title: 'Pricing Adapted to Your Institution',
        subtitle: 'Choose the plan that fits your needs',
        monthly: 'month',
        perStudent: 'per student',
        basic: 'Basic',
        standard: 'Standard',
        premium: 'Premium',
        cta: 'Get Started',
      },
      footer: {
        tagline: 'The cloud platform that reinvents school management',
        rights: 'All rights reserved',
      },
    },
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        features: 'Características',
        pricing: 'Precios',
        about: 'Acerca de',
        contact: 'Contacto',
        login: 'Iniciar sesión',
      },
      hero: {
        title: 'Simplifique la Vida Escolar',
        subtitle: 'Desde la inscripción hasta la gestión de calificaciones, todo en un clic.',
        cta: 'Probar Gratis',
        demo: 'Solicitar Demo',
      },
      stats: {
        schools: 'Escuelas',
        students: 'Estudiantes',
        countries: 'Países',
      },
      features: {
        title: 'Todo lo que Necesitas',
        subtitle: 'Una plataforma completa para gestionar tu institución',
      },
      pricing: {
        title: 'Precios Adaptados a tu Institución',
        subtitle: 'Elige el plan que se ajuste a tus necesidades',
        monthly: 'mes',
        perStudent: 'por estudiante',
        basic: 'Básico',
        standard: 'Estándar',
        premium: 'Premium',
        cta: 'Comenzar',
      },
      footer: {
        tagline: 'La plataforma en la nube que reinventa la gestión escolar',
        rights: 'Todos los derechos reservados',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
