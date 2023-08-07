import FormButton from '../../Buttons/FormButton';
import Input from '../Input';
import Textarea from '../Textarea';
import useContactForm from './controller';

const ContactForm = () => {
  const { formik, sentMessage, submitted, unableToSendMessage } =
    useContactForm();

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 md:space-y-6">
      <Input
        label="Name"
        name="contactName"
        inputId="contactName"
        value={formik.values.contactName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.contactName && formik.errors.contactName}
      />

      <Input
        label="Email"
        name="contactEmail"
        inputId="contactEmail"
        type="email"
        value={formik.values.contactEmail}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.contactEmail && formik.errors.contactEmail}
      />

      <Input
        label="Phone"
        name="contactPhone"
        inputId="contactPhone"
        value={formik.values.contactPhone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.contactPhone && formik.errors.contactPhone}
      />

      <Textarea
        label="Message"
        name="contactMessage"
        inputId="contactMessage"
        value={formik.values.contactMessage}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.contactMessage && formik.errors.contactMessage}
      />

      {unableToSendMessage && (
        <p className="text-red-600">
          Impossible to send message, please try again!
        </p>
      )}

      {sentMessage && <p className="text-green-500">Message sent!</p>}

      <FormButton
        type="submit"
        disabled={submitted}
        title={submitted ? 'Sending...' : 'Send Message'}
      />
    </form>
  );
};

export default ContactForm;
