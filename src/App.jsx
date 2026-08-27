import React, { useState, useEffect } from 'react';
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
import Footer from './components/Footer';

// Separate Details Pages
import DiscoverPage from './components/Pages/DiscoverPage';
import StoresPage from './components/Pages/StoresPage';
import DiningPage from './components/Pages/DiningPage';
import ExperiencesPage from './components/Pages/ExperiencesPage';
import EventsPage from './components/Pages/EventsPage';
import VisitPage from './components/Pages/VisitPage';
import ShopPage from './components/Pages/ShopPage';
import PlayPage from './components/Pages/PlayPage';
import UnwindPage from './components/Pages/UnwindPage';

// Modals & E-Commerce Components
import StoreDirectoryModal from './components/Modals/StoreDirectoryModal';
import ReservationModal from './components/Modals/ReservationModal';
import ParkingModal from './components/Modals/ParkingModal';
import HoursModal from './components/Modals/HoursModal';
import RSVPModal from './components/Modals/RSVPModal';
import ExperienceDetailModal from './components/Modals/ExperienceDetailModal';
import CartDrawer from './components/Ecommerce/CartDrawer';
import CheckoutModal from './components/Ecommerce/CheckoutModal';

export default function App() {
  // Page Router State ('home' | 'discover' | 'stores' | 'dining' | 'experiences' | 'events' | 'visit' | 'shop' | 'play' | 'unwind')
  const [currentPage, setCurrentPage] = useState('home');

  // Saved Scroll Y Position for restoring exact position when returning to Home
  const [savedScrollY, setSavedScrollY] = useState(0);

  // Sync with browser URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['discover', 'stores', 'dining', 'experiences', 'events', 'visit', 'shop', 'play', 'unwind'].includes(hash)) {
        setCurrentPage(hash);
      } else if (hash === '' || hash === 'home') {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Modals & Drawers State
  const [storeModalOpen, setStoreModalOpen] = useState(false);
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [parkingModalOpen, setParkingModalOpen] = useState(false);
  const [hoursModalOpen, setHoursModalOpen] = useState(false);
  const [rsvpModalOpen, setRsvpModalOpen] = useState(false);
  const [experienceModalOpen, setExperienceModalOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  // Selected Detail States
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedStoreDetail, setSelectedStoreDetail] = useState(null);
  const [selectedExperienceId, setSelectedExperienceId] = useState('shop');

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
    if (currentPage === 'home' && page !== 'home') {
      // Remember exact scroll Y position before leaving home
      setSavedScrollY(window.scrollY);
    }

    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;

    if (page === 'home') {
      // Restore exact Y scroll position when returning to Home
      setTimeout(() => {
        window.scrollTo({ top: savedScrollY, behavior: 'smooth' });
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenExperienceDetail = (expId) => {
    setSelectedExperienceId(expId);
    setExperienceModalOpen(true);
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

      {/* Navigation */}
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
          <DiscoverHorizontal onNavigate={handleNavigate} />
          <StoreDiscovery onSelectStoreDetails={(store) => handleOpenStoreDirectory(store)} />
          <ProductCatalog onAddToCart={handleAddToCart} />
          <FloorExperience />
          <FeaturedExperiences onNavigate={handleNavigate} />
          <BrandShowcase onOpenStoreDirectory={() => handleOpenStoreDirectory()} />
          <DiningCarousel onOpenReservationModal={handleOpenReservation} onNavigate={handleNavigate} />
          <EventsSection onOpenRSVPModal={handleOpenRSVP} onNavigate={handleNavigate} />
          <SmartVisitorTools
            onOpenSearch={() => setStoreModalOpen(true)}
            onOpenParkingModal={() => setParkingModalOpen(true)}
            onOpenHoursModal={() => setHoursModalOpen(true)}
            onOpenStoreDirectory={() => handleOpenStoreDirectory()}
          />
          <LocationSection />
        </>
      )}

      {currentPage === 'discover' && <DiscoverPage onNavigate={handleNavigate} />}
      {currentPage === 'stores' && <StoresPage onNavigate={handleNavigate} onOpenStoreModal={handleOpenStoreDirectory} />}
      {currentPage === 'dining' && <DiningPage onNavigate={handleNavigate} onOpenReservation={handleOpenReservation} />}
      {currentPage === 'experiences' && <ExperiencesPage onNavigate={handleNavigate} />}
      {currentPage === 'events' && <EventsPage onNavigate={handleNavigate} onOpenRSVP={handleOpenRSVP} />}
      {currentPage === 'visit' && <VisitPage onNavigate={handleNavigate} onOpenParkingModal={() => setParkingModalOpen(true)} onOpenHoursModal={() => setHoursModalOpen(true)} />}
      {currentPage === 'shop' && <ShopPage onNavigate={handleNavigate} onAddToCart={handleAddToCart} />}
      {currentPage === 'play' && <PlayPage onNavigate={handleNavigate} />}
      {currentPage === 'unwind' && <UnwindPage onNavigate={handleNavigate} />}

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

      {/* Experience Detail View Modal */}
      <ExperienceDetailModal
        isOpen={experienceModalOpen}
        onClose={() => setExperienceModalOpen(false)}
        experienceId={selectedExperienceId}
        onNavigate={handleNavigate}
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
