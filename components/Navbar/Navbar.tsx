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
          <Image src={bag} alt="Bag" width={25} height={25} />
        </ul>
      </div>
      <div className={s.nav__menu__icon}>
        <img
          className={s.nav__menu__icon__bag}
          src="./bag.svg"
          alt="menu icon"
          width="30px"
        />
        <img
          className={s.nav__menu__icon__menu}
          src="./Menu.svg"
          alt="menu icon"
          width="45px"
        />
      </div>
    </div>
  );
}

export default Navbar;
