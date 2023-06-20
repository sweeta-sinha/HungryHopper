import React, { useEffect } from 'react';
import ProfileFC from "./Profile";
import { Outlet } from 'react-router-dom';

const About = () => {

  useEffect(() => {
    console.log("Parent about useeffect")
  },[])

console.log("Parent about render")

  return (
    <div>
      <h1>About Us Page</h1>
      <p>This is the 🙏🚀 Live Course Episode 07</p>
      {/* <Outlet context={[firstName]} /> */}
       {/* <Profile name="Sweeta" /> */}
      <ProfileFC name="First Child" />
      <ProfileFC name="Second Child" />
    </div>
  );
};

export default About;
