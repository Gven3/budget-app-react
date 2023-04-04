import styled from "styled-components";

export const StyledExpenseBox = styled.div`
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
  gap: 6px;
  padding: 20px 10px;
  margin-top: 20px;
  border-radius: 20px;
  text-align: center;
  .rem {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }

  .ed {
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
  .fav {
    position: absolute;
    left: 8px;
    top: 8px;
    cursor: pointer;
  }
  background-color: ${(props) =>
    props.type === "expense" ? "rgb(220, 53, 69, 0.6)" : "rgb(40, 167, 69, 0.6)"};
`;

export const StyledExpenseData = styled.div`
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #b096cb;
    border-radius: 12px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
  height: 500px;
  overflow-y: scroll;
  margin-top: 20px;
`;

export const StyledBody = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  background-image: linear-gradient(to top, #52489f, #744ea3, #9155a5, #ab5da6, #c266a7);
`;
