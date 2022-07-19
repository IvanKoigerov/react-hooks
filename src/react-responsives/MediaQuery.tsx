import { useCallback } from 'react';
import useMediaQuery from './useMediaQuery';
import { MediaQueryProps } from './MediaQuery.types';

const MediaQuery = ({ children, ...props }: MediaQueryProps) => {

  const queryCreate = useCallback((props: object): string => {
    const matchesName = (name: string) => {
      return `${name.slice(0, 3)}-${name.slice(3).toLowerCase()}`;
    };
    return Object.entries(props).map(([key, value]) => {
      switch (key) {
        case 'orientation':
          return `(${key}: ${value})`;
        case 'maxResolution':
        case 'minResolution':
          return typeof value === 'number' ? `(${matchesName(key)}: ${value}dppx)` : `(${matchesName(key)}: ${value})`;
        default:
          return typeof value === 'number' ? `(${matchesName(key)}: ${value}px)` : `(${matchesName(key)}: ${value})`;
      }
    }).join(' and ');
  }, []);

  const matches = useMediaQuery(queryCreate(props));

  return <>{typeof children === 'function' ? children && children(matches) : matches && children}</>;
};

export default MediaQuery;
