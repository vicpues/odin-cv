import FormSection from "./FormSection/FormSection";
import PersonalTemplate from "./PersonalTemplate";
import EducationTemplate from "./EducationTemplate";
import WorkTemplate from "./WorkTemplate";

export default function Form({ data, updateFn }) {
  return (
    <div id="cv-form">
      <FormSection
        title="Personal details"
        groupName="personalData"
        Template={PersonalTemplate}
        data={data}
        updateFn={updateFn}
      />

      <FormSection
        title="Education"
        groupName="educationData"
        Template={EducationTemplate}
        data={data}
        updateFn={updateFn}
        extendable={true}
      />

      <FormSection
        title="Work experience"
        groupName="workData"
        Template={WorkTemplate}
        data={data}
        updateFn={updateFn}
        extendable={true}
      />
    </div>
  );
}
