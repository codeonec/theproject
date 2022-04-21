import styles from "../../styles/explore.module.css"

export default function Explore() {
  return (
    <div className={styles.container}>
        <h3 className={styles.align}>Explore <img src="pngs/search.png" alt="" /></h3>
        <input
            className={styles.topbarContentInput}
            type="text"
            placeholder="Search Anything"
          />
    </div>
  )
}
