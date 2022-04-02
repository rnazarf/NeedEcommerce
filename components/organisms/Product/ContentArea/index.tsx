import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

export default function ContentArea() {
  return (
    <div className="page-content-wrapper">
      <div className="product-slide-wrapper">
        <OwlCarousel className="product-slides owl-carousel" margin={0} nav={false} items={1} autoplay>
          <div className="single-product-slide" style={{ backgroundImage: `url('/img/bg-img/6.jpg')` }}></div>
          <div className="single-product-slide" style={{ backgroundImage: `url('/img/bg-img/10.jpg')` }}></div>
          <div className="single-product-slide" style={{ backgroundImage: `url('/img/bg-img/11.jpg')` }}></div>
        </OwlCarousel>
        <a className="video-btn shadow-sm" id="singleProductVideoBtn" href="https://www.youtube.com/watch?v=lFGvqvPh5jI">
          <svg className="bi bi-play text-dark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"></path>
          </svg></a>
      </div>
      <div className="product-description pb-3">
        <div className="product-title-meta-data bg-white mb-3 py-3">
          <div className="container d-flex justify-content-between">
            <div className="p-title-price">
              <h6 className="mb-1">Flower Ceramic Pots</h6>
              <p className="sale-price mb-0">$38<span style={{ textDecoration: `line-through`, paddingLeft: `10px` }}> $41</span></p>
            </div>
            <div className="p-wishlist-share"><a href="wishlist-grid.html"><i className="lni lni-heart"></i></a></div>
          </div>
          <div className="product-ratings">
            <div className="container d-flex align-items-center justify-content-between">
              <div className="ratings">
                <i className="lni lni-star-filled"></i>
                <i className="lni lni-star-filled"></i>
                <i className="lni lni-star-filled"></i>
                <i className="lni lni-star-filled"></i>
                <i className="lni lni-star-filled"></i>
                <span className="ps-1">3 ratings</span></div>
              <div className="total-result-of-ratings"><span>5.0</span><span>Very Good</span></div>
            </div>
          </div>
        </div>
        <div className="flash-sale-panel bg-white mb-3 py-3">
          <div className="container">
            <div className="sales-offer-content d-flex align-items-end justify-content-between">
              <div className="sales-end">
                <p className="mb-1 font-weight-bold"><i className="lni lni-bolt"></i> Flash sale end in</p>
                <ul className="sales-end-timer ps-0 d-flex align-items-center" data-countdown="2022/01/01 14:21:37">
                  <li><span className="days">0</span>d</li>
                  <li><span className="hours">0</span>h</li>
                  <li><span className="minutes">0</span>m</li>
                  <li><span className="seconds">0</span>s</li>
                </ul>
              </div>
              <div className="sales-volume text-end">
                <p className="mb-1 font-weight-bold">82% Sold Out</p>
                <div className="progress" style={{ height: `6px` }}>
                  <div className="progress-bar bg-warning" role="progressbar" style={{ width: `82%` }} aria-valuenow={82} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="selection-panel bg-white mb-3 py-3">
          <div className="container d-flex align-items-center justify-content-between">
            <div className="choose-color-wrapper">
              <p className="mb-1 font-weight-bold">Color</p>
              <div className="choose-color-radio d-flex align-items-center">
                <div className="form-check mb-0">
                  <input className="form-check-input blue" id="colorRadio1" type="radio" name="colorRadio" checked />
                  <label className="form-check-label"></label>
                </div>
                <div className="form-check mb-0">
                  <input className="form-check-input yellow" id="colorRadio2" type="radio" name="colorRadio" />
                  <label className="form-check-label"></label>
                </div>
                <div className="form-check mb-0">
                  <input className="form-check-input green" id="colorRadio3" type="radio" name="colorRadio" />
                  <label className="form-check-label"></label>
                </div>
                <div className="form-check mb-0">
                  <input className="form-check-input purple" id="colorRadio4" type="radio" name="colorRadio" />
                  <label className="form-check-label"></label>
                </div>
              </div>
            </div>
            <div className="choose-size-wrapper text-end">
              <p className="mb-1 font-weight-bold">Size</p>
              <div className="choose-size-radio d-flex align-items-center">
                <div className="form-check mb-0 me-2">
                  <input className="form-check-input" id="sizeRadio1" type="radio" name="sizeRadio" />
                  <label className="form-check-label">S</label>
                </div>
                <div className="form-check mb-0 me-2">
                  <input className="form-check-input" id="sizeRadio2" type="radio" name="sizeRadio" checked />
                  <label className="form-check-label">M</label>
                </div>
                <div className="form-check mb-0">
                  <input className="form-check-input" id="sizeRadio3" type="radio" name="sizeRadio" />
                  <label className="form-check-label">L</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-form-wrapper bg-white mb-3 py-3">
          <div className="container">
            <form className="cart-form" action="#" method="">
              <div className="order-plus-minus d-flex align-items-center">
                <div className="quantity-button-handler">-</div>
                <input className="form-control cart-quantity-input" type="text" step="1" name="quantity" value="3" />
                <div className="quantity-button-handler">+</div>
              </div>
              <button className="btn btn-danger ms-3" type="submit">Add To Cart</button>
            </form>
          </div>
        </div>
        <div className="p-specification bg-white mb-3 py-3">
          <div className="container">
            <h6>Specifications</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eum? Id, culpa? At officia quisquam laudantium nisi mollitia nesciunt, qui porro asperiores cum voluptates placeat similique recusandae in facere quos vitae?</p>
            <ul className="mb-3 ps-3">
              <li><i className="lni lni-checkmark-circle"> </i> 100% Good Reviews</li>
              <li><i className="lni lni-checkmark-circle"> </i> 7 Days Returns</li>
              <li><i className="lni lni-checkmark-circle"> </i> Warranty not Aplicable</li>
              <li><i className="lni lni-checkmark-circle"> </i> 100% Brand New Product</li>
            </ul>
            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eum? Id, culpa? At officia quisquam laudantium nisi mollitia nesciunt, qui porro asperiores cum voluptates placeat similique recusandae in facere quos vitae?</p>
          </div>
        </div>
        <div className="bg-img" style={{ backgroundImage: `url(/img/product/18.jpg)` }}>
          <div className="container">
            <div className="video-cta-content d-flex align-items-center justify-content-center">
              <div className="video-text text-center">
                <h4 className="mb-4">Summer Clothing</h4><a className="btn btn-primary rounded-circle" id="videoButton" href="https://www.youtube.com/watch?v=lFGvqvPh5jI"><i className="lni lni-play"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="related-product-wrapper py-3 mb-3">
          <div className="container">
            <div className="section-heading d-flex align-items-center justify-content-between">
              <h6>Related Products</h6><a className="btn" href="shop-grid.html">View All</a>
            </div>
            <OwlCarousel className="related-product-slide owl-carousel" loop nav={false} items={2} autoplay margin={4}>
              <div className="single-related-product-slide">
                <div className="card product-card">
                  <div className="card-body">
                    <span className="badge rounded-pill badge-warning">Sale</span>
                    <a className="wishlist-btn" href="#"><i className="lni lni-heart">                       </i></a>
                    <a className="product-thumbnail d-block" href="single-product.html">
                      <img className="mb-2" src="/img/product/11.png" alt="" /></a>
                    <a className="product-title d-block" href="single-product.html">Beach Cap</a>
                    <p className="sale-price">$13<span>$42</span></p>
                    <div className="product-rating"><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i></div>
                    <a className="btn btn-success btn-sm" href="#"><i className="lni lni-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="single-related-product-slide">
                <div className="card product-card">
                  <div className="card-body">
                    <span className="badge rounded-pill badge-success">New</span>
                    <a className="wishlist-btn" href="#"><i className="lni lni-heart">                       </i></a>
                    <a className="product-thumbnail d-block" href="single-product.html">
                      <img className="mb-2" src="/img/product/5.png" alt="" />
                      <ul className="offer-countdown-timer d-flex align-items-center shadow-sm" data-countdown="2021/12/31 23:59:59">
                        <li><span className="days">0</span>d</li>
                        <li><span className="hours">0</span>h</li>
                        <li><span className="minutes">0</span>m</li>
                        <li><span className="seconds">0</span>s</li>
                      </ul></a>
                    <a className="product-title d-block" href="single-product.html">Wooden Sofa</a>
                    <p className="sale-price">$74<span>$99</span></p>
                    <div className="product-rating"><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i></div>
                    <a className="btn btn-success btn-sm" href="#"><i className="lni lni-plus"></i></a>
                  </div>
                </div>
              </div>

              <div className="single-related-product-slide">
                <div className="card product-card">
                  <div className="card-body">
                    <span className="badge rounded-pill badge-success">Sale</span>
                    <a className="wishlist-btn" href="#">
                      <i className="lni lni-heart"> </i>
                    </a>
                    <a className="product-thumbnail d-block" href="single-product.html">
                      <img className="mb-2" src="/img/product/6.png" alt="" />
                    </a>
                    <a className="product-title d-block" href="single-product.html">Roof Lamp</a>
                    <p className="sale-price">$99<span>$113</span></p>
                    <div className="product-rating"><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i></div>
                    <a className="btn btn-success btn-sm" href="#"><i className="lni lni-plus"></i></a>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  )
}
