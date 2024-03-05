import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";

// MATERIEL UI COMPONENTS
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CloudIcon from "@mui/icons-material/Cloud";
import Button from "@mui/material/Button";

const theme = createTheme({
  typography: {
    fontFamily: "Popin",
  },
});
function App() {
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
                    RABAT
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{ marginLeft: "20px", color: "white" }}
                  >
                    TUE 05 MARCH 2024
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
                    <div>
                      <Typography variant="h1" style={{ textAlign: "right" }}>
                        38
                      </Typography>
                    </div>
                    {/* <<<<< TEMP >>>>> */}
                    <Typography variant="h6">Broken Cloud</Typography>
                    {/* MIN & MAX */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h5>MIN : 10</h5>
                      <h5 style={{ margin: "0px 4px" }}>|</h5>
                      <h5>MAX : 10</h5>
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
              <Button variant="text" sx={{ color: "white" }}>
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
