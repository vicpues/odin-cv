import getDateString from "./getDateString";
import Paragraphs from "./Paragraphs";
import Icon from "@mdi/react";
import { mdiEmailOutline, mdiPhoneOutline, mdiMapMarkerOutline } from "@mdi/js";
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
            {personal.email && (
              <div className="contact-item">
                {<Icon path={mdiEmailOutline} className="inline-icon" />}
                <div className="contact-text breakable">{personal.email}</div>
              </div>
            )}
            {personal.phone && (
              <div className="contact-item">
                {<Icon path={mdiPhoneOutline} className="inline-icon" />}
                <div className="contact-text">{personal.phone}</div>
              </div>
            )}
            {personal.location && (
              <div className="contact-item">
                {<Icon path={mdiMapMarkerOutline} className="inline-icon" />}
                <div className="contact-text">{personal.location}</div>
              </div>
            )}
          </div>

          <div className="about-cell">
            <div className="output-title">About me</div>
            <hr className="output-separator" />
            <Paragraphs string={personal.about} />
          </div>

          <div className="history-cell">
            {education.length > 0 && (
              <div className="history-section">
                <div className="output-title">Education</div>
                <hr className="output-separator" />
                {education.map((group) => (
                  <div className="history-entry" key={group.uniqueId}>
                    <div className="entry-title">{group.degree}</div>
                    <div className="entry-subtitle">
                      <span>{group.school}</span>{" "}
                      <span>{getDateString(group.from, group.to)}</span>
                    </div>
                    <div className="entry-details">
                      <Paragraphs string={group.details} />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {work.length > 0 && (
              <div className="history-section">
                <div className="output-title">Work experience</div>
                <hr className="output-separator" />
                {work.map((group) => (
                  <div className="history-entry" key={group.uniqueId}>
                    <div className="entry-title">{group.company}</div>
                    <div className="entry-subtitle">
                      <span>{group.position}</span>{" "}
                      <span>{getDateString(group.from, group.to)}</span>
                    </div>
                    <div className="entry-details">
                      <Paragraphs string={group.details} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </output>
    </div>
  );
}
