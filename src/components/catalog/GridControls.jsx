import { useIsMobile } from '@/hooks';
import { UiContext } from '@/pages/_app';
import { useContext } from 'react';
import { RxDragHandleDots2, RxDragHandleDots1 } from 'react-icons/rx';
import { HiOutlineDotsVertical } from 'react-icons/hi';

const buttonClasses =
  'flex justify-center items-center border-l border-zinc-200 w-20 h-20 transition-colors hover:bg-neutral-900';

export const GridControls = () => {
  const { itemsPerRow, setItemsPerRow } = useContext(UiContext);
  const isMobile = useIsMobile();

  if (isMobile === true) {
    return <></>;
  }

  return (
    <ul className="border border-l-0 border-zinc-200 flex">
      <li>
        <button
          type="button"
          title="One per row"
          className={`hover:text-cyan-500 ${buttonClasses} ${
            itemsPerRow === '1/row' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('1/row');
          }}
        >
          <HiOutlineDotsVertical size="22"></HiOutlineDotsVertical>
        </button>
      </li>

      <li>
        <button
          type="button"
          title="Two per row"
          className={`hover:text-cyan-500 ${buttonClasses} ${
            itemsPerRow === '2/row' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('2/row');
          }}
        >
          <RxDragHandleDots2 size="24"></RxDragHandleDots2>
        </button>
      </li>

      <li>
        <button
          type="button"
          title="Four per row"
          className={`hover:text-cyan-500 ${buttonClasses} ${
            itemsPerRow === '4/row' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('4/row');
          }}
        >
          <RxDragHandleDots1 size="24"></RxDragHandleDots1>
        </button>
      </li>
    </ul>
  );
};
