import { useState } from 'react';

const buttonClasses =
  'flex justify-center items-center border-l border-zinc-200 w-20 h-20 transition-colors hover:bg-neutral-900';

export const GridControls = ({ set = () => {} }) => {
  const [itemsPerRow, setItemsPerRow] = useState('4/row');

  console.log('render grid controls');

  return (
    <ul className="border border-l-0 border-zinc-200 hidden lg:flex">
      <li>
        <button
          type="button"
          title="One per row"
          className={`${buttonClasses} ${
            itemsPerRow === '1/row' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('1/row');
            set('1/row');
          }}
        >
          1
        </button>
      </li>

      <li>
        <button
          type="button"
          title="One per row"
          className={`${buttonClasses} ${
            itemsPerRow === '2/row' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('2/row');
            set('2/row');
          }}
        >
          2
        </button>
      </li>

      <li>
        <button
          type="button"
          title="One per row"
          className={`${buttonClasses} ${
            itemsPerRow === '4/row' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('4/row');
            set('4/row');
          }}
        >
          4
        </button>
      </li>
    </ul>
  );
};