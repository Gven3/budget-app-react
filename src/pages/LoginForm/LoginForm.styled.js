import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 420px;
  width: 300px;
  border: none;
  border-radius: 12px;
  padding: 40px 30px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  gap: 20px;
  a {
    text-decoration: none;
    color: blue;
  }
  h4 {
    position: absolute;
    bottom: 110px;
    color: green;
  }
  .red {
    color: red;
  }

  .error-input {
    border: 1px solid red;
  }
  .error-text {
    color: red;
  }
`;

export const StyledSignIn = styled.button`
  padding: 0.5rem;
  background: transparent;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 30px;
  transition: all 235ms ease-in-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
  }
`;

export const StyledInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  position: relative;

  input {
    width: 100%;
    height: 35px;
    border-radius: 6px;
    border: 1px solid black;
    padding: 20px 15px;
    padding-right: 50px;
  }

  input:focus {
    outline: none;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
  }

  input::placeholder {
    font-size: 12px;
  }

  label {
    background-color: white;
    width: max-content;
    position: relative;
    top: 10px;
    left: -2px;
    padding: 0 4px;
  }

  p {
    position: absolute;
    bottom: -20px;
    color: red;
  }

  [type="password"] {
    p {
      bottom: -38px;
    }
  }

  i {
    position: absolute;
    right: 2px;
    top: 28px;
    border-left: 1px solid gray;
    padding: 4px 10px;
    color: gray;
  }

  .fa-eye-slash,
  .fa-eye {
    border: none;
    right: 35px;
    cursor: pointer;
  }
`;
