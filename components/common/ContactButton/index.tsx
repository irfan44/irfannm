import Link from 'next/link';

const ContactButton = () => {
  return (
    <div className="w-fit bg-gray-200 p-2 rounded-2xl text-black dark:bg-neutral-800 dark:text-white">
      <Link href="mailto:irfannmuhajir@gmail.com">
        <a target="_blank" rel="noopener noreferrer">
          <div className="flex items-center space-x-2">
            <p className="font-medium">Contact me</p>
            <p className="text-xl">📬</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ContactButton;
