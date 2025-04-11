import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import useIsRtl from '@/hooks/useIsRtl';
import { Button } from '@/components/ui/button';

const FAQPage = () => {
  const { t } = useTranslation();
  const isRtl = useIsRtl();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-r from-main/90 to-main py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-cairo">
              {t('Häufig gestellte Fragen')}
            </h1>
            <p className="text-xl text-main/10 mb-8">
              {t('Hier finden Sie Antworten auf häufig gestellte Fragen')}
            </p>
          </motion.div>
        </div>
      </div>
      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t(
                'Sehen Sie sich unten unsere am häufigsten gestellten Fragen an. Sollten Sie nicht finden, wonach Sie suchen, kontaktieren Sie uns gerne.'
              )}
            </p>
          </motion.div>

          <Accordion
            type="single"
            collapsible
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            {Array.from({ length: 6 })?.map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <AccordionItem value={`item-${index}`} className="mb-4">
                  <AccordionTrigger
                    className={cn(
                      'group flex items-center justify-between w-full bg-white border border-gray-200 text-gray-800 rounded-lg transition-all duration-300 relative overflow-hidden hover:bg-gray-50 hover:text-main',
                      'data-[state=open]:rounded-b-none data-[state=open]:bg-main/5 data-[state=open]:text-main/80 data-[state=open]:border-main/20'
                    )}
                  >
                    <div className="flex items-center gap-4 p-5">
                      <span className="font-bold text-main">{index + 1}</span>
                      <span className="lg:text-lg text-base font-medium text-left">
                        Lorem ipsum dolor sit amet.
                      </span>
                    </div>

                    <div
                      className={`absolute ${
                        isRtl ? 'left-0' : 'right-0'
                      } cursor-pointer  top-0 bottom-0 lg:w-16 w-10 flex items-center justify-center bg-main text-white transition-all duration-300 group-data-[state=open]:bg-main/90`}
                    >
                      <Plus
                        size={28}
                        className="transition-transform duration-300 group-data-[state=open]:rotate-45"
                      />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    className={cn(
                      'p-5 text-gray-700 bg-gray-50 rounded-b-lg border border-t-0 border-gray-200',
                      'data-[state=open]:animate-accordion-down',
                      'data-[state=closed]:animate-accordion-up'
                    )}
                  >
                    <div className="prose prose-blue max-w-none">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corrupti, nihil.
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-8 md:p-12">
              <div className="md:flex items-center justify-between">
                <div className="md:w-2/3 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 font-cairo">
                    {t('Haben Sie noch Fragen?')}
                  </h3>
                  <p className="text-gray-600">
                    {t(
                      'Keine Antwort auf Ihre Frage? Unser Support-Team hilft Ihnen gerne weiter.'
                    )}
                  </p>
                </div>
                <div className="flex gap-4">
                  <Button
                    size={'lg'}
                    className="px-6 py-3 bg-orange text-white rounded-lg font-medium hover:bg-orange transition-colors"
                  >
                    {t('Kontaktieren Sie uns')}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
