import React from "react";
import JobCards from "../JobCards/JobCards";
import { Route } from "react-router-dom";

import "./styles.scss";

const JobsContainer = props => {
  let location = props.jobs.map(jobsObj => {
    return (
      <option key={jobsObj.id} value={jobsObj.location}>
        {jobsObj.location}
      </option>
    );
  });

  let job_type = props.jobs.map(jobsObj => {
    return (
      <option key={jobsObj.id} value={jobsObj.job_type}>
        {jobsObj.job_type}
      </option>
    );
  });

  let skills_tag = props.jobs.map(jobsObj => {
    return (
      <option key={jobsObj.id} value={jobsObj.skills_type}>
        {jobsObj.skills_tag}
      </option>
    );
  });

  //had some trouble here

  const handleChange = e => {
    //I need to handle user input from selection box.
  };

  const handleSubmit = e => {
    // handle the form
  };

  return (
    <div className="filter-form">
      <div className="form-container">
        <h1 className="find">
          Find Jobs based on Location, Job Type or Skills:
        </h1>
        <form className="filter-form__child" onSubmit={handleSubmit}>
          <select label="location">
            {location} onClick={handleChange}
          </select>
          <select label="job_type">
            {job_type} onClick={handleChange}
          </select>
          <select label="job_type">
            {skills_tag} onClick={handleChange}
          </select>
          <input className="button" type="submit" value="Search" />
        </form>
      </div>

      <Route path="/jobs">
        <ul>
          {props.jobs.map(jobObj => (
            <JobCards key={jobObj.id} jobs={jobObj} />
          ))}
        </ul>
      </Route>
    </div>
  );
};

export default JobsContainer;
