import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

export default function BasicSelect(props) {
  //search
  const [search, setSearch] = useState({
    place: "",
    price: "",
    property: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setSearch((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
    console.log(search);
  }

  //Date
  const [value, setValue] = useState<Date | null>(new Date("07/07/2022"));

  const handleDate = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="input">
        <TextField
          sx={{ m: 1, width: 170 }}
          id="outlined-basic"
          label="Location"
          variant="outlined"
          name="place"
          value={search.place}
          onChange={handleChange}
        >
          {search.place}
        </TextField>
      </div>
      <div className="vl"></div>
      <div className="input">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <FormControl sx={{ m: 1, width: 170 }}>
            <DesktopDatePicker
              label="Select Move-in Date"
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={handleDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </FormControl>
        </LocalizationProvider>
      </div>
      <div className="vl"></div>
      <div className="input">
        <FormControl variant="standard" sx={{ m: 1, width: 170 }}>
          <InputLabel id="demo-simple-select-standard-label">Price</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select"
            value={search.price}
            label="Price"
            name="price"
            onChange={handleChange}
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"a"}>1000-1999</MenuItem>
            <MenuItem value={"b"}>2000-2999</MenuItem>
            <MenuItem value={"c"}>3000-3999</MenuItem>
            <MenuItem value={"d"}>4000-4999</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="vl"></div>
      <div className="input">
        <FormControl variant="standard" sx={{ m: 1, width: 170 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Property Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select-standard-label"
            value={search.property}
            label="PropertyType"
            name="property"
            onChange={handleChange}
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"Lodge"}>Lodge</MenuItem>
            <MenuItem value={"Villa"}>Villa</MenuItem>
            <MenuItem value={"Bunglow"}>Bunglow</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="vl"></div>
      <div className="input">
        <button
          onClick={() => props.prince(search)}
          type="button"
          className="btn btn-primary btn-lg b"
        >
          Search
        </button>
      </div>
    </div>
  );
}
