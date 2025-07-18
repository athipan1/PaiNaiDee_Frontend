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
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-xl transition-shadow duration-300"
      aria-label={`Attraction: ${attraction.name}`}
    >
      <img
        className="w-full h-48 object-cover"
        src={attraction.image_url ?? "/default.jpg"}
        alt={attraction.name}
        loading="lazy"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-text-dark font-kanit">{attraction.name}</h2>
        <p className="text-base text-text-muted mt-1">{attraction.province}</p>
      </div>
    </div>
  );
}

export default AttractionCard;
