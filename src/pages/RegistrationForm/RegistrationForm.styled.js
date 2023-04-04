import styled from "styled-components";
import { StyledForm } from "../LoginForm/LoginForm.styled";

export const StyledRegistrationForm = styled(StyledForm)`
  width: 400px;
  height: 600px;
  border-radius: 12px;
  padding: 40px 30px;
  div {
    margin-top: 8px;
  }
  .error-input {
    border: 1px solid red;
  }
  .error-text {
    color: red;
  }
  .green {
    bottom: 140px;
  }
  .nameDiv {
    display: flex;
    width: 100%;
    justify-content: space-between;
    div {
      display: flex;
      flex-direction: column;
      width: 45%;
      input {
        &:focus {
          outline: none;
        }
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus {
          transition: background-color 5000s ease-in-out 0s;
        }
        width: 100%;
        padding-right: 15px;
      }
    }
  }

  .yo {
    position: relative;
    right: 0;
    top: 0;
    border-left: none;
    font-size: 50px;
    color: white;
  }
`;
