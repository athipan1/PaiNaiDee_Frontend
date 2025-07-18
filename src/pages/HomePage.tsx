import { useContext } from "react";
import "../../src/App.css";
import AttractionCard from "../components/AttractionCard";
import { AttractionContext } from "../contexts/AttractionContext";
import { useTranslation } from "react-i18next";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

function HomePage() {
  const { attractions, loading, error, retry } = useContext(AttractionContext);
  const { t } = useTranslation();

  const renderContent = () => {
    if (loading) {
      return <LoadingSpinner />;
    }

    if (error) {
      return <ErrorMessage message={error} onRetry={retry} />;
    }

    if (attractions.length === 0) {
      return <p>{t("noResults")}</p>;
    }

    return (
      <div className="grid">
        {attractions.map((place) => (
          <AttractionCard key={place.id} attraction={place} />
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <h1>{t("welcome")} 🌄</h1>
      {renderContent()}
    </div>
  );
}

export default HomePage;
