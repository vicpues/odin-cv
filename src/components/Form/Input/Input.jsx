import handleChange from "./handleChange";
import "./Input.css";

export default function Input({
  label,
  name,
  type,
  placeholder = "",
  defaultValue = "",
  icon = null,
  inputProps,
}) {
  if (icon !== null) icon.className = "input-icon";
  const fieldProps = {
    name,
    type,
    defaultValue,
    placeholder,
    ...inputProps,
  };

  return (
    <label className="input-container">
      <span className="input-label">{label}</span>
      {icon}
      {type === "textarea" ? (
        <TextareaElement {...fieldProps} />
      ) : (
        <InputElement {...fieldProps} />
      )}
    </label>
  );
}

function InputElement(props) {
  return (
    <input
      className="input"
      {...props}
      onChange={props.onChange || handleChange}
    />
  );
}

function TextareaElement(props) {
  return (
    <textarea
      className="input"
      {...props}
      rows={5}
      onChange={handleChange}
    ></textarea>
  );
}
