import ProductCard from "../../atoms/ProductCard"

export default function WeeklyBestSeller() {
  return (
    <div className="weekly-best-seller-area py-3">
      <div className="container">
        <div className="section-heading d-flex align-items-center justify-content-between">
          <h6>Weekly Best Sellers</h6>
          <a className="btn" href="shop-list.html">View All</a>
        </div>
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <ProductCard id={1} img="/img/product/10.png" price={10000} score={4.5} title="Modern Sofa" />
          </div>
          <div className="col-12 col-md-6">
            <ProductCard id={1} img="/img/product/7.png" price={20000} score={5} title="Office Chair" />
          </div>
          <div className="col-12 col-md-6">
            <ProductCard id={1} img="/img/product/12.png" price={30000} score={4.6} title="Sun Glasses" />
          </div>
          <div className="col-12 col-md-6">
            <ProductCard id={1} img="/img/product/13.png" price={40000} score={4.9} title="Wall Clock" />
          </div>
        </div>
      </div>
    </div>
  )
}
