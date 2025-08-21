export default function InputGroup({ onDelete, children }) {
  return (
    <div className="input-group">
      <DeleteButton onDelete={onDelete} />
      {children}
    </div>
  );
}

function DeleteButton({ onDelete }) {
  return (
    <button className="delete-group" onClick={onDelete} type="button">
      X
    </button>
  );
}
