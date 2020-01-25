// libs
import { useEffect, useState } from 'react';

export default function useResize() {
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize, true);

    return () => {
      window.removeEventListener('resize', handleResize, true);
    };
  }, []);

  return [height, width];
}
