import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export default function FormPropsTextFields() {
  const [inputValues, setInputValues] = useState([]);

  const addNewHandler = () => {
    setInputValues([...inputValues, { fname: "", lname: "", fullname: "" }]);
  };

  const removeHandler = (index) => {
    
    const newValues = inputValues.filter((item, ind) => ind !== index); //ind::: index

    setInputValues(newValues);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("values", inputValues);
  };

  const handleInputChange = (index, e) => {
    
    const newValues = [...inputValues];

    newValues[index][e.target.name] = e.target.value;
    
    setInputValues(newValues);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { mr: 1, mb: 4 },
        m: 20,
      }}
      noValidate
      autoComplete="off"
    >
        <Stack spacing={2} sx={{ mb: 5 }} direction="row">
        <Button variant="contained" onClick={addNewHandler}>
          Add
        </Button>
      </Stack>
      

      {inputValues.map((inputVal, index) => {
        return (
          <div key={index} sx={{ mb: 10 }}>
            <TextField
              name="fname"
              label="Firstname"
              value={inputVal.fname}
              onChange={(e) => handleInputChange(index, e)}
            />

            <TextField
              name="lname"
              label="Lastname"
              value={inputVal.lname}
              onChange={(e) => handleInputChange(index, e)}
            />

            <TextField
              name="fullname"
              label="Fullname"
              value={inputVal.fullname}
              onChange={(e) => handleInputChange(index, e)}
            />
            
            <IconButton
              aria-label="delete"
              onClick={() => removeHandler(index)}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        );
      })}

      

      {inputValues.length !== 0 && (
        <Button onClick={submitHandler} variant="contained">
          Submit
        </Button>
      )}
    </Box>
  );
}
