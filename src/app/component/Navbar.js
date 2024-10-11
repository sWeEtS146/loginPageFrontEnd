// components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href="/">Logo</Link>
      <Link href="/dashboard" legacyBehavior>
        <a>Dashboard</a>
      </Link>
      <Link href="/signup">Sigup</Link>
      <Link href="/login">Login</Link>
    </nav>
  );
};

export default Navbar;
