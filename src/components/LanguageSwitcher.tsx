import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage("th")} disabled={i18n.language === 'th'}>ไทย</button>
      <button onClick={() => changeLanguage("en")} disabled={i18n.language === 'en'}>Eng</button>
    </div>
  );
}

export default LanguageSwitcher;
