import { StyledExpenseData } from './Expenses.styled'
import ExpensesBox from '../ExpenseBox/ExpenseBox'
import { readExpenses} from '../../GeneralFunctions/Functions'
import { useState } from 'react'

const goToEdit = (id) => {
    if(!isNaN(+id) && +id > 0){
        window.location.href = `/edit-expense/:${id}`
    }else {
        window.location.href = "/add-expense"
    }
    }
    


const ExpensesData = () => {
const [localArray, setLocalArray] = useState(readExpenses("expenses"))
    const removeItem = (id, arr) => {
        const filtered = arr.filter((el) => el.id !== id);
        const removedArr = readExpenses("expenses");
        const index = removedArr.findIndex((el) => el.id === id);
        removedArr.splice(index, 1);
        window.localStorage.setItem("expenses", JSON.stringify(removedArr));
        setLocalArray(filtered)
      };
    return(
        <StyledExpenseData>
            {localArray.map(user => {
                return <ExpensesBox info={user} key={user.id} deleteClick={() => removeItem(user.id, readExpenses("expenses"))} editClick={() => goToEdit(user.id)}/>
            })}
        </StyledExpenseData>
    )
}

export default ExpensesData