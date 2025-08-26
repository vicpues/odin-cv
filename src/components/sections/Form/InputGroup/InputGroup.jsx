export default function InputGroup({ children, onUpdate, onDelete = null }) {
  return (
    <form
      onSubmit={onUpdate}
      className={"input-group" + (onDelete ? " extensible" : "")}
    >
      {onDelete && (
        <button className="delete-group" onClick={onDelete} type="button">
          X
        </button>
      )}
      {children}
    </form>
  );
}
