import PersonalSection from "./PersonalSection";
import EducationSection from "./EducationSection";
import WorkSection from "./WorkSection";

export default function Form() {
  return (
    <form id="cv-form" action="">
      <PersonalSection />
      <EducationSection />
      <WorkSection />
    </form>
  );
}
