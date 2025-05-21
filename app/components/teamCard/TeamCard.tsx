import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import styles from "./teamCard.module.css";

type TeamCardProps = {
  name: string;
  role: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
  imageSrc?: string;
};

const TeamCard = ({
  name,
  role,
  socials,
  imageSrc = "/blankImage.png",
}: TeamCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt={name}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 300px"
          priority
        />
      </div>

      <h2>{name}</h2>
      <p className={styles.role}>{role}</p>
      <div className={styles.socials}>
        {socials.linkedin && (
          <a href={socials.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        )}
        {socials.twitter && (
          <a href={socials.twitter} target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        )}
        {socials.instagram && (
          <a href={socials.instagram} target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
