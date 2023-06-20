import { Component } from "react";
import Profile from "./ProfileClass";

class AboutClass extends Component {
    constructor(props){
        super(props);
        console.log("About Class")
    }
    render() {
        console.log("render About Class")
        return(
            <div>
                <h1>This is the about section class !</h1>
                <Profile name="First class child" />
                <Profile name="Second class child" />
            </div>
        )
    }
}

export default AboutClass;