import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

//? MATERIEL UI COMPONENTS
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CloudIcon from "@mui/icons-material/Cloud";
import Button from "@mui/material/Button";

//? API REQUEST
import axios from "axios";
import moment from "moment";

//? TRANSLATIONS PAGE
import { useTranslation } from "react-i18next";

const theme = createTheme({
  typography: {
    fontFamily: "Popin",
  },
});

let cancelAxios = null;

// * FUNTIONS

function App() {
  const { t, i18n } = useTranslation();
  const [dateAndTime, setDateAndTime] = useState("");
  const [temps, setTemp] = useState({
    number: null,
    description: "",
    min: null,
    max: null,
    icon: null,
  });

  function handleChangeCkick() {

  }

  useEffect(() => {
    i18n.changeLanguage("ar");
  }, []);
  useEffect(() => {
    setDateAndTime(moment().format("ddd Do MMMM YYYY"));
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=32.88&lon=-6.90&appid=6f5f034369ce1670ee5a4dc03a128b84"
      )
      .then(function (response) {
        // console.log(response);
        const res = response.data;
        // console.log(res);
        const responseTemp = Math.round(res.main.temp - 272.15);
        const min = Math.round(res.main.temp_min - 272.15);
        const max = Math.round(res.main.temp_max - 272.15);
        const description = res.weather[0].description;
        const icons = res.weather[0].icon;

        setTemp({
          number: responseTemp,
          description: description,
          min: min,
          max: max,
          icon: icons,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    return () => {
      if (cancelAxios) {
        cancelAxios();
      }
    };
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          {/*  CONTENT CONTAINER  */}
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {/* CARD */}
            <div
              style={{
                background: "#3559E0",
                width: "100%",
                // height: "100%",
                borderRadius: "17px",
                boxShadow: "0px 11px 1px rgba(0,0,0,0.05)",
                padding: "10px",
              }}
            >
              {/* CONTENT */}
              <div>
                {/* CITY & TIME */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "start",
                  }}
                >
                  <Typography variant="h2" style={{ marginLeft: "20px" }}>
                    {t("KHOURIBGA")}
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{ marginLeft: "20px", color: "white" }}
                  >
                    {dateAndTime}
                  </Typography>
                </div>
                {/* <<<<<< CITY & TIME >>>>>> */}

                <hr />

                {/* // ! CONTAINER OF DEGREE + CLOUD ICON */}
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  {/* DEGREE & DESCRIPTION*/}
                  <div>
                    {/* TEMP */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                      }}
                    >
                      <Typography variant="h1" style={{ textAlign: "right" }}>
                        {temps.number}
                      </Typography>
                      <img
                        alt=""
                        src={`https://openweathermap.org/img/wn/${temps.icon}@2x.png`}
                        style={{ marginBottom: "10px" }}
                      />
                    </div>
                    {/* <<<<< TEMP >>>>> */}
                    <Typography variant="h6">{temps.description}</Typography>
                    {/* MIN & MAX */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h5>MIN :{temps.min}</h5>
                      <h5 style={{ margin: "0px 4px" }}>|</h5>
                      <h5>MAX :{temps.max}</h5>
                    </div>
                  </div>
                  {/*<<<<<<<< DEGREE & DESCRIPTION >>>>>>*/}
                  <CloudIcon style={{ fontSize: "200px", color: "white" }} />
                </div>
                {/* // ! CONTAINER OF DEGREE + CLOUD ICON */}
              </div>
              {/*<<<<<<<< CONTENT >>>>>*/}
            </div>
            {/* <<<<<< CARD >>>>>> */}
            {/* // ? TRANSALTION BUTTON */}
            <div
              style={{
                // background: "orange",
                display: "flex",
                justifyContent: "start",
                width: "100%",
                marginTop: "7px",
              }}
            >
              <Button
                onClick={() => {
                  handleChangeCkick();
                }}
                variant="text"
                sx={{ color: "white" }}
              >
                Arabic
              </Button>
            </div>
            {/* // ? <<<<<< TRANSALTION BUTTON >>>>> */}
          </div>
          {/* <<<<<<<< CONTENT CONTAINER >>>>>>>  */}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
