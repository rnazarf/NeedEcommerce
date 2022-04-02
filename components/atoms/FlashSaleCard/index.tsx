import Image from 'next/image';
import Link from 'next/link';
import NumberFormat from 'react-number-format';

interface FlashSaleProps {
  img: string;
  title: string;
  id: number;
  price: number;
  percent: number;
}

export default function FlashSaleCard(props: FlashSaleProps) {
  const {
    id,
    img,
    title,
    price,
    percent
  } = props;

  const discount = price * (percent / 100);
  const newPrice = price - Math.round(discount);

  return (
    <div className="card flash-sale-card">
      <div className="card-body">
        <Link href={`product/${id}`}>
          <a>
            <Image src={img} alt={title} width={300} height={300} />
            <span className="product-title">{title}</span>
            <p className="sale-price">
              <NumberFormat
                value={newPrice}
                displayType="text"
                thousandSeparator="."
                decimalSeparator=","
                prefix="Rp. "
              />
              <br />
              <span className="real-price">
                <NumberFormat
                  value={price}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="Rp. "
                />
              </span>
            </p>
            <span className="progress-title">{percent}% Sold
              Out</span>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${percent}%` }}
                aria-valuenow={percent}
                aria-valuemin={0}
                aria-valuemax={100}
              >
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}
