import React, { Component } from 'react';
import Profilecard from "../../components/Members/ProfileCard/ProfileCard";
import members from "./members.json"

class MemberPage extends Component {

    state = {
        members
      };

    render() {

        //To switch to  background 
        document.body.style.background = "url('../../../assets/backgroundColor3.png')"

        return (
            <div>
                {this.state.members.map(member => (
                    <Profilecard
                        firstName={member.firstName}
                        lastName={member.lastName}
                        image={member.image}
                        githubLink={member.githubLink}
                        linkedinLink={member.linkedinLink}
                        portfolioLink={member.portfolioLink}
                        jobStatus={member.jobStatus}
                        school={member.school}
                    />
                ))}
            </div>
        )
    }
};

export default MemberPage;
