import React, {Component} from "react";
import { List, ListItem } from "../../List";
import './Messageboard.css';


class messageBoard extends Component {
  state = {
    body: ""
  };

  componentDidMount() {
    console.log("Did Mount for loadmessageboard")
    this.props.loadMessageboard();
  }

  render() {
  console.log(this.state);
  return <div className="messageBoard">
    <h4>Message Bulletin <i class="fas fa-bullhorn"></i></h4>
    {this.props.messages.length ? (
      <List>
        {this.props.messages.map(message => (
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