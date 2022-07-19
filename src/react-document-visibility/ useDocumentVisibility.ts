import { useEffect, useState } from 'react';

const useDocumentVisibility = () => {
  const [visible, setVisible] = useState<boolean>(!document.hidden);
  const [count, setCount] = useState<number>(0);

  function onVisibleChange(func: (isVisible: boolean) => void) {
    func(visible);
  }

  const handleVisible = () => {
    setVisible(!document.hidden);
    if (document.hidden) {
      setCount(count => count + 1);
    }
  };

  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisible);

    return () => {
      document.removeEventListener('visibilitychange', handleVisible);
    };
  }, []);

  return { visible, count, onVisibleChange };
};

export default useDocumentVisibility;
