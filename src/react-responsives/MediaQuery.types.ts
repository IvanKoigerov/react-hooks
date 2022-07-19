import { ReactNode } from 'react';

export interface MediaQueryProps {
  maxHeight?: number | `${number}px`;
  minHeight?: number | `${number}px`;
  maxWidth?: number | `${number}px`;
  minWidth?: number | `${number}px`;
  maxResolution?: number | `${number}dppx`;
  minResolution?: number | `${number}dppx`;
  orientation?: 'portrait' | 'landscape';
  children?: ReactNode | ((matches: boolean) => ReactNode);
}

