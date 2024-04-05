import avatar from '../assets/avatar-jessica.jpeg';
import Button from './Button';

export default function Card() {
  const btnList = [
    {
      web: 'GitHub',
      link: 'www.google.com',
    },
    {
      web: 'Frontend Mentor',
      link: 'www.google.com',
    },
    {
      web: 'LinkedIn',
      link: 'www.google.com',
    },
    {
      web: 'Twitter',
      link: 'www.google.com',
    },
    {
      web: 'Instagram',
      link: 'www.google.com',
    },
  ];
  return (
    <div className='h-[350px] w-[220px] p-6 bg-dark-grey rounded-lg flex flex-col items-center'>
      <img src={avatar} alt='' className='h-16 rounded-full mb-5' />
      <h2 className='text-lg font-semibold mb-[2px]'>Jessica Randall</h2>
      <p className='text-[8px] font-semibold text-green mb-4 tracking-tight'>
        London, United Kingdom
      </p>
      <p className='text-[9px] font-light mb-3'>
        "Front-end developer and avid reader."
      </p>
      <div className='w-full flex flex-col gap-2'>
        {btnList.map((btn) => (
          <Button {...btn} />
        ))}
      </div>
    </div>
  );
}
