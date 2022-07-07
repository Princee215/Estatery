import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import emojipedia from "../emojipedia";

export default function SearchWithName(props) {
  function handleClick(event) {
    props.prince(event.target.id);
  }

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ m: 1, width: 250, borderRadius: 10 }}
      onChange={handleClick}
      renderInput={(params) => (
        <TextField {...params} label="Search with Search Bar" />
      )}
    />
  );
}

const top100Films = emojipedia.map((emoji) => {
  return emoji.name;
});
