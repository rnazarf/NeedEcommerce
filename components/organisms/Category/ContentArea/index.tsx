import CategoryImage from "../../../atoms/CategoryImage";
import CategoryProduct from "../../../molecules/CategoryProduct";
import ProductCategories from "../../../molecules/ProductCategories";
import TopProducts from "../../../molecules/TopProducts";

export default function ContentArea() {
  return (
    <div className="page-content-wrapper">
      <CategoryImage img="/img/bg-img/5.jpg" />
      <ProductCategories title="Sub Categories" />
      <CategoryProduct />
    </div>
  )
}
