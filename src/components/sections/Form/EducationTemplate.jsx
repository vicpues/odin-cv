import Input from "./Input/Input";
import InputGroup from "./InputGroup/InputGroup";

export default function EducationTemplate({ groupData, onUpdate, onDelete }) {
  const CURRENT_YEAR = new Date().getFullYear();
  return (
    <InputGroup onUpdate={onUpdate} onDelete={onDelete}>
      <Input
        label="School name"
        name="school"
        type="text"
        placeholder="ex. 'Monsters University (MU)'"
        defaultValue={groupData.school}
        inputProps={{ autoCapitalize: "words" }}
      />

      <Input
        label="Degree name"
        name="degree"
        type="text"
        placeholder="ex. 'BA in Scares'"
        defaultValue={groupData.degree}
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
        label="Relevant courses"
        name="details"
        type="textarea"
        placeholder={"example:\n-Scares 101\n-Advanced sneaking"}
        defaultValue={groupData.details}
        inputProps={{ autoCapitalize: "sentence" }}
      />
    </InputGroup>
  );
}
