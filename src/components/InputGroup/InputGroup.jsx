export default function InputGroup({ onDelete, children }) {
  return (
    <div className="input-group">
      <button className="delete-group" onClick={onDelete} type="button">
        X
      </button>
      {children}
    </div>
  );
}
