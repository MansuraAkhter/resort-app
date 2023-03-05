import background from "./images/background.jpg";
import { useState } from "react";
import {
  Button,
  Container,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Home = () => {
  const [packages, setPackages] = useState("");
  const [date, setDate] = useState(null);
  const [guest, setGuest] = useState("");

  const handlePackage = (event) => {
    setPackages(event.target.value);
  };
  const handleGuest = (event) => {
    setGuest(event.target.value);
  };

  return (
    <div className="home-background">
      <div className="home">
        <img src={background} alt="resort" width="100%" height="625vh" />
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            top: "300px",
            right: "43%",
          }}
        >
          View All Packages
        </Button>
      </div>

      <Container>
        <Typography
          color="#1976d2"
          sx={{ textAlign: "center", fontSize: "30px" }}
        >
          Reserve Your Stay
        </Typography>
        <Container sx={{ display: "flex", justifycontent: "center" }}>
          <FormControl fullWidth>
            <InputLabel id="select-package">Package</InputLabel>
            <Select
              labelId="select-package"
              id="demo-simple-select"
              value={packages}
              label="choose package"
              onchange={handlePackage}
              sx={{ width: "105px" }}
            >
              <MenuItem value="Day Long">Day Long</MenuItem>
              <MenuItem value="Honeymoon">Honeymoon</MenuItem>
              <MenuItem value="Family">Family</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Basic date picker"
                  value={date}
                  onChange={(newValue) => setDate(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="select-guest">Guest</InputLabel>
            <Select
              labelId="select-guest"
              id="demo-simple-select-guest"
              value={guest}
              label="choose guest"
              onchange={handleGuest}
              sx={{ width: "105px" }}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <Button variant="outlined">Submit</Button>
          </FormControl>
        </Container>
      </Container>
    </div>
  );
};

export default Home;
