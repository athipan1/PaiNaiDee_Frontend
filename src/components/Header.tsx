import LanguageSwitcher from "./LanguageSwitcher";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header>
      <div className="logo">
        <h1>ไปไหนดี</h1>
      </div>
      <SearchBar />
      <LanguageSwitcher />
    </header>
  );
}

export default Header;
