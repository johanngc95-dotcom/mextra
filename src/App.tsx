import { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronLeft, ChevronRight, Search, Phone, Mail, 
  MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowUp, 
  MessageCircle, Droplets, Settings, Truck, Wrench, Award,
  CheckCircle, Factory, Globe, Star, TrendingUp,
  ChevronDown, BarChart3, Leaf, Target, Clock, Package,
  Sparkles, ThumbsUp, BadgeCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import './App.css';

// Loading Screen Component - Oil Filling X Animation
function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center">
      {/* Oil Filling X Animation */}
      <div className="relative w-40 h-40 md:w-56 md:h-56">
        {/* X Container */}
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            {/* Gold Gradient for Oil */}
            <linearGradient id="oilGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#8B6914" />
              <stop offset="30%" stopColor="#D4AF37" />
              <stop offset="60%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#FFF8DC" />
            </linearGradient>
            
            {/* Metallic Border Gradient */}
            <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C0C0C0" />
              <stop offset="50%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#A0A0A0" />
            </linearGradient>
            
            {/* Clip Path for X Shape */}
            <clipPath id="xClip">
              <path d="M40 20 L100 80 L160 20 L180 40 L120 100 L180 160 L160 180 L100 120 L40 180 L20 160 L80 100 L20 40 Z" />
            </clipPath>
          </defs>
          
          {/* X Background (Empty) */}
          <path 
            d="M40 20 L100 80 L160 20 L180 40 L120 100 L180 160 L160 180 L100 120 L40 180 L20 160 L80 100 L20 40 Z" 
            fill="#1a1a1a"
            stroke="url(#metalGradient)"
            strokeWidth="4"
          />
          
          {/* Oil Fill with Animation */}
          <g clipPath="url(#xClip)">
            <rect 
              x="0" 
              y={200 - (progress * 2)} 
              width="200" 
              height={progress * 2} 
              fill="url(#oilGradient)"
              className="oil-fill"
            />
            {/* Oil Bubbles */}
            <circle cx="50" cy={180 - progress} r="3" fill="rgba(255,255,255,0.5)" className="bubble bubble-1" />
            <circle cx="100" cy={160 - progress * 0.8} r="4" fill="rgba(255,255,255,0.4)" className="bubble bubble-2" />
            <circle cx="150" cy={170 - progress * 0.9} r="2" fill="rgba(255,255,255,0.6)" className="bubble bubble-3" />
            <circle cx="80" cy={150 - progress * 0.7} r="3" fill="rgba(255,255,255,0.3)" className="bubble bubble-4" />
            <circle cx="130" cy={140 - progress * 0.6} r="2" fill="rgba(255,255,255,0.5)" className="bubble bubble-5" />
          </g>
          
          {/* X Border Overlay */}
          <path 
            d="M40 20 L100 80 L160 20 L180 40 L120 100 L180 160 L160 180 L100 120 L40 180 L20 160 L80 100 L20 40 Z" 
            fill="none"
            stroke="url(#metalGradient)"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          
          {/* Shine Effect */}
          <path 
            d="M45 25 L100 80 L155 25"
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="2"
          />
        </svg>
        
        {/* Oil Drop Animation */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          <div className="oil-drop"></div>
        </div>
      </div>
      
      {/* Progress Text */}
      <div className="mt-8 text-center">
        <span className="text-[#FFD700] text-2xl md:text-3xl font-bold tracking-wider"></span>
        <p className="text-gray-500 text-sm mt-2">MEXTRA LUBRICANTES</p>
        <div className="mt-4 w-48 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-[#FFD700] text-lg font-bold mt-2">{progress}%</p>
      </div>
    </div>
  );
}

// Header Component
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Productos', href: '#productos' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Planta', href: '#planta' },
    { label: 'Certificaciones', href: '#certificaciones' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <div className="relative overflow-hidden">
              <img 
                src="/images/logo-mextra.png" 
                alt="MEXTRA Logo" 
                className="h-16 md:h-20 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-[#FFD700]/10 ${
                  isScrolled ? 'text-gray-800' : 'text-gray-800'
                } group`}
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
            <button className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <nav className="flex flex-col py-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-6 py-3 text-gray-800 hover:bg-[#FFD700]/10 hover:text-[#FFD700] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

// Hero Section
function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/images/aceite.png',
      title: 'LUBRICACIÓN AVANZADA',
      subtitle: 'Aceites de alta calidad para tu vehículo',
      cta: 'Ver Productos'
    },
    {
      image: '/images/calidad.png',
      title: 'PROTECCIÓN TOTAL',
      subtitle: 'Máximo rendimiento para tu motor',
      cta: 'Descubrir Más'
    },
    {
      image: '/images/lubricacion-avanzada.png',
      title: 'CALIDAD CERTIFICADA',
      subtitle: 'ISO 9001, ISO 14001 y API',
      cta: 'Certificaciones'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #FFD700 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="grid md:grid-cols-2 gap-8 items-center w-full">
              <div className="text-center md:text-left z-10 order-2 md:order-1">
                <div className="inline-flex items-center gap-2 bg-[#FFD700]/10 px-4 py-2 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-[#FFD700]" />
                  <span className="text-sm font-medium text-[#FFD700]">Lubricantes Premium</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-lg">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button className="bg-[#FFD700] hover:bg-[#FFA500] text-black font-bold px-8 py-4 rounded-none text-lg transition-all hover:shadow-lg hover:shadow-[#FFD700]/30 hover:-translate-y-1">
                    {slide.cta}
                  </Button>
                  <Button variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold px-8 py-4 rounded-none text-lg transition-all">
                    Contactar
                  </Button>
                </div>
              </div>
              <div className="flex justify-center order-1 md:order-2">
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-[#FFD700]/20 blur-3xl rounded-full scale-75" />
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="relative max-h-[400px] md:max-h-[500px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide Navigation */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm text-gray-900 p-4 rounded-full shadow-lg transition-all hover:scale-110 z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm text-gray-900 p-4 rounded-full shadow-lg transition-all hover:scale-110 z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-[#FFD700]' : 'w-2 bg-gray-400 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

// Stats Bar
function StatsBar() {
  const stats = [
    { icon: <Clock className="w-5 h-5" />, value: '30+', label: 'Años de Experiencia' },
    { icon: <Package className="w-5 h-5" />, value: '50+', label: 'Productos' },
    { icon: <MapPin className="w-5 h-5" />, value: '32', label: 'Estados' },
    { icon: <ThumbsUp className="w-5 h-5" />, value: '200+', label: 'Distribuidores' },
  ];

  return (
    <section className="bg-[#1a1a1a] py-6 border-y border-[#FFD700]/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center justify-center gap-3 text-white">
              <div className="text-[#FFD700]">{stat.icon}</div>
              <div>
                <span className="text-2xl md:text-3xl font-bold text-[#FFD700]">{stat.value}</span>
                <p className="text-xs md:text-sm text-gray-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Product Selector Section
function ProductSelector() {
  return (
    <section className="bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <h2 className="text-white text-2xl md:text-3xl font-bold">
            Encuentra el producto ideal
          </h2>
          <p className="text-gray-400">Selecciona las características de tu vehículo</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative">
            <select className="w-full bg-white/10 backdrop-blur-sm text-white border border-white/20 px-4 py-4 rounded-lg focus:outline-none focus:border-[#FFD700] appearance-none cursor-pointer">
              <option value="" className="text-gray-900">Tipo de Vehículo</option>
              <option value="auto" className="text-gray-900">Automóvil</option>
              <option value="camion" className="text-gray-900">Camión</option>
              <option value="moto" className="text-gray-900">Maquinaria</option>
              <option value="industrial" className="text-gray-900">Industrial</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
          <div className="relative">
            <select className="w-full bg-white/10 backdrop-blur-sm text-white border border-white/20 px-4 py-4 rounded-lg focus:outline-none focus:border-[#FFD700] appearance-none cursor-pointer">
              <option value="" className="text-gray-900">Marca</option>
              <option value="toyota" className="text-gray-900">Toyota</option>
              <option value="nissan" className="text-gray-900">Nissan</option>
              <option value="chevrolet" className="text-gray-900">Chevrolet</option>
              <option value="ford" className="text-gray-900">Ford</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
          <div className="relative">
            <select className="w-full bg-white/10 backdrop-blur-sm text-white border border-white/20 px-4 py-4 rounded-lg focus:outline-none focus:border-[#FFD700] appearance-none cursor-pointer">
              <option value="" className="text-gray-900">Modelo</option>
              <option value="2024" className="text-gray-900">2024</option>
              <option value="2023" className="text-gray-900">2023</option>
              <option value="2022" className="text-gray-900">2022</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
          <button className="bg-[#FFD700] hover:bg-[#FFA500] text-black font-bold px-6 py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-[#FFD700]/30 hover:-translate-y-0.5">
            <Search className="w-5 h-5" />
            Buscar
          </button>
        </div>
      </div>
    </section>
  );
}

// Product Lines Section - Grid Expandable
function ProductLines() {
  const [showAll, setShowAll] = useState(false);
  
  const products = [
    {
      name: 'Aceite Hidráulico ISO 68',
      category: 'Hidráulicos',
      image: '/images/_Fotografía_profesional_de_202603261310.png',
      description: 'Cubeta de 19 litros',
      specs: 'ISO 68',
      badge: 'Industrial'
    },
    {
      name: 'Hidroguia 68 ISO 68 (PT3522)',
      category: 'Engranes Industriales',
      image: '/images/_Fotografía_profesional_de_202603261228.png',
      description: 'Tambo de 208 litros',
      specs: 'ISO 68',
      badge: 'Industrial'
    },
    {
      name: 'Premium Super Racing SAE 40',
      category: 'Aceites para Gasolina',
      image: '/images/sae40.png',
      description: '950ml - API SL',
      specs: 'Monogrado',
      badge: 'Premium'
    },
    {
      name: 'ATF Tipo A',
      category: 'Transmisiones',
      image: '/images/atf.png',
      description: 'Fluido para Transmisión Automática',
      specs: 'Tipo A',
      badge: 'Popular'
    },
    {
      name: 'Líquido para Frenos LF4',
      category: 'Fluidos Especiales',
      image: '/images/_Fotografía_profesional_de_202603261228 (1).png',
      description: '250ml - Uso pesado y extremo',
      specs: 'DOT 4',
      badge: 'Seguridad'
    },
    {
      name: 'Chía Supremo 15W-40',
      category: 'Aceites Multigrado',
      image: '/images/_Fotografía_profesional_de_202603261132.png',
      description: '950ml - API SN',
      specs: '15W-40',
      badge: 'Bestseller'
    },
    {
      name: 'Urea X DEF Blue',
      category: 'AdBlue / Urea',
      image: '/images/WhatsApp Image 2026-01-30 at 12.41.40 PM.jpeg',
      description: 'Solución de Urea para motores diésel',
      specs: 'ISO 22241',
      badge: 'Diésel'
    },
    {
      name: 'Anticongelante 33%',
      category: 'Refrigerantes',
      image: '/images/anticongelante.png',
      description: '946ml - Listo para usar',
      specs: '33%',
      badge: 'Nuevo'
    },
  ];

  const displayedProducts = showAll ? products : products.slice(0, 4);

  return (
    <section id="productos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-[#FFD700]/10 text-[#FFD700] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Package className="w-4 h-4" />
            Catálogo Completo
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Nuestras Líneas de Productos
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubre nuestra amplia gama de lubricantes formulados con la más alta tecnología 
            para garantizar el máximo rendimiento de tu equipo.
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayedProducts.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-64 flex items-center justify-center bg-gradient-to-b from-gray-50 to-white p-6 overflow-hidden">
                {/* Badge */}
                <span className="absolute top-4 left-4 bg-[#FFD700] text-black text-xs font-bold px-3 py-1 rounded-full z-10">
                  {product.badge}
                </span>
                
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFD700]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {product.specs}
                  </span>
                  <button className="text-[#FFD700] hover:text-[#FFA500] font-medium text-sm flex items-center gap-1 transition-colors">
                    Ver más
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Show More Button */}
        <div className="text-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg"
          >
            {showAll ? 'Ver menos' : 'Ver todos los productos'}
            <ChevronDown className={`w-5 h-5 transition-transform ${showAll ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
        {/* Coming Soon Products */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center border-2 border-dashed border-gray-300">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-gray-400" />
            </div>
            <h4 className="text-lg font-bold text-gray-700 mb-2">Próximamente</h4>
            <p className="text-gray-500 text-sm">Nuevos productos en desarrollo</p>
          </div>
          <div className="bg-gradient-to-br from-[#FFD700]/5 to-[#FFA500]/5 rounded-2xl p-8 text-center border-2 border-dashed border-[#FFD700]/30">
            <div className="w-16 h-16 bg-[#FFD700]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-[#FFD700]" />
            </div>
            <h4 className="text-lg font-bold text-gray-700 mb-2">Línea Premium</h4>
            <p className="text-gray-500 text-sm">Productos de alta gama próximamente</p>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center border-2 border-dashed border-gray-300">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-gray-400" />
            </div>
            <h4 className="text-lg font-bold text-gray-700 mb-2">Ecológicos</h4>
            <p className="text-gray-500 text-sm">Lubricantes biodegradables</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Certifications Section
function CertificationsSection() {
  const certifications = [
    {
      icon: <Award className="w-16 h-16" />,
      title: 'ISO 9001',
      subtitle: 'Calidad',
      description: 'Sistema de Gestión de Calidad certificado, garantizando procesos optimizados y mejora continua en todos nuestros productos.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Leaf className="w-16 h-16" />,
      title: 'ISO 14001',
      subtitle: 'Medio Ambiente',
      description: 'Sistema de Gestión Ambiental que asegura nuestro compromiso con la protección del medio ambiente y la sostenibilidad.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <BadgeCheck className="w-16 h-16" />,
      title: 'Certificación API',
      subtitle: 'Petróleo',
      description: 'Nuestros aceites cumplen con los estándares internacionales de la American Petroleum Institute para máxima calidad.',
      color: 'from-[#FFD700] to-[#FFA500]'
    },
  ];

  return (
    <section id="certificaciones" className="py-24 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#2d2d2d] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #FFD700 25%, transparent 25%), linear-gradient(-45deg, #FFD700 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #FFD700 75%), linear-gradient(-45deg, transparent 75%, #FFD700 75%)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-[#FFD700]/10 text-[#FFD700] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BadgeCheck className="w-4 h-4" />
            Garantía de Calidad
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Certificaciones Internacionales
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            En MEXTRA nos enorgullece contar con las certificaciones más importantes 
            del sector, garantizando la máxima calidad en cada producto.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:-translate-y-3 hover:border-[#FFD700]/30"
            >
              {/* Icon with Gradient */}
              <div className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br ${cert.color} mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                <div className="text-white">{cert.icon}</div>
              </div>
              
              <span className="text-[#FFD700] text-sm font-medium uppercase tracking-wider">
                {cert.subtitle}
              </span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                {cert.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quality Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {[
            { icon: <Star className="w-5 h-5" />, label: 'Calidad Premium' },
            { icon: <Globe className="w-5 h-5" />, label: 'Estándares Internacionales' },
            { icon: <TrendingUp className="w-5 h-5" />, label: 'Mejora Continua' },
            { icon: <Target className="w-5 h-5" />, label: 'Precisión Garantizada' },
          ].map((badge, index) => (
            <div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 hover:border-[#FFD700]/30 transition-all">
              <span className="text-[#FFD700]">{badge.icon}</span>
              <span className="text-white font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Industrial Division Section
function IndustrialSection() {
  return (
    <section id="industria" className="relative py-24 overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/images/planta2.jpeg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-[#FFD700]/20 text-[#FFD700] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Factory className="w-4 h-4" />
              Soluciones Empresariales
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              División Industrial
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              En MEXTRA, comprendemos la importancia de mantener el funcionamiento 
              ininterrumpido de la maquinaria y equipos. Contamos con un equipo de 
              profesionales altamente capacitados que se convierten en asesores de 
              mantenimiento preventivo y predictivo para nuestros clientes.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Nuestro objetivo es prevenir paradas no programadas y garantizar la continuidad 
              operativa de su negocio con lubricantes de la más alta calidad.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#FFD700] hover:bg-[#FFA500] text-black font-bold px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-[#FFD700]/30">
                Conoce más
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 rounded-lg transition-all">
                Solicitar cotización
              </Button>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '24/7', label: 'Soporte Técnico' },
              { value: '98%', label: 'Satisfacción' },
              { value: '200+', label: 'Clientes' },
              { value: '50K', label: 'Litros/Día' },
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
                <span className="text-3xl md:text-4xl font-black text-[#FFD700]">{stat.value}</span>
                <p className="text-white/80 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: <Droplets className="w-10 h-10" />,
      title: 'Alta Calidad',
      description: 'Productos formulados con bases parafínicas y selectos paquetes de aditivos que garantizan el máximo rendimiento.',
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: 'Tecnología Avanzada',
      description: 'Investigación y desarrollo continuo para mejorar el rendimiento de nuestros lubricantes.',
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: 'Distribución Nacional',
      description: 'Presencia en todo México con puntos de venta estratégicos para tu conveniencia.',
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: 'Soporte Técnico',
      description: 'Asesoría especializada para seleccionar el producto adecuado para tu equipo.',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            ¿Por qué elegir MEXTRA?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprometidos con la excelencia en cada gota
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FFD700]/20 rounded-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FFD700]/10 rounded-2xl" />
            <img
              src="/images/planta4.jpeg"
              alt="Planta MEXTRA"
              className="relative rounded-2xl shadow-2xl w-full"
            />
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#FFD700] text-black p-6 rounded-2xl shadow-xl">
              <span className="text-xl font-black">DESDE</span>
              <p className="text-2xl font-medium">1937<br/></p>
            </div>
          </div>
          
          <div>
            <span className="inline-flex items-center gap-2 bg-[#FFD700]/10 text-[#FFD700] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4" />
              Sobre Nosotros
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Nuestra Historia
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              MEXTRA S.A. DE C.V. es una empresa mexicana dedicada a la fabricación 
              y distribución de lubricantes de alta calidad para el sector automotriz 
              e industrial. Con más de 30 años de experiencia, nos hemos consolidado 
              como uno de los principales fabricantes de lubricantes en México.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Nuestra planta de producción está ubicada en Tizayuca, Hidalgo, 
              equipada con tecnología de punta para garantizar productos que cumplan 
              con los más altos estándares internacionales. 
            
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '', label: '' },
                { value: '', label: '' },
                { value: '', label: '' },
              ].map((stat, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
                  <span className="text-2xl font-black text-[#FFD700]">{stat.value}</span>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Plant Gallery Section
function PlantGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  
  const plantImages = [
    { src: '/images/planta1.jpeg', title: 'Almacén de Productos Terminados', category: 'Almacén' },
    { src: '/images/planta2.jpeg', title: 'Tanques de Almacenamiento', category: 'Producción' },
    { src: '/images/planta3.jpeg', title: 'Vista Aérea de la Planta', category: 'Instalaciones' },
    { src: '/images/planta4.jpeg', title: 'Instalaciones Principales', category: 'Instalaciones' },
    { src: '/images/planta5.jpeg', title: 'Área de Producción', category: 'Producción' },
    { src: '/images/planta6.jpeg', title: 'Área de Procesos', category: 'Producción' },
  ];

  const categories = ['Todas', 'Producción', 'Almacén', 'Instalaciones'];
  
  const filteredImages = activeTab === 0 
    ? plantImages 
    : plantImages.filter(img => img.category === categories[activeTab]);

  return (
    <section id="planta" className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#FFD700]/10 text-[#FFD700] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Factory className="w-4 h-4" />
            Instalaciones
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Nuestra Planta de Producción
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ubicada en Tizayuca, Hidalgo, nuestra planta cuenta con la tecnología más 
            avanzada para la producción de lubricantes de alta calidad.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === index 
                  ? 'bg-[#FFD700] text-black' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image, index) => (
            <div 
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg aspect-[4/3]"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[#FFD700] text-sm font-medium mb-1">{image.category}</span>
                <h4 className="text-white font-bold text-lg">{image.title}</h4>
              </div>
              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Search className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Plant Info Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Facilities Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-[#FFD700]/10 rounded-xl flex items-center justify-center">
                <Factory className="w-6 h-6 text-[#FFD700]" />
              </div>
              Instalaciones
            </h3>
            <ul className="space-y-4">
              {[
                'Capacidad de producción de más de 50,000 litros diarios',
                'Tanques de almacenamiento con capacidad superior a 200,000 litros',
                'Laboratorio de control de calidad equipado con tecnología de punta',
                'Sistema de mezclado automatizado para máxima precisión',
                'Área de almacenamiento con control de temperatura',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFD700] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Location Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-[#FFD700]/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#FFD700]" />
              </div>
              Ubicación
            </h3>
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <p className="text-gray-700 font-medium mb-2">Dirección:</p>
              <p className="text-gray-600 mb-4">
                Calle Oriente 2 No. 6, Zona Industrial<br />
                Tizayuca, Hidalgo, C.P. 43804
              </p>
              <p className="text-gray-700 font-medium mb-2">Contacto:</p>
              <p className="text-gray-600">
                Tel: (01 779) 796 1200<br />
                Email: servicioclientes@mextra.com.mx
              </p>
            </div>
            <a
  href="https://www.google.com/maps?q=19.8298844,-98.9771226"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="w-full bg-[#FFD700] hover:bg-[#FFA500] text-black font-bold py-3 rounded-lg">
    <MapPin className="w-5 h-5 mr-2" />
    Ver en Google Maps
  </Button>
</a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 bg-black/95 border-none">
            <img src={selectedImage} alt="Planta" className="w-full h-auto max-h-[80vh] object-contain" />
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}

// Distributors Section
function DistributorsSection() {
  return (
    <section id="distribuidores" className="py-24 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #FFD700 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-[#FFD700]/10 text-[#FFD700] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Globe className="w-4 h-4" />
            Red Nacional
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Presencia Nacional
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Contamos con una red de distribuidores a nivel nacional para brindarte 
            el mejor servicio y atención.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { value: '30+', label: 'Años de experiencia', icon: <Clock className="w-6 h-6" /> },
            { value: '100+', label: 'Puntos de venta', icon: <MapPin className="w-6 h-6" /> },
            { value: '32', label: 'Estados', icon: <Globe className="w-6 h-6" /> },
            { value: '50K+', label: 'Litros diarios', icon: <Droplets className="w-6 h-6" /> },
          ].map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-[#FFD700]/30 transition-all group">
              <div className="text-[#FFD700] mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-[#FFD700] mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-[#FFD700] hover:bg-[#FFA500] text-black font-bold px-10 py-4 rounded-full text-lg transition-all hover:shadow-lg hover:shadow-[#FFD700]/30 hover:-translate-y-1">
            Quiero ser distribuidor
          </Button>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-[#FFD700]/10 text-[#FFD700] px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MessageCircle className="w-4 h-4" />
              Contacto
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Contáctanos
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos a la brevedad.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h3>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Apellido</label>
                    <input
                      type="text"
                      placeholder="Tu apellido"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                  <input
                    type="tel"
                    placeholder="(55) 1234 5678"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                  <textarea
                    placeholder="¿En qué podemos ayudarte?"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 transition-all resize-none"
                  />
                </div>
                <Button className="w-full bg-[#FFD700] hover:bg-[#FFA500] text-black font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-[#FFD700]/30">
                  Enviar mensaje
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Info Card */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Información de contacto</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FFD700]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Dirección</p>
                      <p className="text-gray-600 text-sm">Calle Oriente 2 No. 6, Zona Industrial, Tizayuca, Hidalgo</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FFD700]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Teléfono</p>
                      <p className="text-gray-600 text-sm">(01 779) 796 1200</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FFD700]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600 text-sm">servicioclientes@mextra.com.mx</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Card */}
              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-black mb-4">Síguenos</h3>
                <p className="text-black/70 text-sm mb-6">Mantente al día con nuestras novedades</p>
                <div className="flex gap-3">
                  {[
                    { icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com/mextralubricantes', color: 'bg-[#1877F2]' },
                    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/mextralubricantes', color: 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]' },
                    { icon: <Linkedin className="w-5 h-5" />, href: '#', color: 'bg-[#0077B5]' },
                    { icon: <Youtube className="w-5 h-5" />, href: '#', color: 'bg-[#FF0000]' },
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 ${social.color} rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Section
function Footer() {
  const footerLinks = {
    productos: [
      { label: 'Aceites para Motor', href: '#' },
      { label: 'Hidráulicos', href: '#' },
      { label: 'Transmisiones', href: '#' },
      { label: 'Industriales', href: '#' },
      { label: 'Refrigerantes', href: '#' },
    ],
    empresa: [
      { label: 'Nosotros', href: '#nosotros' },
      { label: 'Planta', href: '#planta' },
      { label: 'Certificaciones', href: '#certificaciones' },
      { label: 'Distribuidores', href: '#distribuidores' },
    ],
    soporte: [
      { label: 'Contacto', href: '#contacto' },
      { label: 'Preguntas Frecuentes', href: '#' },
      { label: 'Aviso de Privacidad', href: '#' },
      { label: 'Términos y Condiciones', href: '#' },
    ],
  };

  return (
    <footer className="bg-[#0a0a0a] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img 
              src="/images/logo-mextra.png" 
              alt="MEXTRA Logo" 
              className="h-14 w-auto mb-6"
            />
            <p className="text-gray-400 mb-6 max-w-sm">
              Lubricantes de alta calidad con certificación internacional. 
              
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com/mextralubricantes' },
                { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/mextralubricantes' },
                { icon: <Linkedin className="w-5 h-5" />, href: '#' },
                { icon: <Youtube className="w-5 h-5" />, href: '#' },
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-[#FFD700] rounded-lg flex items-center justify-center text-white hover:text-black transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Productos</h4>
            <ul className="space-y-3">
              {footerLinks.productos.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-[#FFD700] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-[#FFD700] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Soporte</h4>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-[#FFD700] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MEXTRA Lubricantes. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-[#FFD700] text-sm transition-colors">
              Aviso de privacidad
            </a>
            <a href="#" className="text-gray-500 hover:text-[#FFD700] text-sm transition-colors">
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// WhatsApp Button
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/525527296129"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110 whatsapp-pulse"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}

// Scroll to Top Button
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-50 bg-[#FFD700] hover:bg-[#FFA500] text-black p-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}

// Promo Modal
function PromoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden border-none">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] p-10 md:p-14 text-center">
            <img 
              src="/images/logo-mextra.png" 
              alt="MEXTRA" 
              className="h-24 mx-auto mb-8"
            />
            <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
              ¡CALIDAD CERTIFICADA!
            </h2>
            <p className="text-black/80 text-lg mb-8">
              Nuestros productos cuentan con certificaciones ISO 9001, ISO 14001 y API
            </p>
            <div className="flex justify-center gap-3 mb-8">
              {['ISO 9001', 'ISO 14001', 'API'].map((cert, index) => (
                <div key={index} className="bg-white/90 px-5 py-2 rounded-full shadow-lg">
                  <span className="font-bold text-black">{cert}</span>
                </div>
              ))}
            </div>
            <Button 
              onClick={onClose}
              className="bg-black text-white hover:bg-gray-800 px-10 py-4 rounded-full font-bold text-lg transition-all hover:shadow-xl"
            >
              Explorar ahora
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Main App Component
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setShowPromo(true), 800);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-0">
        <HeroSection />
        <StatsBar />
        <ProductSelector />
        <ProductLines />
        <CertificationsSection />
        <IndustrialSection />
        <FeaturesSection />
        <AboutSection />
        <PlantGallery />
        <DistributorsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
      <PromoModal isOpen={showPromo} onClose={() => setShowPromo(false)} />
    </div>
  );
}

export default App;
