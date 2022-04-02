import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Profile from "../../Profile";

export default function HeaderArea() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="header-area" id="headerArea">
        <div className="container h-100 d-flex align-items-center justify-content-between">
          <div className="logo-wrapper">
            <Link href="/">
              <a>
                <Image src="/img/core-img/logo-small.png" alt="Images" width={35} height={35} />
              </a>
            </Link>
          </div>
          <div className="top-search-form">
            <form action="#" method="">
              <input className="form-control" type="search" placeholder="Enter your keyword" />
              <button type="submit"><i className="fa fa-search"></i></button>
            </form>
          </div>
          <div className="suha-navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#suhaOffcanvas" aria-controls="suhaOffcanvas">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  )
}
