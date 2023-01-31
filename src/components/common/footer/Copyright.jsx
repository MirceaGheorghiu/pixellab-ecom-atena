import Link from 'next/link';
import { BiCopyright } from 'react-icons/bi';

export const Copyright = () => {
  return (
    <div className="h-10 mt-8 flex justify-center items-center gap-2">
      <span>Copyright</span>
      <span>
        <BiCopyright size="20"></BiCopyright>
      </span>
      <span>
        {new Date().getFullYear()} - Created by{' '}
        <Link
          href="https://pixellab.ro/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-500"
        >
          Pixellab
        </Link>
      </span>
    </div>
  );
};
