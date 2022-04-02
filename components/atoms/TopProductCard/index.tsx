import Image from "next/image";
import Link from "next/link";
import NumberFormat from "react-number-format"

interface TopProductProps {
  id: number;
  img: string;
  title: string;
  price: number;
}

export default function TopProductCard(props: TopProductProps) {
  const {
    id,
    img,
    title,
    price,
  } = props;

  return (
    <div className="card product-card">
      <div className="card-body">
        <span className="badge rounded-pill badge-warning">Sale</span>
        <a className="wishlist-btn" href="#">
          <i className="lni lni-heart"> </i>
        </a>
        <Link href={`/product/${id}`}>
          <a className="product-thumbnail d-block">
            <Image className="mb-2" src={img} alt={title} width={300} height={300} />
          </a>
        </Link>
        <Link href={`/product/${id}`}>
          <a className="product-title d-block">{title}</a>
        </Link>
        <p className="sale-price">
          <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} />
        </p>
        <div className="product-rating">
          <i className="lni lni-star-filled"></i>
          <i className="lni lni-star-filled"></i>
          <i className="lni lni-star-filled"></i>
          <i className="lni lni-star-filled"></i>
          <i className="lni lni-star-filled"></i>
        </div>
        <a className="btn btn-success btn-sm" href="#"><i className="lni lni-plus"></i></a>
      </div>
    </div>
  )
}
