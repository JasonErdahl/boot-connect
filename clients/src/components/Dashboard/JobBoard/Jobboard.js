import React, {Component} from "react";
import API from "../../../utils/API";
import { List, ListItem } from "../../List";
import './Jobboard.css';

class jobBoard extends Component {
  state = {
    jobs: [],
    jobTitle: "",
    jobCompany: "",
    jobLocation: "",
    jobURL: ""
  };

  componentDidMount() {
    console.log("Did Mount")
    this.loadJobboard();
  }

  loadJobboard = () => {
    API.getDashboardJobs()
      .then(res => {
        console.log(res)
        this.setState({ jobs: res.data.reverse(), jobTitle: "", jobCompany: "", jobLocation: "", jobURL: "", jobNotes: "" }, () => {console.log(this.state)})

      }
      )
      .catch(err => console.log(err));
  };

  deleteJobboard = id => {
    API.deleteDashboardJobs(id)
      .then(res => this.loadJobboard())
      .catch(err => console.log(err));
  };
  

  render() {
  console.log(this.state);
  return <div className="jobBoard">
    <h4>Current Opportunities</h4>
    {this.state.jobs.length ? (
      <List>
        {this.state.jobs.map(job => (
          <ListItem key={job._id}>
              {job.jobTitle} , {job.jobCompany}, {job.jobLocation}, {job.jobURL}
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