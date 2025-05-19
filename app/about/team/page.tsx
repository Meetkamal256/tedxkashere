import React from "react";
import styles from "./our-team.module.css";
import { teamMembers } from "@/app/data";
import TeamCard from "@/app/components/teamCard/TeamCard";

const Team = () => {
  return (
    <section className="container">
      <div className={styles.teamPage}>
        <h1 className={styles.title}>
          Meet the <span>Team</span>
        </h1>
        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              socials={member.socials}
              imageSrc="/blankImage.png"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
