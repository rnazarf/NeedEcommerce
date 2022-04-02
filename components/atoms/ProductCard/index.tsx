import Image from "next/image";
import Link from "next/link";
import NumberFormat from "react-number-format";

interface ProductCardProps {
  img: string;
  title: string;
  price: number;
  id: number;
  score: number;
}

export default function ProductCard(props: ProductCardProps) {
  const {
    img,
    title,
    price,
    id,
    score
  } = props;

  return (
    <div className="card horizontal-product-card">
      <div className="card-body d-flex align-items-center">
        <div className="product-thumbnail-side">
          <span className="badge badge-success">Sale</span>
          <a className="wishlist-btn" href="#"><i className="lni lni-heart"></i></a>
          <Link href={`/product/${id}`}>
            <a className="product-thumbnail d-block">
              <Image src={img} alt="Images" width={300} height={300} />
            </a>
          </Link>
        </div>
        <div className="product-description">
          <Link href={`/product/${id}`}>
            <a className="product-title d-block">{title}</a>
          </Link>
          <p className="sale-price">
            <i className="lni lni-dollar"></i>
            <NumberFormat
              value={price}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              prefix="Rp. "
            />
          </p>
          <div className="product-rating"><i className="lni lni-star-filled"></i>{score}</div>
          <a className="btn btn-danger btn-sm" href="#"><i className="me-1 lni lni-cart"></i>
            Buy Now
          </a>
        </div>
      </div>
    </div>
  )
}
