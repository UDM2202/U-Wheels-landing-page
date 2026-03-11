import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { 
  Fuel, 
  Gauge, 
  Calendar, 
  Settings,
  ChevronRight,
  ChevronLeft,
  Heart,
  Share2,
  X,
  Filter,
  ChevronDown
} from 'lucide-react';
import { cars } from '../../data/cars';

const FeaturedCars = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (carId, imageIndex) => {
    setImageErrors(prev => ({
      ...prev,
      [`${carId}-${imageIndex}`]: true
    }));
  };

  const filteredCars = cars.filter(car => 
    filter === 'all' ? true : car.brand === filter
  );

  const sortedCars = [...filteredCars].sort((a, b) => {
    switch(sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      default: 
        return b.year - a.year;
    }
  });

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedCar) {
      setCurrentImageIndex((prev) => 
        prev === selectedCar.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedCar) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedCar.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="cars" className="py-20 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--accent-primary)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent-secondary)] rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="gradient-text">Vehicles</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[var(--text-secondary)] max-w-2xl mx-auto"
          >
            Discover our hand-picked selection of premium vehicles, each thoroughly inspected and certified.
          </motion.p>
        </div>

        {/* Filter Bar*/}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-8 p-4 glass-effect rounded-2xl"
        >
          {/* Brand Filters */}
       {/* Brand Filters - Update to match your actual car brands */}
<div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
  {[
    { id: 'all', name: 'All Brands' },
    { id: 'Toyota', name: 'Toyota' },
    { id: 'Hyundai', name: 'Hyundai' },
    { id: 'Lamborghini', name: 'Lamborghini' },
    { id: 'Mazda', name: 'Mazda' }
  ].map((brand) => (
    <button
      key={brand.id}
      onClick={() => setFilter(brand.id)}
      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
        filter === brand.id 
          ? 'bg-[var(--accent-primary)] text-white shadow-lg shadow-[var(--accent-primary)]/20' 
          : 'bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:shadow-md'
      }`}
    >
      {brand.name}
    </button>
  ))}
</div>
          
          {/* Sort Options */}
         <div className="flex gap-2">
  <button
    onClick={() => setSortBy('newest')}
    className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
      sortBy === 'newest' 
        ? 'bg-[#841326] text-white shadow-lg shadow-[#841326]/20' 
        : 'bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[#841326] hover:shadow-md'
    }`}
  >
    Newest
  </button>
  <button
    onClick={() => setSortBy('price-low')}
    className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
      sortBy === 'price-low' 
        ? 'bg-[#841326] text-white shadow-lg shadow-[#841326]/20' 
        : 'bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[#841326] hover:shadow-md'
    }`}
  >
    Price: Low
  </button>
  <button
    onClick={() => setSortBy('price-high')}
    className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
      sortBy === 'price-high' 
        ? 'bg-[#841326] text-white shadow-lg shadow-[#841326]/20' 
        : 'bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[#841326] hover:shadow-md'
    }`}
  >
            </button>
          </div>
        </motion.div>

        {/* Results count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-[var(--text-secondary)]">
            Showing <span className="text-[var(--accent-primary)] font-semibold">{sortedCars.length}</span> vehicles
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative car-card cursor-pointer"
              onClick={() => {
                setSelectedCar(car);
                setCurrentImageIndex(0);
              }}
            >
              {/* Image Container */}
              <div className="car-image-container">
                {!imageErrors[`${car.id}-0`] ? (
                  <img 
                    src={car.images[0]} 
                    alt={car.name}
                    className="car-image"
                    onError={() => handleImageError(car.id, 0)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <span className="text-6xl">🚗</span>
                  </div>
                )}
                <div className="car-overlay" />
                
                {/* Quick Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-[var(--accent-primary)] transition">
                    <Heart size={18} className="text-white" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-[var(--accent-primary)] transition">
                    <Share2 size={18} className="text-white" />
                  </button>
                </div>

                {/* Year Badge */}
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm">
                  {car.year}
                </div>

                {/* Brand Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[var(--accent-primary)] text-white text-xs font-medium">
                  {car.brand}
                </div>
              </div>

              {/* Car Details */}
             <div className="p-4">
  <div className="flex items-start justify-between mb-2 gap-2">
    <div className="flex-1 min-w-0"> 
      <h3 className="font-bold text-lg truncate">{car.name}</h3> 
      <p className="text-sm text-[var(--text-secondary)] truncate">{car.model}</p> 
    </div>
    <div className="flex-shrink-0 ml-2"> 
      <span className="price-tag text-lg whitespace-nowrap">₦{car.price.toLocaleString()}</span> {/* Add whitespace-nowrap */}
    </div>
  </div>

                {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-1 mt-3 pt-3 border-t border-[var(--border-color)]">
    <div className="car-spec">
      <Fuel size={14} />
      <span className="text-xs">{car.fuel}</span>
    </div>
    <div className="car-spec">
      <Gauge size={14} />
      <span className="text-xs">{car.mileage?.toLocaleString() || 'N/A'} km</span>
    </div>
    <div className="car-spec">
      <Calendar size={14} />
      <span className="text-xs">{car.year}</span>
    </div>
    <div className="car-spec">
      <Settings size={14} />
      <span className="text-xs truncate">{car.transmission}</span>
    </div>
  </div>

                {/* {/* View Details Button} */}
    <button 
  className="w-full mt-3 py-2 rounded-full border border-[var(--border-color)] text-sm font-medium hover:bg-[#841326] hover:text-white hover:border-[#841326] transition-all"
  onClick={(e) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    console.log('View Details clicked for:', car.name); // Add debug log
    setSelectedCar(car);
    setCurrentImageIndex(0);
  }}
>
  View Details
</button>
</div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
     {sortedCars.length > 0 && (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="text-center mt-12"
  >
    <button 
      className="btn-primary px-8 py-4 text-lg"
      onClick={() => {
        console.log('View All clicked'); 
        document.getElementById('cars')?.scrollIntoView({ behavior: 'smooth' });
        
        setFilter('all');
      }}
    >
      View All Vehicles
    </button>
  </motion.div>
)}

        {/* No Results */}
        {sortedCars.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-[var(--text-secondary)]">No vehicles found</p>
            <button 
              onClick={() => setFilter('all')}
              className="mt-4 btn-outline"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Car Details Modal */}
<AnimatePresence>
      {selectedCar && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
          onClick={() => setSelectedCar(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCar(null)}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-[var(--accent-primary)] transition"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Modal Content */}
            <div className="grid md:grid-cols-2 gap-6 p-6">
              {/* Image Gallery */}
              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <img 
                    src={selectedCar.images[currentImageIndex]} 
                    alt={selectedCar.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-[var(--accent-primary)] transition"
                  >
                    <ChevronLeft size={20} className="text-white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-[var(--accent-primary)] transition"
                  >
                    <ChevronRight size={20} className="text-white" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm">
                    {currentImageIndex + 1} / {selectedCar.images.length}
                  </div>
                </div>

                {/* Thumbnail Grid */}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {selectedCar.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative h-20 rounded-lg overflow-hidden ${
                        currentImageIndex === idx ? 'ring-2 ring-[var(--accent-primary)]' : ''
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`${selectedCar.name} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Car Details */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-[var(--accent-primary)] text-white text-xs font-medium">
                      {selectedCar.brand}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-xs">
                      {selectedCar.condition}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-2">{selectedCar.name}</h2>
                  <p className="text-xl text-[var(--accent-primary)] font-semibold">
                    ₦{selectedCar.price.toLocaleString()}
                  </p>
                </div>

                {/* Key Specs */}
                <div className="grid grid-cols-2 gap-4 p-4 glass-effect rounded-2xl">
                  <div>
                    <p className="text-sm text-[var(--text-secondary)]">Year</p>
                    <p className="font-semibold">{selectedCar.year}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-secondary)]">Fuel</p>
                    <p className="font-semibold">{selectedCar.fuel}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-secondary)]">Transmission</p>
                    <p className="font-semibold">{selectedCar.transmission}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-secondary)]">Power</p>
                    <p className="font-semibold">{selectedCar.power}</p>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-semibold mb-3">Key Features</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedCar.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                        <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Details */}
                <div className="space-y-2 text-sm">
                  <p><span className="text-[var(--text-secondary)]">Color:</span> {selectedCar.color}</p>
                  <p><span className="text-[var(--text-secondary)]">Interior:</span> {selectedCar.interior}</p>
                </div>

             {/* Action Buttons */}
<div className="flex gap-4 pt-4">
  {/* Request Test Drive Button  */}
  <a 
    href={`https://wa.me/2348076652162?text=Hello%20U-Wheels%2C%20I%20would%20like%20to%20schedule%20a%20test%20drive%20for%20the%20${encodeURIComponent(selectedCar.name)}%20(${selectedCar.year}).%20Please%20let%20me%20know%20when%20I%20can%20come%20see%20it.`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 btn-primary text-center"
  >
    Request Test Drive
  </a>
  
  {/* General WhatsApp Inquiry Button */}
  <a 
    href={`https://wa.me/2348076652162?text=Hello%20U-Wheels%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(selectedCar.name)}%20(${selectedCar.year}).%20Is%20it%20still%20available%3F`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 btn-outline text-center"
  >
    WhatsApp
  </a>
</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </section>
  );
};

export default FeaturedCars;