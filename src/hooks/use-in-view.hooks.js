import { useEffect, useState, useRef } from 'react';

const useInView = () => {
  const [state, setState] = useState();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setState(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  const result = [ref, state];

  result.ref = result[0];
  result.inView = result[1];

  return result;
};

export default useInView;
