import * as React from "react";
import { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import SL from "../../../assets/icons/sl.jpg";

export default function UploadAvatar() {
  return (
    <div>
      <Avatar src={SL} sx={{ width: 150, height: 150 }}></Avatar>
    </div>
  );
}
