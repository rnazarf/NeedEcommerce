import CategoryCard from "../../atoms/CategoryCard";

interface ProductCategoriesProps {
  title: string;
}

export default function ProductCategories(props: ProductCategoriesProps) {
  const { title } = props;
  return (
    <div className="product-catagories-wrapper py-3">
      <div className="container">
        <div className="section-heading">
          <h6>{title}</h6>
        </div>
        <div className="product-catagory-wrap">
          <div className="row g-3">
            <div className="col-4">
              <CategoryCard
                title="Woman"
                id={1}
                textColor='text-danger'
                icon="bi bi-heart"
              />
            </div>
            <div className="col-4">
              <CategoryCard
                title="Juice"
                id={1}
                textColor='text-primary'
                icon="bi bi-cup"
              />
            </div>
            <div className="col-4">
              <CategoryCard
                title="Foods"
                id={1}
                textColor='text-warning'
                icon="bi bi-egg-fried"
              />
            </div>
            <div className="col-4">
              <CategoryCard
                title="Games"
                id={1}
                textColor='text-success'
                icon="bi bi-controller"
              />
            </div>
            <div className="col-4">
              <CategoryCard
                title="Gadgets"
                id={1}
                textColor='text-secondary'
                icon="bi bi-phone"
              />
            </div>
            <div className="col-4">
              <CategoryCard
                title="Books"
                id={1}
                textColor='text-info'
                icon="bi bi-journal-bookmark"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
