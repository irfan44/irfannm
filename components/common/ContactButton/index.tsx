import Link from 'next/link';

const ContactButton = () => {
  return (
    <div className="w-fit bg-black py-2 px-3 rounded-2xl text-white dark:bg-neutral-700 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 shadow-sm">
      <Link href="mailto:irfannmuhajir@gmail.com">
        <a target="_blank" rel="noopener noreferrer">
          <div className="flex items-center space-x-2">
            <p className="font-semibold">Contact me</p>
            <p className="text-xl">📧</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ContactButton;
