import Link from 'next/link';

const ContactButton = () => {
  return (
    <div className="w-fit bg-black py-2 px-3 rounded-2xl text-white dark:bg-neutral-800 dark:text-white hover:bg-neutral-900 dark:hover:bg-neutral-700 shadow-sm">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center font-semibold"
        href="mailto:irfannmuhajir@gmail.com"
        passHref
      >
        <span className="text-xl mr-2">📧</span>Contact me!
      </Link>
    </div>
  );
};

export default ContactButton;
