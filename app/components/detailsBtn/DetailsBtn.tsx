import Link from "next/link";
import styles from "./details-btn.module.css"

type DetailsBtnProp = {
  title: string;
  href: string;
}

const detailsBtn = ({title, href}: DetailsBtnProp) => {
  return (
    <div>
      <Link href={href} className={styles.cta}>
        {title}
      </Link>
    </div>
  );
};

export default detailsBtn;
