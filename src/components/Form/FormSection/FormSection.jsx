import createUpdateHandler from "./createUpdateHandler";
import createDeleteHandler from "./createDeleteHandler";
import createAddHandler from "./createAddHandler";

export default function FormSection({
  // eslint-disable-next-line no-unused-vars
  GroupTemplate,
  title,
  groupName,
  data,
  updateFn,
  extensionTemplate = null,
}) {
  return (
    <div>
      <div>{title}</div>

      {data[groupName].map((groupData) => {
        const handlerArgs = {
          data,
          groupName,
          updateFn,
          groupId: groupData.uniqueId,
        };
        return (
          <GroupTemplate
            key={groupData.uniqueId}
            groupData={groupData}
            onUpdate={createUpdateHandler(handlerArgs)}
            onDelete={
              extensionTemplate ? createDeleteHandler(handlerArgs) : null
            }
          />
        );
      })}

      {extensionTemplate && (
        <button
          type="button"
          onClick={createAddHandler(
            extensionTemplate,
            groupName,
            data,
            updateFn,
          )}
        >
          Add +
        </button>
      )}
    </div>
  );
}
