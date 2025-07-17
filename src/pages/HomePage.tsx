import { useContext } from "react";
import "../../src/App.css";
import AttractionCard from "../components/AttractionCard";
import { AttractionContext } from "../contexts/AttractionContext";
import { useTranslation } from "react-i18next";

function HomePage() {
  const { attractions, loading } = useContext(AttractionContext);
  const { t } = useTranslation();

  return (
    <div className="container">
      <h1>{t('welcome')} 🌄</h1>
      {loading ? (
        <p>{t('loading')}</p>
      ) : (
        <div className="grid">
          {attractions.map((place) => (
            <AttractionCard key={place.id} attraction={place} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
