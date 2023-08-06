'use client';

import useClientOnly from './controller';
import { ClientOnlyProps } from './types';

const ClientOnly = ({ children }: ClientOnlyProps) => {
  const { hasMounted } = useClientOnly();

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
