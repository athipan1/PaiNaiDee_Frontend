import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <a href="/about" aria-label={t('about_us')}>{t('about_us')}</a>
      <a href="/terms" aria-label={t('terms')}>{t('terms')}</a>
    </footer>
  );
}

export default Footer;
