import { useCallback, useState } from 'react';
import { api } from '@/app/server/api';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { saveTokenToLocalStorage } from '@/app/utils/storage';
import { useRouter } from 'next/navigation';
import { AuthFormValues } from './types';
import { useAuthStore } from '@/app/store/AuthStore';

const useAuthContent = () => {
  const { authVariation, toggleVariation } = useAuthStore();

  const router = useRouter();

  const validationSchema = () => {
    let schema = Yup.object().shape({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .matches(/^.{8,}$/, 'Password must be at least 8 characters long')
    });

    if (authVariation === 'register') {
      schema = schema.shape({
        name: Yup.string().required('Name is required'),
        phone: Yup.string()
          .matches(/^\d{10}$/, 'Phone number must be 10 digits')
          .required('Phone number is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password')], 'Passwords must match')
          .required('Confirm password is required')
          .matches(/^.{8,}$/, 'Password must be at least 8 characters long')
      });
    }

    return schema;
  };

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
    if (authVariation === 'login') {
      handleLoginSubmit(values);
    } else if (authVariation === 'register') {
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
    validationSchema: validationSchema(),
    onSubmit: onSubmit
  });

  return {
    authVariation,
    toggleVariation,
    formik
  };
};

export default useAuthContent;
