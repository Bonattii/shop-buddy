import Link from 'next/link';
import { LinkButtonProps } from './types';
import useLinkButton from './controller';

const LinkButton = ({ type = 'filled', authType, title }: LinkButtonProps) => {
  const { handleLinkClick } = useLinkButton();

  return (
    <Link
      href="/auth"
      onClick={() => handleLinkClick(authType)}
      className={`xl:text-md font-semibold  rounded-xl px-6 sm:px-8  py-2.5 sm:py-3 text-white cursor-pointer
    ${
      type === 'filled'
        ? 'hover:from-indigo-700 hover:to-indigo-950 bg-gradient-to-r from-indigo-950 to-indigo-800'
        : 'border-2 border-indigo-700 bg-trasparent hover:to-indigo-700 hover:from-indigo-950 hover:bg-gradient-to-l'
    }
   `}>
      {title}
    </Link>
  );
};

export default LinkButton;
