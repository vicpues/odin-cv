import DeleteButton from "../DeleteButton/DeleteButton";
import "./InputGroup.css";

export default function InputGroup({
  children,
  sectionTitle,
  onUpdate,
  onDelete = null,
}) {
  return (
    <form onSubmit={onUpdate} className="input-group">
      {onDelete && (
        <DeleteButton sectionTitle={sectionTitle} onDelete={onDelete} />
      )}
      {children}
    </form>
  );
}
