import Input from "./Input/Input";
import InputGroup from "./InputGroup/InputGroup";
import FormSection from "./FormSection/FormSection";
import createUpdateHandler from "./InputGroup/createUpdateHandler";

export default function EducationSection({ data, updateData }) {
  return (
    <FormSection title="Education">
      {data.educationData.map((groupData) => (
        <GroupTemplate
          key={groupData.uniqueId}
          groupData={groupData}
          onUpdate={createUpdateHandler(
            data,
            "educationData",
            groupData.uniqueId,
            updateData,
          )}
        />
      ))}
    </FormSection>
  );
}

function GroupTemplate({ groupData, onUpdate }) {
  const CURRENT_YEAR = new Date().getFullYear();
  return (
    <InputGroup onUpdate={onUpdate}>
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
