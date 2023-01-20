import React, { FC } from "react";
import UploadAvatar from "../../components/UploadAvatar/UploadAvatar";

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => (
  <div>
    <UploadAvatar></UploadAvatar>
  </div>
);

export default Profile;
