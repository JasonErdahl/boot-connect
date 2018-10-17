import React, {Component} from "react";
import { List, ListItem } from "../../List";
import './Jobboard.css';

class jobBoard extends Component {
  state = {
    jobTitle: "",
    jobCompany: "",
    jobLocation: "",
    jobURL: ""
  };

  componentDidMount() {
    console.log("Did Mount")
    this.props.loadJobboard();
  }

  // deleteJobboard = id => {
  //   API.deleteDashboardJobs(id)
  //     .then(res => this.props.loadJobboard())
  //     .catch(err => console.log(err));
  // };
  

  render() {
  console.log(this.props);
  return <div className="jobBoard">
    <h4>Current Opportunities</h4>
    {this.props.jobs.length ? (
      <List>
        {this.props.jobs.map(job => (
          <ListItem key={job._id}>
              {job.jobTitle} , {job.jobCompany}, {job.jobLocation}, {job.jobURL}, {job.jobNotes}
          </ListItem>
        ))}
      </List>
    ) : (
      <h3>No Results to Display</h3>
    )}
  </div>
    
  }
}

export default jobBoard;