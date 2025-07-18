import { createContext, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';

type Attraction = {
  id: number;
  name: string;
  province: string;
  image_url?: string;
};

type AttractionContextType = {
  attractions: Attraction[];
  loading: boolean;
  error: string | null;
  search: (term: string) => void;
  retry: () => void;
};

export const AttractionContext = createContext<AttractionContextType>({
  attractions: [],
  loading: true,
  error: null,
  search: () => {},
  retry: () => {},
});

type Props = {
    children: ReactNode;
};

export function AttractionProvider({ children }: Props) {
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [filteredAttractions, setFilteredAttractions] = useState<Attraction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAttractions = useCallback(() => {
    setLoading(true);
    setError(null);
    fetch("/api/attractions")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch attractions");
        }
        return res.json();
      })
      .then((data) => {
        setAttractions(data);
        setFilteredAttractions(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchAttractions();
  }, [fetchAttractions]);

  const search = (term: string) => {
    const filtered = attractions.filter((attraction) =>
      attraction.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredAttractions(filtered);
  };

  const retry = () => {
    fetchAttractions();
  };

  return (
    <AttractionContext.Provider value={{ attractions: filteredAttractions, loading, error, search, retry }}>
      {children}
    </AttractionContext.Provider>
  );
}
