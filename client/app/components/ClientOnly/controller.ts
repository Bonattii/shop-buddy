import { useEffect, useState } from 'react';

const useClientOnly = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return { hasMounted };
};

export default useClientOnly;
