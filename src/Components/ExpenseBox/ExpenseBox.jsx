import { StyledExpenseBox } from "../Expenses/Expenses.styled"

const ExpensesBox = (props) => {
    return(
        <StyledExpenseBox type={props.info.type}>
            <i className="fa-regular fa-circle-xmark rem" onClick={props.deleteClick}></i>
            <i className="fa-solid fa-pen-to-square ed" onClick={props.editClick}></i>
            <i className="fa-regular fa-star fav"></i>
            <h3>Created At: {props.info.created_at}</h3>
            <h3>type: {props.info.type}</h3>
            <h3>category: {props.info.category}</h3>
            <h3>amount: {props.info.amount}</h3>
        </StyledExpenseBox>
    )
}

export default ExpensesBox

