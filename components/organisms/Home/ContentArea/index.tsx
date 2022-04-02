import Banner from '../../../molecules/Banner';
import BannerCta from '../../../molecules/BannerCta';
import CollectionProduct from '../../../molecules/CollectionProduct';
import Discount from '../../../molecules/Discount';
import FeaturedProduct from '../../../molecules/FeaturedProduct';
import FlashSale from '../../../molecules/FlashSale';
import ProductCategories from '../../../molecules/ProductCategories';
import TopProducts from '../../../molecules/TopProducts';
import WeeklyBestSeller from '../../../molecules/WeeklyBestSeller';

export default function ContentArea() {
  return (
    <>
      <div className="page-content-wrapper">
        <Banner />
        <ProductCategories title="Product Categories" />
        <FlashSale />
        <TopProducts />
        <BannerCta />
        <WeeklyBestSeller />
        <Discount />
        <FeaturedProduct />
        <CollectionProduct />
      </div>
    </>
  )
}
