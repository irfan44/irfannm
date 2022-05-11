import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  RiCloseLine,
  RiMenuLine,
  RiMoonClearFill,
  RiSunFill,
} from 'react-icons/ri';
import Button from 'components/common/Button';
import Container from 'components/layouts/Container';
import Menu from 'components/layouts/Navbar/Menu';

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <Button title="Change to light theme" onClick={() => setTheme('light')}>
          <p className="text-xl text-black dark:text-white">
            <RiSunFill />
          </p>
        </Button>
      );
    } else {
      return (
        <Button title="Change to dark theme" onClick={() => setTheme('dark')}>
          <p className="text-xl text-black dark:text-white">
            <RiMoonClearFill />
          </p>
        </Button>
      );
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="mt-4 w-full bg-neutral-50 dark:bg-neutral-900 z-10">
      <Container>
        <div className="flex justify-between py-4 items-center">
          <div>
            <h2 className="font-bold leading-tight">
              <Link href="/">
                <a>inm</a>
              </Link>
            </h2>
          </div>
          <div className="md:hidden ml-auto py-auto flex items-center">
            <ul className="flex space-x-2 items-center">
              <li className="flex items-center">{renderThemeChanger()}</li>
              <li className="flex items-center">
                <button
                  className="ml-2 flex items-center"
                  title="Menu"
                  onClick={() => {
                    isActive ? setActive(false) : setActive(true);
                  }}
                >
                  {isActive ? (
                    <p className="text-xl">
                      <RiCloseLine />
                    </p>
                  ) : (
                    <p className="text-xl">
                      <RiMenuLine />
                    </p>
                  )}
                </button>
              </li>
            </ul>
          </div>
          <div className="hidden md:block text-left">
            <ul className="flex flex-row items-center space-x-6">
              <Menu />
            </ul>
          </div>
          <div className="hidden md:block text-left">
            <ul className="flex flex-row items-center space-x-6">
              <li className="flex items-center">{renderThemeChanger()}</li>
            </ul>
          </div>
        </div>
        {isActive && (
          <div className="h-screen">
            <div className="w-full border rounded-lg border-zinc-200 p-4">
              <div className="grid items-center">
                <ul className="flex flex-col space-y-4 items-center">
                  <Menu />
                </ul>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
