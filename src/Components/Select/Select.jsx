
const Select = (props) => {
    return (
        <div>
            <label htmlFor={props.id}>{props.text}</label>
      <select name="select" id={props.id} onChange={props.onChange}>
        {props.options.map((option) => (
            <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
        </div>
    );
  };

  export default Select