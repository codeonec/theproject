import styles from "../styles/Button.module.css";

function Button({ specs }) {
  return (
    <div>
      <style jsx>
        {`
          .btn {
            height: ${specs.height}rem;
            width: ${specs.width}rem;
          }
        `}
      </style>
      <button className={`${styles.btn} btn`}>
        {specs.icon && specs.icon}
        <p className={`${styles.btn_text} btn_text`}>{specs.text}</p>
      </button>
    </div>
  );
}

export default Button;
