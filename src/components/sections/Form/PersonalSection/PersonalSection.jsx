import FormSection from "../FormSection/FormSection";
import Input from "../Input/Input";

export default function PersonalSection() {
  return (
    <FormSection id="personal-details" legend="Personal Details">
      <Input
        label="Name"
        type="text"
        placeholder="ex. 'John Doe'"
        inputProps={{ autoCapitalize: "words" }}
      />

      <Input label="Email" type="text" placeholder="ex. 'email@example.com" />

      <Input
        label="Phone number"
        type="tel"
        placeholder="ex. '+44 444 444 44'"
        inputProps={{ maxLength: 20 }}
      />

      <Input
        label="Location"
        type="text"
        placeholder="ex. 'Boring, Oregon'"
        inputProps={{ autoCapitalize: "words" }}
      />
    </FormSection>
  );
}
