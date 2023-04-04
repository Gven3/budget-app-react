import styled from "styled-components";

export const StyledInputDiv = styled.form`
  width: 80vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  margin-top: 30px;
  div {
    display: flex;
    align-items: center;
    /* flex-direction: column; */
  }
  input,
  select {
    background-color: rgba(255, 255, 255, 0.7);
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  input:focus,
  select:focus {
    outline: none;
  }

  [type="number"] {
    width: 80px;
  }
`;

export const StyledButton = styled.button`
  background-color: #6c43b2;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
`;

export const StyledIcon = styled.i`
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  font-size: 22px;
`;
export const StyledExitIcon = styled.i`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  font-size: 22px;
`;
