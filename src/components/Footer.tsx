import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-100 shadow-inner mt-12">
      <div className="container mx-auto px-4 py-6 flex justify-center items-center space-x-6">
        <a href="/about" className="text-text-muted hover:text-primary" aria-label={t('about_us')}>{t('about_us')}</a>
        <a href="/terms" className="text-text-muted hover:text-primary" aria-label={t('terms')}>{t('terms')}</a>
      </div>
    </footer>
  );
}

export default Footer;
