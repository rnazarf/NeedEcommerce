interface CollectionCardProps {
  id: number;
  img: string;
  title: string;
  item: number;
}

export default function CollectionCard(props: CollectionCardProps) {
  const { id, img, title, item } = props;
  return (
    <div className="card collection-card">
      <a href={`${id}`}>
        <img src={img} alt="Images" /></a>
      <div className="collection-title"><span>{title}</span><span>{item} items</span></div>
    </div>
  )
}
