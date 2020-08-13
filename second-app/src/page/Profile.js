import React from "react";

const Profile = ({ match }) => {
  return (
    <div>
      <h1>프로필</h1>

      <p>{match.params.name}</p>
    </div>
  );
};

export default Profile;
