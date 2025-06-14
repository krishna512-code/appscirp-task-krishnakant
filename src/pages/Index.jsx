import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import FilterSidebar from '../components/FilterSidebar';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../components/ui/select';
import '../styles/MainLayout.css';
import styled from 'styled-components';

const GridHeader = styled.div`
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
    padding: 16px 0 12px 0;
    margin: 16px 0 8px 0;
    font-size: 1rem;
  }
`;

const GridHeaderCenter = styled.div`
  @media (max-width: 600px) {
    justify-content: flex-start;
    gap: 12px;
  }
`;

const GridHeaderFilterLink = styled.span`
  @media (max-width: 600px) {
    font-size: 1rem;
    width: 100%;
    text-align: left;
    padding: 12px 0;
    border-bottom: 1px solid #eee;
  }
`;

const MainContent = styled.div`
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const SidebarColumn = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;

const StyledProductGrid = styled.div`
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 0 4px;
  }
`;

const MobileSidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
`;

const SidebarDrawer = styled.div`
  width: 300px;
  height: 100%;
  background-color: white;
  padding: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Index = () => {
  const [showFilters, setShowFilters] = useState(true);
  const [sort, setSort] = useState('RECOMMENDED');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AppScrip-Task-KrishnaKant",
    "description": "Discover our premium collection of bags, accessories, and lifestyle products. Quality items with modern design and functionality.",
    "url": "https://premiumstore.example.com",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Product Collection",
      "numberOfItems": 12,
      "itemListElement": [
        {
          "@type": "Product",
          "name": "Petrol Multiyear Design Backpack",
          "description": "Premium quality backpack with modern design",
          "offers": {
            "@type": "Offer",
            "price": "95.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        }
      ]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://premiumstore.example.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Shop",
          "item": "https://premiumstore.example.com/shop"
        }
      ]
    }
  };

  const isMobile = window.innerWidth <= 600;

  return (
    <>
      <Helmet>
        <title>AppScrip-Task-KrishnaKant</title>
        <meta name="description" content="Discover our premium collection of bags, accessories, and lifestyle products. Quality items with modern design and functionality. Free shipping on orders over €100." />
        <meta name="keywords" content="premium bags, designer backpacks, luxury accessories, online shopping, quality products, fashion bags, travel accessories" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Premium Store" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="AppScrip-Task-KrishnaKant" />
        <meta property="og:description" content="Shop our curated collection of premium bags, backpacks, and accessories. Modern design meets functionality." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://premiumstore.example.com" />
        <meta property="og:image" content="https://premiumstore.example.com/og-image.jpg" />
        <meta property="og:site_name" content="Premium Products Store" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@premiumstore" />
        <meta name="twitter:title" content="AppScrip-Task-KrishnaKantre" />
        <meta name="twitter:description" content="Shop our curated collection of premium bags, backpacks, and accessories." />
        <meta name="twitter:image" content="https://premiumstore.example.com/twitter-image.jpg" />
        
        {/* Additional SEO tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#222222" />
        <link rel="canonical" href="https://premiumstore.example.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://flagcdn.com" />
        <link rel="dns-prefetch" href="https://js.stripe.com" />
      </Helmet>

      <div className="main-bg">
        <Header />
        <main className="main-container" role="main">
          {/* Title and Description */}
          <div className="main-title-area">
            <h1 className="main-title">DISCOVER OUR PRODUCTS</h1>
            <p className="main-desc" style={{ marginBottom: '8px' }}>
              Lorem ipsum dolor sit amet consectetur. Amet est phasellus rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
            </p>
          </div>

          {/* Main area: sidebar + grid */}
          <div className="main-content">
            <div className="grid-area">
              <ProductGrid />
            </div>
          </div>
        </main>
        <Footer />
      </div>

      {showFilters && isMobile && (
        <MobileSidebarOverlay onClick={() => setShowFilters(false)}>
          <SidebarDrawer onClick={e => e.stopPropagation()}>
            <CloseButton onClick={() => setShowFilters(false)}>×</CloseButton>
            <FilterSidebar show={showFilters} />
          </SidebarDrawer>
        </MobileSidebarOverlay>
      )}
    </>
  );
};

export default Index;
