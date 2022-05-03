import Image from "next/image";
import Link from "next/link";
import React from "react";

// Menu icon
import menu from "../../public/Menu.svg";
import bag from "../../public/bag.svg";

// Styles
import s from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={s.nav}>
      <div className={s.nav__logo}>
        <h1 className={s.nav__logo__h1}>STRMBOTIC®</h1>
      </div>
      <div className={s.nav__links__container}>
        <ul className={s.nav__links}>
          <li>
            <Link href="/new">
              <a>New Arrivals</a>
            </Link>
          </li>
          <li>
            <Link href="/phone">
              <a>Shop</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Not About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Not Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/Login">
              <a>Not Login</a>
            </Link>
          </li>
          <li>
            <Image src={bag} alt="Bag" width={25} height={25} />
          </li>
        </ul>
      </div>
      <div className={s.nav__menu__icon}>
        <Image src={bag} alt="menu icon" width={30} height={30} />
        <Image src={menu} alt="menu icon" width={40} height={40} />
      </div>
    </div>
  );
}

export default Navbar;
