import { AuthType } from '@/app/store/AuthStore/types';

export type LinkButtonProps = {
  authType: AuthType;
  type?: 'outlined' | 'filled';
  title: string;
};
