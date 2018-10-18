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
  validDate = (dateVal) => {
    var date = new Date(dateVal);
    var dateOutput = (date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + ">");
    //console.log("date: "+date)
    //console.log("inputs: "+dateOutput);
    //console.log(`-------------------------------------------\n`)
    return dateOutput;
  }

  render() {
  console.log(this.props);
  return <div className="jobBoard">
    <h4>Current Opportunities</h4>
    {this.props.jobs.length ? (
      <List>
        {this.props.jobs.map(job => (
          <ListItem key={job._id}>
              {this.validDate(job.createdAt)} {job.jobTitle} , {job.jobCompany}, {job.jobLocation}, <a href={"http://"+job.jobURL} target="_blank" rel="noopener noreferrer">{job.jobURL}</a>, {job.jobNotes}
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