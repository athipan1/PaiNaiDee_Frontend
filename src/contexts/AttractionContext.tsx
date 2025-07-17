import { createContext, useState, useEffect, ReactNode } from 'react';

type Attraction = {
  id: number;
  name: string;
  province: string;
  image_url?: string;
};

type AttractionContextType = {
  attractions: Attraction[];
  loading: boolean;
  search: (term: string) => void;
};

export const AttractionContext = createContext<AttractionContextType>({
  attractions: [],
  loading: true,
  search: () => {},
});

type Props = {
    children: ReactNode;
};

export function AttractionProvider({ children }: Props) {
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [filteredAttractions, setFilteredAttractions] = useState<Attraction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/attractions")
      .then((res) => res.json())
      .then((data) => {
        setAttractions(data);
        setFilteredAttractions(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const search = (term: string) => {
    const filtered = attractions.filter((attraction) =>
      attraction.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredAttractions(filtered);
  };

  return (
    <AttractionContext.Provider value={{ attractions: filteredAttractions, loading, search }}>
      {children}
    </AttractionContext.Provider>
  );
}
