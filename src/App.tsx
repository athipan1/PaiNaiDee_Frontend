import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import { AttractionProvider } from "./contexts/AttractionContext";

function App() {
  return (
    <AttractionProvider>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </AttractionProvider>
  );
}

export default App;
