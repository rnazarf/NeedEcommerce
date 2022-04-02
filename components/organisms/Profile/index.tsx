export default function Profile() {
  return (
    <div className={`offcanvas offcanvas-start suha-offcanvas-wrap show`} tabIndex={-1} id="suhaOffcanvas"
      aria-labelledby="suhaOffcanvasLabel" style={{ visibility: `visible` }}>

      <button className="btn-close btn-close-white text-reset" type="button" data-bs-dismiss="offcanvas"
        aria-label="Close"></button>

      <div className="offcanvas-body">

        <div className="sidenav-profile">
          <div className="user-profile"><img src="/img/bg-img/9.jpg" alt="" /></div>
          <div className="user-info">
            <h6 className="user-name mb-1">Suha Sarah</h6>
            <p className="available-balance">Total balance $<span className="counter">583.67</span></p>
          </div>
        </div>

        <ul className="sidenav-nav ps-0">
          <li><a href="profile.html"><i className="lni lni-user"></i>My Profile</a></li>
          <li><a href="notifications.html"><i className="lni lni-alarm lni-tada-effect"></i>Notifications<span
            className="ms-3 badge badge-warning">3</span></a></li>
          <li className="suha-dropdown-menu"><a href="#"><i className="lni lni-cart"></i>Shop Pages</a>
            <ul>
              <li><a href="shop-grid.html">- Shop Grid</a></li>
              <li><a href="shop-list.html">- Shop List</a></li>
              <li><a href="single-product.html">- Product Details</a></li>
              <li><a href="featured-products.html">- Featured Products</a></li>
              <li><a href="flash-sale.html">- Flash Sale</a></li>
            </ul>
          </li>
          <li><a href="pages.html"><i className="lni lni-empty-file"></i>All Pages</a></li>
          <li className="suha-dropdown-menu"><a href="wishlist-grid.html"><i className="lni lni-heart"></i>My Wishlist</a>
            <ul>
              <li><a href="wishlist-grid.html">- Wishlist Grid</a></li>
              <li><a href="wishlist-list.html">- Wishlist List</a></li>
            </ul>
          </li>
          <li><a href="settings.html"><i className="lni lni-cog"></i>Settings</a></li>
          <li><a href="intro.html"><i className="lni lni-power-switch"></i>Sign Out</a></li>
        </ul>
      </div>
    </div>
  )
}
