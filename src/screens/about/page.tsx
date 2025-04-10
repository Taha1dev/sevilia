import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const { t } = useTranslation();
  const config = {
    title: t('über uns'),
    intro: {
      heading: t('Unsere Geschichte'),
      description: t(
        'Seit über einem Jahrzehnt sind wir leidenschaftlich dabei, Bücher zu kuratieren, die inspirieren, bilden und unterhalten.'
      ),
    },
    mission: {
      heading: t('Unsere Mission'),
      description: t(
        'Wir möchten die Liebe zum Lesen fördern, indem wir eine sorgfältig ausgewählte Auswahl an Titeln für alle Altersgruppen und Interessen anbieten.'
      ),
    },
    team: {
      heading: t('Unser Team'),
      description: t(
        'Unser kleines, aber engagiertes Team besteht aus Buchliebhabern, die Ihnen helfen möchten, Ihr nächstes Lieblingsbuch zu finden.'
      ),
    },
    values: {
      heading: t('Unsere Werte'),
      items: [
        t('Kundenzufriedenheit'),
        t('Zugänglichkeit'),
        t('Qualität'),
        t('Nachhaltigkeit'),
      ],
    },
    contactCta: t(
      'Kontaktieren Sie uns für mehr Informationen oder Partnerschaften.'
    ),
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold tracking-tight text-main"
      >
        {config.title}
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <Card className="col-span-2 shadow-none">
          <CardContent className="p-8 space-y-10">
            <section className="space-y-4">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="text-2xl font-semibold text-main"
              >
                {config.intro.heading}
              </motion.h2>
              <p className="text-muted-main text-base leading-relaxed">
                {config.intro.description}
              </p>
            </section>

            <Separator />

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-main">
                {config.mission.heading}
              </h2>
              <p className="text-muted-main text-base leading-relaxed">
                {config.mission.description}
              </p>
            </section>

            <Separator />

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-main">
                {config.team.heading}
              </h2>
              <p className="text-muted-main text-base leading-relaxed">
                {config.team.description}
              </p>
            </section>
          </CardContent>
        </Card>

        <div className="space-y-10">
          <Card className="shadow-none">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-main">
                {config.values.heading}
              </h3>
              <ul className="list-disc list-inside text-muted-main space-y-2">
                {config.values.items.map((item, index) => (
                  <li key={index} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl p-6 bg-orange/10 text-sm text-orange"
          >
            {config.contactCta}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
