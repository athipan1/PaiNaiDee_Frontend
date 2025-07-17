type Attraction = {
  id: number;
  name: string;
  province: string;
  image_url?: string;
};

type Props = {
  attraction: Attraction;
};

function AttractionCard({ attraction }: Props) {
  return (
    <div className="card" aria-label={`Attraction: ${attraction.name}`}>
      <img
        src={attraction.image_url ?? "/default.jpg"}
        alt={attraction.name}
        loading="lazy"
      />
      <h2>{attraction.name}</h2>
      <p>{attraction.province}</p>
    </div>
  );
}

export default AttractionCard;
