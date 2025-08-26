import Input from "./Input/Input";
import InputGroup from "./InputGroup/InputGroup";
import FormSection from "./FormSection/FormSection";

export default function EducationSection({ data }) {
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <FormSection id="education-details" title="Education">
      <InputGroup data={data}>
        <Input
          label="School name"
          name="school"
          type="text"
          placeholder="ex. 'Monsters University (MU)'"
          inputProps={{ autoCapitalize: "words" }}
        />

        <Input
          label="Degree name"
          name="degree"
          type="text"
          placeholder="ex. 'BA in Scares'"
          inputProps={{ autoCapitalize: "words" }}
        />

        <Input
          label="From:"
          name="from"
          type="number"
          inputProps={{ min: 1900, max: CURRENT_YEAR }}
        />

        <Input
          label="To:"
          name="to"
          type="number"
          inputProps={{ min: 1900, max: CURRENT_YEAR }}
        />

        <Input
          label="Relevant courses"
          name="details"
          type="textarea"
          placeholder={"example:\n-Scares 101\n-Advanced sneaking"}
          inputProps={{ autoCapitalize: "sentence" }}
        />
      </InputGroup>
    </FormSection>
  );
}
