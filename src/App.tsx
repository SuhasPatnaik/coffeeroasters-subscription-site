import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./components/page/LandingPage";
import AboutUsPage from "./components/page/AboutUsPage";
import SubscriptionPage from "./components/page/SubscriptionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/subscribe" element={<SubscriptionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
