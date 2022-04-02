import Link from 'next/link';
import NumberFormat from 'react-number-format'

interface FeaturedCardProps {
  img: string;
  title: string;
  price: number;
  id: number;
}

export default function FeaturedProductCard(props: FeaturedCardProps) {
  const {
    id,
    img,
    title,
    price,
  } = props;

  return (
    <div className="card featured-product-card">
      <div className="card-body">
        <span className="badge badge-warning custom-badge"><i className="lni lni-star"></i></span>
        <div className="product-thumbnail-side">
          <Link href={`/product/${id}`}>
            <a className="wishlist-btn shadow-sm border"><i className="lni lni-heart"></i></a>
          </Link>
          <Link href={`/product/${id}`}>
            <a className="product-thumbnail d-block"> <img src={img} alt="Images" /></a>
          </Link>
        </div>
        <div className="product-description">
          <a className="product-title d-block" href={`${id}`}>{title}</a>
          <p className="sale-price">
            <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} />
          </p>
        </div>
      </div>
    </div>
  )
}
