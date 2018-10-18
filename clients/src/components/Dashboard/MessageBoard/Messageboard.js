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

  validDate = (dateVal) => {
    var date = new Date(dateVal);
    var dateOutput = (date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + ">");
    //console.log("date: "+date)
    //console.log("inputs: "+dateOutput);
    //console.log(`-------------------------------------------\n`)
    return dateOutput;
  }

  render() {
  console.log(this.state);
  return <div className="messageBoard">
    <h4>Message Bulletin <i class="fas fa-bullhorn"></i></h4>
    {this.props.messages.length ? (
      <List>
        {this.props.messages.map(message => (
          <ListItem key={message._id}>
             {this.validDate(message.createdAt)} {message.body}
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