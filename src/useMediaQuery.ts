import {useEffect, useState} from 'react';

export const useMediaQuery = (query: string):boolean => {
    const getMatches = (query:string) => {
        return window.matchMedia(query).matches;
    }

    const [matches, setMatches] = useState<boolean>(getMatches(query));
    useEffect(() => {
        const matchMedia = window.matchMedia(query);
        setMatches(getMatches(query));
        matchMedia.addEventListener('change', () => setMatches(getMatches(query)));
        return() => {
            matchMedia.removeEventListener('change', () => setMatches(getMatches(query)));
        };
    }, [query]);
    return matches;
}