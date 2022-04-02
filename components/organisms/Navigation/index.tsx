export default function FooterArea() {
  return (
    <div className="footer-nav-area" id="footerNav">
      <div className="container h-100 px-0">
        <div className="suha-footer-nav h-100">
          <ul className="h-100 d-flex align-items-center justify-content-between ps-0">
            <li className="active"><a href="home.html"><i className="bi bi-house-door"></i>Home</a></li>            
            <li><a href="settings.html"><i className="bi bi-bag-heart"></i>Wishlist</a></li>
            <li><a href="cart.html"><i className="bi bi-basket"></i>Cart</a></li>
            <li><a href="pages.html"><i className="bi bi-receipt"></i>Transaction</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
