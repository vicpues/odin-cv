import createUpdateHandler from "./createUpdateHandler";
import createDeleteHandler from "./createDeleteHandler";

export default function FormSection({
  // eslint-disable-next-line no-unused-vars
  Template,
  title,
  groupName,
  data,
  updateFn,
  extendable = false,
  onAdd = null,
}) {
  return (
    <div className="form-section">
      <div className="form-section-title">{title}</div>

      {data[groupName].map((groupData) => {
        const handlerArgs = {
          data,
          groupName,
          updateFn,
          groupId: groupData.uniqueId,
        };
        return (
          <Template
            key={groupData.uniqueId}
            groupData={groupData}
            onUpdate={createUpdateHandler(handlerArgs)}
            onDelete={extendable ? createDeleteHandler(handlerArgs) : null}
          />
        );
      })}

      {onAdd && (
        <button onClick={onAdd} type="button">
          Add +
        </button>
      )}
    </div>
  );
}
