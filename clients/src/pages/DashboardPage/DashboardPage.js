import React from 'react';
import Jobboard from "../../components/Dashboard/JobBoard/Jobboard";
import JobInputForm from "../../components/Dashboard/JobBoard/JobInputForm";
import Messageboard from "../../components/Dashboard/MessageBoard/Messageboard";
import MessageboardInputForm from "../../components/Dashboard/MessageBoard/MessageInputForm";

const DashboardPage = () => (
<div>
   <Jobboard />
   <JobInputForm />
   <Messageboard />
   <MessageboardInputForm />
</div>
);
 export default DashboardPage;