import Input from "./Input/Input";
import ToFromInputs from "./ToFromInputs/ToFromInputs";
import InputGroup from "./InputGroup/InputGroup";

export default function EducationTemplate({
  sectionTitle,
  groupData,
  onUpdate,
  onDelete,
}) {
  return (
    <InputGroup
      sectionTitle={sectionTitle}
      onUpdate={onUpdate}
      onDelete={onDelete}
    >
      <Input
        label="School name"
        name="school"
        type="text"
        placeholder="ex. 'Monsters University MU'"
        defaultValue={groupData.school}
        inputProps={{ autoCapitalize: "words" }}
      />

      <Input
        label="Degree name"
        name="degree"
        type="text"
        placeholder="ex. 'BA in Scare Management'"
        defaultValue={groupData.degree}
        inputProps={{ autoCapitalize: "words" }}
      />

      <ToFromInputs {...groupData} />

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
