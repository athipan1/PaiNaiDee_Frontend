import { useTranslation } from "react-i18next";

function LoadingSpinner() {
  const { t } = useTranslation();
  return <div className="loading-spinner" aria-label={t('loading')}></div>;
}

export default LoadingSpinner;
