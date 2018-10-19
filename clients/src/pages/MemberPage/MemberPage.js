import React, { Component } from 'react';
import Profilecard from "../../components/Members/ProfileCard/ProfileCard";
import API from "../../utils/API";

class MemberPage extends Component {

    state = {
        members: []
    };

    componentDidMount() {
        console.log("Did Mount")
        this.loadMembers();
    }

    loadMembers = () => {
        API.getMembers()
            .then(res => {
                console.log(res)
                this.setState({ members: res.data.reverse() }, () => { console.log(this.state) })
            }
            )
            .catch(err => console.log(err));
    };


    render() {

        //To switch to  background for each page
        document.body.style.background = "url('https://jasonerdahl.github.io/assets/images/backgroundColor3.png')"

        return (
            <div>
                {this.state.members.map(member => {

                    //Convert buffers back to image
                    const decodedImage = String.fromCharCode.apply(null, new Uint16Array(member.profileIMG.data));
                    return (
                        <Profilecard
                            firstName={member.firstName}
                            lastName={member.lastName}
                            image={decodedImage}
                            githubLink={member.githubURL}
                            linkedinLink={member.linkedinURL}
                            portfolioLink={member.professionalURL}
                            jobStatus={member.jobStatus}
                            emailAddress={member.emailAddress}
                            phoneNumber={member.phoneNumber}
                        />
                    )
                })}
            </div>
        )
    }
};

export default MemberPage;
