import Link from 'next/link';

const ContactButton = () => {
  return (
    <div className="w-fit bg-neutral-200 py-2 px-3 rounded-2xl text-black dark:bg-neutral-800 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 shadow-sm">
      <Link href="mailto:irfannmuhajir@gmail.com">
        <a target="_blank" rel="noopener noreferrer">
          <div className="flex items-center space-x-2">
            <p className="font-semibold">Contact me</p>
            <p className="text-xl">📬</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ContactButton;
