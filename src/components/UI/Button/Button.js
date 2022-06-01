// ------------------------------------------------------------------------------------------------
// -------- 🟡 👇 Using 'styled-components' library 👇 🟡 --------
// import styled from "styled-components";

// // console.dir(styled);

// const Button = styled.button`
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media screen and (max-width: 37.5em) {
//     margin-top: 0.75rem;
//     width: 100%;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

// ------------------------------------------------------------------------------------------------
// -------- 🟢 👇 Using 'CSS Modules'  👇 🟢 --------

import React from "react";

// importing 'CSS Module' file
import styles from "./Button.module.scss";

// console.log(styles);

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
