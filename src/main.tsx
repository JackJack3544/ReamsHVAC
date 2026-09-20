import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout.tsx';
import { Home } from './pages/Home.tsx';
import { HeatPumps } from './pages/services/HeatPumps.tsx';
import { MiniSplits } from './pages/services/MiniSplits.tsx';
import { GasFurnaces } from './pages/services/GasFurnaces.tsx';
import { AirConditioning } from './pages/services/AirConditioning.tsx';
import { ServicesHub } from './pages/services/ServicesHub.tsx';
import { CommercialHVAC } from './pages/services/CommercialHVAC.tsx';
import { MaintenancePlans } from './pages/services/MaintenancePlans.tsx';
import { EmergencyInfo } from './pages/services/EmergencyInfo.tsx';
import { HeatingHeatPumpsCategory } from './pages/services/HeatingHeatPumpsCategory.tsx';
import { IndoorAirQuality } from './pages/services/IndoorAirQuality.tsx';
import { DuctCleaningRepair } from './pages/services/DuctCleaningRepair.tsx';
import { SmartThermostats } from './pages/services/SmartThermostats.tsx';
import { EmergencyLanding } from './pages/EmergencyLanding.tsx';
import { ServiceAreasHub } from './pages/service-areas/ServiceAreasHub.tsx';
import { RegionHub } from './pages/service-areas/RegionHub.tsx';
import { CityPage } from './pages/service-areas/CityPage.tsx';
import { SanJose } from './pages/service-areas/cities/SanJose.tsx';
import { FinancingRebates } from './pages/FinancingRebates.tsx';
import { About } from './pages/About.tsx';
import { AuthorizedDealer } from './pages/AuthorizedDealer.tsx';
import { Contact } from './pages/Contact.tsx';
import { Gallery } from './pages/Gallery.tsx';
import { Reviews } from './pages/Reviews.tsx';
import { LicensingGuarantee } from './pages/LicensingGuarantee.tsx';
import { FAQ } from './pages/FAQ.tsx';
import { Specials } from './pages/Specials.tsx';
import { Team } from './pages/Team.tsx';
import { Blog } from './pages/Blog.tsx';
import { NotFound } from './pages/NotFound.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/emergency" element={<EmergencyLanding />} />
        
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          
          <Route path="/services">
            <Route index element={<ServicesHub />} />
            <Route path="air-conditioning" element={<AirConditioning />} />
            <Route path="heating-heat-pumps" element={<HeatingHeatPumpsCategory />} />
            <Route path="heat-pumps" element={<HeatPumps />} />
            <Route path="gas-furnaces" element={<GasFurnaces />} />
            <Route path="mini-splits" element={<MiniSplits />} />
            <Route path="indoor-air-quality" element={<IndoorAirQuality />} />
            <Route path="duct-cleaning-repair" element={<DuctCleaningRepair />} />
            <Route path="smart-thermostats" element={<SmartThermostats />} />
            <Route path="commercial-hvac" element={<CommercialHVAC />} />
            <Route path="maintenance-plans" element={<MaintenancePlans />} />
            <Route path="emergency-hvac" element={<EmergencyInfo />} />
          </Route>

          <Route path="/service-areas">
            <Route index element={<ServiceAreasHub />} />
            <Route path="south-bay" element={<RegionHub regionKey="south-bay" />} />
            <Route path="east-bay" element={<RegionHub regionKey="east-bay" />} />
            <Route path="peninsula" element={<RegionHub regionKey="peninsula" />} />
            <Route path="san-francisco" element={<RegionHub regionKey="san-francisco" />} />
            <Route path="north-bay" element={<RegionHub regionKey="north-bay" />} />
            <Route path="south-bay/san-jose" element={<SanJose />} />
            <Route path=":region/:city" element={<CityPage />} />
          </Route>

          {/* Other Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/why-us" element={<About />} />
          <Route path="/authorized-dealer" element={<AuthorizedDealer />} />
          <Route path="/team" element={<Team />} />
          <Route path="/licensing-insurance-guarantee" element={<LicensingGuarantee />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/financing-rebates" element={<FinancingRebates />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
