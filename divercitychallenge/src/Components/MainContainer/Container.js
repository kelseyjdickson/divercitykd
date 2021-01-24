import React from "react";
import JobsContainer from "../Jobs/JobsContainer";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const Container = props => {
  return (
    <div className="mainContainer">
      <div className="mainContainer__container">
        <h1>Looking for a job?</h1>
        <NavLink className="mainContainer__learnLink" to="/jobs">
          Learn More
        </NavLink>
      </div>
      <JobsContainer jobs={props.data.jobs} />
    </div>
  );
};

export default Container;
