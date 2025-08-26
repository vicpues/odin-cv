import FormSection from "./FormSection/FormSection";
import InputGroup from "./InputGroup/InputGroup";
import Input from "./Input/Input";

export default function PersonalSection({ data }) {
  return (
    <FormSection title="Personal Details">
      <InputGroup data={data}>
        <Input
          label="Name"
          name="name"
          type="text"
          placeholder="ex. 'John Doe'"
          inputProps={{ autoCapitalize: "words" }}
        />

        <Input
          label="Email"
          name="email"
          type="text"
          placeholder="ex. 'email@example.com"
        />

        <Input
          label="Phone number"
          name="phone"
          type="tel"
          placeholder="ex. '+44 444 444 44'"
          inputProps={{ maxLength: 20 }}
        />

        <Input
          label="Location"
          name="location"
          type="text"
          placeholder="ex. 'Boring, Oregon'"
          inputProps={{ autoCapitalize: "words" }}
        />
      </InputGroup>
    </FormSection>
  );
}
