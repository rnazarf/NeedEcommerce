import { useRouter } from "next/router";
import ContentArea from "../../components/organisms/Category/ContentArea";
import HeaderArea from "../../components/organisms/Category/HeaderArea";
import Navigation from '../../components/organisms/Navigation';

export default function Category() {
  const { query } = useRouter();

  return (
    <>
      <HeaderArea />
      <ContentArea />
      <Navigation />
    </>
  )
}
