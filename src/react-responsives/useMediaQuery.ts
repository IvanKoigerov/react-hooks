import { useEffect, useState } from 'react';

const useMediaQuery = (query: string, serverValue = true): boolean => {
  if (typeof document === 'undefined') return serverValue;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    setMatches(matchMedia.matches);

    const handleMatch = () => {
      setMatches(matchMedia.matches);
    };

    matchMedia.addEventListener('change', handleMatch);
    return () => {
      matchMedia.removeEventListener('change', handleMatch);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;

