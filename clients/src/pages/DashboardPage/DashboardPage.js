import React, { Component } from 'react';
import API from "../../utils/API";
import Jobboard from "../../components/Dashboard/JobBoard/Jobboard";
import JobInputForm from "../../components/Dashboard/JobBoard/JobInputForm";
import Messageboard from "../../components/Dashboard/MessageBoard/Messageboard";
import MessageboardInputForm from "../../components/Dashboard/MessageBoard/MessageInputForm";

class DashboardPage extends Component {

    state = {
        jobs: [],
        messages: []
    };

    loadMessageboard = () => {
        API.getDashboardMessages()
        .then(res => {
            console.log(res)
            this.setState({ messages: res.data.reverse(), body: ""}, () => {console.log(this.state)})

        }
        )
        .catch(err => console.log(err));
    };

    loadJobboard = () => {
        API.getDashboardJobs()
        .then(res => {
            console.log(res)
            this.setState({ jobs: res.data.reverse(), jobTitle: "", jobCompany: "", jobLocation: "", jobURL: "", jobNotes: "" }, () => {console.log(this.state)})

        }
        )
        .catch(err => console.log(err));
    };
  

    render()
    {

        document.body.style.background = "url('https://jasonerdahl.github.io/assets/images/backgroundColor2.svg')"

        return (
            <div className="DashboardPage">
                <div className="row">
                    <div className="col-xs-12 col-md-7">
                        <Jobboard 
                            loadJobboard={this.loadJobboard}
                            jobs={this.state.jobs}
                        />
                        <JobInputForm 
                            loadJobboard={this.loadJobboard}
                        />
                    </div>
                    <div className="col-xs-12 col-md-5">
                        <Messageboard 
                             loadMessageboard={this.loadMessageboard}
                             messages={this.state.messages}                            
                        />
                        <MessageboardInputForm
                            loadMessageboard={this.loadMessageboard}
                         />
                    </div>
                </div>
            </div>
        )
    }
};

export default DashboardPage;