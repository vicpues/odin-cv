export default function Input({ label, icon = null, onChange, inputProps }) {
  if (icon !== null) icon.className = "input-icon";

  return (
    <label className="input-wrapper">
      <span className="input-label">{label}</span>
      {icon}
      <input onChange={onChange} {...inputProps} className="input-field" />
    </label>
  );
}
