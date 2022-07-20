import { useEffect, useState } from 'react';

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(() => window.matchMedia(query).matches);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    setMatches(matchMedia.matches);

    const handleMatch = () => {
      setMatches(matchMedia.matches);
    }

    matchMedia.addEventListener('change', handleMatch);
    return () => {
      matchMedia.removeEventListener('change', handleMatch);
    };
  }, [query]);
  return matches;
};

export default useMediaQuery;
