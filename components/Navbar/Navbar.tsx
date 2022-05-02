import Image from "next/image";
import Link from "next/link";
import React from "react";

// Menu icon
import menu from "../../public/Menu.svg";

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
              <a>Login</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={s.nav__menu__icon}>
        <Image src={menu} alt="menu icon" width={35} height={35} />
      </div>
    </div>
  );
}

export default Navbar;
