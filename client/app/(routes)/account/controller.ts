import { UserToken } from '@/app/types/token';
import {
  getTokenFromLocalStorage,
  saveTokenToLocalStorage,
} from '@/app/utils/storage';
import jwtDecode from 'jwt-decode';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useState } from 'react';
import { api } from '@/app/server/api';

const useAccount = () => {
  const [submitted, setSubmitted] = useState(false);

  const userToken = getTokenFromLocalStorage();
  const userTokenDecoded: UserToken = jwtDecode(userToken as string);
  const userName = userTokenDecoded.name;
  const userPhone = userTokenDecoded.phone;
  const formattedUserName =
    userName.charAt(0).toUpperCase() + userName.slice(1);

  const formik = useFormik({
    initialValues: {
      editName: userName,
      editPhone: userPhone,
    },
    validationSchema: Yup.object({
      editName: Yup.string().required('Name is required'),
      editPhone: Yup.string()
        .matches(/^\d{10}$/, 'Phone number must be 10 digits')
        .required('Phone is required'),
    }),
    onSubmit: (values) => {
      setSubmitted(true);

      api
        .put(
          '/users/update',
          {
            email: userTokenDecoded.email,
            name: values.editName,
            phone: values.editPhone,
          },
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        )
        .then((response) => {
          saveTokenToLocalStorage(response.data.accessToken);
          setSubmitted(false);
          window.location.reload();
        })
        .catch((error) => {
          setSubmitted(false);
          console.log(error);
        });
    },
  });

  return {
    formik,
    formattedUserName,
    submitted,
  };
};

export default useAccount;
