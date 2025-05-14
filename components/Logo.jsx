'use client';
import Image from 'next/image';
import ClassAidLogo from '../img/classaid.svg';
import Link from 'next/link';

function Logo({ className = '' }) {
  return (
    <Link href="/" className="inline-block">
      <Image
        src={ClassAidLogo}
        alt="ClassAid's logo"
        priority
        width={120}
        height={22}
        className={` ${className}`}
      />
    </Link>
  );
}

export default Logo;
