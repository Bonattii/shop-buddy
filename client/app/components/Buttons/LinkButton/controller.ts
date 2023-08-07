import { useAuthStore } from '@/app/store/AuthStore';
import { AuthType } from '@/app/store/AuthStore/types';

const useLinkButton = () => {
  const { setAuthVariation } = useAuthStore();

  const handleLinkClick = (variation: AuthType) => {
    setAuthVariation(variation);
  };

  return { handleLinkClick };
};

export default useLinkButton;
