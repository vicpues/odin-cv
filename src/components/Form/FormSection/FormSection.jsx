import AddButton from "../AddButton/AddButton";
import createUpdateHandler from "./createUpdateHandler";
import createDeleteHandler from "./createDeleteHandler";
import createAddHandler from "./createAddHandler";
import "./FormSection.css";

export default function FormSection({
  // eslint-disable-next-line no-unused-vars
  GroupTemplate,
  title,
  groupName,
  data,
  updateFn,
  extensionTemplate = null,
}) {
  const addHandler = createAddHandler(
    extensionTemplate,
    groupName,
    data,
    updateFn,
  );

  return (
    <div className="form-section">
      <h2 className="section-title">{title}</h2>

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
        <AddButton sectionName={title} handler={addHandler} />
      )}
    </div>
  );
}
