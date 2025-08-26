export default function InputGroup({ children, onDelete = null }) {
  return (
    <form className={"input-group" + (onDelete ? " extensible" : "")}>
      {onDelete && (
        <button className="delete-group" onClick={onDelete} type="button">
          X
        </button>
      )}
      {children}
    </form>
  );
}
