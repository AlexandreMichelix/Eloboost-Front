import React, { FC } from "react";
import UploadAvatar from "../../components/UploadAvatar/UploadAvatar";
import { TextField } from "@mui/material";
import SL from "../../../assets/icons/sl.jpg";
import Card from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function Profile() {
  const User = {
    profilepicture: "",
    pseudo: "Test",
    description: "Bonjour, je suis un joueur casual",
    mrank: "Supreme",
    frank: "8",
  };

  const Mranks = [
    {
      value: "Silver",
      label: "Silver",
    },
    {
      value: "Gold Nova",
      label: "Gold Nova",
    },
    {
      value: "Global Elite",
      label: "Global Elite",
    },
  ];

  const Franks = [
    {
      value: "Level 1",
      label: "1",
    },
    {
      value: "Level 2",
      label: "2",
    },
    {
      value: "Level 3",
      label: "4",
    },
    {
      value: "Level 5",
      label: "5",
    },
    {
      value: "Level 6",
      label: "6",
    },
    {
      value: "Level 7",
      label: "7",
    },
    {
      value: "Level 8",
      label: "8",
    },
    {
      value: "Level 9",
      label: "9",
    },
    {
      value: "Level 10",
      label: "10",
    },
  ];

  return (
    <Grid2
      container
      spacing={10}
      direction="column"
      alignItems="center"
      justifyContent="center"
      rowSpacing={2}
    >
      <Grid2 xs={1.5}>
        <UploadAvatar></UploadAvatar>
      </Grid2>

      <Grid2>
        <TextField
          id="outlined-read-only-input"
          label="Pseudo"
          defaultValue={User.pseudo}
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid2>
      <Grid2>
        <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          rows={3}
          defaultValue={User.description}
          variant="standard"
        />
      </Grid2>
      <Grid2>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Faceit Level"
          defaultValue="Level 1"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your level"
        >
          {Franks.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Grid2>
      <Grid2>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Matchmaking Rank"
          defaultValue="Silver"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your grade"
        >
          {Mranks.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Grid2>
    </Grid2>
  );
}
