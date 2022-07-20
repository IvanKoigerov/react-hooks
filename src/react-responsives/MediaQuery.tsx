import useMediaQuery from './useMediaQuery';
import { MediaQueryProps } from './MediaQuery.types';

const queryCreate = (props: object): string => {
  const matchesName = (name: string) => {
    return name.replace(/[A-Z]/g, (name) => ('-' + name.toLowerCase()));
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
};

const MediaQuery = ({ children, ...props }: MediaQueryProps) => {
  const matches = useMediaQuery(queryCreate(props));

  return typeof children === 'function' ? children(matches) : matches ? children : null;
};

export default MediaQuery;
