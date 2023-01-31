import Link from 'next/link';
import { TfiArrowCircleUp } from 'react-icons/tfi';

export const BackToTop = () => {
  return (
    <span className="absolute bg-zinc-100 top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4">
      <Link href="#top">
        <TfiArrowCircleUp size="32"></TfiArrowCircleUp>
      </Link>
    </span>
  );
};
