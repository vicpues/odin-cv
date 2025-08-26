export default function FormSection({ title, children, onAdd = null }) {
  return (
    <div className="form-section">
      <div className="form-section-title">{title}</div>
      {children}
      {onAdd && (
        <button onClick={onAdd} type="button">
          Add +
        </button>
      )}
    </div>
  );
}
