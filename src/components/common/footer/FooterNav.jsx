import Link from 'next/link';

export const FooterNav = () => {
  return (
    <section className="flex py-20">
      <nav className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-20 grow justify-items-center">
        <div>
          <header className="mb-4 uppercase font-bold text-neutral-900">
            Los Angeles
          </header>

          <ul className="grid gap-y-2">
            <li>
              <p>
                145 Oliveshka Street, <br></br>
                Los Angeles, LA 90003
              </p>
            </li>

            <li>
              <Link
                href="tel:+44 987 065 901"
                title="Los Angeles phone number"
                className="hover:text-cyan-500"
              >
                +44 987 065 901
              </Link>
            </li>

            <li>
              <Link
                href="mailto:info@Example.com"
                title="Email us"
                className="hover:text-cyan-500"
              >
                info@Example.com
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <header className="mb-4 uppercase font-bold text-neutral-900">
            San Francisco
          </header>

          <ul className="grid gap-y-2">
            <li>
              <p>
                210 Pier Street, <br></br>
                San Francisco, CA 94111
              </p>
            </li>

            <li>
              <Link
                href="tel:+44 987 065 902"
                title="San Francisco phone number"
                className="hover:text-cyan-500"
              >
                +44 987 065 902
              </Link>
            </li>

            <li>
              <Link
                href="mailto:info@Example.com"
                title="Email us"
                className="hover:text-cyan-500"
              >
                info@Example.com
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <header className="mb-4 uppercase font-bold text-neutral-900">
            New York
          </header>

          <ul className="grid gap-y-2">
            <li>
              <p>
                711 Snow Street, <br></br>
                New York, NY 10014
              </p>
            </li>

            <li>
              <Link
                href="tel:+44 987 065 903"
                title="New York phone number"
                className="hover:text-cyan-500"
              >
                +44 987 065 903
              </Link>
            </li>

            <li>
              <Link
                href="mailto:info@Example.com"
                title="Email us"
                className="hover:text-cyan-500"
              >
                info@Example.com
              </Link>
            </li>
          </ul>
        </div>

        <section>
          <header className="mb-4 uppercase font-bold text-neutral-900">
            Follow us
          </header>

          <div className="flex gap-8 leading-6">
            <ul>
              <li>
                <Link href="/" title="Facebook" className="hover:text-cyan-500">
                  Facebook
                </Link>
              </li>

              <li>
                <Link href="/" title="Twitter" className="hover:text-cyan-500">
                  Twitter
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  title="Instagram"
                  className="hover:text-cyan-500"
                >
                  Instagram
                </Link>
              </li>

              <li>
                <Link href="/" title="LinkedIn" className="hover:text-cyan-500">
                  LinkedIn
                </Link>
              </li>
            </ul>

            <ul>
              <li>
                <Link href="/" title="Dribble" className="hover:text-cyan-500">
                  Dribble
                </Link>
              </li>

              <li>
                <Link href="/" title="Behance" className="hover:text-cyan-500">
                  Behance
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  title="Pinterest"
                  className="hover:text-cyan-500"
                >
                  Pinterest
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </section>
  );
};
