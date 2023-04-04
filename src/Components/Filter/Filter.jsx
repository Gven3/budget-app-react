import LabelInput from '../Label-Input/LabelInput'
import Select from '../Select/Select'
import { StyledInputDiv,StyledButton,StyledIcon,StyledExitIcon } from './Filter.styled'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const selectArr = ["all", "salary", "invoice","gym", "shopping", "family", "other"]

const Filter = () => {
    
    const [date, setDate] = useState("")
    const [select, setSelect] = useState("all")
    const [minAmount, setMinAmount] = useState("")
    const [maxAmount, setMaxAmount] = useState("")
    const ShowValues = () => {
        console.log({date,select,minAmount,maxAmount})
    }
    return(
        <>
        <Link to={"/add-expense"}><StyledIcon ><i className="fa-solid fa-circle-arrow-left"></i></StyledIcon></Link>
        <Link to={"/"}><StyledExitIcon ><i className="fa-solid fa-arrow-right-from-bracket fa-shake"></i></StyledExitIcon></Link>
       
        <StyledInputDiv onSubmit={e => e.preventDefault()}>
            <div>

            <LabelInput  text="Created at:"type="date" id="date" name="date" onChange={e => setDate(e.target.value)}/>
            </div>
            
            <Select options={selectArr} id="cat" text="Type:"onChange={(e) => setSelect(e.target.value)}/>
            <div>

            <LabelInput  text="Min:"type="number" id="min" name="min" onChange={e => setMinAmount(e.target.value)}/>
            </div>
            <div>
            <LabelInput  text="Max:"type="number" id="max" name="max" onChange={e => setMaxAmount(e.target.value)}/>
            </div>
            <StyledButton onClick={ShowValues}>Add</StyledButton>
        </StyledInputDiv>

        </>
    )
}


export default Filter