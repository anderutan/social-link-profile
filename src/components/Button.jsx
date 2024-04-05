import React from 'react';

export default function Button({ web, link }) {
  return (
    <a
      href={link}
      target='_blank'
      className='py-[6px] text-[8px] text-center font-semibold bg-grey rounded-lg hover:bg-green hover:text-dark-grey '
    >
      {web}
    </a>
  );
}
