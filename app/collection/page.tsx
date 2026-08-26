'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './collection.module.css';

const CATEGORIES = ['All', 'Outerwear', 'Tops', 'Bottoms', 'Vests', 'Accessories'];
const PRODUCTS = [
  { id: 1, title: 'Modular Field Jacket', category: 'Outerwear', price: 32000 }, { id: 2, title: 'Cargo Trousers', category: 'Bottoms', price: 18000 }, { id: 3, title: 'Utility Vest', category: 'Vests', price: 24000 }, { id: 4, title: 'Technical Parka', category: 'Outerwear', price: 38000 }, { id: 5, title: 'Relaxed Shirt', category: 'Tops', price: 14000 }, { id: 6, title: 'Wide Leg Trousers', category: 'Bottoms', price: 16000 }, { id: 7, title: 'Work Vest', category: 'Vests', price: 22000 }, { id: 8, title: 'Canvas Tote', category: 'Accessories', price: 8000 }, { id: 9, title: 'Oversized Coat', category: 'Outerwear', price: 42000 },
];

export default function CollectionPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const products = activeCategory === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCategory);
  return <div className={styles.collectionPage}><div className={styles.collectionInner}>
    <div className={styles.collectionHeader}><h1 className={styles.collectionTitle}>Collection</h1><p className={styles.collectionSubtitle}>{products.length} {products.length === 1 ? 'piece' : 'pieces'}</p></div>
    <div className={styles.filters}>{CATEGORIES.map((category) => <button key={category} onClick={() => setActiveCategory(category)} className={`${styles.filterButton} ${activeCategory === category ? styles.active : ''}`} aria-pressed={activeCategory === category}>{category}</button>)}</div>
    <div className={styles.productGrid}>{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>
  </div></div>;
}

function ProductCard({ product }: { product: (typeof PRODUCTS)[number] }) {
  const slug = product.title.toLowerCase().replace(/\s+/g, '-');
  return <Link href={`/product/${slug}`} className={styles.productCard}>
    <div className={styles.productImageWrapper}><div className={styles.productImagePlaceholder}><span className={styles.productImageText}>{product.title}</span></div></div>
    <div className={styles.productInfo}><span className={styles.productCategory}>{product.category}</span><h2 className={styles.productTitle}>{product.title}</h2><span className={styles.productPrice}>{product.price.toLocaleString('ru-RU')} ₽</span></div>
  </Link>;
}
