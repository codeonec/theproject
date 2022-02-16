import React from "react";
function Button({ specs }) {
  return (
    <div>
      <style jsx>
        {`
          .btn {
            display: flex;
            align-items: center;

            // height: ${specs.height}rem;
            line-height: 0px;
            // width: ${specs.width}rem;
            padding: 0.2rem 1.5rem;
            background-color: var(--color-brand);
            color: var(--text-main);
            gap: 5px;
            border-radius: 30px;
            border: none;
            font-size: 1rem;
            cursor: pointer;
          }
          .btn:hover {
            background-color: #1a682a;
          }
          .btn:focus {
            border: none;
          }
        `}
      </style>
      <button className="btn">
        {specs.icon && specs.icon}
        <p className="btn_text">{specs.text}</p>
      </button>
    </div>
  );
}

export default Button;
