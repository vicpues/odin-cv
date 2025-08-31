import getDateString from "./getDateString";
import Paragraphs from "./Paragraphs";
import "./Output.css";

export default function Output({ data }) {
  const personal = data.personalData[0];
  const education = data.educationData;
  const work = data.workData;

  return (
    <div id="output-column">
      <output id="output-container">
        <div className="output-page two-column-layout">
          <div className="name-cell">
            <div className="name">{personal.name}</div>
            <div className="description">{personal.description}</div>
          </div>

          <div className="contact-cell">
            {personal.email && <div className="mail">{personal.email}</div>}
            {personal.phone && <div className="phone">{personal.phone}</div>}
            {personal.location && (
              <div className="location">{personal.location}</div>
            )}
          </div>

          <div className="about-cell">
            <div className="output-title">About me</div>
            <hr className="output-separator" />
            <Paragraphs string={personal.about} />
          </div>

          {education.length > 0 && (
            <>
              <hr />
              <div>
                <div>Education</div>
                {education.map((group) => (
                  <div key={group.uniqueId}>
                    <div>{group.degree}</div>
                    <span>{group.school}</span>{" "}
                    <span>{getDateString(group.from, group.to)}</span>
                    <div>
                      <Paragraphs string={group.details} />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          {work.length > 0 && (
            <>
              <hr />
              <div>
                <div>Work experience</div>
                {work.map((group) => (
                  <div key={group.uniqueId}>
                    <div>{group.company}</div>
                    <span>{group.position}</span>{" "}
                    <span>{getDateString(group.from, group.to)}</span>
                    <div>
                      <Paragraphs string={group.details} />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </output>
    </div>
  );
}
