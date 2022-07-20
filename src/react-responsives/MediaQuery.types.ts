import { ReactNode } from 'react';

interface IMediaQueryProps {
  orientation?: 'portrait' | 'landscape';
  maxHeight?: number | `${number}px`;
  minHeight?: number | `${number}px`;
  maxWidth?: number | `${number}px`;
  minWidth?: number | `${number}px`;
  maxResolution?: number | `${number}dppx`;
  minResolution?: number | `${number}dppx`;
}

type RequireAtLeastOne<T> = { [K in keyof T]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>> }[keyof T];

export type MediaQueryProps =
  RequireAtLeastOne<IMediaQueryProps>
  & { children: ReactNode | ((matches: boolean) => ReactNode) };