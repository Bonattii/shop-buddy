const APP_PREFIX = 'Shopp-buddy';

export const saveTokenToLocalStorage = (token: string) => {
  try {
    localStorage.setItem(APP_PREFIX + 'token', token);
    console.log('Login token successfully saved!');
  } catch (error) {
    console.error('Error saving login token:', error);
  }
};

export const getTokenFromLocalStorage = () => {
  try {
    const token = localStorage.getItem(APP_PREFIX + 'token');
    return token;
  } catch (error) {
    console.error('Error getting login token:', error);
    return null;
  }
};

export const removeTokenFromLocalStorage = () => {
  try {
    localStorage.removeItem(APP_PREFIX + 'token');
    console.log('Login token successfully removed!');
  } catch (error) {
    console.error('Error removing login token:', error);
  }
};
