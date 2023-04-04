import styled from "styled-components";
import { StyledForm } from "../LoginForm/LoginForm.styled";

export const StyledRightIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  font-size: 28px;
`;

export const StyledExpenseForm = styled(StyledForm)`
  width: 320px;
  height: auto;
  gap: 10px;
  align-items: flex-start;
  border-radius: 20px;
  padding: 34px 20px;
  background-color: white;
  div {
    width: 100%;
  }
  h4 {
    bottom: 90px;
  }
  h3,
  label {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    color: black;
  }
  input,
  select {
    background-color: rgba(255, 255, 255, 0.7);
    width: 100%;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  input:focus,
  select:focus {
    outline: none;
  }
  .rego {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    div {
      width: 30%;
      display: flex;
      align-items: center;
      gap: 10px;
      input {
        background: none;
        box-shadow: none;
      }
    }
  }
  button {
    margin: 30px auto 0;
  }
`;

export const StyledRadioDiv = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
`;
