import React, {Component} from "react";
import DeleteBtn from "../../DeleteBtn";
import API from "../../../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../List";
import './Jobboard.css';

// const Jobboard = props => (
//   <div className="jobBoard">
//      <h4>Current Opportunities</h4>
//   </div>
// );

class Jobboard extends Component {
  state = {

  };

  componentDidMount() {
    this.loadJobboard();
  }

  loadJobboard = () => {
    API.getDashboardJobs()
      .then()
      .catch(err => console.log(err));
  };

  deleteJobboard = id => {
    API.deleteDashboardJobs(id)
      .then(res => this.loadJobboard())
      .catch(err => console.log(err));
  };
  

  render() {
  const inputs = Object.keys(this.state);
  const inputsLength = inputs.length;
  
  return <div className="Jobboard">
    <h4>Current Opportunities</h4>
    {inputsLength ? (
      <List>
        {this.state.dashboardJobs.map(book => (
          <ListItem key={this.state._id}>
            <Link to={"/dashboardJobs/" + this.state._id}>
              <strong>
                {this.state.title} by {this.state.author}
              </strong>
            </Link>
            <DeleteBtn onClick={() => this.deleteDashboardJobs(this.state._id)} />
          </ListItem>
        ))}
      </List>
    ) : (
      <h3>No Results to Display</h3>
    )}
  </div>
    
  }
}

export default Jobboard;