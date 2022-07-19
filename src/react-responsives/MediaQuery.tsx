import React from 'react';
import useMediaQuery from "./useMediaQuery";
import {MediaQueryProps} from "./MediaQuery.types";


const MediaQuery = (props: MediaQueryProps) => {

    function queryCreate (mediaProps:number | string, mediaName:string , query: string) : string {
        let mediaQuery = "";
        if(mediaName !== 'orientation' && mediaName !== 'max-resolution' && mediaName !== 'min-resolution'){
            mediaQuery = typeof mediaProps == "number" ? (`(${mediaName}: ${mediaProps}px)`) : (`(${mediaName}: ${mediaProps})`);
        } else if (mediaName === 'orientation'){
            mediaQuery = `(${mediaName}: ${mediaProps})`;
        } else {
            mediaQuery = typeof mediaProps == "number" ? (`(${mediaName}: ${mediaProps}dppx)`) : (`(${mediaName}: ${mediaProps})`);
        }
        return (!query && mediaQuery) || (` and ${mediaQuery}`);
    }
    let query = "";

    query += (props.maxWidth && queryCreate(props.maxWidth, "max-width", query)) || "";
    query += (props.minWidth && queryCreate(props.minWidth, "min-width", query)) || "";
    query += (props.maxHeight && queryCreate(props.maxHeight, "max-height", query)) || "";
    query += (props.minHeight && queryCreate(props.minHeight, "min-height", query) )|| "";
    query += (props.minResolution && queryCreate(props.minResolution, "min-resolution", query)) || "";
    query += (props.maxResolution && queryCreate(props.maxResolution, "max-resolution", query)) || "";
    query += (props.orientation && queryCreate(props.orientation, "orientation", query)) || "";

    const matches = useMediaQuery(query);

    return (
        <div>
            {typeof props.children === "function" ? (props.children && props.children(matches)) : (matches && props.children)}
        </div>
    );
}

export default MediaQuery;