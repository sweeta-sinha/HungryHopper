import { useEffect, useState } from 'react';

const Profile = (props) => {
  // const [firstName] = useOutletContext();
  const [userInfo , setUserInfo] = useState({
    name : "" , location:"" , company :"" , avatar:""
  });

  useEffect(() => {
   console.log("useffect child top" , props?.name)
   const getUserData = async() => {
    const data = await fetch("https://api.github.com/users/sweeta-sinha");
    const json = await data.json();
    console.log("json",json , props?.name)
    setUserInfo({name : json?.name , location : json?.location , company : json?.company , avatar : json?.avatar_url})
   }
   console.log("useffect child 1" , props?.name)
   getUserData();
   console.log("useffect child 1 second" , props?.name)

  },[])

  console.log("render" ,  props?.name)
  return (
    <div>
      <h1>Profile</h1>
      <img src={userInfo?.avatar} alt="Display Picture" />
      <h2>Name : {userInfo?.name}</h2>
      <h2>Location : {userInfo?.location}</h2>
      <h2>Company : {userInfo?.company}</h2>
    </div>
  );
};

export default Profile;
