import {useEffect, useState} from 'react';
import useMediaQuery from "./useMediaQuery";

const  useDocumentVisibility = () => {
    const [visible, setVisible] = useState<boolean>(!document.hidden);
    const [count, setCount] = useState<number>(0)

    function onVisibleChange (func: (isVisible: boolean) => void) {
        func(visible);
    }

    useEffect(() => {
        document.addEventListener("visibilitychange", () => setVisible(!document.hidden));

        return () => {
            document.removeEventListener("visibilitychange", () => setVisible(!document.hidden));

            if(!visible){
                setCount(count+1);
            }
        }
    }, [visible]);

    return {visible, count, onVisibleChange};
}

export default useDocumentVisibility;