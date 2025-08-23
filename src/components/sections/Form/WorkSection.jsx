import FormSection from "./FormSection/FormSection";
import Input from "./Input/Input";
import InputGroup from "./InputGroup/InputGroup";

export default function WorkSection() {
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <FormSection id="work-details" legend="Work experience">
      <InputGroup>
        <Input
          label="Company name"
          type="text"
          placeholder="ex. 'Monsters Inc.'"
          inputProps={{ autoCapitalize: "words" }}
        />

        <Input
          label="Job title"
          type="text"
          placeholder="ex. 'Scare floor supervisor'"
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
          label="Responsibilities"
          type="text"
          placeholder={
            "example:\n-Coordinating scare teams\n-Creating performance reports"
          }
          inputProps={{ autoCapitalize: "sentence" }}
        />
      </InputGroup>
    </FormSection>
  );
}
