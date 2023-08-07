import { create } from 'zustand';
import { AuthState } from './types';

export const useAuthStore = create<AuthState>(set => ({
  authVariation: 'login',
  setAuthVariation: authVariation => {
    set(() => ({ authVariation }));
  },
  toggleVariation: () => {
    set(state => {
      const newVariation =
        state.authVariation === 'login' ? 'register' : 'login';

      return { authVariation: newVariation };
    });
  }
}));
