import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DiscoverHorizontal from './components/DiscoverHorizontal';
import StoreDiscovery from './components/StoreDiscovery';
import ProductCatalog, { FEATURED_PRODUCTS } from './components/Ecommerce/ProductCatalog';
import FloorExperience from './components/FloorExperience';
import FeaturedExperiences from './components/FeaturedExperiences';
import BrandShowcase from './components/BrandShowcase';
import DiningCarousel from './components/DiningCarousel';
import EventsSection from './components/EventsSection';
import SmartVisitorTools from './components/SmartVisitorTools';
import LocationSection from './components/LocationSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

// Separate Details Pages
import DiscoverPage from './components/Pages/DiscoverPage';
import StoresPage from './components/Pages/StoresPage';
import DiningPage from './components/Pages/DiningPage';
import ExperiencesPage from './components/Pages/ExperiencesPage';
import EventsPage from './components/Pages/EventsPage';
import VisitPage from './components/Pages/VisitPage';
import ShopPage from './components/Pages/ShopPage';

// Modals & E-Commerce Components
import StoreDirectoryModal from './components/Modals/StoreDirectoryModal';
import ReservationModal from './components/Modals/ReservationModal';
import ParkingModal from './components/Modals/ParkingModal';
import HoursModal from './components/Modals/HoursModal';
import RSVPModal from './components/Modals/RSVPModal';
import CartDrawer from './components/Ecommerce/CartDrawer';
import CheckoutModal from './components/Ecommerce/CheckoutModal';

export default function App() {
  // Page Router State ('home' | 'discover' | 'stores' | 'dining' | 'experiences' | 'events' | 'visit' | 'shop')
  const [currentPage, setCurrentPage] = useState('home');

  // Modals & Drawers State
  const [storeModalOpen, setStoreModalOpen] = useState(false);
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [parkingModalOpen, setParkingModalOpen] = useState(false);
  const [hoursModalOpen, setHoursModalOpen] = useState(false);
  const [rsvpModalOpen, setRsvpModalOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  // Selected Detail States
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedStoreDetail, setSelectedStoreDetail] = useState(null);

  // E-Commerce Cart State
  const [cartItems, setCartItems] = useState([
    { ...FEATURED_PRODUCTS[0], quantity: 1 },
    { ...FEATURED_PRODUCTS[1], quantity: 1 },
  ]);

  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`Added ${product.name} to your Cart!`);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

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

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#04060b] text-slate-100 font-sans selection:bg-[#19A7FF] selection:text-black overflow-x-hidden antialiased">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl glass-panel border border-[#19A7FF]/60 text-xs font-mono text-white shadow-2xl animate-bounce flex items-center space-x-2 bg-[#07121C]/95">
          <span className="w-2 h-2 rounded-full bg-[#19A7FF] animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Responsive Navigation */}
      <Navbar
        onOpenSearch={() => setStoreModalOpen(true)}
        onOpenStoreDirectory={() => handleOpenStoreDirectory()}
        cartCount={totalCartCount}
        onOpenCart={() => setCartDrawerOpen(true)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Page Routing Views */}
      {currentPage === 'home' && (
        <>
          <HeroSection onOpenStoreDirectory={() => handleOpenStoreDirectory()} />
          <DiscoverHorizontal />
          <StoreDiscovery onSelectStoreDetails={(store) => handleOpenStoreDirectory(store)} />
          <ProductCatalog onAddToCart={handleAddToCart} />
          <FloorExperience />
          <FeaturedExperiences />
          <BrandShowcase onOpenStoreDirectory={() => handleOpenStoreDirectory()} />
          <DiningCarousel onOpenReservationModal={handleOpenReservation} />
          <EventsSection onOpenRSVPModal={handleOpenRSVP} />
          <SmartVisitorTools
            onOpenSearch={() => setStoreModalOpen(true)}
            onOpenParkingModal={() => setParkingModalOpen(true)}
            onOpenHoursModal={() => setHoursModalOpen(true)}
            onOpenStoreDirectory={() => handleOpenStoreDirectory()}
          />
          <LocationSection />
          <FinalCTA onOpenStoreDirectory={() => handleOpenStoreDirectory()} />
        </>
      )}

      {currentPage === 'discover' && <DiscoverPage onNavigate={handleNavigate} />}
      {currentPage === 'stores' && <StoresPage onNavigate={handleNavigate} onOpenStoreModal={handleOpenStoreDirectory} />}
      {currentPage === 'dining' && <DiningPage onNavigate={handleNavigate} onOpenReservation={handleOpenReservation} />}
      {currentPage === 'experiences' && <ExperiencesPage onNavigate={handleNavigate} />}
      {currentPage === 'events' && <EventsPage onNavigate={handleNavigate} onOpenRSVP={handleOpenRSVP} />}
      {currentPage === 'visit' && <VisitPage onNavigate={handleNavigate} onOpenParkingModal={() => setParkingModalOpen(true)} onOpenHoursModal={() => setHoursModalOpen(true)} />}
      {currentPage === 'shop' && <ShopPage onNavigate={handleNavigate} onAddToCart={handleAddToCart} />}

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* E-Commerce Cart Slide-over Drawer */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={() => {
          setCartDrawerOpen(false);
          setCheckoutModalOpen(true);
        }}
      />

      {/* E-Commerce Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        cartItems={cartItems}
        onClearCart={() => setCartItems([])}
      />

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
