import React, { Component } from "react";

class ProfilePicture extends Component {
    render(){
        return(
            <><div>
                <img src={this.props.image} alt="Profile" height={150} width={150} style={{ borderRadius: '50%' }} />
            </div>
            </>
        );
    }
}

export default ProfilePicture