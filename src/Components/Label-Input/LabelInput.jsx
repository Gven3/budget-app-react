


const LabelInput = (props) => {
    return(
        <>
        <label htmlFor={props.id}>{props.text}</label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className={props.className}

      />
        </>
    )
}

export default LabelInput