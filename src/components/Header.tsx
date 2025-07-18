import LanguageSwitcher from "./LanguageSwitcher";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center">
        <div className="logo mb-2 md:mb-0">
          <h1 className="text-2xl font-bold text-primary font-kanit">ไปไหนดี</h1>
        </div>
        <div className="w-full md:w-1/2">
          <SearchBar />
        </div>
        <div className="mt-2 md:mt-0">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
