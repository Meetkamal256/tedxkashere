import Image from "next/image";
import styles from "./speaker-card.module.css";


type SpeakerCardProps = {
  name: string;
  topic: string;
  imageSrc?: string;
};

const SpeakerCard = ({ name, topic, imageSrc }: SpeakerCardProps) => {
  const imgSrc = imageSrc ?? "/blankImage.png";

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={imgSrc} alt={name} fill className={styles.image} />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.topic}>{topic}</p>
    </div>
  );
};

export default SpeakerCard;
