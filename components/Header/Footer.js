import Link from 'next/link';

function Footer() {
  const footerItems = [
    { text: 'About', href: '/' },
    { text: 'Privacy', href: '/' },
    { text: 'Terms', href: '/' },
    { text: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="w-full bg-neutral-700 p-6 pt-12 text-xs text-neutral-200">
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <p className="text-center">
            {' \u00A9'} {new Date().getFullYear()} | {'ClassAid'}
          </p>

          <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
            {footerItems.map((item) => (
              <li key={item.text}>
                <Link href={item.href} className="block p-2 transition-colors hover:text-gray-300">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center text-neutral-500 md:text-right">
          <p>
            Created by:
            <Link
              href="https://github.com/mmgonnar"
              target="_blank"
              className="transition-colors hover:text-gray-300"
            >
              <strong> Mariela González</strong>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
