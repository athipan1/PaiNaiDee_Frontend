import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./i18n";
import ErrorBoundary from "./components/ErrorBoundary.tsx";

async function enableMocking() {
  // if (process.env.NODE_ENV !== 'development') {
  //   return;
  // }
  console.log("Mocking enabled");

  const { worker } = await import('./mocks/browser');

  return worker.start();
}

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

enableMocking().then(() => {
  root.render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>
  );
});
