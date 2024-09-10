import React, { Component } from "react";
import ProfileDetails from "./ProfileDetails";
import ProfilePicture from "./ProfilePicture";
import './style.css'

export default class profileCard extends Component {
    render(){
        const {name, description, image} = this.props
        return(
            <div className="profile-card">
                <ProfilePicture image={image} />
                <ProfileDetails name={name} description={description} />
            </div>
        );
    }
}