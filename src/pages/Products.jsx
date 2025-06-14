import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import FilterSidebar from '../components/FilterSidebar';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import './Products.css';

export default function Products() {
  const [showFilters, setShowFilters] = useState(true);

  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "PPXOC Products",
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": "PPXOC MILKYWAY DRESS IN BLACK",
        "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
        "offers": {
          "@type": "Offer",
          "price": "95.00",
          "priceCurrency": "EUR"
        }
      },
      // Add more products as needed
    ]
  };

  return (
    <>
      <Helmet>
        <title>Shop | PPXOC</title>
        <meta name="description" content="Discover PPXOC's premium collection of high-quality products. Shop our latest arrivals and timeless classics." />
        <script type="application/ld+json">{JSON.stringify(productListSchema)}</script>
      </Helmet>

      <Header />
      
      <main className="products-page">
        <div className="products-wrapper">
          <aside className={`products-filter-sidebar${showFilters ? ' open' : ''}`}>
            <FilterSidebar show={showFilters} />
          </aside>
          <section className="products-content">
            <section className="products-header">
              <h1 className="products-title">DISCOVER OUR PRODUCTS</h1>
              <p className="products-desc">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
            </section>
            <hr className="products-divider" />
            <div className="products-actions-bar">
              <div className="products-actions-left">
                <span className="products-items-count">3425 ITEMS</span>
                <button
                  className="products-filter-toggle-btn"
                  onClick={() => setShowFilters((prev) => !prev)}
                  aria-label={showFilters ? 'Hide filter' : 'Show filter'}
                >
                  {showFilters ? (
                    <>
                      <span className="products-filter-chevron">&#8249;</span>
                      <span className="products-filter-link">HIDE FILTER</span>
                    </>
                  ) : (
                    <>
                      <span className="products-filter-link">SHOW FILTER</span>
                      <span className="products-filter-chevron">&#8250;</span>
                    </>
                  )}
                </button>
              </div>
              <div className="products-actions-right">
                <button className="products-sort-btn">
                  <span className="products-sort-label">RECOMMENDED</span>
                  <span className="products-sort-chevron">&#709;</span>
                </button>
              </div>
            </div>
            <hr className="products-divider" />
            <ProductGrid />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
} 