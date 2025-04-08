import { Link } from 'react-router-dom';
import ToggleLanguage from './toggle-language';
import logo from '/images/logo.png';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import useIsRtl from '../../hooks/useIsRtl';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const isRtl = useIsRtl();
  interface NavLinksProps {
    id: number;
    title: string;
    target: string;
  }
  const navLinks: NavLinksProps[] = [
    { id: 1, title: 'Seite', target: '/' },
    { id: 2, title: 'Veranstaltungen', target: '' },
    { id: 3, title: 'Bücher', target: '/books' },
    { id: 4, title: 'Anfragen', target: '' },
    { id: 5, title: 'über uns', target: '/about' },
    { id: 6, title: 'Häufig gestellte Fragen', target: '/faq' },
    { id: 7, title: 'Kontaktiere uns', target: '/contact' },
  ];
  const { t } = useTranslation();
  return (
    <header className="sticky top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto flex items-center justify-between p-4 font-cairo">
        <Link to={'/'}>
          <img src={logo} alt="Cortoba Logo" className="h-12" />
        </Link>

        <main className="hidden lg:!flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.target}
              className="font-medium text-lg text-darkBg hover:text-main transition-colors"
            >
              {t(link.title)}
            </Link>
          ))}
        </main>

        {/* <section className="hidden lg:flex items-center gap-4">
          <div className="relative text-muted-foreground">
            <Button
              variant="ghost"
              className="border cursor-pointer size-10 border-border rounded-full flex items-center justify-center p-3 bg-transparent hover:bg-muted"
            >
              <Heart size={20} />
            </Button>
            <Badge className="absolute -top-1 -left-2 bg-main text-primary-foreground text-xs size-4 p-2 rounded-full">
              3
            </Badge>
          </div>
          <div className="relative text-muted-foreground">
            <Button
              variant="ghost"
              className="border cursor-pointer size-10 border-border rounded-full flex items-center justify-center p-3 bg-transparent hover:bg-muted"
            >
              <ShoppingCart size={20} />
            </Button>
            <Badge className="absolute -top-1 -left-2 bg-main text-primary-foreground text-xs size-4 p-2 rounded-full">
              3
            </Badge>
          </div>

        </section> */}
        <section className="hidden lg:flex items-center gap-4">
          <ToggleLanguage />
        </section>

        <button
          onClick={toggleMenu}
          className="lg:!hidden focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <Menu className="w-8 h-8 text-darkBg" />
        </button>
      </nav>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${
          isOpen ? 'visible' : 'invisible'
        }`}
        onClick={toggleMenu}
      />

      <motion.div
        initial={{ x: isRtl ? '-100%' : '100%' }}
        animate={isOpen ? { x: '0%' } : { x: isRtl ? '-100%' : '100%' }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="fixed inset-0 bg-darkBg text-white z-50 flex flex-col items-center justify-center p-8 font-cairo"
      >
        <div className="absolute top-4 left-4 flex items-center gap-4">
          <img src={logo} alt="Sevilia Logo" className="h-10" />
        </div>
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white focus:outline-none"
          aria-label="Close menu"
        >
          <X className="w-8 h-8" />
        </button>

        <nav className="flex flex-col space-y-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.target}
              className="font-medium text-3xl hover:text-main transition-colors"
              onClick={toggleMenu}
            >
              {t(link.title)}
            </Link>
          ))}
        </nav>

        <div className="mt-8">
          <ToggleLanguage />
        </div>
      </motion.div>
    </header>
  );
}
