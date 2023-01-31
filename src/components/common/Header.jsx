import Link from 'next/link';
import { useState } from 'react';
import { FaReact } from 'react-icons/fa';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { Spin as Hamburger } from 'hamburger-react';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section className="bg-neutral-900 flex lg:flex-col justify-between items-center h-full lg:py-4 relative z-10">
        <Link
          href="/"
          title="React-Atena"
          className="hover:text-cyan-500 animate-pulse"
        >
          {/* no use for anchor */}
          <FaReact size="36"></FaReact>
        </Link>

        <button
          title="Menu"
          type="button"
          className="hover:text-cyan-500"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <Hamburger direction="right"></Hamburger>
        </button>

        <ul className="hidden lg:block">
          <li className="mb-4">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              className=" hover:text-cyan-500"
            >
              <FiFacebook size="28"></FiFacebook>
            </Link>
          </li>

          <li className="mb-4">
            <Link
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              className=" hover:text-cyan-500"
            >
              <FiTwitter size="28"></FiTwitter>
            </Link>
          </li>

          <li>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="hover:text-cyan-500"
            >
              <FiInstagram size="28"></FiInstagram>
            </Link>
          </li>
        </ul>
      </section>

      <nav
        className={`absolute left-0 -top-full flex justify-center items-center uppercase text-base lg:pl-12 lg:pb-14 lg:text-xl ${
          menuOpen ? 'translate-y-full' : ''
        } transition-transform transform-gpu w-screen h-screen bg-neutral-900 lg:w-screen-1/3`}
      >
        <ul>
          <li className="mb-3">
            <Link href="/" title="Shop" className="hover:text-cyan-500">
              Shop
            </Link>
          </li>

          <li className="mb-3">
            <Link href="/" title="About" className="hover:text-cyan-500">
              About
            </Link>
          </li>

          <li>
            <Link href="/" title="Contact" className="hover:text-cyan-500">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
