import React, {Component} from "react";
import DeleteBtn from "../../DeleteBtn";
import API from "../../../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../List";
import './Messageboard.css';


// const Messageboard = props => (
//   <div className="messageBoard">
//      <h4>Message Bulletin <i class="fas fa-bullhorn"></i></h4>
//   </div>
// );

// export default Messageboard;

class messageBoard extends Component {
  state = {
    messages: [],
    body: ""
  };

  componentDidMount() {
    console.log("Did Mount for loadmessageboard")
    this.loadMessageboard();
  }

  loadMessageboard = () => {
    API.getDashboardMessages()
      .then(res => {
        console.log(res)
        this.setState({ messages: res.data.reverse(), body: ""}, () => {console.log(this.state)})

      }
      )
      .catch(err => console.log(err));
  };

  render() {
  console.log(this.state);
  return <div className="messageBoard">
    <h4>Message Bulletin <i class="fas fa-bullhorn"></i></h4>
    {this.state.messages.length ? (
      <List>
        {this.state.messages.map(message => (
          <ListItem key={message._id}>
              {message.body}
          </ListItem>
        ))}
      </List>
    ) : (
      <h3>No Results to Display</h3>
    )}
  </div>
    
  }
}

export default messageBoard;