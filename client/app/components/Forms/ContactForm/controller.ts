import * as Yup from 'yup';
import { useFormik } from 'formik';
import { send } from '@emailjs/browser';
import { ContactFormValues } from './types';
import { useState } from 'react';

const useContactForm = () => {
  const [unableToSendMessage, setUnableToSendMessage] = useState(false);
  const [sentMessage, setSentMessage] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (values: ContactFormValues) => {
    if (
      !values.contactEmail ||
      !values.contactPhone ||
      !values.contactName ||
      !values.contactMessage
    ) {
      return;
    }

    send(
      process.env.NEXT_PUBLIC_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
      {
        contactName: values.contactName,
        contactEmail: values.contactEmail,
        contactPhone: values.contactPhone,
        contactMessage: values.contactMessage
      },
      process.env.NEXT_PUBLIC_USER_ID as string
    )
      .then(() => {
        setSentMessage(true);
        setUnableToSendMessage(false);
        setSubmitted(false);
      })
      .catch(() => {
        setUnableToSendMessage(true);
        setSubmitted(false);
      });

    setTimeout(() => setSentMessage(false), 3000);
    setUnableToSendMessage(false);
  };

  const formik = useFormik({
    initialValues: {
      contactName: '',
      contactEmail: '',
      contactPhone: '',
      contactMessage: ''
    },
    validationSchema: Yup.object({
      contactName: Yup.string().required('Name is required'),
      contactEmail: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      contactPhone: Yup.string()
        .matches(/^\d{10}$/, 'Phone number must be 10 digits')
        .required('Phone number is required'),
      contactMessage: Yup.string()
        .required('Message is required')
        .min(20, 'Message must be at least 20 characters long')
    }),
    onSubmit: handleSubmit
  });

  return { formik, unableToSendMessage, sentMessage, submitted };
};

export default useContactForm;
