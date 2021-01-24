import React, { useState } from "react";
import "./styles.scss";
import axios from "axios";

const style = {
  "font-weight": "bold"
};

const ApplyForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    axios
      .post(`https://divercity-test.herokuapp.com/jobs/${props.id}/apply`, {
        motivation: formData.get("motivation"),
        cover_letter: formData.get("cover_letter")
      })
      .then(res => res);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="motivation"
        className="form-control"
        placeholder="Motivation"
      />
      <input
        type="text"
        name="cover_letter"
        className="form-control"
        placeholder="Cover Letter"
      />

      <button className="button">Apply</button>
    </form>
  );
};

const Jobs = props => {
  const [isApplying, setIsApplying] = useState(false);

  const handleClick = e => {
    setIsApplying(true);
  };

  let {
    title,
    location,
    job_type,
    skills_tag,
    description,
    company,
    applicant_count,
    id
  } = props.jobs;
  return (
    <>
      <div className="row">
        <div className="row__column">
          <ul className="row__li">
            <li className="row__title">
              {" "}
              {title} - {job_type}
            </li>
            <li className="row__company"> {company}</li>

            <li className="row__location">{location} </li>
            <li className="row__description"> {description}</li>
            <li className="row__count">{applicant_count} applicants</li>
            <li className="row__skills">
              <span style={style}> Skills:</span> {skills_tag}
            </li>

            {isApplying ? (
              <ApplyForm id={id} />
            ) : (
              <button onClick={handleClick} className="row__apply">
                Apply
              </button>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Jobs;
