import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { onCreateCustomer } from "../../action";

const AddCustomerForm = () => {
  const [customerName, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [customerType, setType] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.id == "name") {
      setName(e.target.value);
    }
    if (e.target.id == "address") {
      setAddress(e.target.value);
    }
    if (e.target.id == "mobile-number") {
      setMobile(e.target.value);
    }
    if (e.target.name == "customer-type") {
      setType(e.target.value);
    }
  };

  const handleSubmit = () => {
    let customer = { customerName, address, mobile, customerType };
    dispatch(onCreateCustomer(customer));
    setName("");
    setAddress("");
    setMobile("");
    setType("");
  };

  return (
    <React.Fragment>
      <div className="form-container">
        <CssBaseline />
        <Container maxWidth="sm">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "300px" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "25px",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              style={{ width: "300px" }}
              onChange={handleChange}
              value={customerName}
            />
            <FormHelperText error></FormHelperText>
            <TextField
              id="address"
              label="Address"
              variant="outlined"
              style={{ width: "300px" }}
              onChange={handleChange}
              value={address}
            />
            <FormHelperText error></FormHelperText>
            <TextField
              id="mobile-number"
              label="Mobile #"
              variant="outlined"
              type="number"
              style={{ width: "300px" }}
              onChange={handleChange}
              value={mobile}
            />
            <FormHelperText error></FormHelperText>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                labelId="customer-type-label"
                id="customer-type"
                name="customer-type"
                label="Type"
                onChange={handleChange}
                value={customerType}
              >
                <MenuItem value={1}>Free</MenuItem>
                <MenuItem value={2}>Subscribed</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AddCustomerForm;
