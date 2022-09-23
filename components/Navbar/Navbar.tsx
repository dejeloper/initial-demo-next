import Link from "next/link";
import { ActiveLink } from "../ActiveLink/ActiveLink";
import style from "./Navbar.module.css";

const menuItems = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={style['nav-menu']}>
      {
        menuItems.map(({ text, href }) => {
          return <ActiveLink key={href} text={text} href={href} />
        })
      }
    </nav>
  );
};