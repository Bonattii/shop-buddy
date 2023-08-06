import { useCallback, useState } from 'react';
import { api } from '../server/api';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { saveTokenToLocalStorage } from '../utils/storage';
import { useRouter } from 'next/navigation';
import { AuthFormValues } from './types';

const useAuth = () => {
  const [variant, setVariant] = useState<'login' | 'register'>('login');

  const router = useRouter();

  const toggleVariant = useCallback(() => {
    setVariant(currentVariant =>
      currentVariant === 'login' ? 'register' : 'login'
    );
  }, []);

  const handleLoginSubmit = useCallback(
    (values: AuthFormValues) => {
      api
        .post('/users/login', {
          email: values.email,
          password: values.password
        })
        .then(response => {
          saveTokenToLocalStorage(response.data.accessToken);
          router.push('/dashboard');
        })
        .catch(error => {
          console.error('Error:', error);
        });
    },
    [router]
  );

  const handleRegisterSubmit = useCallback(
    (values: AuthFormValues) => {
      api
        .post('/users/register', {
          name: values.name,
          email: values.email,
          phone: Number(values.phone),
          password: values.password
        })
        .then(() => {
          handleLoginSubmit(values);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    },
    [handleLoginSubmit]
  );

  const onSubmit = (values: AuthFormValues) => {
    if (variant === 'login') {
      handleLoginSubmit(values);
    } else if (variant === 'register') {
      handleRegisterSubmit(values);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      phone: Yup.string()
        .matches(/^\d{10}$/, 'Phone number must be 10 digits')
        .required('Phone number is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()])[0-9a-zA-Z!@#$%^&*()]{8,}$/,
          'Password must contain at least 1 number, 1 capital letter, 1 lowercase letter, 1 special character, and be at least 8 characters long'
        ),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm password is required')
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()])[0-9a-zA-Z!@#$%^&*()]{8,}$/,
          'Password must contain at least 1 number, 1 capital letter, 1 lowercase letter, 1 special character, and be at least 8 characters long'
        )
    }),
    onSubmit: onSubmit
  });

  return {
    variant,
    toggleVariant,
    formik
  };
};

export default useAuth;
