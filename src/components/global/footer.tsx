import {
  MapPin,
  Mail,
  Phone,
  Twitter,
  Facebook,
  Instagram,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SocialToggle from './social-toggle';
import footerImage from '/images/logo.png';
export default function Footer() {
  const { t } = useTranslation();

  const navLinks = [
    { id: 1, title: 'Seite', target: '/' },
    { id: 2, title: 'Veranstaltungen', target: '' },
    { id: 3, title: 'Bücher', target: '/books' },
    { id: 4, title: 'Anfragen', target: '' },
    { id: 5, title: 'über uns', target: '/about' },
    { id: 6, title: 'Häufig gestellte Fragen', target: '/faq' },
    { id: 7, title: 'Kontaktiere uns', target: '/contact' },
  ];

  const contactInfo = [
    {
      id: 1,
      icon: <MapPin className="text-main" />,
      text: '8819 Ohio St. South Gate, CA 90280',
    },
    {
      id: 2,
      icon: <Mail className="text-main" />,
      text: 'school@cordoba.com',
    },
    {
      id: 3,
      icon: <Phone className="text-main" />,
      text: '+1 386-688-3295',
    },
  ];

  const socialMedia = [
    {
      id: 1,
      icon: <Twitter className="size-7 p-1" />,
      href: '#',
    },
    {
      id: 2,
      icon: <Instagram className="size-7 p-1" />,
      href: '#',
    },
    {
      id: 3,
      icon: <Facebook className="size-7 p-1" />,
      href: '#',
    },
  ];

  return (
    <footer className="bg-variant text-white py-12 font-cairo z-10 w-full mt-10">
      <div className="container mx-auto px-4 mb-6">
        <div className="grid !grid-cols-1 md:!grid-cols-4 gap-8 p-5 md:!p-0">
          <div className="space-y-5">
            <img src={footerImage} alt="Cordoba School Logo" />
            <p className="text-white text-lg leading-relaxed">
              {t(
                'Wir bieten eine integrierte Lernumgebung, die darauf abzielt, Fähigkeiten und Kenntnisse gemäß den neuesten akademischen Standards zu entwickeln. Wir bieten spezialisierte Kurse, praktische Schulungen und anerkannte Zertifikate an, um Ihre Erfolgschancen auf dem Arbeitsmarkt zu verbessern.'
              )}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 w-fit text-main">
              {t('Bleiben wir in Kontakt')}
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((info) => (
                <li key={info.id}>
                  <Link to="" className="flex items-center gap-2">
                    <span>{info.icon}</span>
                    <p>{t(info.text)}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 w-fit text-main">
              {t('Unsere Dienstleistungen')}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((service) => (
                <li key={service.id}>
                  <Link
                    to={service.target || ''}
                    className="text-white hover:text-main duration-300 transition-colors"
                  >
                    {t(service.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4">
              {socialMedia.map((social) => (
                <Link
                  key={social.id}
                  to={social.href}
                  className="rounded-full border-2 border-transparent bg-main/30 hover:border-main transition-colors p-2 text-main"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
            <p className="text-sm">
              {t(
                'Zögern Sie nicht, uns zu kontaktieren und uns in den sozialen Medien zu folgen'
              )}
            </p>
          </div>
        </div>
      </div>

      <hr className="border-b border-white" />

      <div className="relative text-center text-sm text-gray-400 mt-8">
        <p>Sevilia. All Rights Reserved - {new Date().getFullYear()}</p>
        <Link to="#" className="text-white hover:text-white transition-colors">
          Powered by ProTech
        </Link>
        <SocialToggle />
      </div>
    </footer>
  );
}
