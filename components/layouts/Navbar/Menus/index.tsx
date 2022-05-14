import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import menuList from 'data/menuList';

const Menus = () => {
  const route = useRouter();
  const { pathname } = useRouter();

  return (
    <div className="h-10 bg-neutral-800 rounded-full px-1 flex items-center">
      <Tab.Group>
        <Tab.List className="space-x-2">
          {menuList.map(({ name, link }) => {
            return (
              <Tab
                key={name}
                // className={`${
                //   route.pathname == link ||
                //   (pathname.startsWith(link) && link != '/')
                //     ? 'bg-neutral-900 font-bold'
                //     : ''
                // } inline-flex h-8 px-2.5 items-center rounded-full`}
              >
                <Link href={link}>
                  <a>
                    {route.pathname == link ||
                    (pathname.startsWith(link) && link != '/') ? (
                      <motion.div
                        className="bg-neutral-900 font-bold h-8 px-2.5 rounded-full inline-flex items-center"
                        layoutId="active"
                        transition={{
                          type: 'spring',
                          stiffness: 270,
                          damping: 30,
                        }}
                      >
                        {name}
                      </motion.div>
                    ) : (
                      <div className="inline-flex h-8 px-2.5 items-center rounded-full">
                        {name}
                      </div>
                    )}
                  </a>
                </Link>
              </Tab>
            );
          })}
        </Tab.List>
      </Tab.Group>
    </div>
  );
};

export default Menus;
