import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import chat from '/svg/chat.svg';
import whatsapp from '/svg/whatsapp.svg';
import messenger from '/svg/messenger.svg';
import useIsRtl from '../../hooks/useIsRtl';
interface SocialButtonProps {
  bgColor: string;
  imgSrc?: string;
  alt?: string;
  icon?: JSX.Element;
  onClick?: () => void;
}
export default function SocialToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const isRtl = useIsRtl();
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className={`fixed bottom-4 ${
        isRtl ? 'left-4' : 'right-4'
      } z-30 grid grid-cols-2 gap-2`}
    >
      {!isOpen && <div></div>}
      {!isOpen && <div></div>}
      {!isOpen && <div></div>}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          <SocialButton
            onClick={() => setIsOpen(false)}
            bgColor="#3c8476"
            icon={<Phone className="text-white" />}
          />
        </motion.div>
      )}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          <SocialButton
            onClick={() => setIsOpen(false)}
            bgColor="#08c368"
            imgSrc={whatsapp}
            alt="WhatsApp Icon"
          />
        </motion.div>
      )}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          <SocialButton
            onClick={() => setIsOpen(false)}
            bgColor="#3e5af2"
            imgSrc={messenger}
            alt="Messenger Icon"
          />
        </motion.div>
      )}{' '}
      <button
        onClick={toggleMenu}
        className="bg-main size-16 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
        <img src={chat} alt="Chat Icon" className="size-8" />
      </button>
    </div>
  );
}

function SocialButton({
  bgColor,
  imgSrc,
  alt,
  icon,
  onClick,
}: SocialButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="size-16 flex items-center justify-center rounded-full shadow-md hover:scale-110 transition-transform"
      style={{ backgroundColor: bgColor }}
    >
      {imgSrc ? <img src={imgSrc} alt={alt} className="size-8" /> : icon}
    </button>
  );
}
