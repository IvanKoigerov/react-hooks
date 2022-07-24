import { useEffect, useRef, useState } from 'react';

const useDocumentVisibility = () => {

  const [visible, setVisible] = useState(typeof document !== 'undefined' ? !document.hidden : true);
  const [count, setCount] = useState(0);
  const onVisibleCallBack = useRef<((isVisible: boolean) => void)[]>([]);

  const onVisibleChange = (func: (isVisible: boolean) => void) => {
    onVisibleCallBack.current.push(func);
  };

  if (typeof document === 'undefined') return { visible, count, onVisibleChange };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {

    const handleVisible = () => {
      setVisible(!document.hidden);
      if (document.hidden) {
        setCount(count => count + 1);
      }
      onVisibleCallBack.current.forEach(func => func(!document.hidden));
    };

    document.addEventListener('visibilitychange', handleVisible);

    return () => {
      document.removeEventListener('visibilitychange', handleVisible);
    };
  }, []);

  return { visible, count, onVisibleChange };
};

export default useDocumentVisibility;
