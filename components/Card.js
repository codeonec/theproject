import styles from "../styles/Card.module.css";

export default function Card() {
  return (
    <div className={styles.Card}>
      <div className={styles.information}>
        <div className={styles.profile}>
          <div className={styles.pic}>
            <img src="pngs/icon.png" alt="" />
          </div>
          <div className={styles.title}>
            Notion <br />
            <span>Founded in 2010 by Notion Inc.</span>
          </div>
        </div>
        <div className={styles.description}>
          
        </div>
      </div>
      <div className={styles.stats}>

      </div>
    </div>
  );
}
