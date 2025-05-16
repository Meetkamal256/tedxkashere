"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Navbar = () => {
  const [openDropDown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropDown === menu ? null : menu);
  };
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/logo.png" width={200} height={40} alt="logo image" />
        </Link>
      </div>
      
      <div className={styles.hamburger} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
      </div>
      <ul
        className={`${styles.navMenu} ${
          isMobileMenuOpen ? styles.mobileActive : ""
        }`}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li onClick={() => toggleDropdown("about")}>
          About
          {openDropDown === "about" ? (
            <IoMdArrowDropup className={styles.dropdownIcon} />
          ) : (
            <IoMdArrowDropdown className={styles.dropdownIcon} />
          )}
          {openDropDown === "about" && (
            <ul className={styles.dropdownMenu}>
              <li>
                <Link href="/about">About TEDxFUKashere</Link>
              </li>
              <li>
                <Link href="about/team">About Our Team</Link>
              </li>
            </ul>
          )}
        </li>
        
        <li onClick={() => toggleDropdown("speakers")}>
          Speakers
          {openDropDown === "speakers" ? (
            <IoMdArrowDropup className={styles.dropdownIcon} />
          ) : (
            <IoMdArrowDropdown className={styles.dropdownIcon} />
          )}
          {openDropDown === "speakers" && (
            <ul className={styles.dropdownMenu}>
              <li>
                <Link href="/speakers">Our Speakers</Link>
              </li>
              <li>
                <Link href="/speakers/apply">Apply to Speak</Link>
              </li>
            </ul>
          )}
        </li>
        <li onClick={() => toggleDropdown("event")}>
          <Link href="#">
            Event
            {openDropDown === "event" ? (
              <IoMdArrowDropup className={styles.dropdownIcon} />
            ) : (
              <IoMdArrowDropdown className={styles.dropdownIcon} />
            )}
            {openDropDown === "event" && (
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link href="/event/upcoming">Upcoming</Link>
                </li>
                <li>
                  <Link href="/event/previous">Previous</Link>
                </li>
              </ul>
            )}
          </Link>
        </li>
        <li onClick={() => toggleDropdown("partners")}>
          <Link href="#">
            Partners
            {openDropDown === "partners" ? (
              <IoMdArrowDropup className={styles.dropdownIcon} />
            ) : (
              <IoMdArrowDropdown className={styles.dropdownIcon} />
            )}
            {openDropDown === "partners" && (
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link href="/partners">Sponsors</Link>
                </li>
                <li>
                  <Link href="/partners">Partners</Link>
                </li>
              </ul>
            )}
          </Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
