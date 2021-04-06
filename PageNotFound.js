import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
   
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },

}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Error : 404
        </Typography>
        <Typography variant="h3" component="h2" gutterBottom>
          {'Page Not Found'}
         
        </Typography>
        <Typography variant="body1">Check your URL and try again</Typography>
      </Container>
    
    </div>
  );
}