import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { AttractionContext } from "../contexts/AttractionContext";

function SearchBar() {
  const { t } = useTranslation();
  const { search } = useContext(AttractionContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    search(searchTerm);
  };

  return (
    <form className="w-full" onSubmit={handleSearch}>
      <div className="relative">
        <input
          type="search"
          className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder={t("search_placeholder", "Search by name, type, or province")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label={t("search_placeholder", "Search by name, type, or province")}
        />
        <button
          type="submit"
          className="absolute top-0 right-0 px-4 py-2 text-white bg-primary rounded-full"
          aria-label={t("search_button", "Search")}
        >
          {t("search_button", "Search")}
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
