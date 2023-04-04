import { StyledSumBox } from "./SumBox.styled"

const SumBox = (props) => {
    return(
        <StyledSumBox>
            <h3>{props.text}</h3>
            <p>{props.amount}</p>
        </StyledSumBox>
    )
}

export default SumBox 