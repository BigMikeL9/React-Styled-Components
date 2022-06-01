import React, { useState } from "react";

// -------- 🟡 👇 Using 'styled-components' library 👇 🟡 --------
import styled from "styled-components";

import Button from "../../UI/Button/Button";

// -------- 🟢 👇 Using 'CSS Modules'  👇 🟢 --------
import styles from "./CourseInput.module.css";

console.log(styles);

// ------------------------------------------------------------------------------------------------
// -------- 🟡 👇 Using 'styled-components' library 👇 🟡 --------
const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? "red" : "black")};
  }

  & input {
    display: block;
    width: 100%;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    border: ${(props) => (props.invalid ? "2px solid red" : "1px solid #ccc")};
    background-color: ${(props) =>
      props.invalid ? "rgba(250, 128, 114, 0.5)" : "transparent"};
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border: ${(props) =>
      props.invalid ? "2px solid red" : "1px solid #8b005d"};
  }

  &.invalid input {
    border: 2px solid red;
    background-color: rgba(250, 128, 114, 0.5);
  }

  &.invalid label {
    color: red;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  // -- user input state (checks if user input is valid)
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    // Change to valid as user types
    if (event.target.value.length > 0) setIsValid(true);

    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // -- If user input is inValid (empty) -> then change the 'label' and 'input' tags styling
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* // ------------------------------------------------------------------------------------------------
          // -------- 🟡 👇 Using 'styled-components' library 👇 🟡 -------- */}
      {/* 👇 Using 'styled-components' library to ADD scoped styling to '<FormControl></FormControl>' custom element, and thus it doesn't need a class 👇 */}

      {/* using 'props' with 'styled-components */}
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>

      {/* adding classes dynamically with 'styled-components */}
      <FormControl className={!isValid && "invalid"}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>

      {/* // ------------------------------------------------------------------------------------------------
          // -------- 🟢 👇 Using 'CSS Modules'  👇 🟢 -------- */}
      {/* 👇 Contidional Styling using Template Literals */}
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>

      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
