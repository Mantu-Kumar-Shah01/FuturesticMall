import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DiscoverHorizontal from './components/DiscoverHorizontal';
import StoreDiscovery from './components/StoreDiscovery';
import FloorExperience from './components/FloorExperience';
import FeaturedExperiences from './components/FeaturedExperiences';
import BrandShowcase from './components/BrandShowcase';
import DiningCarousel from './components/DiningCarousel';
import EventsSection from './components/EventsSection';
import SmartVisitorTools from './components/SmartVisitorTools';
import LocationSection from './components/LocationSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

// Modals
import StoreDirectoryModal from './components/Modals/StoreDirectoryModal';
import ReservationModal from './components/Modals/ReservationModal';
import ParkingModal from './components/Modals/ParkingModal';
import HoursModal from './components/Modals/HoursModal';
import RSVPModal from './components/Modals/RSVPModal';

export default function App() {
  const [storeModalOpen, setStoreModalOpen] = useState(false);
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [parkingModalOpen, setParkingModalOpen] = useState(false);
  const [hoursModalOpen, setHoursModalOpen] = useState(false);
  const [rsvpModalOpen, setRsvpModalOpen] = useState(false);

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedStoreDetail, setSelectedStoreDetail] = useState(null);

  const handleOpenStoreDirectory = (store = null) => {
    setSelectedStoreDetail(store);
    setStoreModalOpen(true);
  };

  const handleOpenReservation = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setReservationModalOpen(true);
  };

  const handleOpenRSVP = (event) => {
    setSelectedEvent(event);
    setRsvpModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden antialiased">
      {/* Floating Navigation */}
      <Navbar
        onOpenSearch={() => setStoreModalOpen(true)}
        onOpenStoreDirectory={() => handleOpenStoreDirectory()}
      />

      {/* Hero Section with Interactive 3D Model */}
      <HeroSection onOpenStoreDirectory={() => handleOpenStoreDirectory()} />

      {/* Section 01 — Discover the Mall */}
      <DiscoverHorizontal />

      {/* Section 02 — Explore Stores & 3D Floor Map */}
      <StoreDiscovery onSelectStoreDetails={(store) => handleOpenStoreDirectory(store)} />

      {/* Section 03 — 3D Floor Experience */}
      <FloorExperience />

      {/* Section 04 — Featured Experiences */}
      <FeaturedExperiences />

      {/* Section 05 — Featured Brands Showcase */}
      <BrandShowcase onOpenStoreDirectory={() => handleOpenStoreDirectory()} />

      {/* Section 06 — Dining Experience */}
      <DiningCarousel onOpenReservationModal={handleOpenReservation} />

      {/* Section 07 — Editorial Events */}
      <EventsSection onOpenRSVPModal={handleOpenRSVP} />

      {/* Section 08 — Smart Visitor Tools */}
      <SmartVisitorTools
        onOpenSearch={() => setStoreModalOpen(true)}
        onOpenParkingModal={() => setParkingModalOpen(true)}
        onOpenHoursModal={() => setHoursModalOpen(true)}
        onOpenStoreDirectory={() => handleOpenStoreDirectory()}
      />

      {/* Section 09 — Location & Digital Map */}
      <LocationSection />

      {/* Section 10 — Dramatic Final CTA */}
      <FinalCTA onOpenStoreDirectory={() => handleOpenStoreDirectory()} />

      {/* Footer */}
      <Footer />

      {/* Global Interactive Modals */}
      <StoreDirectoryModal
        isOpen={storeModalOpen}
        onClose={() => setStoreModalOpen(false)}
        initialStore={selectedStoreDetail}
      />

      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
        restaurant={selectedRestaurant}
      />

      <ParkingModal
        isOpen={parkingModalOpen}
        onClose={() => setParkingModalOpen(false)}
      />

      <HoursModal
        isOpen={hoursModalOpen}
        onClose={() => setHoursModalOpen(false)}
      />

      <RSVPModal
        isOpen={rsvpModalOpen}
        onClose={() => setRsvpModalOpen(false)}
        event={selectedEvent}
      />
    </div>
  );
}
