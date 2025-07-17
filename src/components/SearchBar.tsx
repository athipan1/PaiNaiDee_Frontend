import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { AttractionContext } from "../contexts/AttractionContext";

function SearchBar() {
  const { t } = useTranslation();
  const { search } = useContext(AttractionContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    search(searchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={t("search_placeholder")}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label={t("search_placeholder")}
      />
      <button onClick={handleSearch}>{t("search_button")}</button>
    </div>
  );
}

export default SearchBar;
