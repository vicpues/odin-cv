import Input from "./Input/Input";
import InputGroup from "./InputGroup/InputGroup";
import FormSection from "./FormSection/FormSection";
import createUpdateHandler from "./InputGroup/createUpdateHandler";
import createDeleteHandler from "./InputGroup/createDeleteHandler";

export default function WorkSection({ data, updateData }) {
  return (
    <FormSection id="work-details" title="Work experience">
      {data.workData.map((groupData) => {
        const handlerArgs = {
          data: data,
          groupName: "workData",
          groupId: groupData.uniqueId,
          updateFn: updateData,
        };
        return (
          <GroupTemplate
            key={groupData.uniqueId}
            groupData={groupData}
            onUpdate={createUpdateHandler(handlerArgs)}
            onDelete={createDeleteHandler(handlerArgs)}
          />
        );
      })}
    </FormSection>
  );
}

function GroupTemplate({ groupData, onUpdate, onDelete }) {
  const CURRENT_YEAR = new Date().getFullYear();
  return (
    <InputGroup onUpdate={onUpdate} onDelete={onDelete}>
      <Input
        label="Company name"
        name="company"
        type="text"
        placeholder="ex. 'Monsters Inc.'"
        defaultValue={groupData.company}
        inputProps={{ autoCapitalize: "words", autoComplete: "off" }}
      />

      <Input
        label="Job title"
        name="position"
        type="text"
        placeholder="ex. 'Scare floor supervisor'"
        defaultValue={groupData.position}
        inputProps={{ autoCapitalize: "words" }}
      />

      <Input
        label="From:"
        name="from"
        type="number"
        defaultValue={groupData.from}
        inputProps={{ min: 1900, max: CURRENT_YEAR }}
      />

      <Input
        label="To:"
        name="to"
        type="number"
        defaultValue={groupData.to}
        inputProps={{ min: 1900, max: CURRENT_YEAR }}
      />

      <Input
        label="Responsibilities"
        name="details"
        type="textarea"
        placeholder={
          "example:\n-Coordinating scare teams\n-Creating performance reports"
        }
        defaultValue={groupData.details}
        inputProps={{ autoCapitalize: "sentence" }}
      />
    </InputGroup>
  );
}
