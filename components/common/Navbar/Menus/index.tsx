import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import menuList from 'data/menuList';

const Menus = () => {
  const route = useRouter();
  const { pathname } = useRouter();

  return (
    <div className="h-9 text-sm bg-neutral-100 dark:bg-neutral-800 rounded-full px-1 flex items-center shadow-sm">
      <Tab.Group>
        <Tab.List className="space-x-1">
          {menuList.map(({ name, link }) => {
            return (
              <Tab key={name}>
                <div className="relative px-3 py-1">
                  <Link href={link}>
                    <a
                      className={
                        route.pathname == link ||
                        (pathname.startsWith(link) && link != '/')
                          ? 'relative z-[1] font-bold dark:text-white text-black'
                          : 'relative z-[1] font-normal'
                      }
                    >
                      {name}
                    </a>
                  </Link>
                  {route.pathname == link ||
                  (pathname.startsWith(link) && link != '/') ? (
                    <motion.div
                      className="dark:bg-neutral-900 bg-white rounded-full absolute top-0 h-full right-0 left-0 z-[0]"
                      layoutId="active"
                      transition={{
                        type: 'spring',
                        stiffness: 270,
                        damping: 30,
                      }}
                    />
                  ) : null}
                </div>
              </Tab>
            );
          })}
        </Tab.List>
      </Tab.Group>
    </div>
  );
};

export default Menus;
