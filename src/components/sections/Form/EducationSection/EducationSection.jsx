import Input from "../Input/Input";
import InputGroup from "../InputGroup/InputGroup";
import FormSection from "../FormSection/FormSection";

export default function EducationSection() {
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <FormSection id="education-details" legend="Education">
      <InputGroup>
        <Input
          label="School name"
          type="text"
          placeholder="ex. 'Monsters University (MU)'"
          inputProps={{ autoCapitalize: "words" }}
        />

        <Input
          label="Degree name"
          type="text"
          placeholder="ex. 'BA in Scares'"
          inputProps={{ autoCapitalize: "words" }}
        />

        <Input
          label="From:"
          type="number"
          inputProps={{ min: 1900, max: CURRENT_YEAR }}
        />

        <Input
          label="To:"
          type="number"
          inputProps={{ min: 1900, max: CURRENT_YEAR }}
        />

        <Input
          label="Relevant courses"
          type="text"
          placeholder={"example:\n-Scares 101\n-Advanced sneaking"}
          inputProps={{ autoCapitalize: "sentence" }}
        />
      </InputGroup>
    </FormSection>
  );
}
