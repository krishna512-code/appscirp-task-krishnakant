import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(setProduct)
      .catch(err => setError('Failed to load product'))
      .finally(() => setLoading(false));
  }, [id]);

  const productSchema = product ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "image": product.image,
    "description": product.description,
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "USD"
    }
  } : null;

  if (loading) return <div className="product-detail-loading">Loading...</div>;
  if (error) return <div className="product-detail-error">{error}</div>;
  if (!product) return null;

  return (
    <main>
      <Helmet>
        <title>{product.title} | AppScrip-Task-KrishnaKant</title>
        <meta name="description" content={product.description} />
        {productSchema && <script type="application/ld+json">{JSON.stringify(productSchema)}</script>}
      </Helmet>
      <Link to="/products" className="product-detail-back">&larr; Back to Products</Link>
      <div className="product-detail-card">
        <img src={product.image} alt={product.title + ' - Premium product'} className="product-detail-image" />
        <div className="product-detail-info">
          <h1 className="product-detail-title">{product.title}</h1>
          <h2 className="product-detail-category">Category: {product.category}</h2>
          <div className="product-detail-price">${product.price}</div>
          <p className="product-detail-description">{product.description}</p>
        </div>
      </div>
    </main>
  );
} 