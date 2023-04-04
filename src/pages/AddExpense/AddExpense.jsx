import { useState } from "react";
import Select from "../../Components/Select/Select";
import LabelInput from "../../Components/Label-Input/LabelInput";
import { StyledExpenseForm,StyledRadioDiv,StyledRightIcon } from "./addExpense.styled";
import { StyledButton } from "../../Components/Filter/Filter.styled";
import { Link , useParams } from "react-router-dom";
import { generateId,readExpenses,saveExpenses } from "../../GeneralFunctions/Functions";

const expArr = ["gym", "shopping", "family", "other"];
const incArr = ["salary", "invoice"];


// const ReadId = () => {
//   const {id} = useParams();
//   const splitted = id.split("").pop()
//   return +splitted

// }

const AddExpense = () => {
  
  const [date, setDate] = useState("");
  const [radio, setRadio] = useState(false);
  const [select, setSelect] = useState("");
  const [money, setMoney] = useState("");
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  // const [dateValue, setDateValue] = useState("")
  // const editForm = (id, arr) => {
  //   const edited = arr.find((item) => item.id === +id);
  //   if (readExpenses("expenses").lenght !== 0) {
  //     setDateValue(edited.created_at);
  //   }
  // };
    const AddNewObj = (e) => {
        e.preventDefault();
        if (date !== "" && radio !== false && money !== "") {
            const userObj = {
              id: generateId(readExpenses('expenses')),
                created_at: date,
                type: radio,
        category: select,
        amount: parseFloat(money)
    };
    saveExpenses(userObj, "expenses")
    setError("expense Added!")
    setSuccess(true)
    setTimeout(() => {
      setError("")

    },1000)
    e.target.reset()
  } else {
    setError("please fill up all inputs!")
    setSuccess(false)

}
};
const changeStates = (e) => {
  setRadio(e.target.value)
  setSelect(e.target.value==="income"? "salary":"gym")
}
// window.addEventListener("load",editForm(ReadId(), readExpenses('expenses')))

return (
  <>
  <Link to={"/expenses"}><StyledRightIcon><i className="fa-solid fa-circle-arrow-right"></i></StyledRightIcon></Link>
      <StyledExpenseForm onSubmit={AddNewObj}>
        <LabelInput
          type="date"
          text="თარიღი:"
          id="date"
          name="date"
          onChange={(e) => setDate(e.target.value)}
          // value={dateValue}
          />
        <h3>ტიპი</h3>
        <div className="rego">
          <StyledRadioDiv>
            <LabelInput
              id="re"
              text="income"
              value="income"
              type="radio"
              name="re"
              onChange={changeStates}
              />
          </StyledRadioDiv>
          <StyledRadioDiv>
            <LabelInput
              id="go"
              text="expense"
              value="expense"
              type="radio"
              name="re"
              onChange={changeStates}
              />
          </StyledRadioDiv>
        </div>
        <label htmlFor="cat">კატეგორია</label>
        <Select
          onChange={(e) => setSelect(e.target.value)}
          options={radio === "expense" ? expArr : incArr}
          />
        <LabelInput
          id="money"
          type="number"
          name="amount"
          text="თანხა ჯამში"
          onChange={(e) => setMoney(e.target.value)}
          />
          <h4 className={!success ? "red": "green"}>{error}</h4>
        <StyledButton type="submit">დამატება</StyledButton>
      </StyledExpenseForm>
          </>
  );
}

export default AddExpense

