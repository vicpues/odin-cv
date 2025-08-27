import Input from "./Input/Input";
import ToFromInputs from "./ToFromInputs/ToFromInputs";
import InputGroup from "./InputGroup/InputGroup";

export default function GroupTemplate({ groupData, onUpdate, onDelete }) {
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

      <ToFromInputs {...groupData} />

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
