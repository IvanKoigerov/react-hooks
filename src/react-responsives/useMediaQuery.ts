import { useEffect, useState } from 'react';

const useMediaQuery = (query: string): boolean => {
  const getMatches = (query: string) => {
    return window.matchMedia(query).matches;
  };
  const [matches, setMatches] = useState<boolean>(getMatches(query));
  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    setMatches(matchMedia.matches);
    matchMedia.addEventListener('change', () => setMatches(matchMedia.matches));
    return () => {
      matchMedia.removeEventListener('change', () => setMatches(matchMedia.matches));
    };
  }, [query]);
  return matches;
};

export default useMediaQuery;
