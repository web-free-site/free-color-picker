import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { GuidePage } from "./pages/GuidePage";
import { LegalPage } from "./pages/LegalPage";
import { PickerPage } from "./pages/PickerPage";
import { RouteMeta } from "./seo/Helmet";

function App() {
  return (
    <Layout>
      <RouteMeta />
      <Routes>
        <Route path="/" element={<PickerPage />} />
        <Route path="/hex-color-picker" element={<GuidePage path="/hex-color-picker" />} />
        <Route path="/color-picker-from-image" element={<GuidePage path="/color-picker-from-image" />} />
        <Route path="/rgb-to-hex" element={<GuidePage path="/rgb-to-hex" />} />
        <Route path="/privacy" element={<LegalPage kind="privacy" />} />
        <Route path="/terms" element={<LegalPage kind="terms" />} />
        <Route path="/about" element={<LegalPage kind="about" />} />
        <Route path="/contact" element={<LegalPage kind="contact" />} />
        <Route path="*" element={<PickerPage />} />
      </Routes>
    </Layout>
  );
}

export default App;