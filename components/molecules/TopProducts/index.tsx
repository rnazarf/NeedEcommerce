import TopProductCard from '../../atoms/TopProductCard'

export default function TopProducts() {
  return (
    <div className="top-products-area py-3">
      <div className="container">
        <div className="section-heading d-flex align-items-center justify-content-between">
          <h6>Top Products</h6><a className="btn" href="shop-grid.html">View All</a>
        </div>
        <div className="row g-3">

          <div className="col-6 col-md-4 col-lg-3">
            <TopProductCard id={1} img="/img/product/11.png" price={10000} title="Beach Cap" />
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <TopProductCard id={1} img="/img/product/5.png" price={110000} title="Wooden Sofa" />
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <TopProductCard id={1} img="/img/product/6.png" price={210000} title="Roof Lamp" />
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <TopProductCard id={1} img="/img/product/9.png" price={210000} title="Sneaker Shoes" />
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <TopProductCard id={1} img="/img/product/8.png" price={210000} title="Wooden Chair" />
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <TopProductCard id={1} img="/img/product/4.png" price={210000} title="Polo Shirts" />
          </div>
        </div>
      </div>
    </div>
  )
}
