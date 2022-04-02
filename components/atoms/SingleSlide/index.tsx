import Image from "next/image";

interface SingleSlideProps {
  img: '/img/bg-img/1.jpg' | '/img/bg-img/2.jpg' | '/img/bg-img/3.jpg';
  title: string;
  description: string;
  url: string;
}

export default function SingleSlide(props: SingleSlideProps) {
  const {
    img, title, description, url
  } = props;

  return (
    <div className="single-hero-slide" style={{ backgroundImage: `url(${img})` }}>
      <div className="slide-content h-100 d-flex align-items-center">
        <div className="slide-text">
          <h4 className="text-white mb-0" data-animation="fadeInUp" data-delay="100ms" data-duration="1000ms">
            {title}
          </h4>
          <p className="text-white" data-animation="fadeInUp" data-delay="400ms" data-duration="1000ms">
            {description}
          </p>
          <a className="btn btn-primary btn-sm" href={`${url}`} data-animation="fadeInUp"
            data-delay="800ms" data-duration="1000ms">Buy Now</a>
        </div>
      </div>
    </div>
  )
}
