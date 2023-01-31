import Link from 'next/link';
import { CgShoppingCart } from 'react-icons/cg';

export const CartControls = () => {
  return (
    <ul className="border border-l-0 border-zinc-200 transition-colors hover:bg-neutral-900">
      <li>
        <Link
          href="/cart"
          title="Cart"
          className="w-20 h-20 flex justify-center items-center hover:text-cyan-500"
        >
          <CgShoppingCart size="24"></CgShoppingCart>
        </Link>
      </li>
    </ul>
  );
};
