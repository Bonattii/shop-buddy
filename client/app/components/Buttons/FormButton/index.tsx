import { FormButtonProps } from './types';

const FormButton = ({ title }: FormButtonProps) => (
  <button
    type="submit"
    className="font-semibold mt-10 rounded-md w-full py-3 bg-gradient-to-r from-indigo-950 to-indigo-800 hover:from-indigo-700 hover:to-indigo-950 text-white transition">
    {title}
  </button>
);

export default FormButton;
