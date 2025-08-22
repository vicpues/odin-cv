import PersonalSection from "./PersonalSection/PersonalSection";
import EducationSection from "./EducationSection/EducationSection";
import WorkSection from "./WorkSection/WorkSection";

export default function Form() {
  return (
    <form id="cv-form" action="">
      <PersonalSection />
      <EducationSection />
      <WorkSection />
    </form>
  );
}
