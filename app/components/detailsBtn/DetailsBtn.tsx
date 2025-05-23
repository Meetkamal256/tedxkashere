import Link from "next/link";
import styles from "./details-btn.module.css";

type DetailsBtnProps = {
  href: string;
  children: React.ReactNode;
};

const DetailsBtn = ({ href, children }: DetailsBtnProps) => {
  return (
    <div>
      <Link href={href} className={styles.cta}>
        {children}
      </Link>
    </div>
  );
};

export default DetailsBtn;
