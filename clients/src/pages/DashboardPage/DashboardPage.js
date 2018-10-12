import React, { Component } from 'react';
import Jobboard from "../../components/Dashboard/JobBoard/Jobboard";
import JobInputForm from "../../components/Dashboard/JobBoard/JobInputForm";
import Messageboard from "../../components/Dashboard/MessageBoard/Messageboard";
import MessageboardInputForm from "../../components/Dashboard/MessageBoard/MessageInputForm";


class DashboardPage extends Component {
    render() {

        document.body.style.background = "url('../../../assets/backgroundColor2.svg')"

        return <div>
            <Jobboard />
            <JobInputForm />
            <Messageboard />
            <MessageboardInputForm />
        </div>
    }
};

export default DashboardPage;