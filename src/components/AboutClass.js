import { Component } from "react";
import Profile from "./ProfileClass";
import UserContext from "../utils/userContext";

class AboutClass extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log("mounted")
  }
  render() {
  console.log("render")

    return (
      <div>
        <h1>This is the about section class !</h1>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1 className="text-lg font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <Profile name="First class child" />
        <Profile name="Second class child" />
      </div>
    );
  }
}

export default AboutClass;
