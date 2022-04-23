import React from "react";
import styles from "../styles/profile.module.css";

export default function profile() {
  return (
    <div>
      <div className={styles.background}>
        <img src="/pngs/cover.png" alt="background" />
        <div className={styles.profilepic}></div>
      </div>
    </div>
  );
}
