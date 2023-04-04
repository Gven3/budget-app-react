import Filter from "../../Components/Filter/Filter"
import ExpensesData from "../../Components/Expenses/Expense"
import TotalAmount from "../../Components/TotalAmount/TotalAmount"
import { StyledExpensesPageDiv } from "./Expenses.styled"


const Expenses = () => {
    return(
        <StyledExpensesPageDiv>
             <Filter/>
             <TotalAmount/>
             <ExpensesData/>
            
        </StyledExpensesPageDiv>
    )
}

export default Expenses