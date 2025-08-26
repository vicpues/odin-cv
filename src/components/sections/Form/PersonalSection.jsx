import FormSection from "./FormSection/FormSection";
import InputGroup from "./InputGroup/InputGroup";
import Input from "./Input/Input";
import getFormData from "./InputGroup/getFormData";

export default function PersonalSection({ data, updateData }) {
  return (
    <FormSection title="Personal Details">
      <InputGroup
        onUpdate={(e) => {
          e.preventDefault();
          updateData({ ...data, personalData: { ...getFormData(e.target) } });
        }}
      >
        <Input
          label="Name"
          name="name"
          type="text"
          placeholder="ex. 'John Doe'"
          defaultValue={data.personalData.name}
          inputProps={{ autoCapitalize: "words", autoComplete: "name" }}
        />

        <Input
          label="Email"
          name="email"
          type="text"
          placeholder="ex. 'email@example.com"
          defaultValue={data.personalData.email}
          inputProps={{ autoComplete: "email" }}
        />

        <Input
          label="Phone number"
          name="phone"
          type="tel"
          placeholder="ex. '+44 444 444 44'"
          defaultValue={data.personalData.phone}
          inputProps={{ maxLength: 20, autoComplete: "tel" }}
        />

        <Input
          label="Location"
          name="location"
          type="text"
          placeholder="ex. 'Boring, Oregon'"
          defaultValue={data.personalData.location}
          inputProps={{ autoCapitalize: "words" }}
        />
      </InputGroup>
    </FormSection>
  );
}
