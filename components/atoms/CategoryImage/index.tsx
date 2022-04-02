interface CategoryImageProps {
  img: string;
}

export default function CategoryImage(props: CategoryImageProps) {
  const { img } = props;
  return (
    <div className="pt-3">
      <div className="container">
        <div className="catagory-single-img pt-3" style={{ backgroundImage: `url('${img}')` }}></div>
      </div>
    </div>
  )
}
