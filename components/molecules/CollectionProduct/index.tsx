import dynamic from 'next/dynamic';

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

export default function CollectionProduct() {

  const [item, setItem] = useState(0);  

  useEffect(() => {
    const check = isMobile ? 2 : 5;
    setItem(check);
  },[]);

  return (
    <div className="container">
      <div className="section-heading d-flex align-items-center justify-content-between">
        <h6>Collections</h6>
        <a className="btn" href="#">View All</a>
      </div>
      <OwlCarousel className="collection-slide owl-carousel" nav={false} loop={true} items={item} margin={15} autoplay>
        <div className="card collection-card">
          <a href="single-product.html">
            <img src="img/product/17.jpg" alt="Images" /></a>
          <div className="collection-title"><span>Women</span><span>9 new items</span></div>
        </div>
        <div className="card collection-card">
          <a href="single-product.html">
            <img src="img/product/19.jpg" alt="Images" /></a>
          <div className="collection-title"><span>Men</span><span>29 items</span></div>
        </div>
        <div className="card collection-card">
          <a href="single-product.html">
            <img src="img/product/21.jpg" alt="Images" /></a>
          <div className="collection-title"><span>Kids</span><span>4 new items</span></div>
        </div>
        <div className="card collection-card">
          <a href="single-product.html">
            <img src="img/product/22.jpg" alt="Images" /></a>
          <div className="collection-title"><span>Gadget</span><span>11 items</span></div>
        </div>
        <div className="card collection-card">
          <a href="single-product.html">
            <img src="img/product/23.jpg" alt="Images" /></a>
          <div className="collection-title"><span>Foods</span><span>2 new items</span></div>
        </div>
        <div className="card collection-card">
          <a href="single-product.html">
            <img src="img/product/24.jpg" alt="Images" /></a>
          <div className="collection-title"><span>Sports</span><span>5 items</span></div>
        </div>
      </OwlCarousel>
      <div className="pb-3"></div>
    </div>
  )
}
