import { ChangeEvent, useCallback, useState } from 'react';
import { AuthFormInputIds } from './types';
import { api } from '../server/api';
import { saveTokenToLocalStorage } from '../utils/storage';
import { useRouter } from 'next/navigation';

const useAuth = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [variant, setVariant] = useState<'login' | 'register'>('login');

  const router = useRouter();

  const toggleVariant = useCallback(() => {
    setVariant(currentVariant =>
      currentVariant === 'login' ? 'register' : 'login'
    );
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    switch (name) {
      case AuthFormInputIds.Name:
        setName(value);
        break;
      case AuthFormInputIds.Phone:
        setPhone(value);
        break;
      case AuthFormInputIds.Email:
        setEmail(value);
        break;
      case AuthFormInputIds.Password:
        setPassword(value);
        break;
      case AuthFormInputIds.ConfirmPassword:
        setConfirmPassword(value);
        break;
      default:
        setName('');
        setPhone('');
        setEmail('');
        setPassword('');
        break;
    }
  };

  const handleLogin = useCallback(() => {
    api
      .post('/users/login', {
        email,
        password
      })
      .then(response => {
        saveTokenToLocalStorage(response.data.accessToken);
        router.push('/dashboard');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [email, password, router]);

  const handleRegister = useCallback(() => {
    if (password !== confirmPassword) {
      alert('Passwords must match');
      return;
    } else {
      api
        .post('/users/register', {
          name,
          email,
          phone: Number(phone),
          password
        })
        .then(() => {
          handleLogin();
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }, [confirmPassword, email, handleLogin, name, password, phone]);

  return {
    name,
    phone,
    email,
    password,
    confirmPassword,
    variant,
    toggleVariant,
    handleInputChange,
    handleLogin,
    handleRegister
  };
};

export default useAuth;
