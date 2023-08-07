import { TextareaProps } from '../types';

const Textarea = ({ label, inputId, error, ...rest }: TextareaProps) => (
  <div className="relative">
    <textarea
      {...rest}
      id={inputId}
      className="
          block
          rounded-md
          px-6
          pt-6
          pb-1
          w-full
          text-md
          text-white
          bg-neutral-900
          appearance-none
          focus:outline-none
          focus:ring-0
          peer
          resize-none
        "
      placeholder=" "
    />

    <label
      className={`
          absolute
          text-md
          text-zinc-500
          duration-150
          transform
          -translate-y-3
          scale-75
          top-4
          z-10
          origin-[0]
          left-6
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-3
        `}
      htmlFor={inputId}
    >
      {label}
    </label>

    {typeof error === 'string' && (
      <p className="text-red-500 mt-3 ml-3">{error}</p>
    )}
  </div>
);

export default Textarea;
