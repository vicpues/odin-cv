import FormSection from "./FormSection/FormSection";
import PersonalTemplate from "./PersonalTemplate";
import EducationTemplate from "./EducationTemplate";
import WorkTemplate from "./WorkTemplate";
import "./Form.css";

export default function Form({ data, updateFn }) {
  return (
    <div id="cv-form">
      <FormSection
        title="Personal details"
        groupName="personalData"
        GroupTemplate={PersonalTemplate}
        data={data}
        updateFn={updateFn}
      />

      <FormSection
        title="Education"
        groupName="educationData"
        GroupTemplate={EducationTemplate}
        data={data}
        updateFn={updateFn}
        extensionTemplate={educationDataTemplate}
      />

      <FormSection
        title="Work experience"
        groupName="workData"
        GroupTemplate={WorkTemplate}
        data={data}
        updateFn={updateFn}
        extensionTemplate={workDataTemplate}
      />
    </div>
  );
}

const educationDataTemplate = {
  school: "",
  degree: "",
  from: "",
  to: "",
  details: "",
};

const workDataTemplate = {
  company: "",
  position: "",
  from: "",
  to: "",
  details: "",
};
