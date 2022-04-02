import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import FlashSaleCard from '../../atoms/FlashSaleCard';
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

export default function FlashSale() {
  const [item, setItem] = useState(0);

  useEffect(() => {
    const check = isMobile ? 3 : 5;
    setItem(check);
  }, []);

  return (
    <div className="flash-sale-wrapper">
      <div className="container">
        <div className="section-heading d-flex align-items-center justify-content-between">
          <h6 className="me-1 d-flex align-items-center">
            <svg className="bi bi-lightning me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
              fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd"
                d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z">
              </path>
            </svg>
            Flash Sale
          </h6>
          <ul className="sales-end-timer ps-0 d-flex align-items-center" data-countdown="2022/01/01 14:21:37">
            <li><span className="days">0</span>d</li>
            <li><span className="hours">0</span>h</li>
            <li><span className="minutes">0</span>m</li>
            <li><span className="seconds">0</span>s</li>
          </ul>
        </div>
        <OwlCarousel className='flash-sale-slide owl-carousel' loop margin={15} nav={false} items={item} autoplay>
          <FlashSaleCard img={`/img/product/1.png`} percent={33} price={10000} title={`Black Table Lamp`} id={1} />
          <FlashSaleCard img={`/img/product/2.png`} percent={99} price={20000} title={`Classic Garden Chair`} id={1} />
          <FlashSaleCard img={`/img/product/3.png`} percent={54} price={30000} title={`Modern Sofa`} id={1} />
          <FlashSaleCard img={`/img/product/1.png`} percent={33} price={10000} title={`Black Table Lamp`} id={1} />
          <FlashSaleCard img={`/img/product/2.png`} percent={99} price={20000} title={`Classic Garden Chair`} id={1} />
          <FlashSaleCard img={`/img/product/3.png`} percent={54} price={30000} title={`Modern Sofa`} id={1} />
        </OwlCarousel>
      </div>
    </div>
  )
}
