import { useCallback } from 'react';
import useMediaQuery from './useMediaQuery';
import { MediaQueryProps } from './MediaQuery.types';

const MediaQuery = (props: MediaQueryProps) => {
  const { children, ...matchesProps } = props;

  const queryCreate = useCallback((matchesProps: string | number, matchesNameProps: string, query: string): string => {
    let mediaQuery;
    if (
      matchesNameProps !== 'orientation' &&
      matchesNameProps !== 'max-resolution' &&
      matchesNameProps !== 'min-resolution'
    ) {
      mediaQuery =
        typeof matchesProps == 'number'
          ? `(${matchesNameProps}: ${matchesProps}px)`
          : `(${matchesNameProps}: ${matchesProps})`;
    } else if (matchesNameProps === 'orientation') {
      mediaQuery = `(${matchesNameProps}: ${matchesProps})`;
    } else {
      mediaQuery =
        typeof matchesProps == 'number'
          ? `(${matchesNameProps}: ${matchesProps}dppx)`
          : `(${matchesNameProps}: ${matchesProps})`;
    }
    return (!query && mediaQuery) || ` and ${mediaQuery}`;
  }, []);

  let query = '';

  let key: keyof typeof matchesProps;
  for (key in matchesProps) {
    query +=
      (matchesProps[key] &&
        queryCreate(matchesProps[key]!, `${key.slice(0, 3)}-${key.slice(3).toLowerCase()}`, query)) ||
      '';
  }

  const matches = useMediaQuery(query);

  return <>{typeof children === 'function' ? children && children(matches) : matches && children}</>;
};

export default MediaQuery;
