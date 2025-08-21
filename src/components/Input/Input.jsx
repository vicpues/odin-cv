export default function Input({ label, icon = null, onChange, inputProps }) {
  if (icon !== null) icon.className = "input-icon";

  return (
    <label className="input-wrapper">
      <h4>{label}</h4>
      {icon}
      <input onChange={onChange} {...inputProps} className="input-field" />
    </label>
  );
}
