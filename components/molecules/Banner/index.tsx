import dynamic from 'next/dynamic';

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import SingleSlide from '../../atoms/SingleSlide';
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

export default function Banner() {
  return (
    <div className="container">
      <div className="pt-3">
        <OwlCarousel className="hero-slides owl-carousel" loop nav={false} items={1} autoplay>
          <SingleSlide img='/img/bg-img/1.jpg' title='Amazon Echo' description='3rd Generation, Charcoal' url='#' />
          <SingleSlide img='/img/bg-img/2.jpg' title='Light Candle' description='Now only $22' url='#' />
          <SingleSlide img='/img/bg-img/3.jpg' title='Best Furniture' description='3 years warranty' url='#' />
        </OwlCarousel>
      </div>
    </div>
  )
}
