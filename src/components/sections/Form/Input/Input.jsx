const INPUT_CLASSNAME = "input-field";

export default function Input({
  label,
  name,
  type,
  placeholder = "",
  defaultValue = "",
  icon = null,
  onChange,
  inputProps,
}) {
  if (icon !== null) icon.className = "input-icon";
  const fieldProps = {
    name,
    type,
    defaultValue,
    placeholder,
    onChange,
    ...inputProps,
  };

  return (
    <label className="input-wrapper">
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
  return <input {...props} className={INPUT_CLASSNAME} />;
}

function TextareaElement(props) {
  return (
    <textarea
      {...props}
      className={INPUT_CLASSNAME}
      style={{ resize: "none" }}
    ></textarea>
  );
}
