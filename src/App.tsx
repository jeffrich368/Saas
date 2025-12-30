import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Hero } from "./components/sections/Hero";
import { Brands } from "./components/sections/Brands";
import { Services } from "./components/sections/Services"; 
import { AboutUs } from "./components/sections/AboutUs";
import { Pricing } from "./components/sections/Pricing";
import { CTA } from "./components/sections/CTA";
import { ScrollToTop } from "./components/shared/ScrollToTop";

function App() {
  return (
    <BrowserRouter basename="/Saas">
      <ScrollToTop />
      <Layout title="Zedge AI | Next-Gen Automation">
        <Routes>
          {/* HOME PAGE */}
          <Route path="/" element={
            <>
              <Hero />
              <Brands />
              <Services />
              <AboutUs />
              <CTA />
            </>
          } />

          {/* DEDICATED ABOUT PAGE */}
          <Route path="/about" element={
            <div className="pt-32 pb-20"> {/* pt-32 adds space for the sticky navbar */}
              <AboutUs />
              {/* You can add more about-specific sections here later */}
              <CTA />
            </div>
          } />

          {/* PRICING PAGE */}
          <Route path="/pricing" element={
            <div className="pt-32 pb-20">
              <Pricing />
              <CTA />
            </div>
          } />

          {/* SERVICES PAGE */}
          <Route path="/services" element={
            <div className="pt-32 pb-20">
              <Services />
              <CTA />
            </div>
          } />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;