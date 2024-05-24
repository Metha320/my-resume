import React from "react";
import "../Style/profile-image.css";

function Profile() {
  return (
      <div className="container col-sm-12 col-md-6 col-lg-6 ">
        <img src={require("../wolf.jpg")} alt="picsum" id="profile" />
      </div>
    
  );
}

export default Profile;

