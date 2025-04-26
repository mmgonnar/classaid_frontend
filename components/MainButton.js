import Link from 'next/link';
import React from 'react';

function MainButton(props) {
  // const { variant = 'primary', text = 'primary' } = props;
  // if (variant == 'pimary') {
  //   ('clases');
  // } else {
  //   ('otras clases');
  // }

  // {
  //   ['muchos condiconales'];
  // }

  // const variants = {
  //   primary: '',
  //   secondary: '',
  // };
  // const variantsText = {
  //   primary: '',
  //   secondary: '',
  //   destructive: '',
  // };

  return (
    <>
      <Link href="/" className="w-full">
        <button className="text-primary hover:bg-primary border-primary w-[150px] cursor-pointer rounded-full border bg-transparent px-4 py-1 font-bold hover:border-transparent hover:text-white">
          {/* {variantsText[text]} */} Try for free!
        </button>
      </Link>

      <Link href="/" className="w-full">
        <button className="bg-primary w-[150px] cursor-pointer rounded-full py-1 font-bold text-white hover:bg-blue-800">
          {/* {variantsText[text]} */}More info
        </button>
      </Link>

      <Link href="/" className="w-full">
        <button className="bg-primary hover:border-primary hover:text-primary w-[150px] cursor-pointer rounded-full border px-4 py-1 font-bold text-white hover:bg-transparent">
          {/* {variantsText[text]} */} Try for free!
        </button>
      </Link>
    </>
  );
}

export default MainButton;
