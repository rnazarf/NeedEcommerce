import Link from "next/link";
import { ReactNode } from "react";

interface CategoryCardProps {
  id: number;
  icon: string;
  title: string;
  textColor: 'text-danger' | 'text-warning' | 'text-success' | 'text-info' | 'text-primary' | 'text-secondary' | 'text-dark';
}
export default function CategoryCard(props: CategoryCardProps) {
  const {
    id,
    icon,
    title,
    textColor,
  } = props;

  return (
    <div className="card catagory-card">
      <div className="card-body">
        <Link href={`/category/${id}`}>
          <a>
            <i className={`${icon} ${textColor}`}></i>
            <span>{title}</span>
          </a>
        </Link>
      </div>
    </div>
  )
}
