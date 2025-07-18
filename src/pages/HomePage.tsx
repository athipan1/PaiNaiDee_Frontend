import { useContext } from "react";
import "../../src/App.css";
import AttractionCard from "../components/AttractionCard";
import { AttractionContext } from "../contexts/AttractionContext";
import { useTranslation } from "react-i18next";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import ReviewForm from "../components/ReviewForm";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {attractions.map((place) => (
          <AttractionCard key={place.id} attraction={place} />
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8 font-kanit text-primary">{t("welcome")} 🌄</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-semibold mb-4 font-kanit text-secondary">{t("attractionsTitle", "Popular Attractions")}</h2>
          {renderContent()}
        </div>
        <div className="md:col-span-1">
          <ReviewForm />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
