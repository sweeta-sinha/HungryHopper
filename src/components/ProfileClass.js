import { Component } from "react";

class Profile extends Component {
    constructor(props){
        super(props);
        console.log("child constructor" , this.props?.name)
    }

    async componentDidMount(){
        console.log("child component did mount" , this.props?.name)
        const data = await fetch("https://api.github.com/users/sweeta-sinha");
        const json = await data.json();
        console.log("child component did mount 2" , this.props?.name)
        console.log("json",json , this.props?.name)
    }

    render() {
        const { name } = this.props;
        console.log("child render" , name)

        return(
            <h1>{name} This is the profile class !</h1>
        )
    }
}

export default Profile;