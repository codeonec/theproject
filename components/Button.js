import styles from "../styles/Button.module.css"

function Button({ specs }) {
  return (
    <div>
      <button className={styles.btn}>
        {specs.icon && specs.icon}
        <p className={styles.button_text}>{specs.text}</p>
      </button>
    </div>
  );
}

export default Button;
