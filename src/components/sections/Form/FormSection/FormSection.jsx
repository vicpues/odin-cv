export default function FormSection({ legend, children, onAdd = null }) {
  return (
    <fieldset className="form-section">
      <legend className="form-section-title">{legend}</legend>
      {children}
      {onAdd && (
        <button onClick={onAdd} type="button">
          Add +
        </button>
      )}
    </fieldset>
  );
}
