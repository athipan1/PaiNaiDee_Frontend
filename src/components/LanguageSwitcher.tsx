import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage("th")}
        disabled={i18n.language === "th"}
        className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50"
        title={t("language_thai", "Thai")}
      >
        <span role="img" aria-label={t("language_thai", "Thai")}>🇹🇭</span>
      </button>
      <button
        onClick={() => changeLanguage("en")}
        disabled={i18n.language === "en"}
        className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50"
        title={t("language_english", "English")}
      >
        <span role="img" aria-label={t("language_english", "English")}>🇬🇧</span>
      </button>
    </div>
  );
}

export default LanguageSwitcher;
