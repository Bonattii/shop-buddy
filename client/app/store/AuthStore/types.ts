export type AuthType = 'login' | 'register';

export type AuthState = {
  authVariation: AuthType;
  setAuthVariation: (authVariation: AuthType) => void;
  toggleVariation: () => void;
};
