export default function Input({
  label,
  type,
  placeholder = "",
  value = "",
  icon = null,
  onChange,
  inputProps,
}) {
  if (icon !== null) icon.className = "input-icon";

  return (
    <label className="input-wrapper">
      <span className="input-label">{label}</span>
      {icon}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...inputProps}
        className="input-field"
      />
    </label>
  );
}
