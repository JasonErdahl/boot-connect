import React, { Component } from 'react';
//import API from "../../utils/API";
import Jobboard from "../../components/Dashboard/JobBoard/Jobboard";
import JobInputForm from "../../components/Dashboard/JobBoard/JobInputForm";
import Messageboard from "../../components/Dashboard/MessageBoard/Messageboard";
import MessageboardInputForm from "../../components/Dashboard/MessageBoard/MessageInputForm";

class DashboardPage extends Component {
    render()
    {

        document.body.style.background = "url('../../../assets/backgroundColor2.svg')"

        return (
            <div className="DashboardPage">
                <div className="row">
                    <div className="col-xs-12 col-md-7">
                        <Jobboard />
                        <JobInputForm />
                    </div>
                    <div className="col-xs-12 col-md-5">
                        <Messageboard />
                        <MessageboardInputForm />
                    </div>
                </div>
            </div>
        )
    }
};

export default DashboardPage;