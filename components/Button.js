import styles from "../styles/Button.module.css";

function Button({ specs,onClick }) {
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
      <button className={`${styles.btn} btn ${specs.cls}`} onClick={onClick} type={specs.type}>
        {specs.icon && specs.icon}
        <p className={`${styles.btn_text} btn_text`}>{specs.text}</p>
      </button>
    </div>
  );
}

export default Button;
