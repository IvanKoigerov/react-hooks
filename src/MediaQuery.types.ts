import {ReactNode} from "react";

export interface MediaQueryProps {
    maxHeight?: string | number,
    minHeight?: string | number,
    maxWidth?: string | number,
    minWidth?: string | number,
    maxResolution?: string | number,
    minResolution?: string | number,
    orientation?: string,
    children?: ReactNode | ((matches:boolean) => JSX.Element),
}