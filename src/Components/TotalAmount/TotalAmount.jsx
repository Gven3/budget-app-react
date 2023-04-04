import SumBox from "../SumBox/SumBox";
import { StyledSumBoxWrapper } from '../SumBox/SumBox.styled';

const TotalAmount = () =>  {
 return(
    <StyledSumBoxWrapper>
        <SumBox text="income" amount="0"/>
        <SumBox text="difference" amount="0"/>
        <SumBox text="expense" amount="0"/>
        
    </StyledSumBoxWrapper>
 )
}

export default TotalAmount