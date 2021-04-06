import { React, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import logo from "./images/psmi.jpeg";
import ReactLoading from "react-loading";
import Table from "react-bootstrap/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableData from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    justifyContent: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  logo: {
    maxWidth: 50,
    marginRight: "10px",
  },
  table: {
    justifyContent: "center",
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
 
  const [loading, setLoading] = useState(true);
  const { visitNumber } = useParams();

  const [data, setData] = useState("");

  let history = useHistory();

  const redirect = () => {
    history.push("/");
  };

  useEffect(async () => {
    const result = await axios(
      "https://apiurl" + visitNumber
    );

    setData(result.data);
    setLoading(false);
    console.log(result.data);
  }, []);

  return (
    <>
      {loading ? (
        <div align="center" paddingTop="50%" className="App-Header">
          <ReactLoading type={"bars"} color={"black"} />
        </div>
      ) : (
        <div>
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

          <h3 align="center">Visit Number: {visitNumber}</h3>

          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textPrimary"
                gutterBottom
              >
                <h3 align="center">Results</h3>
              </Typography>

              <TableContainer
                align="center"
                component={Paper}
                className={classes.table}
              >
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        {" "}
                        <img src={logo} alt="PSMI " className={classes.logo} />
                      </TableCell>
                      <TableCell align="center" colSpan={3}>
                        <h3>PSMI : {data[0].doctorName}</h3>
                      </TableCell>
                      <TableCell align="right">
                        <img src={logo} alt="PSMI " className={classes.logo} />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow colSpan={2}>
                      <TableCell component="th" scope="row">
                      <h4>Patient Number</h4> 
                      </TableCell>
                      <TableCell align="center">
                        {data[0].patientNumber}
                      </TableCell>

                      <TableCell align="center"><h4>Dates Visited</h4></TableCell>
                      <TableCell>
              {data.map((row) => (
            <TableData key={row.index}>
             
      {row.visitDate}
            
            </TableData>
          ))}
              </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                      <h4>Patient Name</h4> 
                      </TableCell>
                      <TableCell align="center">{data[0].fullname}</TableCell>

                      <TableCell align="center">  <h4>Date of Birth</h4> </TableCell>
                      <TableCell align="center">
                        {data[0].dateOfBirth}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" component="th" scope="row">
                      <h4>Gender</h4> 
                      </TableCell>
                      <TableCell align="center">{data[0].genderName}</TableCell>

                      <TableCell align="center">  <h4>Referring Doctor</h4> </TableCell>
                      <TableCell align="center">
                        Dr . {data[0].doctorName}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                      <h4>Attended By</h4> 
                      </TableCell>
                      <TableCell align="center">
                        PSMI {data[0].doctorName}
                      </TableCell>

                      <TableCell align="center">  <h4>Doctor's Address</h4> </TableCell>
                      <TableCell align="center">
                        {data[0].doctorAddress}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                      <h4>Report Date</h4> 
                      </TableCell>
                      <TableCell align="center">
                        {data[0].creationTime}
                      </TableCell>

                      <TableCell align="center">  <h4>Bill Category</h4>  </TableCell>
                      <TableCell align="center">
                        {data[0].billCategory}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                      <h4>Medical Company</h4> 
                      </TableCell>
                      <TableCell align="center">
                        {data[0].medicalCompany}
                      </TableCell>

                      <TableCell align="center">  <h4>Plan</h4> </TableCell>
                      <TableCell align="center">{data[0].plan}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                       <h4>Member Number</h4> 
                      </TableCell>
                      <TableCell align="center">
                        {data[0].memberNumber}
                      </TableCell>

                      <TableCell align="center"><h4>Request Number</h4></TableCell>
                      <TableCell align="center">{visitNumber}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        <h4>Suffix</h4>
                      </TableCell>
                      <TableCell align="right">{data[0].suffix}</TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                 
                    <TableCell component="th" scope="row">
              <h4>Services Requested</h4>
              
              </TableCell>
              <TableCell>
              {data.map((row) => (
            <TableData key={row.index}>
             
      {row.serviceName}
            
            </TableData>
          ))}
              </TableCell>


                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
            <CardActions className={classes.root}>
              <center>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={redirect}
                >
                  Scan Again
                </Button>
              </center>
            </CardActions>
          </Card>
        </div>
      )}
    </>
  );
}
