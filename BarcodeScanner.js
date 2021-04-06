import { useState } from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import { Redirect } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

//import Footer from "./Footer";
import logo from './images/psmi.jpeg';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 40,
    marginRight: '10px'
  }
}));

function Barcode() {
  const classes = useStyles();

  const [visitNumber, setVisitNumber] = useState("");
 

  return (
    <>
      {visitNumber ? <Redirect to={"/results/" + visitNumber} /> : null}
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
          <img src={logo} alt="PSMI " className={classes.logo} />
            <Typography variant="h6" className={classes.title}>
              PSMI QR Scanner
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
<p>
<Container maxWidth="sm">
        <p align="center">
          <h3>Scan Qrcode/Barcode </h3>
        </p>
        <BarcodeScannerComponent
          width={"100%"}
          height={"100%"}
          //display={"flex"}
          onUpdate={(err, result) => {
            if (result) setVisitNumber(result.text);
            else setVisitNumber("");
          }}
        />
      </Container>
</p>

        <p align="center">
          <h5>Align your barcode or Qrcode and hold steady to scan</h5>
        </p>
     

      



      
    </>
  );
}

export default Barcode;
