import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo.png" width={200} height={40} alt="logo image" />
          </Link>
          <p>Independently organized under license from TED.</p>
        </div>
        
        <div className={styles.links}>
          <Link href="/about">About</Link>
          <Link href="/speakers">Speakers</Link>
          <Link href="/event/upcoming">Events</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/contact">Contact</Link>
        </div>
        
        <div className={styles.socials}>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter /> Twitter
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube /> YouTube
          </a>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <p>© {new Date().getFullYear()} TEDxKashere. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
