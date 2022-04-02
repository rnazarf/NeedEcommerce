import FeaturedProductCard from "../../atoms/FeaturedProductCard";

export default function FeaturedProduct() {
  return (
    <div className="featured-products-wrapper py-3">
      <div className="container">
        <div className="section-heading d-flex align-items-center justify-content-between">
          <h6>Featured Products</h6>
          <a className="btn" href="featured-products.html">View All</a>
        </div>
        <div className="row g-3">
          <div className="col-6 col-md-4 col-lg-3">
            <FeaturedProductCard id={1} img="img/product/14.png" price={10000} title="Blue Skateboard" />
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <FeaturedProductCard id={1} img="img/product/15.png" price={20000} title="Travel Bag" />
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <FeaturedProductCard id={1} img="img/product/16.png" price={50000} title="Cotton T-shirts" />
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <FeaturedProductCard id={1} img="img/product/6.png" price={40000} title="Roof Lamp" />
          </div>
        </div>
      </div>
    </div>
  )
}
