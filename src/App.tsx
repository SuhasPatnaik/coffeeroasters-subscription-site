import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./components/page/LandingPage";
import AboutUsPage from "./components/page/AboutUsPage";
import SubscriptionPage from "./components/page/SubscriptionPage";
import PageNotFound from "./components/page/PageNotFound";
import PageLayout from "./components/shared/PageLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/subscribe" element={<SubscriptionPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
