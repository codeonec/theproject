import React from "react";
function Button({ specs }) {
  let icon;
  if (specs.icon) {
    icon = specs.icon;
  } else {
    icon = null;
  }
  return (
    <div>
      <style jsx>
        {`
          .btn {
            display: flex;
            align-items: center;
            // height: ${specs.height}rem;
            // width: ${specs.width}rem;
            padding: 0 3rem;
            background-color: var(--color-brand);
            color: var(--text-main);
            gap: 5px;
            border-radius: 555rem;
            border: none;
            font-size: 1rem;
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
        {icon}
        <p className="btn_text">{specs.text}</p>
      </button>
    </div>
  );
}

export default Button;
