import React, { Component } from 'react';
import Profilecard from "../../components/Members/ProfileCard/ProfileCard";

class MemberPage extends Component {
    render() {

        document.body.style.background = "url('../../../assets/backgroundColor3.png')"

        return(
        <div>
            <Profilecard />
        </div>
        )
    }
};

export default MemberPage;
