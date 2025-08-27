import Input from "./Input/Input";
import InputGroup from "./InputGroup/InputGroup";

export default function PersonalTemplate({ groupData, onUpdate }) {
  return (
    <InputGroup onUpdate={onUpdate}>
      <Input
        label="Name"
        name="name"
        type="text"
        placeholder="ex. 'John Doe'"
        defaultValue={groupData.name}
        inputProps={{ autoCapitalize: "words", autoComplete: "name" }}
      />

      <Input
        label="Email"
        name="email"
        type="text"
        placeholder="ex. 'email@example.com"
        defaultValue={groupData.email}
        inputProps={{ autoComplete: "email" }}
      />

      <Input
        label="Phone number"
        name="phone"
        type="tel"
        placeholder="ex. '+44 444 444 44'"
        defaultValue={groupData.phone}
        inputProps={{ maxLength: 20, autoComplete: "tel" }}
      />

      <Input
        label="Location"
        name="location"
        type="text"
        placeholder="ex. 'Boring, Oregon'"
        defaultValue={groupData.location}
        inputProps={{ autoCapitalize: "words" }}
      />
    </InputGroup>
  );
}
